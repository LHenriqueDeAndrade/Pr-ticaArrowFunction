//Crie um component de class

// Crie uma arrow function que receba uma mensagem e exiba na tela

// Crie uma arrow function que retorne o dobro de um número e exiba na tela

import React, { Component } from "react";

class App extends Component {
  state={
    clima:['Tropical']
  }

Title = () => ('Sobre o Climatempo') 

Show = () => {
  return(
    <div>
      <p> O climatempo tem auxiliado a humanidade em prever possiveis catastrofes</p>
    </div>
  )
}
  
Clima = (clima) => {
  return (<p>{`Meu clima preferencial é ${clima}`}</p>)
}

Multiplicacao = () => (2*5)
conta = (x, y) => {
  return(
    <div>
      <p>{x * y}</p>
      <hr />
    </div>
  )
}

  render() {
    return (
      <section>
        <h1>{this.Title()}</h1>
        {this.Show()}
        <p>{this.Multiplicacao()}</p>
        <div>
          {this.Clima('Tropical')}
        </div>
      </section>
    )
  }
}

export default App;