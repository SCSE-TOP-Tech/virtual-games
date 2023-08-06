"use client";

import Provider from "@/app/components/Provider";
import { AuthContextProvider } from "../context/AuthContext";
export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <AuthContextProvider>{children}</AuthContextProvider>
        </Provider>
      </body>
    </html>
  );
}
