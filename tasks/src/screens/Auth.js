import React, {Component} from 'react';
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

import axios from 'axios';

import backgroundImage from '../../assets/imgs/login.jpg';
import commonStyles from '../commonStyles';
import AuthInput from '../components/AuthInput';
import {server, showError, showSuccess} from '../common';

export default class Auth extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    stageNew: false,
  };

  signinOrSignup = () => {
    if (this.state.stageNew) {
      this.signup();
    } else {
      Alert.alert('Sucesso!', 'Logar');
    }
  };

  signup = async () => {
    try {
      await axios.post(`${server}/signup`, {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
      });

      showSuccess('Usuario Cadastrado');
      this.setState({stageNew: false});
    } catch (e) {
      showError(e);
    }
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.background}>
        <Text style={styles.title}>Tasks</Text>
        <View style={styles.formContainer}>
          <Text style={styles.subTitle}>
            {this.state.stageNew ? 'Crie a sua Conta' : 'Informe seus Dados'}
          </Text>
          {this.state.stageNew && (
            <AuthInput
              icon="user"
              placeholder={'Nome'}
              value={this.state.name}
              onChangeText={name => this.setState({name})}
              style={styles.input}
            />
          )}
          <AuthInput
            icon="at"
            placeholder={'E-mail'}
            value={this.state.email}
            onChangeText={email => this.setState({email})}
            style={styles.input}
          />

          <AuthInput
            icon="lock"
            placeholder={'Senha'}
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={password => this.setState({password})}
            style={styles.input}
          />
          {this.state.stageNew && (
            <AuthInput
              icon="asterisk"
              placeholder={'Confirmação de Senha'}
              value={this.state.confirmPassword}
              secureTextEntry={true}
              onChangeText={confirmPassword => this.setState({confirmPassword})}
              style={styles.input}
            />
          )}
          <TouchableOpacity onPress={this.signinOrSignup}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                {this.state.stageNew ? 'Registrar' : 'Entrar'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{padding: 10}}
          onPress={() => this.setState({stageNew: !this.state.stageNew})}>
          <Text style={styles.buttonText}>
            {this.state.stageNew
              ? 'Ja possui conta'
              : 'Ainda não possui conta? '}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 70,
    marginBottom: 10,
  },
  subTitle: {
    fontFamily: commonStyles.fontFamily,
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    width: '90%',
  },
  input: {
    marginTop: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#080',
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 7,
  },
  buttonText: {
    fontFamily: commonStyles.fontFamily,
    color: '#fff',
    fontSize: 20,
  },
});
