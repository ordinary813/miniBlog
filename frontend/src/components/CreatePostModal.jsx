import React from 'react'
import { Button, useDisclosure } from '@chakra-ui/react'
import {
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
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen} colorScheme="green">
                Post
                <BiAddToQueue size={10} />
            </Button>

            <DrawerRoot isOpen={isOpen} onClose={onClose}>
                <DrawerBackdrop />
                <DrawerContent>
                    <DrawerCloseTrigger />
                    <DrawerHeader>
                        <DrawerTitle>Create Post</DrawerTitle>
                    </DrawerHeader>
                    <DrawerBody>
                        What's on your mind?
                    </DrawerBody>
                    <DrawerFooter>
                        {/* Submit Button to close the drawer */}
                        <Button colorScheme="blue" onClick={onClose}>Submit</Button>
                    </DrawerFooter>
                </DrawerContent>
            </DrawerRoot>
        </>
    );
};

export default CreatePostModal;
