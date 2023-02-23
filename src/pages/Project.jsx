import { Card, Image, Heading, Text, Stack, Button, Divider, ButtonGroup, CardBody, CardFooter } from '@chakra-ui/react'
import Showcase from '../asset/api/project.json'

const Project = () => {

  return (
    <div className='flex flex-row gap-4'>
      {Showcase.map(projectShowcase => {
        return (
          <div className='w-1/3'>
            <Card maxW='sm'>
              <CardBody>
                <Image
                  src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>
                    {projectShowcase.title}
                  </Heading>
                  <Text>
                    {projectShowcase.description}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'>
                    Buy now
                  </Button>
                  <Button variant='ghost' colorScheme='blue'>
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </div>
        )
      })}

    </div>
  )
}
export default Project