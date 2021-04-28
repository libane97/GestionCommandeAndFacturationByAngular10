import { Component, OnInit } from '@angular/core';
import { DataService } from './../../service/data.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { printDiv } from './print-div';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
})
export class RestaurantComponent implements OnInit {
  pdfObj = null;
  client = { nom: '', telephone: '', address: '', facture: '' };
  data: any;
  product: any;
  listProduct = [];
  TotalCommande = 0;
  vaidateCommande = false;
  check = false;
  remise = 0;
  remises = 0;
  todayNow: any;
  i = 0;
  loading: any;
  numeroCommande: any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getProduit();
  }

  getProduit() {
    this.dataService.getRestaurant().subscribe((res) => {
      this.data = res;
      console.log(this.data);
      this.todayNow = new Date();
    });
    var min = 1000;
    var max = 9999;
    this.i = Math.floor(Math.random() * (max - min)) + min;
    let today = new Date();
    console.log(today);
    this.numeroCommande = today.getFullYear() + ' ' + this.i;
    console.log(this.numeroCommande, 'ici date ');
    // alert(this.i);
  }

  add() {
    this.listProduct.push(this.product);
    console.log(this.listProduct);
  }

  getinformation() {
    this.check = true;
    console.log(this.client);
  }

  MontantTotalByCommande() {
    return (this.TotalCommande = this.listProduct.reduce((a, c) => {
      return a + c.qty * c.prix;
    }, 0));
  }

  remis() {
    this.remises =
      (this.TotalCommande || 0) -
      ((this.TotalCommande * this.remise) / 100 || 0);
    console.log(this.remises);
    return this.remises;
  }
  /*
d-HP-ENVY-m7-Notebook-PC (11:53) :
 var canvas = document.createElement("canvas");
    console.log("image");
    canvas.width = img.width;
    canvas.height = img.height;
*/
  genereBYCommand() {
    const element = document.getElementById('print-wrapper');
    html2canvas(element).then((canvas) => {
      const imgdata = canvas.toDataURL('image/png');
      var doc = new jsPDF('p', 'mm', 'a4');
      doc.addImage(imgdata, 'PNG', 0, -10, 308, 242);
      doc.output('dataurlnewwindow');
      doc.save('FACTURE');
    });
  }

  facture() {
    const element = document.getElementById('print-wrapper');
    printDiv('print-wrapper');
  }

  getPDF() {
    html2canvas(document.querySelector('.printformClass')).then(function (
      canvas
    ) {
      canvas.getContext('2d');
      var HTML_Width = canvas.width;
      var HTML_Height = canvas.height;
      var top_left_margin = 15;
      var PDF_Width = HTML_Width + top_left_margin * 2;
      var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
      var canvas_image_width = HTML_Width;
      var canvas_image_height = HTML_Height;

      var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
      console.log(canvas.height + '  ' + canvas.width);

      var imgData = canvas.toDataURL('image/jpeg', 1.0);
      var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
      pdf.addImage(
        imgData,
        'JPG',
        top_left_margin,
        top_left_margin,
        canvas_image_width,
        canvas_image_height
      );

      for (var i = 1; i <= totalPDFPages; i++) {
        // pdf.addPage(PDF_Width, PDF_Height);
        let margin = -(PDF_Height * i) + top_left_margin * 4;
        if (i > 1) {
          margin = margin + i * 8;
        }
        console.log(top_left_margin);
        console.log(top_left_margin);
        console.log(-(PDF_Height * i) + top_left_margin * 4);
        pdf.addImage(
          imgData,
          'JPG',
          top_left_margin,
          margin,
          canvas_image_width,
          canvas_image_height
        );
      }

      pdf.save('HTML-Document.pdf');
    });
  }

  getdiv() {
    //this.getPDF();
    this.facture();
  }
}
