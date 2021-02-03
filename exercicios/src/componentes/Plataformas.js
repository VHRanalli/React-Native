import React from 'react';
import {Button, Alert, ToastAndroid, Platform} from 'react-native';

// criaremos uma função default para verificar em qual plataforma estamos
// cada plataforma se comporta diferente d
//a outra mesmo falando nativamente com Java Script por isso e exencial que
//a menssagem pra um seja em alert(IOS) e para outro seja Toast(Android)
export default props => {
  const notificar = msg => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.LONG);
    } else {
      Alert.alert('Informação: ', msg);
    }
  };

  //retornaremos a menssagem parabens e criaremos o botao para clicar
  return (
    <Button title="Plataforma?" onPress={() => notificar('Parabéns!!!')} />
  );
};
