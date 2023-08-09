"use client";
import { useFormik } from "formik";
import {
  Box,
  Container,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [displayWarning, setDisplayWarning] = useState(false);
  const [hidden, setHidden] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formik.errors.username || formik.errors.password) {
      setDisplayWarning(true);
      setTimeout(() => {
        setDisplayWarning(false);
      }, 3000);
    } else {
      try {
        //api call
        console.log("Login verification begins");

        const res = await fetch("/api/auth/login", {
          method: "POST",
          body: JSON.stringify(formik.values),
        });
        if (res.ok) {
          const data = await res.json();

          if (data.status == 200) {
            const curUser = data.body;
            //dispatch({ type: "SUCCESS", payload: curUser });
            console.log("Login successful");

            localStorage.setItem("userId", curUser.userId);
            localStorage.setItem("user", curUser.username);

            router.push("/transitions");
          } else {
            //if (data.status == 401 || data.status == 404)
            localStorage.clear();
            setError(data.body);
            //dispatch({ type: "FAILURE", payload: data.status });
          }
        } else {
          //error
          localStorage.clear();
          throw new Error(res.name, res.statusText);
        }
      } catch ({ name, message }) {
        console.log(`${name} : ${message}`);
        setError(message);
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <Container w={["100%", "30em"]} h="100%" transform="auto" translateY="50%">
      <form onSubmit={handleSubmit}>
        <Box
          background="yellow.300"
          h="fit-content"
          display="flex"
          rounded="3xl"
          flexDir="column"
          p={10}
          gap={4}
          mt={10}
        >
          <Heading
            display="flex"
            justifyContent="center"
            fontSize="lg"
            textColor="gray.600"
            fontFamily={"sans-serif"}
            fontWeight="extrabold"
          >
            Welcome To Our Virtual Game
          </Heading>
          <Box
            display="flex"
            flexDir="column"
            borderRadius="2xl"
            backgroundColor="lightblue"
          >
            <InputGroup
              size="lg"
              backgroundColor="lightblue"
              borderRadius="2xl"
              fontFamily="sans-serif"
            >
              <Input
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onFocus={() => setDisplayWarning(false)}
                required
                id="username"
                type="text"
                fontSize="sm"
                placeholder="Username"
                _placeholder={{
                  fontFamily: "sans-serif",
                  opacity: 0.8,
                  fontWeight: "bold",
                }}
              />
            </InputGroup>
          </Box>
          {displayWarning && formik.touched.username && (
            <Text color="red" alignSelf="center" fontWeight="bold">
              {formik.errors.username}
            </Text>
          )}

          <Box display="flex" borderRadius="lg" backgroundColor="lightblue">
            <InputGroup size="lg">
              <Input
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onFocus={() => setDisplayWarning(false)}
                required
                id="password"
                type={hidden ? "password" : "text"}
                fontSize="sm"
                placeholder="Password"
                _placeholder={{
                  fontFamily: "sans-serif",
                  opacity: 0.8,
                  fontWeight: "bold",
                }}
              />

              <InputRightElement
                backgroundColor="gray.100"
                borderRightRadius="sm"
                onClick={() => {
                  setHidden(!hidden);
                }}
                borderRadius="lg"
              >
                {hidden ? <ViewOffIcon /> : <ViewIcon />}
              </InputRightElement>
            </InputGroup>
          </Box>
          {displayWarning && formik.touched.password && (
            <Text color="red" alignSelf="center" fontWeight="bold">
              {formik.errors.password}
            </Text>
          )}
          <Box
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            gap="2"
          >
            <Text
              as="button"
              px={4}
              rounded="2xl"
              fontWeight={600}
              py={1}
              background="whiteAlpha.700"
              textColor="gray.600"
              type="submit"
              _hover={{
                background: "whiteAlpha.900",
                transform: "translateY(-5px)",
                transition: "0.2s",
              }}
            >
              Enter!
            </Text>
            {error !== "" && (
              <Text
                px={4}
                as="button"
                rounded="lg"
                fontWeight="bold"
                py={2}
                background="red.400"
                textColor="gray.200"
                _hover={{
                  textColor: "gray.100",
                  background: "red.300",
                  transform: "translateY(-2px)",
                  transition: "0.2s",
                }}
                onClick={() => setError("")}
              >
                {error}
              </Text>
            )}
          </Box>
        </Box>
      </form>
    </Container>
  );
}
