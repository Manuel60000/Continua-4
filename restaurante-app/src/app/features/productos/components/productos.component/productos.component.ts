import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Productos } from '../../interfaces/productos.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  items: Productos[] = [];
  loading = false;

  constructor(private svc: ProductosService, private router: Router) { }

  ngOnInit(): void { this.load(); }

  load(){ 
    this.loading = true;
    this.svc.getAll().subscribe(res => { this.items = res; this.loading = false; }, () => this.loading = false);
  }

  goAdd(){ this.router.navigate(['productos/add']); }

  goUpdate(item: Productos){ this.router.navigate(['productos/update', item.id]); }

  delete(item: Productos){ 
    if(confirm('Eliminar?')){ 
      this.svc.delete(item.id).subscribe(() => this.load());
    }
  }
}
