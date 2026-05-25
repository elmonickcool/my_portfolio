import {
  Stack,
  Text,
  Image,
  Box,
  Button,
  HStack,
  useBreakpointValue,
  Heading,
  VStack,
  Divider,
} from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/react"
import BuyMeACoffeeButton from "@/components/ui/BuyMeACoffeeButton"
import Stacks from "../components/sections/Stacks"

const About = () => {
  const { colorMode } = useColorMode()

  const showImage = useBreakpointValue({ base: false, md: true })

  return (
    <Box px={{ base: 5, md: 16 }} py={10}>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 10, md: 16 }}
        align="center"
      >
        {/* IMAGE */}
        {showImage && (
          <Box flex="1" display="flex" justifyContent="center">
            <Image
              src="/elmonickol.jpg"
              alt="About Me"
              borderRadius="2xl"
              boxShadow="2xl"
              objectFit="cover"
              w={{ base: "200px", md: "300px" }}
              h={{ base: "200px", md: "300px" }}
            />
          </Box>
        )}

        {/* TEXT */}
        <Box flex="2">
          <VStack align={{ base: "center", md: "start" }} spacing={4}>
            <Heading fontSize={{ base: "2xl", md: "4xl" }}>
              About Me
            </Heading>

            <Text fontSize={{ base: "md", md: "lg" }} color="gray.500" textAlign={{ base: "center", md: "left" }}>
              Developer focused on building clean, fast, and user-friendly web applications.
            </Text>

            <Divider />

            <VStack align={{ base: "center", md: "start" }} spacing={2}>
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
            <HStack pt={4} spacing={4}>
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
      <Box mt={16}>
        <Stacks />
      </Box>
    </Box>
  )
}

export default About