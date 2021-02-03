import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import Padrao from '../estilo/Padrao';

// uma versão mais nova desse codigo ja foi comentada em ComunicaçãoIndireta.js
export default class Evento extends Component {
  state = {
    texto: '',
  };

  alterarTexto = texto => {
    this.setState({texto});
  };

  render() {
    return (
      <View>
        <Text style={Padrao.fonte40}>{this.state.texto}</Text>
        <TextInput
          value={this.state.texto}
          style={Padrao.input}
          onChangeText={this.alterarTexto}
        />
      </View>
    );
  }
}
