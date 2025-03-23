import React from 'react'
import { useState } from 'react'
import { Text, Stack, Container, Flex } from "@chakra-ui/react"
import Navbar from "@/components/Navbar"
import PostGrid from '@/components/PostGrid'
import { useColorModeValue } from "@/components/ui/color-mode"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';

const Home = () => {
    const [posts, setPosts] = useState([])
    return (

        
        <Stack minH={"100vh"}
            align={"center"}    //align to center vertically
            bg={useColorModeValue("gray.50", "gray.900")}
        >
            <Navbar />
            <Container
                minW={"80%"}
                minH={"100%"}
            >
                <Flex>
                    <Container
                        maxW={"100%"}
                        borderRadius={5}
                    >
                        <Text
                            fontSize={{ base: "3xl", md: "50" }}
                            fontWeight={"bold"}
                            letterSpacing={"tight"}
                            textTransform={"uppercase"}
                            textAlign={"center"}
                            m={8}
                        >
                            <Text
                                as={"span"}
                                bgClip={"text"}
                                fontWeight="bold"
                                color={useColorModeValue("green.600", "green.400")}
                            >
                                Mini Blog
                            </Text>
                        </Text>

                        <PostGrid posts={posts} setPosts={setPosts} />
                    </Container>
                </Flex>
            </Container>
        </Stack>
    )
}

export default Home