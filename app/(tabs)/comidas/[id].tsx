import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Image } from 'expo-image';
import { useSegments, useLocalSearchParams } from 'expo-router';

export default function Comidas() {

  const params = useLocalSearchParams();
  const [food, setFood] = useState<any>({});
  useEffect(() => {
    fetch(`https://shake-s-peare.onrender.com/food/${params.id}`)
      .then(res => res.json())
      // .then(console.log)
      .then(data => setFood(data))
      .catch(console.error)
  }, []);

  return (
    <View style={styles.body}>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>{food.name}</Text>
      </View>
      <View style={styles.containerImgComida}>
        <Image
          source={food.image}
          style={styles.imgsComida} />
      </View>
      <View style={styles.containerPreco}>
        <Text style={styles.preco}>R${food.price}</Text>
      </View>
      <View style={styles.containerTipo}>
        <Text style={styles.tipo}>{food.type}</Text>
      </View>
      <View>
        <Text style={styles.desc}>{food.description}</Text>
      </View>
      {/* {food.alergenics.map((alergenic: String, i: any) => (
        <View key={i}>
          <Text>{alergenic}</Text>
        </View>
      ))} */}
    </View>
  );
}

const styles = StyleSheet.create({

  body: {
    backgroundColor: '#F6CABA'
  },

  containerImgComida: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    height: 300
  },

  imgsComida: {
    height: 200,
    width: 200,
    borderRadius: 5
  },

  containerTitulo:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  
  titulo: {
    backgroundColor: '#DB7093',
    borderRadius: 5,
    width: 100,
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },

  containerPreco: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  preco: {
    backgroundColor: '#DB7093',
    borderRadius: 5,
    width: 100,
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },

  containerTipo:{
    justifyContent: 'center',
    alignItems: 'center'
  },

  tipo:{
    backgroundColor: '#DB7093',
    borderRadius: 5,
    width: 100,
    fontSize: 20,
    color: 'white',
    marginTop: 15,
    textAlign: 'center'
  },

  desc: {
    marginTop: 15,
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 400
  }
});