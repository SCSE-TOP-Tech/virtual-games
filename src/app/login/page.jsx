"use client";

import * as yup from "yup";
import { useFormik } from "formik";
import {
  Box,
  Container,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Login() {
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    console.log(formik.values.username);
    e.preventDefault();
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: handleSubmit,
    validationSchema: yup.object({
      username: yup.string().trim().required("Name is required"),
      password: yup
        .string()
        .min(8, "Password must contain at least 8 characters!")
        .max(50, "Password must contain at most 50 characters!!")
        .matches(
          /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,50}$/,
          "Password must be a mix of uppercase/lowercase letters, numbers and special characters"
        ),
    }),
  });
  return (
    <Container
      w={["100%", "30em"]}
      h="100%"
      centerContent
      justifyContent="center"
      fontFamily="Open Sans"
    >
      <Box
        background="yellow.300"
        h="fit-content"
        display="flex"
        rounded="3xl"
        flexDir="column"
        p={10}
        gap={4}
      >
        <Heading fontSize="lg" as="i" textColor="gray.600">
          Welcome To Our Virtual Game
        </Heading>
        <InputGroup size="lg" backgroundColor="lightblue" borderRadius="2xl">
          <Text fontWeight={550} pt={1} m={2}>
            Username
          </Text>
          <Input
            value={formik.values.username}
            onChange={formik.handleChange}
            required
            id="username"
            type="text"
            fontSize="sm"
          />
        </InputGroup>
        <InputGroup size="lg" backgroundColor="lightblue" borderRadius="2xl">
          <Text fontWeight={550} pt={1} m={2}>
            Password
          </Text>
          <Input
            value={formik.values.password}
            onChange={formik.handleChange}
            required
            id="password"
            type="text"
            fontSize="sm"
          />
        </InputGroup>

        <Box display="flex" justifyContent="center">
          <Text
            as="button"
            px={4}
            rounded="2xl"
            fontWeight={600}
            py={1}
            background="whiteAlpha.700"
            textColor="gray.600"
            onClick={handleSubmit}
          >
            Enter!
          </Text>
        </Box>
      </Box>
    </Container>
  );
}
