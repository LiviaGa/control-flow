import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/Clientes';



@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  //URL da API
  private apiUrl = 'http://localhost:3000/clientes';

  //Criar uma lista fake
  clientes: Cliente[] = []

  //injeção de dependencia do http
  constructor(private http: HttpClient) {

  }
  //vai receber uma lista e ja descerializa (mapear) para uma lista de cliente
  list(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl) as Observable<Cliente[]> //observa essa api, e quando ela me responder vc retorna ela

  }

  //retornando a lista de clientes criada em cima
  // list(): Cliente[] {
  // return this.clientes;
  // }

  //método para remover o cliente
  remove(id: string) {
    const cliente = this.clientes.find(c => c.id == id) // buscando o cliente dentro da lista
    if (cliente) { //Se encontrar o cliente
      //busca o index
      const index = this.clientes.indexOf(cliente)
      //remove o index da lista
      this.clientes.splice(index, 1)
    }
  }

  //método para adicionar um cliente
  //Cliente = lista
  add(cliente: Cliente) {
    //o push adiciona um item (objeto) dentro de uma lista (array)
    this.clientes.push(cliente);
    console.log(this.clientes)
  }

  //método para fazer um update na lista
  //cliente = objeto
  update(id: string, cliente: Cliente) {
    const index = this.clientes.findIndex(c => c.id == id)

    if (index !== -1) {
      this.clientes[index] =
      {
        ...this.clientes[index],
        ...cliente
      }

    }
  }

}
