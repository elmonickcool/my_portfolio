import { Stack, Text, Image, Box, Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

const About = () => {
  const { colorMode } = useColorMode();

  return (
    <Stack direction={{ base: "column", md: "row" }} spacing={8} alignItems={{ md: "center" }} me={3}>
      <Image src="/elmonickol.jpg" width={500} height={500} ms={4} alt="about image" borderRadius="lg" boxShadow="lg" />
      <Box ms={5} textAlign={{ base: "center", md: "left" }}>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={5}>
          About Me
        </Text>
        <Text fontSize={{ base: "xl", md: "2xl" }} mt={4} mb={{ base: 3, md: 0 }}>
          Hello and welcome to my portfolio website! My name is Elmo Nickol Laplap, and I am a 26-year-old Full Stack Web Developer from Quezon, Bukidnon. I graduated from Xavier University - Ateneo de Cagayan with a BS in Information Systems in 2019, and since then, I have pursued my passion for web development.
        </Text>
        <Text fontSize={{ base: "xl", md: "2xl" }} mt={4} mb={{ base: 3, md: 0 }}>
          I have extensive experience in programming languages such as PHP, JavaScript, Python, and Java, and I am always striving to learn more and stay up-to-date with the latest developments in the field. I am committed to developing innovative and high-quality web applications that provide an optimal user experience.
        </Text>
        <Text fontSize={{ base: "xl", md: "2xl" }} mt={4} mb={{ base: 3, md: 0 }}>
          In pursuit of my dream job as a Full Stack Web Developer, I attended the Kodego bootcamp to expand my skill set and knowledge. The bootcamp was a valuable learning experience that helped me sharpen my coding abilities and gain practical experience working on real-world projects.
        </Text>
        <Button
          as="a"
          href="/Resume.pdf"
          download="ElmoNickolLaplap_Resume.pdf"
          colorScheme={colorMode === "light" ? "blue" : "teal"}
          size="lg"
          mt={8}
        >
          Download Resume
        </Button>
      </Box>
    </Stack>
  );
};

export default About;
