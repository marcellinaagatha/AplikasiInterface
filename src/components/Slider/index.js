import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  Cart,
  Chat,
  Dompet,
  Garis,
  Iklan1,
  Iklan2,
  Iklan3,
  Koin,
  Transfer,
} from '../../../assets';
import Saldo from '../Saldo';
import DetailKoin from '../DetailKoin';
import SearchBar from '../SearchBar';
import Gap from '../Gap';
import { useNavigation } from '@react-navigation/native';
import CardIcon from '../CardIcon';
import Carrousel from '../Carrousel';

const Slider = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <ScrollView>
          <Carrousel />
        </ScrollView>
      </View>
      <View style={styles.paymentContainer}>
        <Saldo />
        <DetailKoin image={Dompet} desc={'Isi saldo'} saldo={'Rp.5.000'} />
        <Image source={Garis} style={styles.scan} />
        <DetailKoin image={Koin} desc={'Gratis koin 25k'} saldo={'Rp.5.000'} />
        <Image source={Garis} style={styles.scan} />
        <DetailKoin image={Transfer} desc={'Gratis'} saldo={'Transfer'} />
      </View>
      <View style={styles.topBar}>
        <SearchBar />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image source={Cart} style={styles.cart} />
          </TouchableOpacity>
          <Gap width={10} />
          <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
            <Image source={Chat} style={styles.cart} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    position: 'relative',
    height: 250,
    width: '100%',
    resizeMode: 'cover',
  },
  paymentContainer: {
    position: 'absolute',
    top: 220,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#d1d9e6',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  scan: {
    width: 30,
    height: 30,
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 35,
    zIndex: 1,
  },
  cart: {
    width: 25,
    height: 25,
  },
});
