import {useThemeColor} from 'helpers/hooks/useThemeColor';
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

interface Props {
  loading: boolean | null | undefined;
  testID?: string;
  size?: number | 'large' | 'small';
  fullScreen?: boolean;
}

export default function Spinner({
  loading = false,
  testID,
  size,
  fullScreen = true,
}: Props): JSX.Element | null {
  const [spinnerColor] = useThemeColor(['neutral.900']);
  return loading ? (
    <View style={fullScreen ? styles.containerAbsolute : styles.container}>
      <ActivityIndicator
        size={size || 'large'}
        testID={testID}
        color={spinnerColor}
      />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  containerAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999999,
  },
  container: {},
});
