import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Image } from 'expo-image';

export default function HomeScreen() {
  const [books, setBooks] = useState<Array<any>>([]);
  useEffect(() => {
    fetch("https://shake-s-peare.onrender.com/books")
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])

  const [foods, setFoods] = useState<Array<any>>([]);
  useEffect(() => {
    fetch("https://shake-s-peare.onrender.com/foods")
      .then(res => res.json())
      .then(data => setFoods(data))
  }, [])

  return (
    <View style={styles.body}>

      <View style={styles.containerimg}>
        <Image
          source={require('@/assets/images/imghome.png')}
          style={styles.mainImage}
        />
      </View>

      <View style={styles.containerlivros}>
        <View style={styles.containerlivros2}> 
        {books.map(book => (
          <Image
          source={book.cover}
          style={styles.imgsLivros}
          />
        ))}
        </View>
      </View>

      <View style={styles.containercafe2}>
        <View style={styles.containercafe}>
          <Image
            source={require('@/assets/images/imghome.png')
            }
            style={styles.imgsCafe}
          />
          <Text style={styles.tituloCafe}></Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: '#F6CABA'
  },

  containerimg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
    marginBottom: 150
  },

  mainImage: {
    borderRadius: 20,
    height: 200,
    width: 300
  },

  containerlivros: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerlivros2: {
    flexDirection: "row",
    borderRadius: 20,
    height: 200,
    width: 350,
    backgroundColor: '#DB7093',
    gap: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },

  imgsLivros: {
    height: 100,
    width: 70
  },

  containercafe2: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  containercafe: {
    flexDirection: "column",
    borderRadius: 20,
    height: 200,
    width: 350,
    backgroundColor: '#FFDEAD',
    gap: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imgsCafe: {
    height: 50,
    width: 50
  },

  tituloCafe: {
    fontSize: 10
  },
});