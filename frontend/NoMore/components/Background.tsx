import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Background: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/Addiction.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 50,
    opacity: 0.07,
    zIndex: -1,
  },
});

export default Background;