import React from 'react';
import {ScrollView, View, FlatList, Text} from 'react-native';

// criando um vetor de dados com valores e linhas imbutidos dentro dele
const alunos = [
  {id: 1, nome: 'João', nota: 7.9},
  {id: 2, nome: 'Ana', nota: 9.1},
  {id: 3, nome: 'Bia', nota: 5.4},
  {id: 4, nome: 'Claudia', nota: 7.6},
  {id: 5, nome: 'Roberto', nota: 6.8},
  {id: 6, nome: 'Rafael', nota: 9.9},
  {id: 7, nome: 'Guilherme', nota: 10.0},
  {id: 8, nome: 'Rebeca', nota: 8.8},
  {id: 9, nome: 'Tobias', nota: 8.8},

  {id: 11, nome: 'João', nota: 7.9},
  {id: 12, nome: 'Ana', nota: 9.1},
  {id: 13, nome: 'Bia', nota: 5.4},
  {id: 14, nome: 'Claudia', nota: 7.6},
  {id: 15, nome: 'Roberto', nota: 6.8},
  {id: 16, nome: 'Rafael', nota: 9.9},
  {id: 17, nome: 'Guilherme', nota: 10.0},
  {id: 18, nome: 'Rebeca', nota: 8.8},
  {id: 19, nome: 'Tobias', nota: 8.8},

  {id: 21, nome: 'João', nota: 7.9},
  {id: 22, nome: 'Ana', nota: 9.1},
  {id: 23, nome: 'Bia', nota: 5.4},
  {id: 24, nome: 'Claudia', nota: 7.6},
  {id: 25, nome: 'Roberto', nota: 6.8},
  {id: 26, nome: 'Rafael', nota: 9.9},
  {id: 27, nome: 'Guilherme', nota: 10.0},
  {id: 28, nome: 'Rebeca', nota: 8.8},
  {id: 29, nome: 'Tobias', nota: 8.8},
];

//o estilo para cada item da nossa lista
const itemEstilo = {
  paddinHorizontal: 15,
  height: 50,
  backgroundColor: '#DDD',
  borderWidth: 0.5,
  borderColor: '#222',

  // Flex
  alignItems: 'center',
  //justifyContent: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  //justifyContent: 'space-around',
  //alignItems: 'flex-end',
};

//Carregando nossos items para implementar na lista
export const Aluno = props => (
  <View style={itemEstilo}>
    <Text>Nome: {props.nome}</Text>
    <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
  </View>
);

//aqui nos renderizaremos cada item
export default props => {
  const renderItem = ({item}) => {
    return <Aluno {...item} />;
  };

  // aqui sera criada a lista para colocarmos nossos componentes
  return (
    <ScrollView>
      <FlatList
        data={alunos}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </ScrollView>
  );
};
