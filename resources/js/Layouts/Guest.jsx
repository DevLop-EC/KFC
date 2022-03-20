import { Head, usePage } from "@inertiajs/inertia-react";
import React from "react";
import Navbar from "../Components/Guest/Navbar";

import "./Guest.css";

export default function Guest({ children, title }) {
    return (
        <section className="main">
            <Head title={title} />
            <Navbar />
            {children}
        </section>
    );
}
