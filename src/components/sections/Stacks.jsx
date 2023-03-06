import { Text, Box, Image, Grid, Heading } from "@chakra-ui/react";

const Stacks = () => {
  return (
    <Box mx={3}>
      <Heading fontSize="4xl" textAlign="center" mt={5}>
        Tech Stack
      </Heading>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={6}
        my={8}
      >
        <Box textAlign="center" border="1px" p={6} borderRadius="md">
          <Text fontSize="2xl" p={5} mb={3}>
            Front End
          </Text>
          <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gridGap={6}>
            <Image
              src="/html5.svg"
              boxSize={["50px", "70px", "100px"]}
              alt="HTML5 Logo"
            />
            <Image
              src="/css3.svg"
              boxSize={["50px", "70px", "100px"]}
              alt="CSS3 Logo"
            />
            <Image
              src="/javascript.svg"
              boxSize={["50px", "70px", "100px"]}
              alt="JavaScript Logo"
            />
            <Image
              src="/react.svg"
              boxSize={["50px", "70px", "100px"]}
              alt="React Logo"
            />
            <Image
              src="/bootstrap.svg"
              boxSize={["50px", "70px", "100px"]}
              alt="Bootstrap Logo"
            />
            <Image
              src="/tailwind.svg"
              boxSize={["50px", "70px", "100px"]}
              alt="Tailwind CSS Logo"
            />
          </Box>
        </Box>
        <Box textAlign="center" border="1px" p={6} borderRadius="md">
          <Text fontSize="2xl" p={5} mb={3}>
            Back End
          </Text>
          <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gridGap={6}>
            <Image
              src="/php.svg"
              boxSize={["50px", "70px", "100px"]}
              alt="PHP logo"
            />
            <Image
              src="/laravel.svg"
              boxSize={["50px", "70px", "100px"]}
              alt="Laravel logo"
            />
            <Image
              src="/nodejs.svg"
              boxSize={["50px", "70px", "100px"]}
              alt="Node.js logo"
            />
            <Image
              src="/python.svg"
              boxSize={["50px", "70px", "100px"]}
              alt="Python logo"
            />
            <Image
              src="/firebase.svg"
              boxSize={["50px", "70px", "100px"]}
              alt="Firebase logo"
            />
            <Image
              src="/mysql.svg"
              boxSize={["50px", "70px", "100px"]}
              alt="MySQL logo"
            />
          </Box>
          
        </Box>
        <Box textAlign="center" border="1px" p={6} borderRadius="md">
          <Text fontSize="2xl" p={5} mb={3}>
            Other Tools
          </Text>
          <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gridGap={6}>
            <Image
              src="/figma.svg"
              boxSize={["50px", "70px", "100px"]}
              alt="PHP logo"
            />
            <Image
              src="/photoshop.svg"
              boxSize={["50px", "70px", "100px"]}
              alt="Laravel logo"
            />
            <Image
              src="/postman.svg"
              boxSize={["50px", "70px", "100px"]}
              alt="Node.js logo"
            />
            <Image
              src="/git.svg"
              boxSize={["50px", "70px", "100px"]}
              alt="Python logo"
            />
          </Box>
          
        </Box>
      </Grid>
    </Box>
  );
};

export default Stacks;
