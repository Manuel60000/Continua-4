import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService } from '../../services/pedidos.service';
import { Pedidos } from '../../interfaces/pedidos.interface';

@Component({
  selector: 'app-pedidos-update',
  templateUrl: './pedidos.update.component.html',
  styleUrls: ['./pedidos.update.component.scss']
})
export class PedidosUpdateComponent implements OnInit {
  model: Pedidos | any = null;
  id!: number;
  loading = false;

  constructor(private route: ActivatedRoute, private svc: PedidosService, private router: Router){ }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if(this.id){ 
      this.loading = true;
      this.svc.getById(this.id).subscribe(r => { this.model = r; this.loading = false; }, () => this.loading = false);
    }
  }

  save(){ 
    if(!this.model.nombre || this.model.nombre.trim() === ''){ alert('Nombre requerido'); return; }
    this.svc.update(this.id, this.model).subscribe(() => this.router.navigate(['/pedidos']));
  }
}
