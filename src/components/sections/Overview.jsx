import { Text, Box, Image, Spacer, useBreakpointValue } from "@chakra-ui/react";

const Overview = () => {
  const showImage = useBreakpointValue({ base: false, md: true });
  const flexDir = useBreakpointValue({ base: "column", md: "row" });
  const align = useBreakpointValue({ base: "center", md: "stretch" });

  return (
    <Box display="flex" flexDirection={flexDir} align={align} mt={8} ms={7}>
      {showImage && (
        <Box mt={[4, null, 0]} mr={[0, null, 5]}>
          <Image
            src="overview_elmo.jpg"
            borderRadius={10}
            width={475}
            height={780}
            alt="overview photos"
          />
        </Box>
      )}
      <Spacer />
      <Box
        display="flex"
        flexDirection="column"
        flex={1}
        justifyContent="center"
        my={[3, null, 0]}
      >
        <Text fontSize={["3xl", "4xl"]} fontWeight="bold" mb={4}>
          Who am I?
        </Text>
        <Text fontSize={["xl", "2xl"]} lineHeight="tall">
          I am a highly motivated software engineer with a passion for innovative
          software solutions. I have extensive experience developing web applications, APIs, and
          database-driven software using PHP, Javascript, and MySQL.
        </Text>
      </Box>
    </Box>
  );
};

export default Overview;
