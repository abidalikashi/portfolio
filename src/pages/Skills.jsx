// pages/AboutMe.js
import React from "react";
import {Accordion, AccordionItem, Card} from "@nextui-org/react";
import SkillBar from "../components/SkillBar";
import {Spacer} from "@nextui-org/react";
import {ImCogs, ImEmbed2} from "react-icons/im";
import {FaTools} from "react-icons/fa";
import Cards from "../components/Cards";
import {GiBlackBook} from "react-icons/gi";

function Skills() {

    const programming = [
        {label: "Java", value: 80},
        {label: "C#", value: 65},
        {label: "Python", value: 75},
        {label: "TypeScript", value: 50},
        {label: "C", value: 45},
        {label: "SQL", value: 80},
    ];

    const frameworks = [
        {label: "Django", value: 70},
        {label: "Springboot", value: 60},
        {label: ".NetCore", value: 45},
        {label: "Flask", value: 80},
        {label: "Unity", value: 65},
        {label: "React", value: 40},
        {label: "Quarkus", value: 70},
        {label: "REST API", value: 90},
    ]

    const tools = [
        {label: "Jenkins", value: 90},
        {label: "Azure", value: 50},
        {label: "Cypress", value: 90},
        {label: "Linux", value: 90},
        {label: "Git", value: 90},
        {label: "Playwright", value: 50},
        {label: "Docker", value: 65},
        {label: "Generative AI", value: 83},
        {label: "Node", value: 67},
    ]

    const itemClasses = {
        base: "py-0 w-full",
        title: "font-normal text-medium",
        trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
        indicator: "text-medium",
        content: "text-small px-2",

    };
    return (
        <div>
            <div style={{ padding: "40px"}}>
                <h2>My Skill Set</h2>
            </div>

            <div style={{display: "flex", width: "100vw", height: "100vh", padding: "20px"}}>

                <div className="card-container">
                    <div >
                        <Cards src="https://cdn.pixabay.com/photo/2020/06/23/08/46/cat-5331883_1280.jpg"
                               title="Coding Standards"
                               body="Clean reusable and modular code is important to me, the easier the code to read the easier it is to maintain, wise man once said write code as if the maintainer knows where you live"
                               link="https://a.co/d/0OSHExy"
                               link_description="Clean Code Book"
                        />


                    </div>
                    <div>
                        <Cards src="https://cdn.pixabay.com/photo/2018/10/10/13/51/cat-3737294_1280.jpg"
                               title="Pull Request Ettiqute"
                               body="PRs handling is a crucial part of teamwork, regardless of skill level there's always an oppertunity to learn, asking why certain code is written a certian way opens up a dialog to learn and grow"
                               link="https://gist.github.com/mikepea/863f63d6e37281e329f8"
                               link_description="PR Ettiqute"
                        />
                    </div>

                    <div>
                        <Cards src="https://cdn.pixabay.com/photo/2023/03/14/14/57/cat-box-7852492_1280.jpg"
                               title="Iterative Approach"
                               body="Achieving MVP as quickly as possible then iterating over it is usually my design style, I make sure that it works first then pull reusable features modularize the code base and then work it to ensure its scalable"
                               link="https://www.geeksforgeeks.org/software-engineering-prototyping-model/"
                               link_description="Prototyping Model"
                        />
                    </div>
                    <div>
                        <Cards src="https://cdn.pixabay.com/photo/2020/03/18/22/35/cats-4945658_1280.png"
                               title="Teaching and Leadership"
                               body="Teaching code has been one of my most enjoyed aspects of my career, I love it so much I've taught online classes at Varsity tutors on my spare time, I enjoy guiding people into their software journey"
                               link="https://www.varsitytutors.com"
                               link_description="Varsity Tutors"
                        />
                    </div>
                    <div>
                        <Cards src="https://cdn.pixabay.com/photo/2022/12/31/11/48/cat-7688476_1280.jpg"
                               title="Testing"
                               body="Whether its unit testing or test automation I always ensure my code is covered and my product is tested, I'll take initiative in building an automation framework that fits your organization needs"
                               link="https://gist.github.com/abidalikashi/d5b7cc6ad5e83b023147284953b85b4f"
                               link_description="Testing Principals"
                        />
                    </div>
                    <div>
                        <Cards src="https://cdn.pixabay.com/photo/2023/09/04/14/44/black-kitten-8232835_960_720.jpg"
                               title="Generative AI"
                               body="AI and Prompt Engineering has been a growing skill with me, I use AI to accelerate my workflows and achieve faster turnaround on my projects, learning how to setup and prompt LLMs has been a wild ride"
                               link="https://github.com/dair-ai/Prompt-Engineering-Guide?tab=readme-ov-file"
                               link_description="Prompt Engineering"
                        />
                    </div>
                </div>

                <div/>

                {/* Right side for the Accordion */}
                <div style={{minWidth: "600px", maxWidth:"600px", padding: "20px", flex: 20}}>
                    <Accordion selectionMode="multiple"
                               itemClasses={itemClasses}>
                        <AccordionItem key="1" aria-label="Programming" title="Programming Languages"
                                       indicator={<ImEmbed2/>}>
                            {programming.map((item) => (
                                <SkillBar label={item.label} value={item.value} key={item.label}/>
                            ))}
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Frameworks" title="Frameworks"
                                           indicator={<ImCogs/>}>
                                {frameworks.map((item) => (
                                    <SkillBar label={item.label} value={item.value} key={item.label}/>
                                ))}
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Tools" title="Tools & Platforms"
                                           indicator={<FaTools/>}>
                                {tools.map((item) => (
                                    <SkillBar label={item.label} value={item.value} key={item.label}/>
                                ))}                        </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>

            );
            }

            export default Skills;
