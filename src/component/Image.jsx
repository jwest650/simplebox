import React from "react";
const Image = ({ image }) => {
    return (
        <div className="img-con">
            <img src={image} alt="" />
        </div>
    );
};

export default Image;
