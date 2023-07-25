import { Box, Flex, Center, VStack, Spacer, Stack, Text, Image } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import GithubIcon from "../ui/GithubIcon";
import LinkedinIcon from "../ui/LinkedinIcon";

const Hero = () => {
  const textSize = ['2xl', '2xl', '3xl'];

  return (
    <Flex height="95vh" justifyContent="center" flexDirection="column">
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
                  Hello, I&apos;m <Text as="span" fontWeight="bold" >Elmo Nickol</Text><br />
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
                      'Freelancer',
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
          <Box position="relative">
            <Box
              position="absolute"
              top={0}
              left={0}
              width="95%"
              height="100%"
              backgroundColor="#202A44"
              borderRadius="10%"
              opacity="50%"
              zIndex={-1}
              ms={3}
            />
            <Image src="/hero.png" alt="landing image" />
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Hero;
