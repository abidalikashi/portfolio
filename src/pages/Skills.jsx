// pages/AboutMe.js
import React from "react";
import {Accordion, AccordionItem, Card} from "@nextui-org/react";
import SkillBar from "../components/SkillBar";
import {Spacer} from "@nextui-org/react";

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
    return (
        <div>
            <h2>My Skill Set</h2>
            <div style={{display: "flex", width: "100vw", height: "100vh", padding: "20px"}}>

                <div className="flex">
                    <Card className="flex">
                    <Spacer x={4} />
                    < h4>Card 2</h4>
                    </Card>

                </div>
                <div style={{flex: 1}}/>

                {/* Right side for the Accordion */}
                <div style={{maxWidth: "800px", margin: "0 auto", padding: "20px", flex: 1}}>
                    <Accordion selectionMode="multiple" variant="splitted">
                        <AccordionItem key="1" aria-label="Programming" title="Programming Languages">
                            {programming.map((item) => (
                                <SkillBar label={item.label} value={item.value} key={item.label}/>
                            ))}
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Frameworks" title="Frameworks">
                            {frameworks.map((item) => (
                                <SkillBar label={item.label} value={item.value} key={item.label}/>
                            ))}
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Tools" title="Tools & Platforms">
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
