"use client";
import styles from "./components/styles.module.css";
import { Box } from "@chakra-ui/react";
import { useEffect, useState, Suspense } from "react";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import Navbar from "../../components/Navbar";
import { ItemImage, SizeFormatter } from "@/app/components/ImageComp";
import Hint from "../../components/Hint";
import { fetchUser } from "@/resources/prisma/fetchUser";

export default function Kitchen() {
  const [room, setRoom] = useState(false);
  const [user, setUser] = useState();

  // Initial Load
  useEffect(() => {
    async function fetchData() {
      const user = await fetchUser();
      if (user) {
        setUser(user);
        setRoom(fetchRoom("kitchen", false));
      }
    }
    fetchData();
  }, []);

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      {room && (
        <Box w={["100%", "30em"]} h="100%" position="relative">
          <Navbar />
          <Box
            display="flex"
            justifyContent="center"
            position="relative"
            width="100%"
          >
            {/* background image */}
            <ItemImage item={room.background} />

            {/* items */}
            <Box position="absolute" zIndex="1">
              {/* blood stained knife (temp viewing) */}
              <Hint>
                <ItemImage
                  item={room.clues.knife}
                  className={styles.item}
                  width="3.5rem"
                  right={SizeFormatter(
                    "1rem", //iphone se
                    "1rem", //iphone xr
                    "1rem", //iphone 12pro
                    "1em", //pixel 5
                    "2rem", //samsung galaxy s8+
                    "2rem", //samsung galaxy s20 ultra
                    "3em", //ipad air
                    "3rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "12rem",
                    "13rem",
                    "12.5rem",
                    "13rem",
                    "12rem",
                    "13.5rem",
                    "16rem",
                    "16rem"
                  )}
                />
              </Hint>
              <Hint>
                <ItemImage
                  item={room.clues.meat}
                  width="4rem"
                  className={styles.item}
                  filter="auto"
                  brightness="70%"
                  left={SizeFormatter(
                    "5rem", //iphone se
                    "5rem", //iphone xr
                    "5rem", //iphone 12pro
                    "5em", //pixel 5
                    "5rem", //samsung galaxy s8+
                    "5rem", //samsung galaxy s20 ultra
                    "5em", //ipad air
                    "5rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "15rem", //iphone se
                    "16rem", //iphone xr
                    "16rem", //iphone 12pro
                    "15em", //pixel 5
                    "15rem", //samsung galaxy s8+
                    "17rem", //samsung galaxy s20 ultra
                    "20rem", //ipad air
                    "20rem" //ipad mini
                  )}
                />
              </Hint>

              <Hint>
                <ItemImage
                  item={room.clues.apron}
                  width="8rem"
                  className={styles.item}
                  left={SizeFormatter(
                    "2rem", //iphone se
                    "2rem", //iphone xr
                    "2rem", //iphone 12pro
                    "2em", //pixel 5
                    "0rem", //samsung galaxy s8+
                    "1rem", //samsung galaxy s20 ultra
                    "2em", //ipad air
                    "2rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "13rem", //iphone se
                    "14rem", //iphone xr
                    "14rem", //iphone 12pro
                    "14em", //pixel 5
                    "12rem", //samsung galaxy s8+
                    "14.5rem", //samsung galaxy s20 ultra
                    "19rem", //ipad air
                    "19rem" //ipad mini
                  )}
                />
              </Hint>
            </Box>
          </Box>

          <Box
            position="absolute"
            bottom="10%"
            mt="2%"
            w="28em"
            background={"white"}
          >
            Text Component Here
          </Box>
        </Box>
      )}
    </Suspense>
  );
}
