import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagemanipulationService {

  constructor() {}

  async preprocessImage(imageDataUrl: any): Promise<string> {


    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const img = new Image();
    img.src = imageDataUrl;

    return new Promise<string>((resolve, reject) => {
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        context?.drawImage(img, 0, 0);

        // Obtener los datos de la imagen en escala de grises
        const imageData = context?.getImageData(0, 0, img.width, img.height);
        const data = imageData?.data;

        if (data) {
          for (let i = 0; i < data.length; i += 4) {
            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3; // Promedio para convertir a gris
            data[i] = data[i + 1] = data[i + 2] = avg; // Asignar gris a cada canal
          }
          context?.putImageData(imageData, 0, 0);
        }

        // Devolver la imagen procesada como Data URL
        resolve(canvas.toDataURL());
      };

      img.onerror = (error) => {
        reject(error);
      };
    });
  }
}
