import React from 'react'
import { Button, Textarea, Flex } from '@chakra-ui/react'
import { useColorModeValue } from '@/components/ui/color-mode'

import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


import { BiAddToQueue, BiBorderAll } from 'react-icons/bi'
import { MdImage } from 'react-icons/md'
const CreatePostModal = () => {
    return (
        <DialogRoot size={'lg'}>
            <DialogTrigger asChild>
                <Button
                    size="sm"
                    bg={useColorModeValue("green.500", "green.500")} // Light button in light mode, dark in dark mode
                    color={useColorModeValue("white", "black")}   // Dark text in light mode, light text in dark mode
                    _hover={{ bg: useColorModeValue("green.600", "green.400") }} // Hover effect
                >
                    Post
                    <BiAddToQueue />
                </Button>
            </DialogTrigger>
            <DialogContent
                h={"80%"}
            >
                <DialogHeader>
                    <DialogTitle >Post on Clover</DialogTitle>
                </DialogHeader>
                <DialogBody fontSize={'md'}>

                    <Textarea resize="none" size={"lg"} h={"90%"} placeholder="What's on your mind?" />
                    <Flex justifyContent="flex-end" mt={2}>
                        <Button
                        bg={useColorModeValue("gray.200", "gray.800")} // Light mode: white, Dark mode: gray.700
                        color={useColorModeValue("black", "white")}>
                            <MdImage />
                        </Button>
                    </Flex>

                </DialogBody>
                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogActionTrigger>
                    <Button>Save</Button>
                </DialogFooter>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    );
};

export default CreatePostModal;
