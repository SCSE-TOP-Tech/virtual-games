import { Box, Text, Button } from "@chakra-ui/react";

export default function Incorrect(props) {
    return (<Box>
        <Text>Incorrect</Text>
        <Button onClick={props.handler}>Try again</Button>
    </Box>)
}