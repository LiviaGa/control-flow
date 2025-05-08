import { CategoriaService } from './../../services/categoria.service';
import { Categoria } from './../../interfaces/Categoria';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {
  categorias:Categoria[] = []
constructor(private categoriaService: CategoriaService){

}
ngOnInit(){
this.list();
}
list ():void {
  this.categoriaService.list().subscribe((resposta) => (this.categorias = resposta))
}


}
