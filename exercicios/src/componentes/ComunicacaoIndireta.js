import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import Padrao from '../estilo/Padrao'; // Carrega um estilo criado apartir de um outro lugar

// Metodo que cria um despositivo de entrada de texto
export const Entrada = props => (
  <View>
    <TextInput
      value={props.texto}
      style={Padrao.input}
      onChangeText={props.chamarQuandoMudar} // quando o texto mudar o metodo sera assionado
    />
  </View>
);

//Etá classe vai cria a sincronização do que está sendo digitado na input e enviar pata a text
export default class TextoSincronizado extends Component {
  //State e uma variação da props enquanto a props atribui um valor fixo a state
  //Pode alterar valores simultaneamente ex: numero: 1 + 1 || props: nao pode alterar toda hora
  state = {
    texto: '',
  };

  //Aqui setaremos na texto da state o texto que vem da input
  alterarTexto = texto => {
    this.setState({texto});
  };

  render() {
    return (
      <View>
        <Text style={Padrao.fonte40}>{this.state.texto}</Text>
        {/** aqui chamamos a const entrada que carregara um layout do input
         * onde estabeleçemos duas funções texto e o chamarQuandoMudar
         */}
        <Entrada
          texto={this.state.texto}
          chamarQuandoMudar={this.alterarTexto}
        />
      </View>
    );
  }
}
