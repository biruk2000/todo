import React from "react";

export default function EmptyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" min-h-screen flex justify-center items-center">
      {children}
    </div>
  );
}
