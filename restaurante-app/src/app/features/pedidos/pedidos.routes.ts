import { Routes } from '@angular/router';
import { PedidosComponent } from './components/pedidos.component/pedidos.component';
import { PedidosAddComponent } from './components/pedidos.add.component/pedidos.add.component';
import { PedidosUpdateComponent } from './components/pedidos.update.component/pedidos.update.component';

export const PEDIDOSRoutes: Routes = [
  { path: '', component: PedidosComponent },
  { path: 'add', component: PedidosAddComponent },
  { path: 'update/:id', component: PedidosUpdateComponent }
];
