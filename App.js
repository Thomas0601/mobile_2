import { StatusBar } from 'expo-status-bar';
import { Button, Animated, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import CadastroScreen from './CadastroScreen';
const Stack = createStackNavigator();

function App() {
  const [ativar, setAtivar] = useState(true);
  const [texto, setTexto] = useState('PRÓXIMO TEXTO');
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 90 }));
  const [opacity] = useState(new Animated.Value(0));


  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 0,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 2,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  function HomeScreen({ navigation }) {
    return (
      <ScrollView style={styles.container}>
        <Animated.View
          style={[
            styles.animation,
            {
              opacity: opacity,
              transform: [{ translateY: offset.y }],
            },
          ]}
        >
          <StatusBar style="auto" />

          <View style={styles.view1}>
            <MaterialIcons name="local-florist" size={80} color="brown" />
            <Text style={styles.texto1}> BEM VINDA </Text>
            <MaterialIcons name="local-florist" size={80} color="brown" />
          </View>

       
            <View style={styles.mensagem1}>
              <Text style={styles.textomsg}>
                Olá! Seja bem-vinda ao novo sistema para entender melhor o seu "período menstrual". Se você estiver precisando de ajuda na sua situação, conecte-se a uma conta ou preencha suas informações. Abaixo temos opções para você que deseja aproveitar o melhor do nosso app.
              </Text>
            </View>
      
        


            <View style={styles.custombutton1}> 
            <Button color="brown" title="Login" onPress={() => navigation.navigate('Login')} />
            </View>
            <View style={styles.custombutton2}>
            <Button color="brown" title="Cadastro" onPress={() => navigation.navigate('Cadastro')} />
            </View>
            <View style={styles.custombutton3}> 
            <Button color="brown" title="Suporte" onPress={() => navigation.navigate('Suporte')} />
            </View>
            
         
        </Animated.View>
      </ScrollView>
    );
  }



  function SuporteScreen() {
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>Tela de Suporte</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HOME" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Suporte" component={SuporteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  animation: {
    alignItems: 'center',
  },
  mensagem1: {
    backgroundColor: '#eee',
    width: '95%',
    height: 140,
    borderRadius: 25,
    marginTop: 1,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 5,
    marginBottom: 40,
  },

  textomsg: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: -8,
    marginRight: 10,
    marginStart: 10,
  },
  
  view1: {
    alignItems: 'center',
    marginTop: 30,
    flexDirection: 'row',
    marginBottom: 50,
  },
  texto1: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  itens: {
    marginTop: 80,
    marginBottom: -19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffe4e1',
    width: 350,
    padding: 10,
    borderWidth: 5,
    borderRadius: 30,
  },
  texto2: {
    fontWeight: 'bold',
    fontSize: 18,
  },
 
  custombutton1:{
    marginTop: 50,
    marginBottom: 40,
    width: '50%'


  },
  custombutton2:{
    marginTop: 5,
    marginBottom: 40,
    width: '50%',


  },

  custombutton3:{
    marginTop: 5,
    marginBottom: 1,
    width: '50%',


  },

  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
