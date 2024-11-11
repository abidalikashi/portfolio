import {
    Navbar,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom"; // Use useLocation hook

function CustomNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); // Get the current location (path)

    const menuItems = [
        { label: "About Me", to: "/about-me" },
        { label: "Skills", to: "/skills" },
        { label: "Projects", to: "/projects" },
        { label: "Interests", to: "/interests" },
        { label: "Hobbies", to: "/hobbies" },
    ];

    return (
        <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item) => (
                    <NavbarItem key={item.label}>
                        <Button color="foreground"
                                as={RouterLink}
                                to={item.to}
                                radius="full"
                                className="bg-gradient-to-tr from-blue-900 to-purple-900 text-white"
                                variant={location.pathname === item.to ? "faded" : ""}

                        >
                            {item.label}
                        </Button>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Button as={RouterLink} to="/socials" className="bg-gradient-to-tr from-blue-900 to-purple-900 text-white shadow-lg">Socials</Button>
                </NavbarItem>
                <NavbarItem>
                    <Button as={RouterLink} to="/contact" className="bg-gradient-to-tr from-blue-900 to-purple-900 text-white shadow-lg">
                        Contact Me
                    </Button>
                </NavbarItem>
            </NavbarContent>
            {/* Add mobile menu logic here if needed */}
        </Navbar>
    );
}

export default CustomNavbar;
