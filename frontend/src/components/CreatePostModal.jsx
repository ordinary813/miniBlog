import React from 'react'
import { Button, Textarea } from '@chakra-ui/react'
import {
    DrawerActionTrigger,
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  

import { BiAddToQueue } from 'react-icons/bi'

const CreatePostModal = () => {

    return (
        <DrawerRoot size={'md'}>
            <DrawerBackdrop />
            <DrawerTrigger asChild>
                <Button size="sm">
                    Post
                    <BiAddToQueue />
                </Button>
            </DrawerTrigger>
            <DrawerContent >
                <DrawerHeader>
                    <DrawerTitle >Post on Clover</DrawerTitle>
                </DrawerHeader>
                <DrawerBody fontSize={'md'}>
                    <Textarea resize="none" size={"lg"} h={"90%"} placeholder="What's on your mind?" />
                </DrawerBody>
                <DrawerFooter>
                    <DrawerActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerActionTrigger>
                    <Button>Save</Button>
                </DrawerFooter>
                <DrawerCloseTrigger />
            </DrawerContent>
        </DrawerRoot>
    );
};

export default CreatePostModal;
