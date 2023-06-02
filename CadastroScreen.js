import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Button, Animated, KeyboardAvoidingView, onPress, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState,useEffect } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
function CadastroScreen() {



  const [text, onChangeText] = React.useState('');
  const [senha, onChangeSenha] = React.useState('');
  const [senha2, onChangeSenha2] = React.useState('');
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
        <Text style={styles.texto1}> SING UP </Text>
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

      <View style={styles.view4}>
        <Text style={styles.texto3}>Confirme sua senha</Text>

      </View>
      </KeyboardAvoidingView>

      <SafeAreaView>

        <TextInput style={styles.input3}
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={onChangeSenha2}
          value={senha2}
          placeholder="Confirme sua senha"
        />

      </SafeAreaView>


      <View style={styles.botao1}>
        <Button
        color='red'
          title="SIGN UP"
          onPress={clicarBotao1}
        />

      </View>
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

  export default CadastroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',

  },


  view1: {
    alignItems: 'center',
    marginTop: 40,
    flexDirection: 'row'

  },

  texto1: {
    fontWeight: 'bold',
    fontSize: 45,

  },
  animaçao:{

    alignItems: 'center'
  },


  view2: {
    marginTop: 70,
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

    fontSize: 20,
  },

  botao1: {
    marginTop: 8,
    marginBottom: 50,
    width: 400,

  },

  view6: {
    width: '110%',
    marginBottom: 20,


  },

  icon: {

    marginBottom: 30,
    width: "100%",
    height: 80,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',


  },
});