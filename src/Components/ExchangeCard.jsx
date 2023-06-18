
import { Heading, VStack,Text,Image } from '@chakra-ui/react'
import React from 'react'

function ExchangeCard({name,img,url,rank }) {
    return (
        <a href={url} target={"_blank"}>
            <VStack w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"} m={"4"} css={{
                "&:hover": {
                    transform: "scale(1.1)",
                },
            }}>
                <Image src={img} w={"10"} h={"10"} objectFit={"contain"} alt={"Exchange"} />
                <Heading size={"md"} noOfLines={1}>{rank}</Heading>
                <Text noOfLines={1}>{name}</Text>
            </VStack>
        </a>
    );
}

export default ExchangeCard;