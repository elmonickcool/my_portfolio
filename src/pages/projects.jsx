import { Card, Image, Heading, Text, Stack, CardBody, CardFooter, SimpleGrid, useBreakpointValue, Box, Button } from '@chakra-ui/react';
import Showcase from '../asset/api/project.json';
import NextLink from "next/link";
import { useColorMode, Link, Badge } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.100', dark: 'blackAlpha.500' };
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 4 });
  return (
    <>
      <Heading textAlign='center' fontSize='4xl' mb='5'>
        My Project
      </Heading>
      <Box display="flex" justifyContent="center" alignItems="center">
        <SimpleGrid columns={columns} spacing={5}>
          {Showcase.length > 0 ? Showcase.map((projectShowcase) => (
            <article key={projectShowcase.title}>
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
                    <Text textAlign='justify'>
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
                  <Stack direction="row" spacing={4}>
                    <Link as={NextLink} href={projectShowcase.live}  _hover={{ textDecoration: 'none' }}>
                      <Button as="a" href={projectShowcase.live} target="_blank" rel="noopener noreferrer" variant='outline' leftIcon={<FontAwesomeIcon icon={faGlobe} className={`text-3xl ${colorMode === "light" ? "text-black" : "text-white"}`} />}>Live Demo</Button>
                    </Link>
                    <Link as={NextLink} href={projectShowcase.github}  _hover={{ textDecoration: 'none' }}>
                      <Button as="a" href={projectShowcase.github} target="_blank" rel="noopener noreferrer" variant='outline' leftIcon={<FontAwesomeIcon icon={faGithub} className={`text-3xl ${colorMode === "light" ? "text-black" : "text-white"}`} />}>Repository</Button>
                    </Link>
                  </Stack>
                </CardFooter>
              </Card>
            </article>
          )) : (
            <Text textAlign='center' fontSize='xl'>
              No project showcases found.
            </Text>
          )}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Project;
