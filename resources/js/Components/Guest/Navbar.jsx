import { Link } from "@inertiajs/inertia-react";
import React from "react";

import { FiUser } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";

export default function Navbar() {
    return (
        <header>
            <a href="/">
                <img
                    src="/img/logos/kfcdark.png"
                    alt="logo kfc"
                    className="logo"
                />
            </a>
            <ul className="navigation">
                <li>
                    <Link href={route("home")}>Inicio</Link>
                </li>
                <li>
                    <Link href={route("dashboard")}>Dashboard</Link>
                </li>
                <li>
                    <Link
                        href={route("login")}
                        className="bg-light rounded-circle p-3"
                    >
                        <FiUser
                            style={{
                                color: "red",
                                width: "20px",
                                height: "auto",
                            }}
                        />
                    </Link>

                    {/* <Link href={route("login")}>Inciar Sesion</Link> */}
                </li>
                <li>
                    <Link className="bg-light rounded-circle p-3">
                        <FiShoppingBag
                            style={{
                                color: "red",
                                width: "20px",
                                height: "auto",
                            }}
                        />
                    </Link>
                </li>
            </ul>
        </header>
    );
}
