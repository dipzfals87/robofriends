import React from "react";

const Scroll = (props) => {
    // console.log(props); // cardlist akan dijadikan CHILDREN dari Scroll
    return (
        <div style={{ overflowY: 'scroll', border: '5px solid black', height: '800px' }}>
            {props.children}
        </div>
    );
};

export default Scroll;