import React, { useState, useEffect } from 'react'
import { Text } from '@chakra-ui/react'


export default function Time() {

    // For the timer
    const [time, setTime] = useState(getCurrentTime());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Text fontSize='1.5rem' fontStyle='italic' fontFamily='fantasy' color='darkred' mx='3.5%'>
            {time}
        </Text>
    )
}

// Default
function getCurrentTime() {
    var date = new Date();
    var hours = addLeadingZero(date.getHours());
    var minutes = addLeadingZero(date.getMinutes());
    var seconds = addLeadingZero(date.getSeconds());

    var time = hours + ":" + minutes + ":" + seconds;
    return time;
}

function addLeadingZero(number) {
    return (number < 10 ? "0" : "") + number;
}


