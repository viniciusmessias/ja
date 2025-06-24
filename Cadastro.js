import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet
} from 'react-native';
import styles from './styles';
const Cadastro = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = async () => {
    if (!email || !cnpj || !senha) {
      return Alert.alert('Erro', 'Preencha todos os campos');
    }

    try {
      const response = await fetch('http://localhost:3000/empresa/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },



        body: JSON.stringify({ emailEmpresa, cnpj, senhaEmpresa }),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Conta criada com sucesso');
        navigation.navigate('Login'); // Redireciona para a tela de login
      } else {
        Alert.alert('Erro', 'Erro ao criar conta');
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      Alert.alert('Erro', 'Não foi possível conectar ao servidor');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Login.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Criar conta</Text>

      <TextInput
        placeholder="Informe seu e-mail"
        placeholderTextColor="#ccc"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Informe seu CNPJ"
        placeholderTextColor="#ccc"
        style={styles.input}
        value={cnpj}
        onChangeText={setCnpj}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Informe sua senha"
        placeholderTextColor="#ccc"
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cadastro;