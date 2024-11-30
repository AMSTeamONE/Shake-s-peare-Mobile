import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Image } from 'expo-image';
import { useSegments, useLocalSearchParams } from 'expo-router';

export default function Livros() {

    const params = useLocalSearchParams();
    const [book, setBook] = useState<any>({});
    useEffect(() => {
        fetch(`https://shake-s-peare.onrender.com/books/${params.id}`)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [])

    return (
        <View style={styles.body}>
            <View style={styles.containerLivro}>
                <Image
                    source={book.cover}
                    style={styles.imgsLivros}
                />
                <Text style={styles.autor}>{book.author}</Text>
                <Text style={styles.titulo}>{book.title}</Text>
                <Text style={styles.editoraLbl}>Páginas: {book.pages}</Text>
                <Text style={styles.data}>Data de Publicação: {new Date(book.dateOfPublishment).toLocaleDateString("pt-BR")}</Text>
                <View style={styles.containerEstrela}> 
                    <Image
                    source={require('@/assets/images/star.png')}
                    style={styles.imgEstrela}
                    />
                    <Text style={styles.estrelaLbl}>{book.rating}</Text>
                </View>
                <View style={styles.containerDesc}>
                    <Text style={styles.desc}>{book.description}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    body: {
        backgroundColor: '#F6CABA'
    },

    containerLivro: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        marginBottom: 500
    },

    imgsLivros: {
        height: 200,
        width: 140,
        marginBottom: 15,
        borderRadius: 5
    },

    titulo: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 10
    },

    autor: {
        fontSize: 10,
        color: '#808080',
        textAlign: 'center'
    },

    editoraLbl: {
        fontSize: 10,
        textAlign: 'center'
    },

    data: {
        fontSize: 10,
        textAlign: 'center',
        marginBottom: 10
    },

    containerDesc: {
        width: 350,
    },

    desc: {
        fontSize: 15
    },

    containerEstrela: {
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
        padding: 5,
        borderRadius: 10
    },

    imgEstrela: {
        height: 30,
        width: 30
    },

    estrelaLbl: {
        fontSize: 10,
        color: '#808080'
    }
});