import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { Video } from '../../../assets';
import Gap from '../Gap';

const CardVideo = () => {
  return (
    <ScrollView horizontal style={{ marginHorizontal: 10, marginTop: 10 }}>
      <Image source={Video} style={{ width: 130, height: 200 }} />
      <Gap width={10}/>
      <Image source={Video} style={{ width: 130, height: 200 }} />
      <Gap width={10}/>
      <Image source={Video} style={{ width: 130, height: 200 }} />
      <Gap width={10}/>
      <Image source={Video} style={{ width: 130, height: 200 }} />
      <Gap width={10}/>
      <Image source={Video} style={{ width: 130, height: 200 }} />
    </ScrollView>
  );
};

export default CardVideo;

const styles = StyleSheet.create({});
