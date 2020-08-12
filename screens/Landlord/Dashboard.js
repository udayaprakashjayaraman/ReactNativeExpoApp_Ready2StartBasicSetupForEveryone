import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Header from '../JsHelper/Header';
import {Header, Left, Icon} from 'native-base';


export default function App(navigation) {
  return (
    <View>
      <Header style={{backgroundColor:'#01415a'}}>
        <Left>
            <Icon style={{color:'#ec6c07'}} name="menu" onPress={()=>this.props.navigation.openDrawer()}/>
        </Left>
        <View style={{flex:1, alignItems:'center', justifyContent:'center', paddingRight:"20%"}}>
            <Text style={{color:'#ec6c07'}}>DashBoard</Text>
        </View>
    </Header>
      <Text  style={styles.container}>Landlord dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
