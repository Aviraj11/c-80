import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity, TextInput } from 'react-native';

export default class ExchangeScreen extends React.Component {

        constructor(){
          super();
          this.state ={
            userId : firebase.auth().currentUser.email,
            itemName:"",
            description:""
          }
        }

    additem =(itemName, description)=>{
        var userId = this.state.userId
        var randomRequestId = this.createUniqueId()
        db.collection('requested_items').add({
            "item_name": itemName,
            "description": description,
            "user_id": userId
        })
    
        this.setState({
            itemName :'',
            description : ''
        })
      }

    render() {
        return(
            <View> 
                <View style={{flex:1}}>
                    <KeyboardAvoidingView style={styles.keyBoardStyle}>
                    <TextInput
                        style ={styles.formTextInput}
                        placeholder={"Item Name"}
                        onChangeText={(text)=>{
                            this.setState({
                                itemName: text
                            })
                        }}
                    />
                    <TextInput
                        style ={[styles.formTextInput,{height:300}]}
                        multiline
                        numberOfLines ={8}
                        placeholder={"Description"}
                        onChangeText ={(text)=>{
                            this.setState({
                               description: text
                            })
                        }}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>{this.additem()}}
                        >
                        <Text>Add Item</Text>
                    </TouchableOpacity>
                    </KeyboardAvoidingView>
        </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )
  