import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Image, View } from 'react-native';
import { Iklan1, Iklan2, Iklan3 } from '../../../assets';

const Carrousel = () => {
  const [currentImage, setCurrentImage] = useState(Iklan1);
  const images = [Iklan1, Iklan2, Iklan3];
  const interval = 2000;

  useEffect(() => {
    const timer = setInterval(() => {
      const currentIndex = images.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[nextIndex]);
    }, interval);

    return () => clearInterval(timer);
  }, [currentImage, images, interval]);

  return (
    <View style={{ marginTop: 40 }}>
      <Image source={currentImage} style={styles.sliderImage} />
    </View>
  );
};

export default Carrousel;

const styles = StyleSheet.create({
  sliderImage: {
    height: 250,
    width: '100%',
  },
});
