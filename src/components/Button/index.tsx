import React, { useState } from 'react';
import { Text, Image, View, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles'
import { LinearGradient, LinearGradientPoint } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

type Props = {
  title: string,
  onPress: () => void | Promise<void>;
}

export function Button({ title, onPress }: Props) {
  const [isLoading, setLoader] = useState(false);

  async function waitSec() {
    setTimeout('', 5000);
  }

  async function onButtonPressed() {
    setLoader(true);
    await onPress!();
    setLoader(false);
  }

  return (
    <TouchableOpacity
      onPress={onButtonPressed}
    >
      <LinearGradient
        colors={[theme.colors.pink, theme.colors.purple]}
        start={{ x: .3, y: 0 }}

        end={{ x: 1, y: 0 }}
        style={styles.container}
      >

        <Text style={styles.title}>
          {!isLoading ?
            title
            :
            <ActivityIndicator size={'large'} color="#FFFFFF" />
          }
        </Text>


      </LinearGradient>
    </TouchableOpacity>
  );
}