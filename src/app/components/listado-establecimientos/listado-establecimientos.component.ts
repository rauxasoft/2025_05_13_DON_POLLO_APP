import { Component, inject, OnInit, signal } from '@angular/core';
import { EstablecimientoDTO2 } from '../../model/establecimientoDTO2';
import { EstablecimientoService } from '../../services/establecimiento.service';

@Component({
  selector: 'app-listado-familias',
  standalone: true,
  imports: [],
  templateUrl: './listado-establecimientos.component.html',
  styleUrl: './listado-establecimientos.component.css'
})
export class ListadoEstablecimientosComponent implements OnInit{

  private establecimeintoService = inject(EstablecimientoService);
  public establecimientos = signal<EstablecimientoDTO2[]>([]);
  public error = signal<string | null>(null);

  ngOnInit() {
    
    this.establecimeintoService.getAll().subscribe({
      next: data => {
        this.establecimientos.set(data);
        this.error.set(null);
      },
      error: err => {
        console.error(err);
        this.error.set('No se han podido cargar los establecimientos');  
      }
    });

  }

}
