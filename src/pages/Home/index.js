import { ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { Card, Gap, ShoopeLive, Slider } from '../../components';

const Homepage = () => {
  return (
    <ScrollView>
      <Slider />
      <Gap height={40}/>
      <Card/>
      <Gap height={110}/>
      <ShoopeLive/>
    </ScrollView>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
