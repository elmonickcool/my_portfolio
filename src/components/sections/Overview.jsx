import { Text, Box, Image, useBreakpointValue, Spacer } from "@chakra-ui/react";

const Overview = () => {
  const showImage = useBreakpointValue({ base: false, md: true });
  const flexDir = useBreakpointValue({ base: "column", md: "row" });
  const align = useBreakpointValue({ base: "center", md: "stretch" });

  return (
    <Box display="flex" flexDirection={flexDir} align={align} mt={4} ms={7}>
      {showImage && (
        <Box mt={[4, null, 0]} ml={[0, null, 4]} mb={-4}>
          <Image
            src="webdev.svg"
            boxSize='650px'
            alt="overview photos"
          />
        </Box>
      )}
      <Box as="span" w="20px"></Box>
      <Box
        display="flex"
        flexDirection="column"
        flex={1}
        justifyContent="center"
        my={2}
      >
        <Text fontSize={["3xl", "4xl"]} fontWeight="bold" mb={4} textAlign="center">
          Who am I?
        </Text>
        <Text fontSize={["xl", "2xl"]} lineHeight="tall">
          I am a highly motivated software engineer with a passion for innovative software solutions. 
          I have extensive experience developing web applications, APIs, and database-driven 
          software using frameworks such as React and Laravel, as well as languages such as PHP, Javascript, and MySQL.
        </Text>
      </Box>
      
    </Box>
  );
};

export default Overview;
