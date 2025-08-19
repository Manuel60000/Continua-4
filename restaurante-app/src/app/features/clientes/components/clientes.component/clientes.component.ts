import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { Clientes } from '../../interfaces/clientes.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  items: Clientes[] = [];
  loading = false;

  constructor(private svc: ClientesService, private router: Router) { }

  ngOnInit(): void { this.load(); }

  load(){ 
    this.loading = true;
    this.svc.getAll().subscribe(res => { this.items = res; this.loading = false; }, () => this.loading = false);
  }

  goAdd(){ this.router.navigate(['clientes/add']); }

  goUpdate(item: Clientes){ this.router.navigate(['clientes/update', item.id]); }

  delete(item: Clientes){ 
    if(confirm('Eliminar?')){ 
      this.svc.delete(item.id).subscribe(() => this.load());
    }
  }
}
