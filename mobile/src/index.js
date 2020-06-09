import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, StatusBar } from 'react-native';

import api from './services/api';

// Não possuem valor semântico (significado)
// Não possuem estilização própria
// Todos componentes possuem por padrão "display: flex"

// View: div, footer, header, main, aside, section
// Text: p, span, strong, h1, h2, h3

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log('usou efeitos');
    api.get('projects').then(response => {
      console.log(response.data);
      setProjects(response.data);
    })
  }, []);

  return(
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <FlatList
        style={styles.container}
        data={projects}
        keyExtractor = {project => project.id}
        renderItem={({ item: project }) => (
          <Text style={styles.project} key={project.id}>{project.title}</Text>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },
  project: {
    color: '#fff',
    fontSize: 130,
    fontWeight: 'bold',
  }
});