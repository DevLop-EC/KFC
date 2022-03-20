import React from "react";
import { SliderSection } from "../Components/SliderSection/SliderSection";
import Guest from "../Layouts/Guest";

export default function Home() {
    return (
        <>
            <div className="content">
                <div className="text">
                    <h2>
                        It's finger <br /> licking <span>Good.</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati dolor quia perspiciatis omnis deleniti impedit
                        maiores, deserunt libero aspernatur reprehenderit qui
                        suscipit aut, nostrum sequi facere! Repellendus aliquid
                        sapiente ab
                    </p>
                    <a href="/" className="btn__order">
                        Order Now
                    </a>
                </div>
                <div className="slider">
                    <div className="slides active">
                        <img src="/img/menu/burger_fries.png" />
                    </div>
                    <div className="slides">
                        <img src="/img/menu/burger.png" />
                    </div>
                    <div className="slides">
                        <img src="/img/menu/french_fries.png" />
                    </div>
                    <div className="slides">
                        <img src="/img/menu/fried_chicken.png" />
                    </div>
                </div>
            </div>

            <SliderSection />
        </>
    );
}

Home.layout = (page) => <Guest children={page} title={"Home"} />;
