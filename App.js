import React, { Component} from 'react';
import { 
  View, 
  Text, 
  Image,
  StyleSheet, TextInput, TouchableOpacity
} 
from 'react-native';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
        textoFrase: 'A persistência é o caminho do êxito.',
        img: require('./src/biscoito.png'),
    }
    this.quebraBiscoito = this.quebraBiscoito.bind(this)
    this.frases = [
      'A persistência é o caminho do êxito.',
      'O que não provoca minha morte faz com que eu fique mais forte.',
      'No meio da dificuldade encontra-se a oportunidade.',
      'O sucesso é ir de fracasso em fracasso sem perder entusiasmo.',
      'Um bom começo é a metade.',
      'Faço da dificuldade a minha motivação.',
      'Motivação é a impulsão para realizações de sonhos'
    ]
  }
  quebraBiscoito(){
    let numAleatorio = Math.floor(Math.random() * this.frases.length)
    this.setState({
      textoFrase: ' " ' +this.frases[numAleatorio]+ ' "',
      img: require('./src/biscoitoAberto.png')
    })
  }

    render(){
      return(
        <View style={style.container} >
          <Image style={style.img}
              source={this.state.img}
           />
           <Text style={style.textoFrase}>{this.state.textoFrase}</Text>

           <TouchableOpacity style={style.botao} onPress={this.quebraBiscoito}>
             <View style={style.btnArea}>
               <Text style={style.btnTexto}>Quebrar Biscoito</Text>
             </View>
           </TouchableOpacity>
          
          </View>
      )
    }
}
const style = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width: 250,
    height: 250
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})
export default App;