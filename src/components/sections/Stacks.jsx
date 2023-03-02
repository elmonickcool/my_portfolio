import { Text, Box, Image, Flex } from "@chakra-ui/react";
import {useState} from "react";

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
        flexDirection={["column", "column", "row"]} 
        justifyContent="space-evenly" 
        alignItems="center" 
        flexWrap="wrap"
      >
        <Box textAlign="center" my={4} border="1px" p={6} borderRadius="md">
          <Text fontSize="2xl" p={5} mb={3}>Front End</Text>
          <Flex justifyContent="center">
            <Image src="/html5.svg" boxSize={100} mx={2} transform={hovered === "html" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("html")} onMouseLeave={handleLeave} />
            <Image src="/css3.svg" boxSize={100} mx={2} transform={hovered === "css" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("css")} onMouseLeave={handleLeave} />
            <Image src="/javascript.svg" boxSize={100} mx={2} transform={hovered === "javascript" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("javascript")} onMouseLeave={handleLeave} />
            <Image src="/bootstrap.svg" boxSize={100} mx={2} transform={hovered === "bootstrap" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("bootstrap")} onMouseLeave={handleLeave}/>
            <Image src="/react.svg" boxSize={100} mx={2} transform={hovered === "react" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("react")} onMouseLeave={handleLeave} />
            <Image src="/tailwind.svg" boxSize={100} mx={2} transform={hovered === "tailwind" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("tailwind")} onMouseLeave={handleLeave} />
          </Flex>
        </Box>
        <Box textAlign="center" my={4} border="1px" p={6} borderRadius="md">
          <Text fontSize="2xl" p={5} mb={3}>Back End</Text>
          <Flex justifyContent="center">
            <Image src="/php.svg" boxSize={100} mx={2} transform={hovered === "php" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("php")} onMouseLeave={handleLeave} />
            <Image src="/laravel.svg" boxSize={100} mx={2} transform={hovered === "laravel" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("laravel")} onMouseLeave={handleLeave} />
            <Image src="/nodejs.svg" boxSize={100} mx={2} transform={hovered === "nodejs" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("nodejs")} onMouseLeave={handleLeave} />
            <Image src="/python.svg" boxSize={100} mx={2} transform={hovered === "python" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("python")} onMouseLeave={handleLeave} />
            <Image src="/java.svg" boxSize={100} mx={2} transform={hovered === "java" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("java")} onMouseLeave={handleLeave} />
          </Flex>
        </Box>
        <Box textAlign="center" my={4} border="1px" p={6} borderRadius="md">
          <Text fontSize="2xl" p={5} mb={3}>Database</Text>
          <Flex justifyContent="center">
            <Image src="/mysql.svg" boxSize={100} mx={2} transform={hovered === "mysql" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("mysql")} onMouseLeave={handleLeave} />
            <Image src="/firebase.svg" boxSize={100} mx={2} transform={hovered === "firebase" ? "scale(1.5)" : "scale(1)"} onMouseOver={() => handleHover("firebase")} onMouseLeave={handleLeave} />
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Stacks;
