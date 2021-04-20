import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Alert } from 'react-native';

export default class SignupLoginScreen extends React.Component {

    constructor(){
        super();
        this.state={
          emailId:'',
          password:'',
        }
      }

      userSignUp = (emailId, password) =>{
          firebase.auth().createUserWithEmailAndPassword(emailId, password)
          .then(()=>{
            db.collection('users').add({
              email_id:this.state.emailId,
              password: this.state.password
            })
            return  Alert.alert(
                 'User Successfully Signed Up'
             );
          })
      }

      userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        return Alert.alert(
            'User Logged In Successfully'
        );
      }

    render() {
        return(
            <View styels = {styles.container}> 
                <TextInput
          placeholder ={"Email"}
          keyboardType ={'email-address'}
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        /><TextInput
          placeholder ={"Password"}
          secureTextEntry = {true}
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />

        <TouchableOpacity styles = {styles.button}> 
            <Text>Login</Text> 
        </TouchableOpacity>

        <TouchableOpacity styles = {styles.button}
        onPress = {() => {
            this.userSignUp(this.state.emailId, this.state.password)
        }}
        > 
            <Text> Sign Up </Text>
        </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#F8BE85',
     alignItems: 'center',
     justifyContent: 'center'
   },
   button:{
     width:300,
     height:50,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:25,
     backgroundColor:"#ff9800",
     shadowColor: "#000",
     shadowOffset: {
        width: 0,
        height: 8,
     },
     shadowOpacity: 0.30,
     shadowRadius: 10.32,
     elevation: 16,
     padding: 10
   },
   buttonText:{
     color:'#ffff',
     fontWeight:'200',
     fontSize:20
   }
  })
  