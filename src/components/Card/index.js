import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import OpsiMenu from '../OpsiMenu';
import {
  Game,
  LihatSemua,
  Local,
  Money,
  PayLater,
  ShoopeBarokah,
  ShoopeFood,
  ShoopeMall,
  ShoopePromo,
  Tagihan,
} from '../../../assets';
import Gap from '../Gap';

const Card = () => {
  return (
    <View style={styles.container}>
      <OpsiMenu
        style={styles.item}
        Gambar={Money}
        Title={'Gratis ongkir dan voucher'}
      />
      <Gap width={4} />
      <OpsiMenu
        style={styles.item}
        Gambar={Tagihan}
        Title={'Pulsa, tagihan dan tiket'}
      />
      <Gap width={4} />
      <OpsiMenu
        style={styles.item}
        Gambar={ShoopeMall}
        Title={'Shoope Mall Shooping'}
      />
      <Gap width={4} />
      <OpsiMenu
        style={styles.item}
        Gambar={PayLater}
        Title={'Shoope Pay sekitarmu'}
      />
      <Gap width={4} />
      <OpsiMenu
        style={styles.item}
        Gambar={ShoopeBarokah}
        Title={'Shoope Barokah Delivery'}
      />
      <Gap width={4} />
      <OpsiMenu
        style={styles.item}
        Gambar={Game}
        Title={'Shoope Games Top Up'}
      />
      <Gap width={4} />
      <OpsiMenu
        style={styles.item}
        Gambar={ShoopeFood}
        Title={'Shoope Food Delivery'}
      />
      <Gap width={4} />
      <OpsiMenu
        style={styles.item}
        Gambar={Local}
        Title={'Shoope Pilih Lokal'}
      />
      <Gap width={4} />
      <OpsiMenu
        style={styles.item}
        Gambar={PayLater}
        Title={'Shoope Pay Later'}
      />
      <Gap width={4} />
      <OpsiMenu
        style={styles.item}
        Gambar={LihatSemua}
        Title={'Lihat Semua Product'}
      />
      {/* Shoope Live */}
      <Image
        source={ShoopePromo}
        style={{
          height: 130,
          marginRight: 40,
        }}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 200,
    justifyContent: 'center',
  },
  item: {
    width: '20%',
  },
});
