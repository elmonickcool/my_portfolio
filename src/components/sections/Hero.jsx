import LinkedinIcon from "../ui/LinkedinIcon";
import GithubIcon from "../ui/GithubIcon";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { useColorMode, Box, Flex, Center, VStack, Spacer, Stack, Text,Container } from "@chakra-ui/react";

const Hero = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.100', dark: 'gray.700' };
  return (
    <Box bg={bgColor[colorMode]} borderRadius='lg'>
      <Flex direction={['column', 'column', 'row']} align={['center', 'center', 'stretch']}>
        <Box p={5} ms={5}>
          <Center h="full">
            <VStack
              spacing={4}
              align={['center', 'center', 'stretch']}
            >
              <Box>
                <GithubIcon />
                <LinkedinIcon />
              </Box>
              <Box>
                <Text fontSize='4xl'>
                  Hello, I&apos;m <span className="font-bold">Elmo Nickol</span><br/>
                  <TypeAnimation
                sequence={[
                  'Full-Stack Web Developer',
                  1000,
                  'Software Engineer',
                  1000,
                  'Front-end Developer',
                  1000,
                  'Back-end Developer',
                  1000,
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
              />
                </Text>
              </Box>
           </VStack>   

          </Center>
        </Box>
        <Spacer/>
        <Stack direction={['column', 'column', 'row']} spacing={8} align={['center', 'center', 'flex-start']} mt={[8, 8, 0]}>
          <Box>
            <Image src="/hero.png" width={500} height={500} alt="landing image" />
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Hero;
