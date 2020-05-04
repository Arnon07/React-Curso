import React, { Component} from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';

class App extends Component{
  constructor(props){
    super(props)
      this.state = {
        nome: '',
        input: ''
      }
      this.entrar = this.entrar.bind(this)
  }

  entrar(){
    if(this.state.input === ''){
      alert('Digite seu nome')
      return
    }
    this.setState({
      nome: 'Bem vindo ' + this.state.input
    })
  }
    render(){
      return(
        <View style={style.container} >
          <TextInput
            style={style.input}
            placeholder="Digite seu nome"
            onChangeText={(texto) => this.setState({
              input: texto
            })}
          />
          <Button title='Entrar' onPress={this.entrar} />
          <Text style={style.texto}>{this.state.nome}</Text>
        </View>
      )
    }
}
const style = StyleSheet.create({
  container:{
    flex:1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25
  }
})
export default App;