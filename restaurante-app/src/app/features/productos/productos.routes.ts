import { Routes } from '@angular/router';
import { ProductosComponent } from './components/productos.component/productos.component';
import { ProductosAddComponent } from './components/productos.add.component/productos.add.component';
import { ProductosUpdateComponent } from './components/productos.update.component/productos.update.component';

export const PRODUCTOSRoutes: Routes = [
  { path: '', component: ProductosComponent },
  { path: 'add', component: ProductosAddComponent },
  { path: 'update/:id', component: ProductosUpdateComponent }
];
