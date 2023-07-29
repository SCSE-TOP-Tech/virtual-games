import { Box, Text, Button, Flex } from "@chakra-ui/react";

export default function Incorrect(props) {
    return (<Flex flexDirection='column' alignItems='center' mt='2rem'>
        {!(props.partial) && <Text fontSize="2rem" fontWeight="bold" textAlign='center'>None were the culprits!</Text>}
        {props.partial && <Text fontSize="2rem" fontWeight="bold">Partially correct!</Text>}
        <Text fontSize="1rem"  mb='0.8rem'>please think again!</Text>
        <Button w='80%' onClick={props.handler}>Try again</Button>
    </Flex>)
}