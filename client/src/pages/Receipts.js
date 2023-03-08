import React, { useState} from "react";
import { useQuery, useMutation, gql } from "@apollo/react-hooks";
import {RECEIPTS} from "../utils/queries.js";

export default function Receipts(){
    const {data, loading } = useQuery(RECEIPTS);
    const receipts = data?.receipts.receipts||[];
    console.log(receipts);
    return(
    <>
        <section>
            <header>
                <h2>All receipts</h2>
            </header>
            <blockquote>
              {receipts.map((receipt)=>(
                <p>{receipt.email}</p>
              ))}
            </blockquote>
        </section>
    </>
    )
}