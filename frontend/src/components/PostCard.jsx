import { Avatar, Box, Card, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';


const PostCard = ({ post }) => {
    if (!post) {
        return <Text>Post is not available.</Text>
    }
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/api/users/${post.user_id}`)

                if (!response.ok) {
                    throw new Error("Failed to fetch user")
                }

                const data = await response.json()
                console.log(data)
                setUser(data)
            } catch (error) {
                console.error(`Error: ${error}`)
                setUser(null)
            } finally {
                setIsLoading(false)
            }
        }
        if (post.user_id) {
            fetchUser()
        }
    }, [post.user_id])


    if (isLoading) { return <Text>Loading...</Text> }
    if (!user) { return <Text>Error loading user</Text> }
    console.log(user.img_url)
    console.log(post.content)

    return (
        <Card.Root
            p={"2"}
            _hover={{
                transform: "scale(1.03)",
            }}
            transition={"all 0.1s ease-in-out"}
            >
            <Card.Header>
                <Flex gap={"4"}>
                    <Flex flex={"1"} gap={"4"} alignItems={"center"}>
                        <Avatar.Root>
                            <Avatar.Image src={user.img_url || "../imgs/profile.png"} />
                        </Avatar.Root>
                        <Box
                            color = {"green.500"}
                        >
                            <Heading>{user.username}</Heading>

                        </Box>
                    </Flex>

                </Flex>
            </Card.Header>
            <Card.Body>
                <Text>{post.content}</Text>
            </Card.Body>
        </Card.Root>
    )
}

export default PostCard