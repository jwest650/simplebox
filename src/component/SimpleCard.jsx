import React, { Component } from "react";
import Description from "./Description";
import Title from "./Title";
import Image from "./Image";
import image from "../Images/christopher-gower-m_HRfLhgABo-unsplash.jpg";

class SimpleCard extends Component {
    render() {
        let desc =
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatibus doloribus ab nihil eos. Ducimus nesciunt aliquid repudiandae eveniet qui, laudantium deserunt eius porro numquam molestias, debitis beatae ratione quam soluta, fuga quia pariatur veniam! Temporibus ipsum laborum praesentium atque.";
        return (
            <div className="flex">
                <Image image={image} />
                <div>
                    <Title text="Hacker News" />
                    <Description description={desc} />
                </div>
            </div>
        );
    }
}

export default SimpleCard;
