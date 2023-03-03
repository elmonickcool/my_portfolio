import { Text, Box, Image, Flex } from "@chakra-ui/react";
import { useState } from "react";

const Stacks = () => {
  const [hovered, setHovered] = useState("");

  const handleHover = (icon) => {
    setHovered(icon);
  };

  const handleLeave = () => {
    setHovered("");
  };
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
            <Image src="/html5.svg" boxSize={["50px", "70px", "100px"]} m={3} transform={hovered === "html" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("html")} onMouseLeave={handleLeave} alt="HTML5 Logo" />
            <Image src="/css3.svg" boxSize={["50px", "70px", "100px"]} m={3} transform={hovered === "css" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("css")} onMouseLeave={handleLeave} alt="CSS3 Logo" />
            <Image src="/javascript.svg" boxSize={["50px", "70px", "100px"]} m={3} transform={hovered === "javascript" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("javascript")} onMouseLeave={handleLeave} alt="JavaScript Logo" />
            <Image src="/react.svg" boxSize={["50px", "70px", "100px"]} m={3} transform={hovered === "react" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("react")} onMouseLeave={handleLeave} alt="React Logo" />
            <Image src="/bootstrap.svg" boxSize={["50px", "70px", "100px"]} m={3} transform={hovered === "bootstrap" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("bootstrap")} onMouseLeave={handleLeave} alt="Bootstrap Logo" />
            <Image src="/tailwind.svg" boxSize={["50px", "70px", "100px"]} m={3} transform={hovered === "tailwind" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("tailwind")} onMouseLeave={handleLeave} alt="Tailwind CSS Logo" />
          </Flex>
        </Box>
        <Box textAlign="center" my={4} border="1px" p={6} borderRadius="md">
          <Text fontSize="2xl" p={5} mb={3}>Back End</Text>
          <Flex flexDirection={["row", "row", "row"]} flexWrap="wrap" justifyContent="center">
            <Image src="/php.svg" alt="PHP logo" boxSize={["50px", "70px", "100px"]} mx={2} transform={hovered === "php" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("php")} onMouseLeave={handleLeave} />
            <Image src="/laravel.svg" alt="Laravel logo" boxSize={["50px", "70px", "100px"]} mx={2} transform={hovered === "laravel" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("laravel")} onMouseLeave={handleLeave} />
            <Image src="/nodejs.svg" alt="Node.js logo" boxSize={["50px", "70px", "100px"]} mx={2} transform={hovered === "nodejs" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("nodejs")} onMouseLeave={handleLeave} />
            <Image src="/python.svg" alt="Python logo" boxSize={["50px", "70px", "100px"]} mx={2} transform={hovered === "python" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("python")} onMouseLeave={handleLeave} />
            <Image src="/java.svg" alt="Java logo" boxSize={["50px", "70px", "100px"]} mx={2} transform={hovered === "java" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("java")} onMouseLeave={handleLeave} />
          </Flex>
        </Box>
        <Box textAlign="center" my={4} border="1px" p={6} borderRadius="md">
          <Text fontSize="2xl" p={5} mb={3}>Database</Text>
          <Flex flexDirection={["row", "row", "row"]} flexWrap="wrap" justifyContent="center">
            <Image src="/mysql.svg" alt="MySQL logo" boxSize={["50px", "70px", "100px"]} mx={2} transform={hovered === "mysql" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("mysql")} onMouseLeave={handleLeave} />
            <Image src="/mongodb.svg" alt="mongodb logo" boxSize={["50px", "70px", "100px"]} mx={2} transform={hovered === "mongodb" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("mongodb")} onMouseLeave={handleLeave} />
            <Image src="/firebase.svg" alt="Firebase logo" boxSize={["50px", "70px", "100px"]} mx={2} transform={hovered === "firebase" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("firebase")} onMouseLeave={handleLeave} />
          </Flex>
        </Box>
        <Box textAlign="center" my={4} border="1px" p={6} borderRadius="md">
          <Text fontSize="2xl" p={5} mb={3}>Other Tools</Text>
          <Flex justifyContent="center">
            <Image src="/figma.svg" alt="Figma logo" boxSize={["50px", "70px", "100px"]} mx={2} transform={hovered === "figma" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("figma")} onMouseLeave={handleLeave} />
            <Image src="/git.svg" alt="Git logo" boxSize={["50px", "70px", "100px"]} mx={2} transform={hovered === "git" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("git")} onMouseLeave={handleLeave} />
            <Image src="/photoshop.svg" alt="Photoshop logo" boxSize={["50px", "70px", "100px"]} mx={2} transform={hovered === "photoshop" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("photoshop")} onMouseLeave={handleLeave} />
            <Image src="/adobexd.svg" alt="UX logo" boxSize={["50px", "70px", "100px"]} mx={2} transform={hovered === "adobexd" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("adobexd")} onMouseLeave={handleLeave} />
            <Image src="/postman.svg" alt="Postman logo" boxSize={["50px", "70px", "100px"]} mx={2} transform={hovered === "postman" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("postman")} onMouseLeave={handleLeave} />
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Stacks;
