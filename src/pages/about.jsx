import {
  Stack,
  Text,
  Image,
  Box,
  Button,
  HStack,
  useColorMode,
  Heading,
  VStack,
  Divider,
} from "@chakra-ui/react"

import BuyMeACoffeeButton from "@/components/ui/BuyMeACoffeeButton"
import Stacks from "../components/sections/Stacks"

const About = () => {
  const { colorMode } = useColorMode()

  return (
    <Box px={{ base: 5, md: 16 }} py={{ base: 10, md: 16 }}>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 10, md: 16 }}
        align="center"
      >
        {/* IMAGE */}
        <Box
          flex="1"
          display="flex"
          justifyContent="center"
        >
          <Image
            src="/elmonickol.jpg"
            alt="About Me"
            borderRadius="2xl"
            boxShadow="2xl"
            objectFit="cover"
            w={{ base: "180px", sm: "220px", md: "300px" }}
            h={{ base: "180px", sm: "220px", md: "300px" }}
          />
        </Box>

        {/* TEXT */}
        <Box flex="2" w="100%">
          <VStack
            align={{ base: "center", md: "start" }}
            spacing={4}
            textAlign={{ base: "center", md: "left" }}
            maxW="600px"
            mx={{ base: "auto", md: "0" }}
          >
            <Heading fontSize={{ base: "2xl", md: "4xl" }}>
              About Me
            </Heading>

            <Text fontSize={{ base: "md", md: "lg" }} color="gray.500">
              Developer focused on building clean, fast, and user-friendly web applications.
            </Text>

            <Divider />

            <VStack align="start" spacing={2} w="100%">
              <Text><b>Name:</b> Elmo Nickol Laplap</Text>
              <Text><b>Age:</b> 29</Text>
              <Text><b>Location:</b> Quezon, Bukidnon</Text>
              <Text>
                <b>Education:</b> Xavier University - Ateneo de Cagayan (BS Information Systems, 2019)
              </Text>
              <Text><b>Skills:</b> PHP, JavaScript, Python, Java</Text>
              <Text>
                <b>Goal:</b> Build innovative web apps with great UX
              </Text>
            </VStack>

            {/* BUTTONS */}
            <HStack
              pt={4}
              spacing={4}
              flexWrap="wrap"
              justify={{ base: "center", md: "flex-start" }}
            >
              <Button
                as="a"
                href="/Resume.pdf"
                download
                colorScheme={colorMode === "light" ? "blue" : "teal"}
                size="md"
              >
                Download Resume
              </Button>

              <BuyMeACoffeeButton />
            </HStack>
          </VStack>
        </Box>
      </Stack>

      {/* SKILLS SECTION */}
      <Box mt={{ base: 12, md: 16 }}>
        <Stacks />
      </Box>
    </Box>
  )
}

export default About