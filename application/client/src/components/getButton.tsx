import '../App.css'
import React, { MouseEvent } from 'react';
import {makeGetRequest} from "../utils/getter";

export interface GetButtonParams {
    state? : string;
    topic? : string;
    search?: string;
}
export interface GetButtonProperties {
    path : string;
    params? : GetButtonParams;
    children? : any;
}



const GetButton: React.FC<GetButtonProperties> = (props) => {
    console.log("props: ", props);
    // There are Two things to do:
    // one: submit to the api with query params
    //      /api/news?state=x&topic=y&search=keyword
    // two: submit to the api with router params
    //      /api/news/identifier 
    const path = props.path;
    const queryParams = props.params ? Object.entries(props.params) : undefined;
    const params = (queryParams) ? new URLSearchParams(queryParams): new URLSearchParams();
        
    function getRequest(event : MouseEvent){
        console.log("event: ", event);
        return makeGetRequest(path, params); // search path or whatever
    }
    return (
        <button onClick={getRequest}>
            {props.children}
        </button>
    );
}

export default GetButton;