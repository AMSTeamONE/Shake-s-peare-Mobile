import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Image } from 'expo-image';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const [books, setBooks] = useState<Array<any>>([]);
  useEffect(() => {
    fetch("https://shake-s-peare.onrender.com/books")
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])

  const [foods, setFoods] = useState<Array<any>>([]);
  useEffect(() => {
    fetch("https://shake-s-peare.onrender.com/food")
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
            <Link href={`/livros/${book._id}`} key={book._id}>
              <Image
                source={book.cover}
                style={styles.imgsLivros}
              />
            </Link>
          ))}
        </View>
      </View>

      <View style={styles.containercafe2}>
        <View style={styles.containercafe}>
          {foods.map(food => (
            <View style={styles.containercafe2}>
              <Link href={`/comidas/${food._id}`} key={food._id}>
              <Image
                source={food.image}
                style={styles.imgsCafe} />
              </Link>
              <Text>{food.name}</Text>
            </View>
          ))}
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#F6CABA'
  },

  containerimg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
    marginBottom: 150,
    paddingLeft: 10
  },

  mainImage: {
    height: 200,
    width: 400
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
    width: 70,
    borderRadius: 5
  },

  containercafe2: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  containercafe: {
    flexDirection: "row",
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
    height: 100,
    width: 100,
    borderRadius: 5
  },

  tituloCafe: {
    fontSize: 10
  },
});