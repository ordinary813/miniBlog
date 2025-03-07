import { Text, Box, Container, Flex, Button } from "@chakra-ui/react"
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode"

import { IoMoon } from "react-icons/io5"
import { LuSun } from "react-icons/lu";
import CreatePostModal from "./CreatePostModal";


const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Container maxW={'900px'}>
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
            <Text>Home</Text>
            <Text>Services</Text>
            <Text>About</Text>
            <Text>Contact</Text>
          </Flex>

          {/* Right Side */}
          <Flex
            alignItems={"center"}
            gap={3}
          >
            <Box>Sign In</Box>
            <Box>Sign Up</Box>

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