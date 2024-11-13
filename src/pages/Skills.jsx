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
                        <Cards src="https://cdn.pixabay.com/photo/2018/10/10/13/51/cat-3737294_1280.jpg"
                               title="Pull Request Ettiqute"
                               body="PRs handling is a crucial part of teamwork, regardless of skill level there's always an oppertunity to learn, asking why certain code is written a certian way opens up a dialog to learn and grow"
                               link="https://gist.github.com/mikepea/863f63d6e37281e329f8"
                               link_description="PR Ettiqute"
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
                        <Cards src="https://cdn.pixabay.com/photo/2018/10/10/13/51/cat-3737294_1280.jpg"
                               title="Pull Request Ettiqute"
                               body="PRs handling is a crucial part of teamwork, regardless of skill level there's always an oppertunity to learn, asking why certain code is written a certian way opens up a dialog to learn and grow"
                               link="https://gist.github.com/mikepea/863f63d6e37281e329f8"
                               link_description="PR Ettiqute"
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
