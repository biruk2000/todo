import React from "react";

export default function EmptyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Auth Layout</h1>
      {children}
    </div>
  );
}
