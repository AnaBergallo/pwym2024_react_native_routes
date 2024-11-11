import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';

const HomeScreen = () => {

    const handleProfile = () => {
        router.navigate('/profile');
    }


  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Home Screen</Text>
      
      <Link 
        href={'/profile'} 
        style={[styles.navigationButton]}>
          Go to Profile using Link
      </Link>
      
      <Pressable onPress={handleProfile}>

        <Text style={styles.navigationButton}>
          Go to Profile using router Navigation
        </Text>

      </Pressable>
    
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray'
  },
  navigationButton: {
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    backgroundColor: 'gray',
    padding: 8,
    borderRadius: 10,
    overflow: 'hidden'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    padding: 20,
    backgroundColor: 'black',
    borderColor: 'red',
    borderWidth: 4,
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden'
  }
});