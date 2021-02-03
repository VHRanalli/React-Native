import React from 'react';
import {createDrawerNavigator} from 'react-navigation';

//Cada Import traz uma tela ja programada em um outro arquivo .js em outras palavras
//cada import e uma tela
import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import {Inverter, MegaSena} from './componentes/Mult';
import Contador from './componentes/Contador';
import Plataformas from './componentes/Plataformas';
import ValidarProps from './componentes/ValidarProp';
import Evento from './componentes/Evento';
import Avo from './componentes/ComunicaccaoDIreta';
import TextoSincronizado from './componentes/ComunicacaoIndireta';
import ListaFlex from './componentes/ListaFlex';
import Flex from './componentes/Flex';

// DrawerNavigation tem suas regras de uso e uma delas e usar o metodo createDrawerNavigation
//para criar a tela de navegação
/*Cada componente corresponde a um importe a cima que traz uma tela
Qua conhecidentemente carregara a tela apartir de seu proprio nome ou uma tag
Para que a tela venha apartir do seu proprio nome e necessario que a mesma
esteja desenhada e sendo exportada de modo default do outro lado
@screen: Carrega a tela apartir de uma tag ou seu proprio nome
@navigationOptions: carrega as opções de navegações como titulo para menus dentre outros
*/
export default createDrawerNavigator(
  {
    Flex: {
      screen: Flex,
    },
    ListaFlex: {
      screen: ListaFlex,
      navigationOptions: {title: 'Lista (Flex Box)'},
    },
    TextoSincronizado: {
      screen: TextoSincronizado,
      navigationOptions: {title: 'Texto Sincronizado'},
    },
    Avo: {
      screen: () => <Avo nome="João" sobrenome="Silva" />,
    },
    Evento: {
      screen: Evento,
    },
    ValidarProps: {
      screen: () => <ValidarProps label="Teste Label " ano={20} />,
    },
    Plataformas: {
      screen: Plataformas,
    },
    Contador: {
      screen: () => <Contador numeroInicial={100} />,
    },
    MegaSena: {
      screen: () => <MegaSena numeros={8} />,
      navigationOptions: {title: 'Mega Sena'},
    },
    Inverter: {
      screen: () => <Inverter texto="React Native!!!" />,
    },
    ParImpar: {
      screen: () => <ParImpar numero={30} />,
      navigationOptions: {title: 'Par & Impar'},
    },
    Simples: {
      screen: () => <Simples texto="Flexível!!!" />,
    },
  },
  {drawerWidth: 300},
);
