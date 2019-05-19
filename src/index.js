import './config/ReactotronConfig';
import './config/DevToolsConfig';

import React, { Component } from 'react';
import {
  Platform, StyleSheet, ScrollView, View, Text,
} from 'react-native';

import Post from './Post';

const white = '#FFF';
const primary = '#EE7777';
const title = '#333';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
  },

  header: {
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
    // No iOS precisamos aplicar 20px de padding superior
    // já que a Status Bar não joga o conteúdo do App
    // pra baixo automaticamente
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20,
      },
      android: {
        height: 56,
        paddingTop: 0,
      },
    }),
  },

  headerTitle: {
    color: title,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Isaac Meira',
        content: 'Aplicação básica para entender os conceitos de RN',
      },
      {
        id: 2,
        title: 'O Que foi visto ?',
        author: 'Isaac Meira',
        content:
          'Foi visto conceitos do react native, bem como revisão de vários conceitos do ReactJS',
      },
      {
        id: 3,
        title: 'Bootcamp Rocketseat',
        author: 'Isaac Meira',
        content:
          'Aplicação criada como desafio do módulo 1 de ReactNative no bootcamp da RocketSeat',
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>GoNative App</Text>
        </View>
        <ScrollView>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
