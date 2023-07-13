import { useState } from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Badge,
  Link,
  Button,
  useColorMode,
  useBreakpointValue,
  Flex,
  Image,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

import projectShowcaseData from '../asset/api/project.json';

const Project = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: 'gray.100', dark: 'blackAlpha.500' };
  const router = useRouter();

  const [projectShowcase, setProjectShowcase] = useState(projectShowcaseData);

  const handleLinkClick = (url) => {
    router.push(url);
  };

  // Determine the number of columns based on screen size
  const gridColumns = useBreakpointValue({ base: 1, sm: 2, md: 4 });

  return (
    <>
      <Heading textAlign="center" fontSize="4xl" mb="5">
        My Project
      </Heading>
      <Box display="flex" justifyContent="center" alignItems="center">
        <SimpleGrid columns={gridColumns} spacing={5}>
          {projectShowcase.length > 0 ? (
            projectShowcase.map((project) => (
              <article key={project.title}>
                <Box
                  maxW="sm"
                  bg={bgColor[colorMode]}
                  borderRadius="5%"
                  pt={2.5}
                  boxShadow="md"
                  transition="transform 0.2s"
                  _hover={{ transform: 'scale(1.05)' }}
                >
                  <Box m={3} >
                    <Image src={project.img} borderRadius="2.5%" alt="Project" />
                  </Box>
                  <Box p={6}>
                    <Heading size="md">{project.title}</Heading>
                    <Box mt={4}>
                      <p>{project.description}</p>
                    </Box>
                    <Box mt={4}>
                      {Array.isArray(project.stack) ? (
                        project.stack.map((stack, index) => (
                          <Badge key={index} m="1">
                            {stack.trim()}
                          </Badge>
                        ))
                      ) : (
                        <Badge>{project.stack}</Badge>
                      )}
                    </Box>
                    <Box mt={4}>
                      <Flex justifyContent="space-between">
                        <Button
                          as={Link}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outline"
                          leftIcon={
                            <FontAwesomeIcon
                              icon={faGlobe}
                              className={`text-3xl ${
                                colorMode === 'light'
                                  ? 'text-black'
                                  : 'text-white'
                              }`}
                            />
                          }
                          onClick={() => handleLinkClick(project.live)}
                        >
                          Live Demo
                        </Button>
                        <Button
                          as={Link}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outline"
                          leftIcon={
                            <FontAwesomeIcon
                              icon={faGithub}
                              className={`text-3xl ${
                                colorMode === 'light'
                                  ? 'text-black'
                                  : 'text-white'
                              }`}
                            />
                          }
                          onClick={() => handleLinkClick(project.github)}
                        >
                          Repository
                        </Button>
                      </Flex>
                    </Box>
                  </Box>
                </Box>
              </article>
            ))
          ) : (
            <Box textAlign="center" fontSize="xl">
              No project showcases found.
            </Box>
          )}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Project;
