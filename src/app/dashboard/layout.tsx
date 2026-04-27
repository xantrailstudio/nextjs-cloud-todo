"use client";

import "@/app/globals.css";
// import Navbar from "@/components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex height-full width-full">
      <div className="flex flex-column width-full">
        {/* <Navbar /> */}
        <main className="padding-50 grow overflow-auto">{children}</main>
      </div>
    </div>
  );
}
