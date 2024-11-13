import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { useState, useRef, useEffect } from "react";

export default function Cards({ src, title, body, link, link_description }) {
    const [expanded, setExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const contentRef = useRef(null);

    const toggleContent = () => {
        setExpanded(!expanded);
    };

    // Check for overflow when the component is mounted or when content changes
    useEffect(() => {
        const checkOverflow = () => {
            if (contentRef.current) {
                setIsOverflowing(contentRef.current.scrollHeight > contentRef.current.clientHeight);
            }
        };

        checkOverflow(); // Initial check

        window.addEventListener("resize", checkOverflow); // Check overflow on window resize

        return () => {
            window.removeEventListener("resize", checkOverflow); // Clean up the event listener
        };
    }, [body]);

    return (
        <Card className="max-w-[400px]">
            <Image
                radius="sm"
                src={src}
                className="z-0 w-full h-full object-cover"
                height={300}
                width={300}
                removeWrapper={true}
                isZoomed={true}
            />
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-md">{title}</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <div
                    ref={contentRef}
                    className={expanded ? "card-content-expanded" : "card-content"}
                >
                    <text>{body}</text>
                </div>
                {isOverflowing && !expanded && (
                    <a onClick={toggleContent} style={{ color: "indianred", cursor: "pointer" }}>
                        Read more
                    </a>
                )}
                {expanded && (
                    <a onClick={toggleContent} style={{ color: "indianred", cursor: "pointer" }}>
                        Show less
                    </a>
                )}
            </CardBody>
            <Divider />
            <CardFooter>
                <Link isExternal showAnchorIcon href={link}>
                    {link_description}
                </Link>
            </CardFooter>
        </Card>
    );
}
