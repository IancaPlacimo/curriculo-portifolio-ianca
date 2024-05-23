import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  constructor(private router:Router, private api : ApiServiceService ){
  }

  contatos(){
    this.router.navigate(['/contatos']);
  }

  download(){
    this.api.downloadPDF().subscribe(res => {
      let url = window.URL.createObjectURL(res);
      let a = document.createElement('a');
      a.href = url;
      a.download = 'Download pdf';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    })
  }
}
