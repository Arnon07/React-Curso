import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Picker
  } from 'react-native';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      pizza:0,
      pizzas: [
        {key: 1, nome: 'Strogonoff', valor: 35.90},
        {key: 1, nome: 'Brigadeiro', valor: 20.90},
        {key: 1, nome: 'Calabresa', valor: 18.00},
      ]
    }
  }
  render(){
    let pizzaItem = this.state.pizzas.map((v, k) => {
     return <Picker.Item key ={k} value={k} label={v.nome}/>
    })
    return(
      <View style={styles.container}>
          <Text style={styles.logo}>Menu Pizza</Text>

          <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, itemIndex) => this.setState({pizza: itemValue})}
          >
            {pizzaItem}
          </Picker>

          <Text style={styles.pizzas}>
            você escolheu: {this.state.pizzas[this.state.pizza].nome}
          </Text>
          <Text style={styles.pizzas}>
            R$: {this.state.pizzas[this.state.pizza].valor.toFixed(2)}
          </Text>
            
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 15
  },
  logo:{
    textAlign: 'center',
    fontSize: 25
  },
  pizzas:{
    marginTop:15,
    backgroundColor: '#ddd',
    fontSize: 25,
    textAlign: 'center'
  }
});

export default App;
