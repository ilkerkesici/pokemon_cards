import {designPropToStyle} from 'helpers/utils/design.utils';
import React, {useState} from 'react';
import {
  Dimensions,
  ImageProps,
  ImageSourcePropType,
  ImageURISource,
  Image as RNImage,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {DesignProps} from 'types/design';

const {width} = Dimensions.get('window');

interface Props extends ImageProps, DesignProps {
  source: {uri: string} | ImageSourcePropType;
  fullWidthContain?: boolean;
  resizeMode?: 'contain' | 'cover';
}

export default function Image(props: Props) {
  const [dimensions, setDimensions] = useState({width: 0, height: 0});
  const propStyle = designPropToStyle(props);
  const style: any = {...propStyle, ...(props.style as any)};

  const RATIO =
    dimensions.width && dimensions.height
      ? dimensions.width / dimensions.height
      : 1;
  const FULL_WIDTH = (props.width as number) || width;
  const HEIGHT = FULL_WIDTH / RATIO;

  const fullWidthStyle = {width: FULL_WIDTH, height: HEIGHT};

  if (!(props.source as ImageURISource).uri) {
    return <RNImage style={style} {...props} />;
  }

  return (
    <FastImage
      style={[
        propStyle as any,
        props.style as any,
        props.fullWidthContain ? fullWidthStyle : {},
      ]}
      source={{
        uri: (props.source as ImageURISource).uri,
        priority: FastImage.priority.normal,
      }}
      onLoad={e => {
        setDimensions({
          width: e.nativeEvent.width,
          height: e.nativeEvent.height,
        });
      }}
      resizeMode={props.resizeMode}
    />
  );
}
