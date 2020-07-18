import React,{useState,useEffect,useCallback,useMemo} from 'react'
import {
    Container,
    Header,
    Content,
    Left,
    Body,
    Icon,
    ListItem,
    Thumbnail,
    Item,
    Input,
  } from 'native-base';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    ActivityIndicator,
    Image,
    ScrollView
     } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
// import { SearchBar } from 'react-native-elements';
import Colors from '../constants/colors';
import axios from 'axios';

let movieArray = require('../list.json');

export default function Movies({navigation}) {
    const [loading,setloading]   = useState(true)
    const [pubArray,setpubArray] = useState(movieArray)   
    const [filterMov,setFilterMov] = useState(movieArray)
    // const [publist,setPublist]      = useState(null)
    const conArray = ['merchent1',
                        'merchent2',
                        'merchent3',
                        'merchent4',
                        'merchent5',
                        'merchent6',]
    const images   =  ['../src/images/images.jpeg',
                       '../src/images/elon.jpg',
                       '../src/images/delivery-man.png'] // just layout,delete after

    
    const [nowcolor ,setpubColor] = useState('#17baa1')
    const [schcolor,setconColor] = useState('#fff')
    const [published, setPublished]  = useState('published')
    const [confirmed,setConfirmed] = useState('confirmed')
    
    
    const publist = filterMov.map((todo,index) => 
                                <TouchableOpacity style={{
                                    flex:1,
                                    flexDirection:'row',
                                    backgroundColor:'#fff',
                                    alignItems:'center',
                                    borderRadius:1,
                                    // borderWidth:1.5,
                                    borderColor:'#17baa1',
                                    height:130,
                                    padding:10,
                                    width:'100%',
                                    marginTop:20,
                                    }}
                                    onPress={()=>{navigation.navigate('Check',{price: todo.price})}}> 
                                    <Thumbnail 
                                       style={{width:80,
                                                height:80,
                                                marginLeft:2,
                                                borderRadius:10,
                                                backgroundColor:'#fff'}}
                                       source={{uri: todo.image}}
                                        />
                                    
                                    <View style={{alignItems:'flex-end',marginTop:2,}}>
                                        <View style={{flexDirection:'row',alignItems:'center'}}>
                                            <View style={{marginLeft:5}}>
                                                 <Text style={{marginRight:80,fontSize:30}}>{todo.name}</Text>
                                            </View>
                                            <View style={{alignItems:'flex-end',marginRight:5}}>
                                                <Text 
                                                    style={{color:'#000'}}>PRICE: {todo.price}
                                                </Text>
                                                <Text style={{}}>IMDB: {todo.rating}</Text>
                                            </View>
                                        </View>
                                        <Text style={{marginLeft:157,color:Colors.bluegray}}>
                                        </Text>
                                        <View style={{
                                              borderBottomWidth:1,
                                              width:220,
                                              marginRight:10}}>
                                        </View>
                                        <View style={{marginRight:140}}>
                                            <Text 
                                                style={{color:Colors.bluegray,fontSize:12}}>Release:{todo.Release}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>)

    const [merchent, setMerchent] = useState(publist)
    // console.log(publist);
    const conlist = filterMov.map((todo,index) => 
                                <TouchableOpacity style={{
                                    flex:1,
                                    flexDirection:'row',
                                    backgroundColor:'#fff',
                                    alignItems:'center',
                                    borderWidth:1.5,
                                    borderRadius:2,
                                    height:130,
                                    padding:10,
                                    width:'100%',
                                    marginTop:20,
                                    }}
                                    onPress={()=>{navigation.navigate('Check',{price: 220})}}> 
                                
                                    <Image
                                        source={{uri : todo.image}} 
                                        style={{width:80,
                                                height:80,
                                                marginLeft:2,
                                                borderRadius:10,
                                                backgroundColor:'#fff'}}
                                    />
                                    <View style={{alignItems:'flex-end',marginTop:2,}}>
                                        <View style={{
                                              flexDirection:'row',
                                              alignItems:'center',
                                              }}>
                                            <View style={{marginLeft:5}}>
                                                <Text style={{fontSize:30,marginRight:80}}>{todo.name}</Text>
                                            </View>
                                            <View style={{marginRight:20,alignItems:'flex-end'}}>
                                                <Text 
                                                    key={index}
                                                    style={{color:'#000'}}>PRICE: {todo.price}
                                                </Text>
                                                <Text style={{}}>IMDB: {todo.rating}</Text>
                                            </View>
                                        </View>
                                        <View style={{
                                              borderBottomWidth:1,
                                              width:220,
                                              borderColor :'#000',
                                              marginRight:30}}>
                                        </View>
                                        <View style={{marginRight:150}}>
                                            <Text 
                                                key={index}
                                                style={{color:'#000',fontSize:12}}>Release: {todo.Release}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>)
    
    

    const PublishedHandler = () => {
        setMerchent(publist)
        setpubColor('#17baa1')
        setconColor('#fff')
    }
    const ConfirmedHandler = () => {
        setMerchent(conlist)
        setconColor('#17baa1')
        setpubColor('#fff')
    }
    
    const searchMovie = (text) => {
        
        setFilterMov(pubArray.filter(item => item.name.toLowerCase().includes(text.toLowerCase())))
    }
    
    useMemo(() => {filterMov})

    useEffect(() => {
        setTimeout(() => {
            setloading(false);
            
        }, 1000);
        
        filterMov
        // setMerchent(publist)
      }, ); 

    
    if (loading) {
        return <View style={styles.container}>
                  <ActivityIndicator size="large" color="#0000ff" />
               </View>;
      }
    else {
        
        return (
            <ScrollView>
    
                <View style={{flex:1,backgroundColor:'#000'}}>
                        <Header searchBar rounded>
                        <Item>
                            <Icon name="ios-search" />
                            <Input
                            placeholder="Search"
                            onChangeText={text => searchMovie(text)}
                            />
                        </Item>
                        </Header>
                        <View style={{
                            flex:1,
                            marginTop:20,
                            flexDirection:'row',
                            
                            }}>
                                <TouchableOpacity style={{
                                    justifyContent:'center',
                                    alignItems:'center',
                                    height:40,
                                    width: '50%',
                                    }}
                                    onPress={()=>{PublishedHandler()}}>
                                    <Text style={{
                                        fontSize:17,
                                        color:nowcolor,
                                            }}>
                                        ACTIONS
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    justifyContent:'center',
                                    alignItems:'center',
                                    height:40,
                                    width: '50%',
                                    }}
                                    onPress={()=>{ConfirmedHandler()}}>
                                    <Text style={{
                                        fontSize:17,
                                        color:schcolor,
                                            }}>
                                        THRILLERS
                                    </Text>
                                </TouchableOpacity>
                        </View>
                        <View style={{
                            // borderWidth:0.3,
                            flex:1,
                            flexDirection:'row',
                            justifyContent:'space-evenly',
                            
                            }}>
                            <View style={{
                                        borderColor:nowcolor,
                                        borderBottomWidth:2,
                                        height:10,
                                        width: 100,
                                        marginRight:20
                                        }}>
                            </View>
                            <View style={{
                                        borderColor:schcolor,
                                        borderBottomWidth:2,
                                        height:10,
                                        width: 100,
                                        marginStart:20
                                        }}>
                            </View>
                        </View>
                        <View style={{padding:10,}}>
                            {merchent}
                        </View>
                        
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    }
})






{/* <SearchBar
    inputContainerStyle={{
            backgroundColor:'white',
            width:250,
            height:30}}
    containerStyle={{
        backgroundColor: 'white',
        justifyContent:'center',
        
    }}
    placeholder="Search Here..."
    onChangeText={updateSearch}
    value={search}
/> */}