import { Text, Box, Image, Flex } from "@chakra-ui/react";
import { useState } from "react";

const Stacks = () => {
  return (
    <div>
      <Text fontSize="4xl" textAlign="center" mt={5}>
        Tech Stack
      </Text>
      <Flex
        flexDirection={["column", "column", "row"]} justifyContent="space-evenly" alignItems="center" flexWrap="wrap">
        <Box textAlign="center" my={4} border="1px" p={6} borderRadius="md">
          <Text fontSize="2xl" p={5} mb={3}>Front End</Text>
          <Flex flexDirection={["row", "row", "row"]} flexWrap="wrap" justifyContent="center">
            <Image src="/html5.svg" boxSize={["50px", "70px", "100px"]} m={3} alt="HTML5 Logo" />
            <Image src="/css3.svg" boxSize={["50px", "70px", "100px"]} m={3} alt="CSS3 Logo" />
            <Image src="/javascript.svg" boxSize={["50px", "70px", "100px"]} m={3} alt="JavaScript Logo" />
            <Image src="/react.svg" boxSize={["50px", "70px", "100px"]} m={3} alt="React Logo" />
            <Image src="/bootstrap.svg" boxSize={["50px", "70px", "100px"]} m={3} alt="Bootstrap Logo" />
            <Image src="/tailwind.svg" boxSize={["50px", "70px", "100px"]} m={3} alt="Tailwind CSS Logo" />
          </Flex>
        </Box>
        <Box textAlign="center" my={4} border="1px" p={6} borderRadius="md">
          <Text fontSize="2xl" p={5} mb={3}>Back End</Text>
          <Flex flexDirection={["row", "row", "row"]} flexWrap="wrap" justifyContent="center">
            <Image src="/php.svg" alt="PHP logo" boxSize={["50px", "70px", "100px"]} mx={2} />
            <Image src="/laravel.svg" alt="Laravel logo" boxSize={["50px", "70px", "100px"]} mx={2} />
            <Image src="/nodejs.svg" alt="Node.js logo" boxSize={["50px", "70px", "100px"]} mx={2} />
            <Image src="/python.svg" alt="Python logo" boxSize={["50px", "70px", "100px"]} mx={2} />
                    <Image src="/java.svg" alt="Java logo" boxSize={["50px", "70px", "100px"]} mx={2} />
      </Flex>
    </Box>
    <Box textAlign="center" my={4} border="1px" p={6} borderRadius="md">
      <Text fontSize="2xl" p={5} mb={3}>Database</Text>
      <Flex flexDirection={["row", "row", "row"]} flexWrap="wrap" justifyContent="center">
        <Image src="/mysql.svg" alt="MySQL logo" boxSize={["50px", "70px", "100px"]} mx={2} />
        <Image src="/postgresql.svg" alt="PostgreSQL logo" boxSize={["50px", "70px", "100px"]} mx={2} />
        <Image src="/mongodb.svg" alt="MongoDB logo" boxSize={["50px", "70px", "100px"]} mx={2} />
        <Image src="/firebase.svg" alt="Firebase logo" boxSize={["50px", "70px", "100px"]} mx={2} />
        <Image src="/sqlite.svg" alt="SQLite logo" boxSize={["50px", "70px", "100px"]} mx={2} />
      </Flex>
    </Box>
  </Flex>
</div>
  );
};

export default Stacks;