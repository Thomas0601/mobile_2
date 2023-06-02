import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Button, Animated, TouchableOpacity, KeyboardAvoidingView, onPress, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState,useEffect } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
function LoginScreen() {



  const [text, onChangeText] = React.useState('');
  const [senha, onChangeSenha] = React.useState('');
  const [offset] = useState(new Animated.ValueXY({x: 0, y:90}));
  const[opacity] =useState(new Animated.Value(0)) ;
  const clicarBotao1 = () => { }


  useEffect(()=>{
    Animated.parallel([ 
      Animated.spring(offset.y,{
      toValue: 0,
      speed: 0,
      
      useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue:2,
        duration: 300,
        useNativeDriver: true,
      })
    ]).start()
      
        },[]);

  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
<Animated.View style={[styles.animaçao, 
{
  opacity:opacity,
  transform: [
  {translateY:offset.y}
]
    
    
    }
    ]}> 

      <View style={styles.view1} >
        <MaterialIcons name="local-florist" size={80} color="brown" />
        <Text style={styles.texto1}> LOGIN </Text>
        <MaterialIcons name="local-florist" size={80} color="brown" />
      </View>



<KeyboardAvoidingView> 
      <View style={styles.view2}>
        <Text style={styles.texto2}>Email</Text>

      </View>
      <SafeAreaView>

        <TextInput
          style={styles.input}
          autoCorrect={false}
          onChangeText={onChangeText}
          value={text}
          placeholder="E-mail"

        />
      </SafeAreaView>


      <View style={styles.view3}>
        <Text style={styles.texto2}>Senha</Text>

      </View>
      <SafeAreaView>
        <TextInput
          style={styles.input2}
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={onChangeSenha}
          value={senha}
          placeholder="Senha"
        />

      </SafeAreaView>

      </KeyboardAvoidingView>

   

      <View style={styles.botao1}>
        <Button
        color='red'
          title="LOGIN"
          onPress={clicarBotao1}
        />

      </View>

      <TouchableOpacity style={styles.senha3}>
        <Text style={styles.textosenha}>ESQUECEU SUA SENHA?
        </Text>
        </TouchableOpacity>
      <View style={styles.view6}>
        <Text style={styles.texto4}>-----------------------------------------------OR--------------------------------------------</Text>
      </View >
      <View style={styles.icon}>
        <AntDesign name="google" size={40} color="#DC143C" />
        <FontAwesome5 name="facebook" size={40} color="blue" />
      </View>
      </Animated.View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',

  },


  view1: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 50,
    flexDirection: 'row'

  },

  texto1: {
    fontWeight: 'bold',
    fontSize: 45,

  },
  animaçao:{
    alignItems: 'center',
  },

  view2: {
    marginTop: 30,
    marginBottom: 5,
    marginEnd: 320,
  },



  input: {
    backgroundColor: 'white',
    margin: 12,
    borderWidth: 1,
    width: 390,
    padding: 10,
    borderRadius: 30,

  },
  texto2: {
    fontWeight: 'bold',
    fontSize: 18,

  },

  texto3: {
    fontWeight: 'bold',
    fontSize: 17,

  },
  view3: {
    marginTop: 10,
    marginBottom: 5,
    marginEnd: 320,
  },

  input2: {
    backgroundColor: 'white',
    margin: 12,
    borderWidth: 1,
    width: 390,
    padding: 10,
    borderRadius: 30,

  },

  view4: {
    marginTop: 10,
    marginBottom: 5,
    marginEnd: 230,
  },

  input3: {
    marginBottom: 40,
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    width: 390,
    padding: 10,
    borderRadius: 30,
  },

  view5: {
    marginTop: 10,

  },

  texto4: {
marginBottom: -30,
    fontSize: 20,
  },

  botao1: {
    marginTop: 25,
    marginBottom: 40,
  width: 400,
  borderRadius: 100,

  },


  senha3: {
marginTop: -5,
marginBottom: 30,

  },

  textosenha:{
    fontWeight: 'bold',
    fontSize: 15,



  },
  view6: {
    width: '110%',
    marginBottom: 20,


  },

  icon: {
marginTop: 40,
    marginBottom: 30,
    width: "100%",
    height: 80,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',


  },
});