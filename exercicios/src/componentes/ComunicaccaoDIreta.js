import React from 'react';
import {View, Text} from 'react-native';

const fonte = {style: {fontSize: 30}};

// este metodo se responsabiliza por fazer a ligação das heranças de pais, filhos e avos
function filhosComProps(props) {
  return React.Children.map(props.children, c =>
    React.cloneElement(c, {...props, ...c.props}),
  );
}

// aqui trabalhamos com um tipo de herença onde o sobre nome do pai e
//herdado de avo que por sua vez passa para o filho

export const Filho = props => (
  <View>
    <Text {...fonte}>
      {/* Herança de estilo a tag filho herda de um estilo pai */}
      Filhos: {props.nome} {props.sobrenome}
    </Text>
  </View>
);

export const Pai = props => (
  <View>
    <Text {...fonte}>
      Pai: {props.nome} {props.sobrenome}
    </Text>
    {/*props.children*/}
    {/* {React.cloneElement(props.children, {...props, ...props.children.props})} */}
    {filhosComProps(props)}
  </View>
);

// aqui sao implementados o nome e o sobre nome do avo
// que por sua vez tem um filho que é pai de outro filho
export const Avo = props => (
  <View>
    <Text {...fonte}>
      Avô: {props.nome} {props.sobrenome}
    </Text>
    <Pai nome="Andre" sobrenome={props.sobrenome}>
      <Filho nome="Ana" />
      <Filho nome="Gui" />
      <Filho nome="Davi" />
    </Pai>
    <Pai {...props} nome="Pedro">
      <Filho nome="Rebeca" />
      <Filho nome="Renato" />
    </Pai>
  </View>
);

export default Avo;
