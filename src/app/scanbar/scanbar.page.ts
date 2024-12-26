import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scanbar',
  templateUrl: './scanbar.page.html',
  styleUrls: ['./scanbar.page.scss'],
})
export class ScanbarPage implements OnInit {

  ngOnInit() {
  }
  barcodeData: string = '';
  enteredDni: string = '';
  validationMessage: string = '';
  isProcessing: boolean = false;

  constructor(private http: HttpClient) {}

  async scanBarcode() {
    try {
      await BarcodeScanner.checkPermission({ force: true });
      const result = await BarcodeScanner.startScan();

      if (result.hasContent) {
        this.barcodeData = result.content!;
      }
    } catch (err) {
      console.error('Error scanning barcode:', err);
    }
  }

  validateDni() {
    if (!this.barcodeData || !this.enteredDni) {
      this.validationMessage = 'Please scan the barcode and enter the DNI.';
      return;
    }

    this.isProcessing = true;
    const payload = { barcode: this.barcodeData, dni: this.enteredDni };

    this.http
      .post<{ success: boolean; match: boolean }>(
        'http://localhost:3000/api/mobileroute/validate',
        payload
      )
      .subscribe(
        (response) => {
          this.validationMessage = response.match
            ? '✅ DNI matches the barcode!'
            : '❌ DNI does not match the barcode!';
          this.isProcessing = false;
        },
        (error) => {
          console.error('Error validating DNI:', error);
          this.validationMessage = 'An error occurred. Please try again.';
          this.isProcessing = false;
        }
      );
  }
}
