'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import DataDownload from './datafile'

const FetchData = () => {
    const [data, setData]= useState({
        notices:null,
        events:null,
        cAbyDun:null,
        cGuard:null,
        calendar:null
    })
    const [noticesData,setNoticesData]=useState([])
    const [eventsData,setEventsData]= useState([])
    // const [guildData,setGuildData]= useState([])
    const [cAbyDunData,setCAbyDunData]= useState([])
    const [cGuardData,setCGuardData]= useState([])
    const [calendarData,setCalendarData] = useState([])

   
    const feNoticeData = async()=>{
        try {
            const response = await axios.get('https://developer-lostark.game.onstove.com/news/notices',{
                headers:{
                    'Accept' : 'applicaton/json',
                    'Authorization' : 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAyNTM1NjkifQ.WsNfKSlrdG-CbZiIYktklYNycVoyXZCvXgDWeLW-kwdS7Pf4Yp6MAOaGfgLkPDL7nmrob91IzQa6ox-Q8ssvoZFU7X3dL_Fvq5yJG5wa7ZgifJ4LAkOPbS61BeRx-SktRZkuz4_mQFNupV1qH4wB8c-n7qTPcJYojk5gBIr6FqwpmrYGATOI8r2v9xz8MKCJQTEBWvdcQBS6yiMHvOZRaTNwYVUwCd9hEeFkm1Uh2ifwPTvqrDet9S_5tk4L4xlNd6u88xvv6CIgFY96MPFXZLSUypdCs9bln4buP2EtTjnBlvOb-n1aaECZP3KlwMF0vN5O0AYaUwZabsXwU9kGrw'
                }
            })
            setNoticesData(response.data)
        }catch(error){
            console.error('error',error);
        }
    }

    const feEventData = async()=>{
        try {
            const response = await axios.get('https://developer-lostark.game.onstove.com/news/events',{
                headers:{
                    'Accept' : 'applicaton/json',
                    'Authorization' : 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAyNTM1NjkifQ.WsNfKSlrdG-CbZiIYktklYNycVoyXZCvXgDWeLW-kwdS7Pf4Yp6MAOaGfgLkPDL7nmrob91IzQa6ox-Q8ssvoZFU7X3dL_Fvq5yJG5wa7ZgifJ4LAkOPbS61BeRx-SktRZkuz4_mQFNupV1qH4wB8c-n7qTPcJYojk5gBIr6FqwpmrYGATOI8r2v9xz8MKCJQTEBWvdcQBS6yiMHvOZRaTNwYVUwCd9hEeFkm1Uh2ifwPTvqrDet9S_5tk4L4xlNd6u88xvv6CIgFY96MPFXZLSUypdCs9bln4buP2EtTjnBlvOb-n1aaECZP3KlwMF0vN5O0AYaUwZabsXwU9kGrw'
                }
            })
            setEventsData(response.data)
        }catch(error){
            console.error('error',error);
        }
    }

    const feCAbyDunData = async()=>{
        try {
            const response = await axios.get('https://developer-lostark.game.onstove.com/gamecontents/challenge-abyss-dungeons',{
                headers:{
                    'Accept' : 'applicaton/json',
                    'Authorization' : 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAyNTM1NjkifQ.WsNfKSlrdG-CbZiIYktklYNycVoyXZCvXgDWeLW-kwdS7Pf4Yp6MAOaGfgLkPDL7nmrob91IzQa6ox-Q8ssvoZFU7X3dL_Fvq5yJG5wa7ZgifJ4LAkOPbS61BeRx-SktRZkuz4_mQFNupV1qH4wB8c-n7qTPcJYojk5gBIr6FqwpmrYGATOI8r2v9xz8MKCJQTEBWvdcQBS6yiMHvOZRaTNwYVUwCd9hEeFkm1Uh2ifwPTvqrDet9S_5tk4L4xlNd6u88xvv6CIgFY96MPFXZLSUypdCs9bln4buP2EtTjnBlvOb-n1aaECZP3KlwMF0vN5O0AYaUwZabsXwU9kGrw'
                }
            })
            setCAbyDunData(response.data)
        }catch(error){
            console.error('error',error);
        }
    }
    const feCGuardData = async()=>{
        try {
            const response = await axios.get('https://developer-lostark.game.onstove.com/gamecontents/challenge-guardian-raids',{
                headers:{
                    'Accept' : 'applicaton/json',
                    'Authorization' : 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAyNTM1NjkifQ.WsNfKSlrdG-CbZiIYktklYNycVoyXZCvXgDWeLW-kwdS7Pf4Yp6MAOaGfgLkPDL7nmrob91IzQa6ox-Q8ssvoZFU7X3dL_Fvq5yJG5wa7ZgifJ4LAkOPbS61BeRx-SktRZkuz4_mQFNupV1qH4wB8c-n7qTPcJYojk5gBIr6FqwpmrYGATOI8r2v9xz8MKCJQTEBWvdcQBS6yiMHvOZRaTNwYVUwCd9hEeFkm1Uh2ifwPTvqrDet9S_5tk4L4xlNd6u88xvv6CIgFY96MPFXZLSUypdCs9bln4buP2EtTjnBlvOb-n1aaECZP3KlwMF0vN5O0AYaUwZabsXwU9kGrw'
                }
            })
            setCGuardData(response.data)
        }catch(error){
            console.error('error',error);
        }
    }  
    const feCalendarData = async()=>{
        try {
            const response = await axios.get('https://developer-lostark.game.onstove.com/gamecontents/calendar',{
                headers:{
                    'Accept' : 'applicaton/json',
                    'Authorization' : 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAyNTM1NjkifQ.WsNfKSlrdG-CbZiIYktklYNycVoyXZCvXgDWeLW-kwdS7Pf4Yp6MAOaGfgLkPDL7nmrob91IzQa6ox-Q8ssvoZFU7X3dL_Fvq5yJG5wa7ZgifJ4LAkOPbS61BeRx-SktRZkuz4_mQFNupV1qH4wB8c-n7qTPcJYojk5gBIr6FqwpmrYGATOI8r2v9xz8MKCJQTEBWvdcQBS6yiMHvOZRaTNwYVUwCd9hEeFkm1Uh2ifwPTvqrDet9S_5tk4L4xlNd6u88xvv6CIgFY96MPFXZLSUypdCs9bln4buP2EtTjnBlvOb-n1aaECZP3KlwMF0vN5O0AYaUwZabsXwU9kGrw'
                }
            })
            setCalendarData(response.data)
        }catch(error){
            console.error('error',error);
        }
    }  
    // const feGuildData = async()=>{
    //     try {
    //         const response = await axios.get('https://developer-lostark.game.onstove.com/guilds/rankings',{
    //             headers:{
    //                 'Accept' : 'applicaton/json',
    //                 'Authorization' : 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAyNTM1NjkifQ.WsNfKSlrdG-CbZiIYktklYNycVoyXZCvXgDWeLW-kwdS7Pf4Yp6MAOaGfgLkPDL7nmrob91IzQa6ox-Q8ssvoZFU7X3dL_Fvq5yJG5wa7ZgifJ4LAkOPbS61BeRx-SktRZkuz4_mQFNupV1qH4wB8c-n7qTPcJYojk5gBIr6FqwpmrYGATOI8r2v9xz8MKCJQTEBWvdcQBS6yiMHvOZRaTNwYVUwCd9hEeFkm1Uh2ifwPTvqrDet9S_5tk4L4xlNd6u88xvv6CIgFY96MPFXZLSUypdCs9bln4buP2EtTjnBlvOb-n1aaECZP3KlwMF0vN5O0AYaUwZabsXwU9kGrw'
    //             }
    //         })
    //         setGuildData(response.data)
    //     }catch(error){
    //         console.error('error',error);
    //     }
    // }


    useEffect(()=>{
       feCAbyDunData()
       feCGuardData()
       feCalendarData()
       feEventData()
       feNoticeData()
    },[])
console.log('aby',cAbyDunData);
console.log('guard',cGuardData);
console.log('ca;',calendarData);
console.log('eve',eventsData);
console.log('not',noticesData);
    return ( 
        <div>
            
            <DataDownload  notices={noticesData}
        events={eventsData}
        cAbyDun={cAbyDunData}
        cGuard={cGuardData}
        calendar={calendarData} >
            
        </DataDownload>
            
        </div>
     );
}
 
export default FetchData;