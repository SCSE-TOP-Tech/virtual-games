"use client";
import Provider from "@/app/components/Provider";

export default async function RootLayout(param) {
  return (
    <html lang="en">
      <body>
        <Provider>{param?.children}</Provider>
      </body>
    </html>
  );
}
