import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from "../index"
import Loader from './Loader'
import { Container, HStack } from '@chakra-ui/react';
import ExchangeCard from './ExchangeCard';
import Error from './Error';
function Exchanges() {

    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const { data } = await axios.get(`${server}/exchanges`)
                console.log(data);
                setExchanges(data);
                setLoading(false);
            } catch (error) {
                setError(true); setLoading(false);
            }
           
        };
        fetchExchanges();
    }, []);
    if(error) return <Error message={"Error while Fetching Exchanges"}/>
    return (<Container maxW={"container.xl"}>
        {loading ? <Loader /> : <>
            <HStack wrap={"wrap"}>
                {
                    exchanges.map((i) => (
                        <ExchangeCard key={i.id} name={i.name} img={i.image} url={i.url} rank={i.trust_score_rank} />
                    ))
                }
            
            
            </HStack>
        
        
        </>}
    </Container>
    );
}

export default Exchanges;
