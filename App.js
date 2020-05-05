import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
  } from 'react-native';

class App extends Component{
  constructor(props){
        super(props)
        this.state ={
          numero: 0,
          botao: 'iniciar',
          ultimo: null
        }
        this.timer = null
        this.iniciar = this.iniciar.bind(this)
        this.parar = this.parar.bind(this)
  }

  iniciar(){
    if(this.timer != null){
      clearInterval(this.timer)
      this.timer = null
      this.setState({
        botao: 'Continuar'
      })
    }else{
      this.timer = setInterval(() => {
        this.setState({numero: this.state.numero + 0.1})
      }, 100)
      this.setState({
        botao: 'Parar'
      })
    }
   
  }

  parar(){
    if(this.timer != null){
      clearInterval(this.timer)
      this.timer = null
    }
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: 'Iniciar'
    })
  }

  render(){
    return(
      <View style={styles.container} > 
      
      <Image 
        source={require('./src/cronometro.png')}
        style={styles.cronometro}
      />

    <Text style={styles.timer}>{
      this.state.numero.toFixed(1)
    }</Text>
     
      <View style={styles.btnArea}>

            <TouchableOpacity style={styles.btn} onPress={this.iniciar}>
                   <Text style={styles.btnTexto}>{this.state.botao}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={this.parar}>
                  <Text style={styles.btnTexto}>Zerar</Text>
            </TouchableOpacity>
          
      </View>

              <View style={styles.ultima}>
                  <Text style={styles.tempo}>{
                  this.state.ultimo > 0 ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(2) + 's' : ' '
                  }</Text>
            </View>

      </View>    
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#00aeef'
  },
  timer:{
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
    },
    btnArea:{
      flexDirection: 'row',
      marginTop: 70,
      height: 40
    },
    btn:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
      height: 40,
      margin: 17,
      borderRadius: 9
    },
    btnTexto:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#00aeef'
    },
    ultima:{
      marginTop:40
    },
    tempo:{
      fontSize: 25,
      fontStyle: 'italic',
      color: '#FFF'
    }
});

export default App;