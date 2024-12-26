import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-scan-nuevo',
  templateUrl: './scan-nuevo.page.html',
  styleUrls: ['./scan-nuevo.page.scss'],
})
export class ScanNuevoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  scannedData: string = '';
  dniNumber: string = '';
  isScanning: boolean = false;


  async startScan() {
    try {
      // Verifica permisos
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        // Oculta la interfaz del navegador (si estás usando un emulador o dispositivo real)
        await BarcodeScanner.hideBackground();
        this.isScanning = true;

        const result = await BarcodeScanner.startScan(); // Inicia el escaneo

        if (result.hasContent) {
          this.scannedData = result.content;

          // Extrae el número de DNI del contenido
          this.dniNumber = this.extractDni(this.scannedData);
        } else {
          this.scannedData = 'No se encontró contenido';
        }
      } else {
        alert('Permiso de cámara denegado');
      }
    } catch (error) {
      console.error('Error al escanear:', error);
    } finally {
      this.isScanning = false;
    }
  }

  extractDni(scannedText: string): string {
    // Busca el DNI en el texto escaneado
    const dniRegex = /\d{8}/; // El DNI tiene 8 dígitos
    const match = scannedText.match(dniRegex);
    return match ? match[0] : 'No se encontró DNI';
  }

  stopScan() {
    BarcodeScanner.stopScan();
    this.isScanning = false;
  }

}
