import { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  Box,
  Heading,
  Badge,
  Button,
  useColorMode,
  Flex,
  Image,
  Text,
  VStack,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/router"
import projectShowcaseData from "../asset/api/project.json"

const Project = () => {
  const { colorMode } = useColorMode()
  const router = useRouter()
  const [projectShowcase] = useState(projectShowcaseData)

  const slidesToShow = useBreakpointValue({
    base: 1,
    sm: 1,
    md: 2,
    lg: 3,
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow || 1,
    slidesToScroll: 1,
    arrows: false,
  }

  const cardBg = {
    light: "white",
    dark: "gray.800",
  }

  const handleLinkClick = (url) => {
    window.open(url, "_blank")
  }

  return (
    <Box px={{ base: 4, md: 10 }} py={10}>
      <Heading textAlign="center" fontSize={{ base: "2xl", md: "4xl" }} mb={8}>
        My Projects
      </Heading>

      <Slider {...settings}>
        {projectShowcase.map((project, index) => (
          <Box key={index} px={3}>
            <Box
              bg={cardBg[colorMode]}
              borderRadius="xl"
              overflow="hidden"
              boxShadow="lg"
              transition="0.3s"
              _hover={{ transform: "translateY(-8px)", boxShadow: "2xl" }}
              h="100%"
            >
              {/* Image */}
              <Box h="180px" overflow="hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
              </Box>

              {/* Content */}
              <VStack align="start" spacing={3} p={5}>
                <Heading size="md">{project.title}</Heading>

                <Text fontSize="sm" color="gray.500">
                  {project.description}
                </Text>

                {/* Stack */}
                <Flex wrap="wrap" gap={2}>
                  {Array.isArray(project.stack) ? (
                    project.stack.map((stack, i) => (
                      <Badge key={i} colorScheme="purple" fontSize="0.7em">
                        {stack}
                      </Badge>
                    ))
                  ) : (
                    <Badge colorScheme="purple">{project.stack}</Badge>
                  )}
                </Flex>

                {/* Buttons */}
                <HStack w="100%" pt={2} spacing={3}>
                  <Button
                    size="sm"
                    flex={1}
                    leftIcon={<FontAwesomeIcon icon={faGlobe} />}
                    onClick={() => handleLinkClick(project.live)}
                  >
                    Live
                  </Button>

                  <Button
                    size="sm"
                    flex={1}
                    variant="outline"
                    leftIcon={<FontAwesomeIcon icon={faGithub} />}
                    onClick={() => handleLinkClick(project.github)}
                  >
                    Code
                  </Button>
                </HStack>
              </VStack>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default Project