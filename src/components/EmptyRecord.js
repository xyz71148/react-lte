import React from 'react';
import { AiOutlineInbox } from "react-icons/ai";

export default function EmptyRecord() {
    return (
        <div className={"empty_record"}>
            <AiOutlineInbox style={{color:"#d8d8d8"}} size={"5em"}/>
        </div>
    )
}
