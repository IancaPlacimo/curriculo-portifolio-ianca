import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  texts: string[] = [
    'Front-end',
    'Angular',
    'HTML',
    'CSS',
    'Typescript',
    'JavaScript',
    'Web Responsive',
    'UI/UX',
    'Bootstrap',
    'SASS',
    'Node.js',
  ];
  currentText: string = this.texts[0];
  count: number = 0;

  constructor(private router: Router, private api: ApiServiceService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.changeText();
    }, 1000);
  }

  changeText(): void {
    this.count = (this.count + 1) % this.texts.length;
    this.currentText = this.texts[this.count];
  }

  contatos() {
    this.router.navigate(['/contatos']);
  }

  download() {
    this.api.downloadPDF().subscribe((res) => {
      let url = window.URL.createObjectURL(res);
      let a = document.createElement('a');
      a.href = url;
      a.download = 'Download pdf';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    });
  }
}
