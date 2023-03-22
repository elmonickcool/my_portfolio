import { TypeAnimation } from "react-type-animation";
import { Box, Flex, VStack, Text, Image } from "@chakra-ui/react";
import GithubIcon from "../ui/GithubIcon";
import LinkedinIcon from "../ui/LinkedinIcon";

const Hero = () => {
  const textSize = ['2xl', '2xl', '3xl'];

  return (
    <Flex direction={['column', 'column', 'row']} align={['center', 'stretch', 'stretch']}>
      <Box p={5} ms={5}>
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
      </Box>

      <Box>
        <Image src="/hero.png" width={700} height={700} alt="landing image" style={{ position: 'relative', zIndex: 1 }} />
      </Box>
    </Flex>
  );
};

export default Hero;
