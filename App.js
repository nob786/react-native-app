/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Platform,
  PixelRatio,
} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

const App = () => {
  return (
    <View style={[styles.border, styles.dark_bg]}>
      <Text>Venturenox</Text>
    </View>
  );
};

function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const styles = StyleSheet.create({
  dark_bg: {
    backgroundColor: '#121212',
  },
  white_text: {
    color: 'white',
  },
  border: {
    borderWidth: 2,
    borderColor: 'red',
  },
  medium_font: {
    fontSize: normalize(24),
  },
});
export default App;
