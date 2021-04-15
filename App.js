import * as React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import {WebView} from 'react-native-webview';

function Tela01(){
  return (
    <WebView style={{flex:1, marginTop:40}} javaScriptEnabled={true} source={{uri: 'https://www.youtube.com/watch?v=SEq0gIgH554'}}></WebView>
  );
}

function Tela02(){
  return (
    <WebView style={{flex:1, marginTop:40}} javaScriptEnabled={true}
          source={{html:"<html><body><iframe marginTop='40' width='1000' height='700' src='https://www.youtube.com/embed/LyQH_jgA4q4' frameborder='0' allowfullscreen> </iframe></body></html>"}}
      ></WebView>
  );
}

function Custon ({...props}){
  return(
      <SafeAreaView >
          <Text style={styles.user}>Clica Rede</Text>
          <Image
              source={require("./assets/compliance.png")}
              styles={styles.imagens}
          >              
          </Image>
          <DrawerItemList {...props}></DrawerItemList>
      </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer (){
  return (
    <Drawer.Navigator 
          openByDefault='true' 
          overlayColor='#0000FF' 
          drawerPosition='left'
          drawerStyle={{backgroundColor: '#87CEFA', width:300}}
          drawerContent={props => <Custon{...props}/>}
          >
      
      <Drawer.Screen 
          name='Página do Youtube' 
          component={Tela01}
          options={{drawerIcon:({tintColor}) => (
            <Image
                source={require("./assets/matlab.png")}
                resizeMode="contain"
                style={{width:20, height:20, tintColor: tintColor}}
            ></Image>

          )}}          
          
      ></Drawer.Screen>
      
      <Drawer.Screen 
          name='Somente o Vídeo' 
          component={Tela02}
          options={{drawerIcon:({tintColor}) => (
            <Image
                source={require("./assets/nodefolder.png")}
                resizeMode="contain"
                style={{width:20, height:20, tintColor: tintColor}}
            ></Image>
            )}}
      ></Drawer.Screen>
      
      
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
        <MyDrawer></MyDrawer>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagens:{
    width:55,
    height:55,
    marginTop:15,
    marginBottom:15,
    marginLeft:15
  },
  user:{
    marginTop:10,
    fontSize:30,
    marginLeft:15,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
