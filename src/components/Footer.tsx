'use client';

import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import BG from '../assets/bg.jpg';

const Footer = () => {
  return (
    <Flex
      w={'full'}
      h={'20vh'}
      backgroundImage={BG}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      borderTop='4px'
      borderTopColor='black'
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}
          >
            Powered By:&nbsp;
            <Link href='https://rawg.io/' isExternal>
              RAWG <ExternalLinkIcon mx='1px' />
            </Link>
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Footer;
