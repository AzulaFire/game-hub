'use client';
import heart from '../assets/heart.png';
import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { Image, Text, HStack } from '@chakra-ui/react';

const EmojiDetails = () => {
  return (
    <HStack marginLeft={5}>
      <Image src={heart} boxSize='20px' />;<Text>Exceptional</Text>
      <Image src={bullsEye} boxSize='30px' />;<Text>Recommended</Text>
      <Image src={thumbsUp} boxSize='20px' />;<Text>Good</Text>
      <Image src={meh} boxSize='20px' />;<Text>Meh</Text>
    </HStack>
  );
};

export default EmojiDetails;
