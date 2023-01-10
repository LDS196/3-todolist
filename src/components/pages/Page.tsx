import React from 'react';
import {DataStateType, PagesType} from "../DataState/DataState";
import {useParams} from "react-router-dom";
import {Content} from "./Content";
import {Error404} from "./Error404";

type PageType = {
    pages: Array<PagesType>
}
export const Page = (props: PageType) => {
    const param = useParams()
    console.log("params:", param)

    return (
        <>
            {Number(param.id) === 0 || Number(param.id) === 1 || Number(param.id) === 2
                ? <Content heading={props.pages[Number(param.id)].heading} pages={props.pages[Number(param.id)].about}/>
                : <Error404/>}
        </>
        // <div>
        //     <div>{props.pages[Number(param.id)].heading}</div>
        //     <div>{props.pages[Number(param.id)].about}</div>
        //
        // </div>
    );
};

