import React, {Component} from 'react'

class Square extends React.Component {
    // Adicionar o estado do componente no método construtor e logo em seguida mudar o
    // props do botão para state, mudar a função do evento click para
    // this setState e mudar o fundo do botao
    
    render() {
      return (
        //   fazendo um blotao interativo com arrow function
        <button className="square" 
        onClick={() => this.props.onClick()}
        >
            {/* passamos o valor por props */}
          {this.props.value}
        </button>
      );
    }
  }
  

export default Square