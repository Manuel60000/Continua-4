import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PedidosService } from '../../services/pedidos.service';
import { Pedidos } from '../../interfaces/pedidos.interface';

@Component({
  selector: 'app-pedidos-add',
  templateUrl: './pedidos.add.component.html',
  styleUrls: ['./pedidos.add.component.scss']
})
export class PedidosAddComponent {
  model: Partial<Pedidos> = { nombre: '', descripcion: '' };

  constructor(private svc: PedidosService, private router: Router){ }

  save(){ 
    // simple client-side validation
    if(!this.model.nombre || this.model.nombre.trim() === ''){ alert('Nombre requerido'); return; }
    this.svc.create(this.model as Pedidos).subscribe(() => this.router.navigate(['/pedidos']));
  }
}
