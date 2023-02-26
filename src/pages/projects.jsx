import { Card, Image, Heading, Text, Stack, CardBody, CardFooter } from '@chakra-ui/react';
import Showcase from '../asset/api/project.json';
import NextLink from "next/link";
import { useColorMode, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";


const Project = () => {
  const { colorMode } = useColorMode();
  return (
    <div class="container mx-auto px-4">
      <div className='flex flex-row gap-4'>
        {Showcase.map((projectShowcase,index) => {
          return (
            <div className='w-1/3' key={index}>
              <Card maxW='sm' bg="slate.400" boxShadow="md">
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
                    <Text fontStyle='italic'>
                      {projectShowcase.stack.join(', ')}
                    </Text>
                    <Text>
                      {projectShowcase.description}
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

      </div>
    </div>
  )
}
export default Project