import React from 'react';
type ContentPropsType={
    heading:string
   pages:string
}
export const Content:React.FC<ContentPropsType> = (props) => {
    const{heading,pages}=props
    return (
        <div>
<div>{heading}</div>
<div>{pages}</div>
        </div>
    );
};

