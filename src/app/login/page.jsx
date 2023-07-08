"use client";

import * as yup from "yup";
import { useFormik } from "formik";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

export default function Login() {
  const handleSubmit = async (e) => {
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
    <Box w={["100%", "30em"]} h="100%" p={4} background="transparent"></Box>
  );
}
