import {useThemeColor} from 'helpers/hooks/useThemeColor';
import {textDesignPropToStyle} from 'helpers/utils/design.utils';
import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import {
  TextDesignProps,
  TypographyBaseSize,
  TypographyVariants,
} from 'types/design';

import {FontWeightType, typography} from 'assets/typography';
import {ColorType} from 'assets/colors';

interface Props extends TextDesignProps, TextProps {
  variant?: TypographyVariants;
  size?: TypographyBaseSize;
  fontWeight?: FontWeightType;
}

export default function Text({
  children,
  color = 'neutral.900',
  style,
  variant = 'body',
  size = 'lg',
  fontWeight,
  ...rest
}: Props) {
  const [textColor] = useThemeColor([color as ColorType]);
  const propStyle = textDesignPropToStyle(rest);

  return (
    <RNText
      {...rest}
      style={[
        propStyle,
        typography[variant][size],
        {color: textColor, fontWeight: fontWeight},
        style,
      ]}>
      {children}
    </RNText>
  );
}
