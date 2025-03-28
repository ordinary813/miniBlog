import { Text, Box, Container, Flex, Button } from "@chakra-ui/react"
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode"

import { IoMoon } from "react-icons/io5"
import { LuSun } from "react-icons/lu";
import CreatePostModal from "./CreatePostDialog";
import { Link } from "react-router-dom";


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  

  return (
    <Container maxW={'80%'}>
      <Box
        px={4}
        my={4}
        borderRadius={5}
        bg={useColorModeValue("gray.200", "gray.700")}
      >
        <Flex h="16"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          {/* Left Side */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={3}
            display={{ base: "none", sm: "flex" }}
          >

            {["Home", "Services", "About", "Contact"].map((item) => (
              <Box
                px={2} py={4}
                borderRadius="md"
                _hover={{
                  color: "green.500", cursor: "pointer",
                  transform: "scale(1.05)",
                }}
                transition={"all 0.1s ease-in-out"}
                textAlign={"center"}
                key={item}
                fontSize={"lg"}
              >
                <Text>{item}</Text>
              </Box>
            ))}

          </Flex>

          {/* Right Side */}
          <Flex
            alignItems={"center"}
            gap={3}
          >
            {["Login", "Register"].map((item) => (
              <Box
                px={2} py={4}
                borderRadius="md"
                _hover={{
                  color: "green.500", cursor: "pointer",
                  transform: "scale(1.05)",
                }}
                transition={"all 0.1s ease-in-out"}
                textAlign={"center"}
                key={item}
                fontSize={"lg"}
              >
                <Link to={`/${item}`}>{item}</Link>
              </Box>
            ))}

            {/* Toggle Color Mode */}
            <Button onClick={toggleColorMode}
              bg={useColorModeValue("gray.200", "gray.700")} // Light button in light mode, dark in dark mode
              color={useColorModeValue("black", "white")}   // Dark text in light mode, light text in dark mode
              _hover={{ bg: useColorModeValue("gray.300", "gray.600") }} // Hover effect
              maxW="40px"
            >
              {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
            </Button>

            <CreatePostModal />
          </Flex>
        </Flex>
      </Box>
    </Container>
  )
}
export default Navbar