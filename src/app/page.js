"use client";
import { Text } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default async function Home() {
  const router = useRouter();
  return (
    <main>
      <Text fontSize="6xl" color="darkblue">
        Welcome to Virtual Games
      </Text>
      <button
        onClick={() => signIn("credentials", { callbackUrl: "/rooms/hallway" })}
      >
        Sign In
      </button>
      <button onClick={() => router.push("/signup")}>Sign Up</button>
    </main>
  );
}
