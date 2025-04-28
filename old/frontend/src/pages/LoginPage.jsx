import { Box, Button, Stack, Container } from '@chakra-ui/react';
import { useColorModeValue } from "@/components/ui/color-mode"

const LoginPage = () => {
    return (
        <Stack
            minH="100vh"  // Makes the parent stack take the full viewport height
            justify="center"  // Centers vertically
            align="center"  // Centers horizontally
            bg="gray.900"
        >

            <Container colorScheme="teal"
                borderRadius="lg"
                p={10}
                maxW="md"  // Sets a good max width
                textAlign="center"
                bg={"gray.800"}
                minH={"60vh"}
            >Login</Container>

        </Stack>
    );
}

export default LoginPage;
