import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http//:loiane.com'

  getValor(){
    return 1
  }
  // Variáveis
  cursoAngular = true

  valorAtual

  valorSalvo

  mouse

  // Fim Variáveis

  getCurtirCurso(){
    return true
  }

  urlImagem = "https://cdn2us.denofgeek.com/sites/denofgeekus/files/2018/09/new-super-mario-bros-u.jpg"

  botaoClicado(){
    alert('Botão Clicado!!')
  }

  onKeyUp(evento: KeyboardEvent){
      if((<HTMLInputElement>evento.target).value == ''){
        this.valorAtual = 'Nao tem valor'
        console.log('Nao tem valor')
      }
      else{
        //console.log((<HTMLInputElement>evento.target).value)
        this.valorAtual = (<HTMLInputElement>evento.target).value
        console.log((<HTMLInputElement>evento.target).value)
      }
      //this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor){
    if(valor == ''){
      this.valorSalvo = 'Nao tem valor'
      //console.log('Aparece - Nao tem Valor');
    }else{
      this.valorSalvo = valor
      //console.log('Aparece - Valor')
    }
  }

  onMouseOverOut(){
    this.mouse = !this.mouse
  }

  constructor() { }

  ngOnInit() {
  }

}
