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

        const res = await fetch("/api/auth/login", {
          method: "POST",
          body: JSON.stringify(formik.values),
        });
        if (res.ok) {
          const data = await res.json();

          if (data.status == 200) {
            const curUser = data.body;
            //dispatch({ type: "SUCCESS", payload: curUser });

            localStorage.setItem("id", curUser.id);
            localStorage.setItem("userId", curUser.userId);
            localStorage.setItem("user", curUser.username);

            router.push("/rooms/hallway");
          } else if (data.status == 401) {
            setError(data.body);
            //dispatch({ type: "FAILURE", payload: data.status });
          } else {
            //if (data.status == 404)
            setError(data.body);
            //dispatch({ type: "FAILURE", payload: data.status });
          }
        } else {
          //error
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
    <Container
      w={["100%", "30em"]}
      h="100%"
      centerContent
      justifyContent="center"
    >
      <form onSubmit={handleSubmit}>
        <Box
          background="yellow.300"
          h="fit-content"
          display="flex"
          rounded="3xl"
          flexDir="column"
          p={10}
          gap={4}
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
          <Box display="flex" borderRadius="2xl" backgroundColor="lightblue">
            <InputGroup
              size="lg"
              backgroundColor="lightblue"
              borderRadius="2xl"
              fontFamily="sans-serif"
            >
              <Text fontWeight={550} w="7rem" pt={1} m={2}>
                Username
              </Text>
              <Input
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onFocus={() => setDisplayWarning(false)}
                required
                id="username"
                type="text"
                fontSize="sm"
              />
              <InputRightElement
                backgroundColor="gray.100"
                borderRight="1px"
                borderColor="gray.400"
                borderRightRadius="sm"
                shadow=""
              >
                <svg
                  style={{ width: "50px", height: "50px" }}
                  width="68"
                  height="68"
                  viewBox="0 0 68 68"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50.4207 58.6667C49.4522 55.6544 47.3179 52.9926 44.3489 51.0941C41.38 49.1957 37.7423 48.1666 34 48.1666C30.2577 48.1666 26.62 49.1957 23.6511 51.0941C20.6821 52.9926 18.5478 55.6544 17.5793 58.6667"
                    stroke="#7D8790"
                    strokeWidth="2"
                  />
                  <circle
                    cx="34"
                    cy="28.3334"
                    r="8.5"
                    stroke="#7D8790"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </InputRightElement>
            </InputGroup>
          </Box>
          {displayWarning && formik.touched.username && (
            <Text color="red" alignSelf="center" fontWeight="bold">
              {formik.errors.username}
            </Text>
          )}

          <Box display="flex" borderRadius="2xl" backgroundColor="lightblue">
            <Text
              w="7rem"
              fontWeight={550}
              pt={1}
              px={1}
              m={2}
              fontFamily="sans-serif"
            >
              Password
            </Text>
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
              />

              <InputRightElement
                backgroundColor="gray.100"
                borderRightRadius="sm"
                onClick={() => {
                  setHidden(!hidden);
                }}
              >
                {hidden ? (
                  <svg
                    style={{ width: "50px", height: "35px", cursor: "pointer" }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.9202 12.7988C15.9725 12.5407 16 12.2736 16 12C16 9.79086 14.2091 8 12 8C11.7264 8 11.4593 8.02746 11.2012 8.07977L12.1239 9.00251C13.6822 9.06583 14.9342 10.3178 14.9975 11.8761L15.9202 12.7988ZM9.39311 10.5143C9.14295 10.9523 9 11.4595 9 12C9 13.6569 10.3431 15 12 15C12.5405 15 13.0477 14.857 13.4857 14.6069L14.212 15.3332C13.5784 15.7545 12.8179 16 12 16C9.79086 16 8 14.2091 8 12C8 11.1821 8.24547 10.4216 8.66676 9.78799L9.39311 10.5143Z"
                      fill="#222222"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.1537 17.2751L15.4193 16.5406C14.3553 17.1196 13.1987 17.5 12 17.5C10.3282 17.5 8.73816 16.7599 7.36714 15.7735C6.00006 14.79 4.89306 13.5918 4.19792 12.7478C3.77356 12.2326 3.72974 12.1435 3.72974 12C3.72974 11.8565 3.77356 11.7674 4.19792 11.2522C4.86721 10.4396 5.9183 9.29863 7.21572 8.33704L6.50139 7.62271C5.16991 8.63072 4.10383 9.79349 3.42604 10.6164L3.36723 10.6876C3.03671 11.087 2.72974 11.4579 2.72974 12C2.72974 12.5421 3.0367 12.913 3.36723 13.3124L3.42604 13.3836C4.15099 14.2638 5.32014 15.5327 6.78312 16.5853C8.24216 17.635 10.0361 18.5 12 18.5C13.5101 18.5 14.9196 17.9886 16.1537 17.2751ZM9.18993 6.06861C10.0698 5.71828 11.0135 5.5 12 5.5C13.9639 5.5 15.7579 6.365 17.2169 7.41472C18.6799 8.46727 19.849 9.73623 20.574 10.6164L20.6328 10.6876C20.9633 11.087 21.2703 11.4579 21.2703 12C21.2703 12.5421 20.9633 12.913 20.6328 13.3124L20.574 13.3836C20.0935 13.9669 19.418 14.721 18.5911 15.4697L17.883 14.7617C18.6787 14.0456 19.3338 13.3164 19.8021 12.7478C20.2265 12.2326 20.2703 12.1435 20.2703 12C20.2703 11.8565 20.2265 11.7674 19.8021 11.2522C19.107 10.4082 18 9.21001 16.6329 8.22646C15.2619 7.24007 13.6718 6.5 12 6.5C11.3056 6.5 10.6253 6.62768 9.96897 6.84765L9.18993 6.06861Z"
                      fill="#222222"
                    />
                    <path d="M5 2L21 18" stroke="#222222" />
                  </svg>
                ) : (
                  <svg
                    style={{ width: "50px", height: "35px", cursor: "pointer" }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                      stroke="#222222"
                    />
                    <path
                      d="M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z"
                      stroke="#222222"
                    />
                  </svg>
                )}
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
