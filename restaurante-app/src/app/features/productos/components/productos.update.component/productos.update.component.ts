import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Productos } from '../../interfaces/productos.interface';

@Component({
  selector: 'app-productos-update',
  templateUrl: './productos.update.component.html',
  styleUrls: ['./productos.update.component.scss']
})
export class ProductosUpdateComponent implements OnInit {
  model: Productos | any = null;
  id!: number;
  loading = false;

  constructor(private route: ActivatedRoute, private svc: ProductosService, private router: Router){ }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if(this.id){ 
      this.loading = true;
      this.svc.getById(this.id).subscribe(r => { this.model = r; this.loading = false; }, () => this.loading = false);
    }
  }

  save(){ 
    if(!this.model.nombre || this.model.nombre.trim() === ''){ alert('Nombre requerido'); return; }
    this.svc.update(this.id, this.model).subscribe(() => this.router.navigate(['/productos']));
  }
}
