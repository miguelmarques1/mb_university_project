import React from 'react';
import { Text, Image, View, ImageBackground, TouchableHighlight } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles'
import { LinearGradient, LinearGradientPoint } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

type Props = {
  title: string,
  onPress?: () => void;
}

export function Button({ title, onPress }: Props) {
  return (
    <TouchableHighlight
      onPress={onPress}
    >
      <LinearGradient
        colors={[theme.colors.pink, theme.colors.purple]}
        start={{x: .3, y: 0}}
        
        end={{x: 1, y: 0}}
        style={styles.container}
      >
        <Text style={styles.title}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableHighlight>
  );
}