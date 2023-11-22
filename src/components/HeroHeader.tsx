'use client';

import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Image,
} from '@chakra-ui/react';
import BG from '../assets/bg.jpg';
import Logo from '../assets/logo2.png';

const HeroHeader = () => {
  return (
    <Flex
      w={'full'}
      h={'20vh'}
      backgroundImage={BG}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      borderBottom='4px'
      borderBottomColor='black'
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Image src={Logo}></Image>
          {/* <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor
          </Text> */}
        </Stack>
      </VStack>
    </Flex>
  );
};

export default HeroHeader;
