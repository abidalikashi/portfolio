import React from "react";
import { Progress } from "@nextui-org/react";

export default function LoadingBar({ value, setValue }) {
    React.useEffect(() => {
        const interval = setInterval(() => {
            setValue((v) => (v >= 100 ? 0 : v + 10));
        }, 1);

        return () => clearInterval(interval);
    }, [setValue]);

    return (
        <div className="flex flex-col justify-center items-center">
            <Progress
                aria-label="Loading..."
                size="md"
                value={value}
                color="success"
                showValueLabel={false}
                className="max-w-md"
                radius={"none"}
                classNames={{ track: "bg-black" }}
            />
        </div>
    );
}