import { Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes.component/clientes.component';
import { ClientesAddComponent } from './components/clientes.add.component/clientes.add.component';
import { ClientesUpdateComponent } from './components/clientes.update.component/clientes.update.component';

export const CLIENTESRoutes: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'add', component: ClientesAddComponent },
  { path: 'update/:id', component: ClientesUpdateComponent }
];
