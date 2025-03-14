import React from "react";
import Button from "../../customs/Button";
import Title from "../../customs/Title";

const AboutUs = () => {
    return (
        <section
            className="relative bg-cover bg-center h-[500px] flex items-center justify-center overflow-hidden "
            style={{
                backgroundImage: "url('https://cdn.prod.website-files.com/656716da09ca22f2f5e147d1/658567648a22c2f261087cc0_1-1.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed"
            }}
        >
            {/* overlay=========================== */}
            <div className="absolute bg-default w-full h-full top-0 left-0 opacity-90 transition-all hover:opacity-95 "></div>
            
            <div className="relative text-center text-white px-6 md:px-12 max-w-3xl flex justify-center items-center flex-col gap-2">
                <Title text="About Us" />
                <p className="text-lg md:text-xl">
                    Welcome to <span className="font-semibold text-yellow-400">Your Tutorial Platform</span>,
                    where learning is made easy and interactive. We provide high-quality tutorials on web
                    development, programming, and more.
                </p>
                <p className="mt-4 text-md">Join us today and start your journey towards mastering new skills!</p>
                <Button text="Explore Courses" link="/courses" />
            </div>
        </section>
    );
};

export default AboutUs;
