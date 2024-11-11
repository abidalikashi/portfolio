import React from "react";
import { Progress } from "@nextui-org/react";

const SkillBar = ({ label, value }) => {
    return (
        <Progress
            size="sm"
            radius="sm"
            classNames={{
                base: "max-w-md",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-blue-900 to-purple-900",
                label: "tracking-wider font-medium text-default-600",
                value: "text-foreground/60",
            }}
            label={label}
            value={value}
            showValueLabel={true}
        />
    );
};

export default SkillBar;
