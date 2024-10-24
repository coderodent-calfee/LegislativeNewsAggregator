import '../App.css'
import React, { MouseEvent } from 'react';
import {makeGetRequest} from "../utils/getter";

function GetButton() {
    function getRequest(event : MouseEvent){
        console.log("event: ", event);
        const params = new URLSearchParams({ searchText: `Hello?` });
        return makeGetRequest("search", params); // search path or whatever
    }
    return (
        <button onClick={getRequest}>Get Something
        </button>
    );
}
export default GetButton;