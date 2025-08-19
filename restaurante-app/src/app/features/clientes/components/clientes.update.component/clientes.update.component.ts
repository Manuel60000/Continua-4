import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';
import { Clientes } from '../../interfaces/clientes.interface';

@Component({
  selector: 'app-clientes-update',
  templateUrl: './clientes.update.component.html',
  styleUrls: ['./clientes.update.component.scss']
})
export class ClientesUpdateComponent implements OnInit {
  model: Clientes | any = null;
  id!: number;
  loading = false;

  constructor(private route: ActivatedRoute, private svc: ClientesService, private router: Router){ }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if(this.id){ 
      this.loading = true;
      this.svc.getById(this.id).subscribe(r => { this.model = r; this.loading = false; }, () => this.loading = false);
    }
  }

  save(){ 
    if(!this.model.nombre || this.model.nombre.trim() === ''){ alert('Nombre requerido'); return; }
    this.svc.update(this.id, this.model).subscribe(() => this.router.navigate(['/clientes']));
  }
}
