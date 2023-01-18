import React from 'react';
import {Navigate} from "react-router-dom";
import {PagesType} from "../../dataState/dataState";

type ContentTypeProps={
    route:number,
    pages:PagesType[],
    // currentPageNumber:number
    // arrayLength:number
}

export const Content = (props: ContentTypeProps) => {
    const {route} = props
    // console.log('route: ',route)
    return (
        route < props.pages.length
            ? <div>
                <div>
                    {props.pages[route].heading}
                </div>
                <div>
                    {props.pages[route].about}
                </div>

            </div>
            : <Navigate to={'/xxx'}/>

    );
};





// export const Content = (props:ContentTypeProps) => {
//     const{route, pages}=props
//     // console.log(currentPageNumber)
//     // console.log(arrayLength)
//     return (
//         currentPageNumber<=arrayLength
//         ?   <div>
//                 <div>{heading}</div>
//                 <div>{pages}</div>
//             </div>
//
//             : <Navigate to={'/xxx'}/>
//     );
// };

