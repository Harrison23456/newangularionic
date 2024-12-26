import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dni-details',
  templateUrl: './dni-details.page.html',
  styleUrls: ['./dni-details.page.scss'],
})
export class DniDetailsPage implements OnInit {
  userData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['userData']) {
        try {
          this.userData = JSON.parse(params['userData']); // Convertir JSON string a objeto
          console.log('Datos procesados:', this.userData);
        } catch (error) {
          console.error('Error al procesar userData:', error);
        }
      }
    });
  }  
  
}

