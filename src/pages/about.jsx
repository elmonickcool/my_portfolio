import { Stack, Text, Image, Box, Button, HStack } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import BuyMeACoffeeButton from "@/components/ui/BuyMeACoffeeButton";
import Stacks from "../components/sections/Stacks"

const About = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Stack direction={{ base: "column", md: "row" }} spacing={8} alignItems={{ md: "center" }} justifyContent={{ base: "center", md: "flex-start" }} me={3} className="h-full">
        <Image src="/elmonickol.jpg" width="30%" height="30%" ms={4} me={5} alt="about image" borderRadius="lg" boxShadow="lg" />
        <Box ms={5} textAlign={{ base: "center", md: "left" }}>
          <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={5}>
            About Me
          </Text>
          <Text fontSize={{ base: "xl", md: "2xl" }} mt={4} mb={{ base: 3, md: 0 }}>
            Welcome to my portfolio website! I&apos;m Elmo Nickol Laplap, a 26-year-old Full Stack Web Developer from Quezon, Bukidnon. 
            I graduated from Xavier University - Ateneo de Cagayan in 2019 with a BS in Information Systems. 
            With expertise in PHP, JavaScript, Python, and Java, I continuously learn and stay updated in the field. 
            My goal is to create innovative web applications that offer exceptional user experiences. 
            I attended the Kodego bootcamp to enhance my skills and gain practical experience on real-world projects.
          </Text>
          <HStack mt={8}>
            <Button
              as="a"
              href="/Resume.pdf"
              download="ElmoNickolLaplap_Resume.pdf"
              colorScheme={colorMode === "light" ? "blue" : "teal"}
              size="lg"
            >
              Download Resume
            </Button>
            <BuyMeACoffeeButton />
          </HStack>
        </Box>
      </Stack>
      <Stacks />
    </>

  );
};

export default About;
