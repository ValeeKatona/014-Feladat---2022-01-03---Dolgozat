import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Button, TextInput, View, Text, StyleSheet, Image } from 'react-native';


export default class App extends Component
{
  constructor(props)
  { 
    super(props);
    this.state={Num1:0,Num2:0};
  }

  Sum=()=>
  {
    var N1=parseInt(this.state.Num1);
    var N2=parseInt(this.state.Num2);
    var N3=5;
    var N4=2;

    var R=(N3/N4)*N1*N2;
    alert(R);
  }
  render()
  {
    return(
      <View>
        <Image source={require('./pentagon.png')} style={{ width: 150, height: 150 }}/>
        <Text style={styles.center}>Pentagon terület kiszámítás:</Text>
        <TextInput style={{borderWidth:1, margin:10}} placeholder='S oldal' onChangeText={Num1=>this.setState({Num1})}></TextInput>
        <TextInput style={{borderWidth:1, margin:10}} placeholder='a oldal' onChangeText={Num2=>this.setState({Num2})}></TextInput>
        <Button title="Kiszámol" onPress={this.Sum}/>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Text style={styles.center}>Készítette: Katona Valentin</Text>
        <Text style={styles.center}>Osztály: Szoft II/N</Text>
        <Text style={styles.center}>Dátum: 2022.01.20</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    center:{
    textAlign: "center"
  }
});


