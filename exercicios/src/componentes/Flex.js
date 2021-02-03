import React from 'react';
import {View, StyleSheet} from 'react-native';

// Aqui nos estabelecemos os estilos personalizados de cada view
/**
 * Flex: tamanho da caixa de um componente expecifico se mais de um componente
 * tiver 1 ou mais flex ele dividira os dois e demilitara um tamanho para cada um
 * na tela
 * alingItems: alinha os items tanto no centro na horisontal esquerda ou direita
 * esse estilo trabalha com alinhamentos horizontais e não verticais
 * justifyContent: trabalha com alinhamento vertical
 * flexDirection: explicita se o componente e uma linha ou uma coluna
 *  */
const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  norte: {
    flex: 1,
    backgroundColor: '#bdf9cd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centro: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#f2f9bd',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  sul: {
    flex: 1,
    backgroundColor: '#bdf9c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circulo: {
    width: 100,
    height: 100,
    backgroundColor: '#f47f61',
    borderRadius: 50,
  },
});

const Circulo = props => <View style={styles.circulo} />;

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.norte}>
        <Circulo />
      </View>
      <View style={styles.centro}>
        <Circulo />
        <Circulo />
        <Circulo />
      </View>
      <View style={styles.sul}>
        <Circulo />
      </View>
    </View>
  );
};
