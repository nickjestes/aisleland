import React, {useEffect, useState} from "react";
import '../styles/Header.css';
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';


function MultiStoreComp() {
    const {store, zipCode} = useParams()
    const [storesList, setStores] = useState(null)


    console.log(store, zipCode)
    useEffect(()=>{
            fetch(`http://localhost:3001/api/stores/${store}/${zipCode}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            } 
        }).then(res=>{
            return res.json()
        }).then(data=>{
            console.log(data)
            setStores(data)
        })
    },[])

    return (
                storesList && storesList.map((storeEntry) => (
                <Table key={storeEntry.id}>
                    {/* <thread>
                        <th className='text-center'>Store Name</th>
                        <th className='text-center'>Store Address</th>
                    </thread> */}
                    <tr>
                        <td className='text-center'>
                            {storeEntry.name}
                            </td>
                        <td className='text-center'>
                            {storeEntry.address}
                            </td>
                        <button>Select Store</button>
                    </tr>
        
                </Table>
            ))
    );
  }

export default MultiStoreComp;
