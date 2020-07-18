import React,{useState,useEffect} from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    ActivityIndicator,
    Image,
    ScrollView,
    Button
     } from 'react-native'
import Card from '../components/Card';

export default function Check({route,navigation}) {
    const {price} = route.params;

    const [loading,  setloading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 1000);

      }, []); 
    if (loading) {
    return <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>;
    }
    else {
    return (
        <View style={{flex:1,padding:10,backgroundColor:'#34495E'}}>
            <Card style={styles.summaryContainer}>

                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center'}}>
                    <View style={{
                        flexDirection:"row",
                        alignItems:'center',
                        width:150}}>
                        <Image
                            source={require('../src/images/profit.png')} 
                            style={{width:50,
                                    height:50,
                                    marginLeft:15,
                                    borderRadius:40,
                                    backgroundColor:'#fff'}}
                        />
                    </View>
                    <View>
                        <Text>Date:_______</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    marginVertical:40,
                    justifyContent:'center'}}
                    > 
                    <Image
                        source={require('../src/images/cash.png')} 
                        style={{width:30,
                                height:30,
                                marginLeft:15,
                                borderRadius:40,
                                backgroundColor:'#fff',
                                }}
                    />
                    <Text style={{
                        fontSize:43,
                        marginBottom:2,
                        color:'#17baa1'}}>{price}
                    </Text>
                </View>

            </Card>
            <TouchableOpacity style={{
                  width:100,
                  height:40,
                  justifyContent:'center',
                  alignItems:'center',
                  backgroundColor:'#000',
                  marginLeft:120,
                  marginTop:30,
                  }}>
                
                <Text style={{color:'#fff'}}>PAY NOW</Text>
            </TouchableOpacity>
        </View>
    )
}
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:10,
    }
})