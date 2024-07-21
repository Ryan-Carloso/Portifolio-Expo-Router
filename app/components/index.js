import React from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Components() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Components</Text>
      <Link href="/components/buttonStyle" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ButtonStyle</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/components/Carousel" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Carousel</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/components/Carousel3D" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Carousel3D</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/components/MenuNav" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>MenuNav</Text>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    marginBottom: 10,
    width: '70%',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontFamily: "Open Sans",
    fontWeight: '800',
  },
});