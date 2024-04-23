/** @format */

import React from "react";

const Filter = ({ filterData }) => {
    return (
        <div>
            {
                filterData.map((data) => {
                    return <button>{data.title} key={ data.id}</button>
                })
            }
        </div>
    );
};

export default Filter;
