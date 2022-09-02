import React, {useEffect, useState} from "react";
import '../styles/Header.css';
import { useParams } from "react-router-dom";


function MultiStoreComp() {
    const {store, zipCode} = useParams()
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
        })
    },[])

    return (
        <h1>test</h1>
    );
  }

export default MultiStoreComp;
