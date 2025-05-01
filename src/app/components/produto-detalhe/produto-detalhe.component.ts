import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  standalone: true,
  imports: [],
  templateUrl: './produto-detalhe.component.html',
  styleUrl: './produto-detalhe.component.css'
})
export class ProdutoDetalheComponent {
  id: number = 0;

  constructor(private route: ActivatedRoute) {
    //this.getClientById();
    this.getProdutoById();
  }

  getProdutoById(): void {
    const idParametro = this.route.snapshot.paramMap.get('id')
    console.log();
    this.id = idParametro ? parseInt(idParametro, 10) : 0;
  }

}
