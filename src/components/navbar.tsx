"use client";

import "@/app/navbar.css";
import "@/app/form.css";
import Link from "next/link";

export default function Navbar() {
  return <>
    <header className="navbar flex justify-space-between align-center">
        <div className="navbar-title">
            <h1>Cloud Todo</h1>
        </div>
        <ul className="navbar-list flex width-35vw justify-space-between">
            <li className="navbar-link">
                <Link href="/">Home</Link>
            </li>
            <li className="navbar-link">
                <Link href="/">Service</Link>
            </li>
            <li className="navbar-link">
                <Link href="/">About</Link>
            </li>
            <li className="navbar-link">
                <Link href="/">Contact</Link>
            </li>
        </ul>
    </header>
  </>;
}
