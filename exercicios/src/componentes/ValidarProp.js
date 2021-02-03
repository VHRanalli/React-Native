import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

//este metodo valida nossa props
const ValidarProps = props => (
  <Text style={{fontSize: 35}}>
    {props.label}
    {props.ano + 2000}
  </Text>
);

//aqui inserimos um valor padrao do tipo string
ValidarProps.defaultProps = {
  label: 'Ano: ',
};

//aqui nos falamos que ano e requirido para nao dar NaN(Not A Number)
ValidarProps.propTypes = {
  ano: PropTypes.number.isRequired,
};

export default ValidarProps;
