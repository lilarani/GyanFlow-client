import React from "react";
import Button from "../customs/Button";
import Title from "../customs/Title";

import "./about.css"

const About = () => {
    return (
      
        <section
            className="relative  bg-cover bg-center h-screen flex items-center justify-center overflow-hidden "
            style={{
                backgroundImage: "url('https://cdn.prod.website-files.com/656716da09ca22f2f5e147d1/658567648a22c2f261087cc0_1-1.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed"
            }}
        >
            {/* overlay=========================== */}
            <div className="absolute bg-default w-full h-full top-0 left-0 opacity-80 transition-all hover:opacity-90 duration-500 "></div>
            
            <div className="relative text-center text-white px-6 md:px-12 max-w-3xl flex justify-center items-center flex-col gap-2">
                <Title text="About Us" />
                <p className="text-lg md:text-xl">
                    Welcome to <span className="font-semibold text-yellow-400">Your Tutorial Platform</span>,
                    where learning is made easy and interactive. We provide high-quality tutorials on web
                    development, programming, and more.
                </p>
                <p className="mt-4 text-md">Join us today and start your journey towards mastering new skills!</p>
                <Button text="Explore Courses" link="/courses" />
                <div className="absolute top-[-80px] left-[200px]">
                    <div className=" animate-scale w-[200px] h-[200px] border rounded-full  flex justify-center items-center ">
                        <div className="w-[100px]  h-[100px] border rounded-full child_animation"></div>
                    </div>
                </div>
                <div class="row ">
                    <div class="box">G</div>
                    <div class="box">Y</div>
                    <div class="box">A</div>
                    <div class="box">N</div>
                    <div class="box">F</div>
                    <div class="box">L</div>
                    <div class="box">0</div>
                    <div class="box">W</div>
                </div>
            </div>
            

        </section>
    );
};

export default About;
