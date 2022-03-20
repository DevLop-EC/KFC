import { Link } from "@inertiajs/inertia-react";
import React from "react";

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
                    <Link href={route("login")}>Inciar Sesion</Link>
                </li>
                <li>
                    <Link href={route("register")}>Registro</Link>
                </li>
            </ul>
        </header>
    );
}
