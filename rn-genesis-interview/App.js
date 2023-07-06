import {useState, useEffect} from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import useFetch from './API/useFetch'

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const FetchData = async () => {
      const [res, isLoading, errorState] = useFetch();
      setData(res)
      if (!isLoading && !errorState) {
        setData(res)
      }
    }
    FetchData();
  }, [])
  console.log("data", data)
  
  const renderItems = ({item}) =>{
    return (
      <View>
        <Text>{item.id}</Text>
        <Text>{item.name}</Text>
        <Text>{item.username}</Text>
        <Text>{item.email}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>EDIT</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
      renderItem={renderItems}
      keyExtractor={item => item.id.toString()}
      data={data}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }, 
  button: {
    length: 50,
    width: 75,
  },
  btnText: {
    backgroundColor:'rgb(150,255,255)',
    textAlign: 'center',
    paddingBottom:2,
    paddingTop:2,
    borderRadius:20
  }
});
