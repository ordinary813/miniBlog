import { Avatar, Box, Card, CardHeader, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const PostCard = ({ user }) => {
    return (
        <Card>
            <CardHeader>
                <Flex gap={"4"}>
                    <Flex flex={"1"} gap={"4"} alignItems={"center"}>
                        <Avatar src={user.img_url} />
                        <Box>
                            <Heading>{user.username}</Heading>
                            <Text>{user.role}</Text>
                        </Box>
                    </Flex>

                    <Flex></Flex>
                </Flex>
            </CardHeader>
        </Card>
    )
}

export default PostCard