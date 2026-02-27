import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: false
})
export class AppComponent implements OnInit {
  portfolioData: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:8080/api/v1/portfolio')
      .subscribe({
        next: (data) => this.portfolioData = data,
        error: (err) => console.error(err)
      });
  }

  abrirContato() {
    if (this.portfolioData?.whatsappUrl) {
      window.open(this.portfolioData.whatsappUrl, '_blank');
    }
  }
}
