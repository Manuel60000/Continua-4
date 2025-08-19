import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../services/pedidos.service';
import { Pedidos } from '../../interfaces/pedidos.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {
  items: Pedidos[] = [];
  loading = false;

  constructor(private svc: PedidosService, private router: Router) { }

  ngOnInit(): void { this.load(); }

  load(){ 
    this.loading = true;
    this.svc.getAll().subscribe(res => { this.items = res; this.loading = false; }, () => this.loading = false);
  }

  goAdd(){ this.router.navigate(['pedidos/add']); }

  goUpdate(item: Pedidos){ this.router.navigate(['pedidos/update', item.id]); }

  delete(item: Pedidos){ 
    if(confirm('Eliminar?')){ 
      this.svc.delete(item.id).subscribe(() => this.load());
    }
  }
}
