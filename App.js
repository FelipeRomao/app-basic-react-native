import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, Alert } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {consumido : 0, status : 'Ruim', porcentagem : '0%'};

    this.beberCopoAgua = this.beberCopoAgua.bind(this);
    this.atualizar = this.atualizar.bind(this);

    this.limparDados = this.limparDados.bind(this);
  }

  atualizar() {
    let s = this.state;
    s.porcentagem = Math.floor(((s.consumido / 2000) * 100)); 

    if(s.porcentagem >= 100) {
      s.status = 'Bom'

      if(s.porcentagem >= 200) {
        s.status='Excelente'
      }

    } else {
      s.status = 'Ruim'
    }

    if(s.porcentagem == 100) {
      Alert.alert('Parabéns!!! Você cumpriu a meta de beber 2L de água.');
    }

    s.porcentagem +='%';
    this.setState(s);
  }

  beberCopoAgua() {
    let s = this.state;
    s.consumido += 200;
    
    this.setState(s);
    this.atualizar();

  }

  limparDados() {
    let s = this.state;
    s.consumido = 0
    s.status = 'Ruim'
    s.porcentagem = '0%'
    
    this.setState(s);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./images/waterbg.png')} style={styles.bgImage}>
            <View style={styles.infoArea}>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Meta</Text>
                <Text style={styles.areaTexto}>2000ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Consumido</Text>
                <Text style={styles.areaTexto}>{this.state.consumido}ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Status</Text>
                <Text style={styles.areaTexto}>{this.state.status}</Text>
              </View>
            </View>

            <View style={styles.areaPorcentagem}>
              <Text style={styles.areaPorcentagemTexto}>{this.state.porcentagem}</Text>
            </View>
            
            <View style={styles.btnBeberAgua}>
              <Button title='BEBER 200ml' onPress={this.beberCopoAgua}  />
            </View>

            <View style={styles.btnBeberAgua}>
              <Button title='COMEÇAR TUDO DE NOVO' onPress={this.limparDados}  />
            </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop : 20,
  },

  bgImage : {
    flex : 1,
    width : null,
  },  

  infoArea : {
    flex : 1,
    flexDirection : 'row',
    marginTop : 50,
  },

  area : {
    flex : 1,
    alignItems : 'center',
  },

  areaTitulo : {
    fontSize : 18,
    color : '#45b2fc',
    fontWeight : 'bold'
  },

  areaTexto : {
    fontSize: 13,
    color : '#2b4274'
  },

  areaPorcentagem : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  },

  areaPorcentagemTexto : {
    fontSize : 90,
    color : '#ffffff',
    fontWeight : 'bold',
    backgroundColor : 'transparent'
  },

  btnBeberAgua : {
    marginBottom : 90,
    alignItems : 'center'
  }
});
