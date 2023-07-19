"use client";
import { Box, Text } from "@chakra-ui/react";
import Login from "@/app/login/page";
import { SessionProvider } from "next-auth/react";

export default function Home({ Login, pageProps: { session, ...pageProps } }) {
  return (
    <main>
      <SessionProvider session={session}>
        <Login {...pageProps} />
      </SessionProvider>
    </main>
  );
}
