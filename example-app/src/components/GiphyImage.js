import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('@expo/snack-static/react-native-logo.png')}
      />
      <Image
        style={styles.tinyLogo}
        source="/logo192.png"
      />
      <Image
        style={styles.logo}
        source={{
          uri: 'https://media.giphy.com/media/nJ6yoH4nBNCBa/giphy.gif',
        }}
      />
    </View>
  );
}

export default DisplayAnImage;