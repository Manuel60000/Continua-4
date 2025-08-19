import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';
import { Clientes } from '../../interfaces/clientes.interface';

@Component({
  selector: 'app-clientes-add',
  templateUrl: './clientes.add.component.html',
  styleUrls: ['./clientes.add.component.scss']
})
export class ClientesAddComponent {
  model: Partial<Clientes> = { nombre: '', descripcion: '' };

  constructor(private svc: ClientesService, private router: Router){ }

  save(){ 
    // simple client-side validation
    if(!this.model.nombre || this.model.nombre.trim() === ''){ alert('Nombre requerido'); return; }
    this.svc.create(this.model as Clientes).subscribe(() => this.router.navigate(['/clientes']));
  }
}
