import React from 'react';
import heart from '../assets/heart.png';
import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    2: { src: meh, alt: 'meh', boxSize: '20px' },
    3: { src: thumbsUp, alt: 'good', boxSize: '20px' },
    4: { src: bullsEye, alt: 'recommended', boxSize: '30px' },
    5: { src: heart, alt: 'exceptional', boxSize: '20px' },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
