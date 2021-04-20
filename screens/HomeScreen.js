import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, FlatList,TouchableOpacity } from 'react-native';
import db from '../config'
import firebase from firebase

export default class HomeScreen extends React.Component {

    constructor(){
        super()
        this.state = {
          requestedItems : []
        }
    }

    getItems =()=>{
        this.requestRef = db.collection("requested_items")
        .onSnapshot((snapshot)=>{
          var getItemsList = snapshot.docs.map(document => document.data());
          this.setState({
             requestedItems: requestedItems
          });
        })
      }
    
      componentDidMount(){
        this.getItems()
      }
    
      keyExtractor = (item, index) => index.toString()

      renderItem = ( {item, i} ) =>{
        return (
          
        <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{item.item_name}</ListItem.Title>
              <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                <TouchableOpacity style={styles.button}>
                </TouchableOpacity>
            </ListItem.Content>
         </ListItem >
        )
      }

      render() {
        return(
            <View> 
                <View style={{flex:1}}>
                    {
                        this.state.requestedItems.length === 0
                        ?(
                        <View style={styles.subContainer}>
                            <Text style={{ fontSize: 20}}>Requested Items</Text>
                        </View>
                        )
                        :(
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={this.state.requestedItems}
                            renderItem={this.renderItem}
                        />
                        )
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    subContainer:{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       }
    }
  })
  