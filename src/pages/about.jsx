import { Stack, Text, Image, Box, Button, HStack, useBreakpointValue } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import BuyMeACoffeeButton from "@/components/ui/BuyMeACoffeeButton";
import Stacks from "../components/sections/Stacks";

const About = () => {
  const { colorMode } = useColorMode();

  // Determine if the image should be displayed based on screen size
  const shouldDisplayImage = useBreakpointValue({ base: false, md: true });

  return (
    <Box p={4}>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={8}
        alignItems={{ md: "center" }}
        justifyContent={{ base: "center", md: "flex-start" }}
        me={3}
        className="h-full"
      >
        {shouldDisplayImage && (
          <Image
            src="/elmonickol.jpg"
            width="30%"
            height="30%"
            ms={4}
            me={5}
            alt="about image"
            borderRadius="lg"
            boxShadow="lg"
          />
        )}
        <Box ms={5} textAlign={{ base: "center", md: "left" }}>
          <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={5}>
            About Me
          </Text>
          <Stack spacing={4}>
            <Text fontSize={{ base: "xl", md: "2xl" }} mt={4} mb={{ base: 3, md: 0 }}>
              Name: Elmo Nickol Laplap
            </Text>
            <Text fontSize={{ base: "xl", md: "2xl" }}>
              Age: 26
            </Text>
            <Text fontSize={{ base: "xl", md: "2xl" }}>
              Location: Quezon, Bukidnon
            </Text>
            <Text fontSize={{ base: "xl", md: "2xl" }}>
              Education: Xavier University - Ateneo de Cagayan, BS in Information Systems (2019)
            </Text>
            <Text fontSize={{ base: "xl", md: "2xl" }}>
              Expertise: PHP, JavaScript, Python, Java
            </Text>
            <Text fontSize={{ base: "xl", md: "2xl" }}>
              Goal: To create innovative web applications that offer exceptional user experiences
            </Text>
          </Stack>
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
    </Box>
  );
};

export default About;
