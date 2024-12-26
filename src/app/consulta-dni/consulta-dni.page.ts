import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import * as Tesseract from 'tesseract.js';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-consulta-dni',
  templateUrl: './consulta-dni.page.html',
  styleUrls: ['./consulta-dni.page.scss'],
})
export class ConsultaDniPage implements OnInit {

  image: string | undefined;
  loading: boolean = false;

  private apiToken: string = 'ac47459778686b8ae5d061cb59170455807a89c125f1c80b64582dcca60bdcfe'; // Reemplaza con tu token de apiperu.dev
  private apiUrl: string = 'https://apiperu.dev/api/dni/'; // Base URL de la API

  constructor(private navCtrl: NavController, private http: HttpClient) {}

  ngOnInit(): void {}

  async scanDni() {
    try {
      // Capturar imagen desde la cámara
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        quality: 100,
      });

      this.image = photo.dataUrl;

      // Mostrar mensaje de carga
      this.loading = true;
      console.log('Procesando imagen con Tesseract.js...');

      // Usar Tesseract.js para extraer texto de la imagen
      const { data } = await Tesseract.recognize(photo.dataUrl as string, 'spa');
      console.log('Texto reconocido por Tesseract:', data.text);

      // Extraer el DNI usando una expresión regular
      const dni = this.extractDni(data.text);
      console.log('DNI extraído:', dni);

      if (dni) {
        // Llamar a la API de apiperu.dev
        console.log('DNI reconocido correctamente. Consultando API...');
        await this.verifyDni(dni);
      } else {
        alert('No se detectó un DNI en la imagen.');
        console.log('No se detectó un DNI válido en el texto reconocido.');
      }
    } catch (error) {
      console.error('Error al escanear DNI:', error);
      alert('Ocurrió un error al procesar la imagen.');
    } finally {
      this.loading = false;
    }
  }

  extractDni(text: string): string | null {
    // Buscar un patrón como "DNI: 12345678" en el texto
    const dniRegex = /\bDNI[:\s]*\d{8}\b/; // Acepta "DNI: " seguido de 8 dígitos
    const match = text.match(dniRegex);
    return match ? match[0].replace(/\D/g, '') : null; // Elimina caracteres no numéricos
  }
  
  async verifyDni(dni: string) {
    try {
      // Configurar los headers con el token de autenticación
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.apiToken}`
      });

      // Llamar al endpoint de la API de apiperu.dev
      const response = await this.http.get<any>(`${this.apiUrl}${dni}`, { headers }).toPromise();
      console.log('Respuesta de la API:', response);

      if (response && response.success) {
        const userData = response.data;

        // Guardar el reporte si es necesario (opcional)
        console.log('Datos del DNI obtenidos:', userData);

        // Redirigir a la página de detalles
        this.navCtrl.navigateForward(['/dni-details'], {
          queryParams: { userData: JSON.stringify(userData) },
        });
      } else {
        alert('No se encontraron datos para este DNI.');
      }
    } catch (error) {
      console.error('Error al consultar los datos del DNI:', error);
      alert('No se pudo obtener los datos del DNI.');
    }
  }
}