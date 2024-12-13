import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  public titulo: string = 'Productos';
  public productos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http
      .get<any[]>('https://fakestoreapi.com/products/category/electronics')
      .subscribe(
        (data) => {
          this.productos = data;
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );
  }
}
