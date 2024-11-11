// pages/AboutMe.js
import React from "react";
import {Image} from "@nextui-org/react";
import selfie from "../images/img-bSiYB5MIdVJFEyQ4mLVOE.jpg"

function AboutMe() {
    return (
        <div>
            <h2 className={"m-5 flex-wrap"}>About Me</h2>
            <p>Software Dev with over a decade of hands-on experience in software development</p>
            <p>and technical leadership.</p>
            <p>Proven expertise in architecting scalable solutions across industries </p>
            <p>including healthcare, cybersecurity, and logistics.</p>
            <p>With a strong focus on backend development, and cloud integration</p>
            <p>Gamer, Hobbyist game developer, tinkerer and cat lover</p>

            <p className={"m-5 flex-wrap"}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <Image
                        src={selfie}
                        width={600}
                        height={600}
                        objectFit="contain"
                    />
                </div>
            </p>


        </div>

    );
}

export default AboutMe;
