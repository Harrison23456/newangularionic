import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DniServiceService {

  private backendUrl = 'http://localhost:3000/api/mobileroute'; // URL de tu backend

  constructor(private http: HttpClient) {}

  // Método para consultar el DNI desde el backend
  getDniData(dni: string) {
    return this.http.get<any>(`${this.backendUrl}/proxy-dni/${dni}`);
  }

  // Método para guardar datos del DNI en la base de datos
  saveDniData(dniData: any) {
    return this.http.post<any>(`${this.backendUrl}/saveDniData`, dniData);
  }
}
