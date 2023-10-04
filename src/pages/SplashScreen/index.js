import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import Line from '../../../assets/LogoShoope.jpg';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Homepage');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={Line} style={styles.icon} />
    </View>
  );
};

export default SplashScreen;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fe5722',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: width * 0.6,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
