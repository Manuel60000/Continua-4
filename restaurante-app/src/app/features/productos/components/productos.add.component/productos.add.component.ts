import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Productos } from '../../interfaces/productos.interface';

@Component({
  selector: 'app-productos-add',
  templateUrl: './productos.add.component.html',
  styleUrls: ['./productos.add.component.scss']
})
export class ProductosAddComponent {
  model: Partial<Productos> = { nombre: '', descripcion: '' };

  constructor(private svc: ProductosService, private router: Router){ }

  save(){ 
    // simple client-side validation
    if(!this.model.nombre || this.model.nombre.trim() === ''){ alert('Nombre requerido'); return; }
    this.svc.create(this.model as Productos).subscribe(() => this.router.navigate(['/productos']));
  }
}
