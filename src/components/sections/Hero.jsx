import LinkedinIcon from "../ui/LinkedinIcon";
import GithubIcon from "../ui/GithubIcon";
import { TypeAnimation } from "react-type-animation";
import { Box, Flex, Center, VStack, Spacer, Stack, Text, Image } from "@chakra-ui/react";


const Hero = () => {
  const textSize = ['2xl', '2xl', '3xl'];
  return (
    
      <Flex direction={['column', 'column', 'row']} align={['center', 'stretch', 'stretch']}>
        <Box p={5} ms={5}>
          <Center h="full">
            <VStack spacing={4} align={['center', 'center', 'stretch']}>
              <Box>
                <GithubIcon />
                <LinkedinIcon />
              </Box>
              <Box>
                <Text fontSize={textSize} textAlign={['center', 'center', 'left']}>
                  Hello, I&apos;m <Text as="span" className="font-bold" color="teal.400">Elmo Nickol</Text><br />
                  <TypeAnimation
                    sequence={[
                      'Full Stack Web Developer',
                      1000,
                      'Software Engineer',
                      1000,
                      'Front-end Developer',
                      1000,
                      'Back-end Developer',
                      1000,
                    ]}
                    speed={20}
                    wrapper="span"
                    repeat={Infinity}
                  />
                </Text>
              </Box>
            </VStack>
          </Center>
        </Box>
        <Spacer />
        <Stack direction={['column', 'column', 'row']} spacing={8} align={['center', 'center', 'flex-start']} mt={[8, 8, 0]}>
          <Box>
            <Image src="/hero.png" width={700} height={700} alt="landing image" style={{position: 'relative', zIndex: 1}} />
          </Box>
        </Stack>
      </Flex>
    
  );
};

export default Hero;

