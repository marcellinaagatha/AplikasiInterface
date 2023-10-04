import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Koin from '../../../assets/home.png'

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Homepage':
      return focus ?  <Image source={Koin} style={{width: 24, height: 24}} /> : <Image source={Koin} style={{width: 24, height: 24}} />;
    case 'Order':
      return focus ?  <Image source={Koin} style={{width: 24, height: 24}} /> : <Image source={Koin} style={{width: 24, height: 24}} />;
    case 'Profile':
      return focus ?  <Image source={Koin} style={{width: 24, height: 24}} /> : <Image source={Koin} style={{width: 24, height: 24}} />;
    default:
      return <Image source={Koin} style={{width: 24, height: 24}} />;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 13,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
  },
});
