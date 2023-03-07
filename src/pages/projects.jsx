import { Card, Image, Heading, Text, Stack, CardBody, CardFooter, SimpleGrid, useBreakpointValue, Box } from '@chakra-ui/react';
import Showcase from '../asset/api/project.json';
import NextLink from "next/link";
import { useColorMode, Link, Badge } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";


const Project = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.100', dark: 'gray.700' };
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3 });
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <SimpleGrid columns={columns} spacing={5}>
        {Showcase.map((projectShowcase, index) => {
          return (
            <div key={index}>
              <Card maxW='sm' bg={bgColor[colorMode]} boxShadow="md" transition="transform 0.2s" _hover={{ transform: "scale(1.05)" }}>
                <CardBody>
                  <Image
                    src={projectShowcase.img}
                    alt='landing page'
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>
                      {projectShowcase.title}
                    </Heading>
                    <Text>
                      {projectShowcase.description}
                    </Text>
                    <Text>
                      {Array.isArray(projectShowcase.stack)
                        ? projectShowcase.stack.map((stack, index) => (
                          <Badge key={index} m="1">
                            {stack.trim()}
                          </Badge>
                        ))
                        : <Badge>{projectShowcase.stack}</Badge>
                      }
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Link as={NextLink} href={projectShowcase.live}>
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className={`text-3xl mx-2 ${colorMode === "light" ? "text-black" : "text-white"
                        }`}
                    />
                  </Link>
                  <Link as={NextLink} href={projectShowcase.github}>
                    <FontAwesomeIcon
                      icon={faGithub}
                      className={`text-3xl mx-2 ${colorMode === "light" ? "text-black" : "text-white"
                        }`}
                    />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          )
        })}
      </SimpleGrid>
    </Box>

  )
}
export default Project