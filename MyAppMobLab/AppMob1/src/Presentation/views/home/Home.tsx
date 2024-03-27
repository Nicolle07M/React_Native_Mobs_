import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from '../home/viewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import { RoundedButton } from '../../components/RoundedButton';
import  styles  from '../home/Styles'; // Suponiendo que tienes un archivo de estilos separado

// Definición de las props que recibe el componente
interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'> {};

// Componente HomeScreen
export const HomeScreen = ({ navigation, route }: Props) => {
  // Obtener datos y funciones del ViewModel
  const { email, password, errorMessage, user, onChange, login } = useViewModel();

  // Mostrar mensaje de error si hay uno
  useEffect(() => {
    if (errorMessage !== '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  // Redireccionar si hay un usuario logueado
  useEffect(() => {
    if (user?.id !== null && user?.id !== undefined) {
      navigation.replace('ProfileInfoScreen');
    }
  }, [user]);

  // Renderizar el componente
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/chef.jpg')}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/logo.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>FOOD APP</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>
        <CustomTextInput
          image={require('../../../../assets/email.png')}
          placeholder='Correo electrónico'
          value={email}
          keyboardType='email-address'
          property='email'
          onChangeText={onChange}
        />
        <CustomTextInput
          image={require('../../../../assets/password.png')}
          placeholder='Contraseña'
          value={password}
          keyboardType='default'
          secureTextEntry={true}
          property='password'
          onChangeText={onChange}
        />
        <View style={{ marginTop: 30 }}>
          <RoundedButton text='ENTRAR' onPress={() => login()} />
        </View>
        <View style={styles.formRegister}>
          <Text>¿No tienes cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.formRegisterText}>Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
