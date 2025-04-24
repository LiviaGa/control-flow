import { Injectable } from '@angular/core';
import {Cliente} from '../interfaces/Clientes'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  //Criar uma lista fake
clientes:Cliente[]=[
  {id:"aaaaaaaaaa", nome:"Galagol", telefone:"1234"},
  {id:"bbbbbbbbbb", nome:"Mount", telefone:"4321"},
  {id:"cccccccccc", nome:"Alan"},
]

  constructor() { }

  //retornando a lista de clientes criada em cima
  list():Cliente[]{
    return this.clientes;
  }

//método para remover o cliente
remove(id:string){
  const cliente = this.clientes.find( c => c.id == id) // buscando o cliente dentro da lista
if(cliente){ //Se encontrar o cliente
  //busca o index
  const index = this.clientes.indexOf(cliente)
  //remove o index da lista
  this.clientes.splice(index,1)
}
}

//método para adicionar um cliente
//Cliente = lista
add(cliente:Cliente){
  //o push adiciona um item (objeto) dentro de uma lista (array)
  this.clientes.push(cliente);
  console.log(this.clientes)
}

//método para fazer um update na lista
//cliente = objeto
update (id:string, cliente:Cliente){
  const index = this.clientes.findIndex (c => c.id == id)

  if(index !== -1){
    this.clientes[index] =
  {
    ...this.clientes[index],
    ...cliente
  }

}
}

}
