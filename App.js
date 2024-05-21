import React, { Component } from 'react'; 

import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'; 

import api from './src/ap/api';

import Products from './src/products/products';

 
 
let adriano;
class App extends Component { 

 
 

  constructor(props){ 

    super(props); 

    this.state = { 

      products: [], 

      loading: true 

    }; 

  } 

 
 

  async componentDidMount(){ 

    const response = await api.get('/v3/b/663bffe4ad19ca34f8667cc0'); 
    console.log(response.data.record.products);
    this.setState({ 

      products: response.data.record.products, 

      loading: false 

    }); 

  } 

 
 

  render() { 

 
 

    if(this.state.loading){ 

      return( 

        <View style={{alignItems: 'center', justifyContent: 'center', flex:1}}> 

          <ActivityIndicator color="#09A6FF" size={40}/> 

        </View> 

      ) 

    }else{ 

      return( 

        <View style={styles.container}> 

   

          <FlatList 

          data={this.state.products} 

          keyExtractor={item => item.id.toString() } 

          renderItem={ ({item}) => <Products data={item} /> } 

          /> 

         </View> 

      ) 

    } 

  } 

} 

 
 

const styles = StyleSheet.create({ 

  container:{ 

    flex:1, 

  } 

}); 

 
 

export default App; 
