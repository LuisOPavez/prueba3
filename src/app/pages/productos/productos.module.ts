import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule

import { ProductosPageRoutingModule } from './productos-routing.module';
import { ProductosPage } from './productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosPageRoutingModule,
    HttpClientModule, // Agregar HttpClientModule aquí
  ],
  declarations: [ProductosPage],
})
export class ProductosPageModule {}
