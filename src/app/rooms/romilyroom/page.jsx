"use client";
import styles from "./components/styles.module.css";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import { ItemImage, SizeFormatter } from "../../components/ImageComp";
import Hint from "../../components/Hint";
import Navbar from "../../components/Navbar";
import { fetchUser } from "@/resources/prisma/fetchUser";
import Loading from "@/app/rooms/loading";
import RoomLayout from "@/app/rooms/layout";

export default function RomilyRoom() {
  const [room, setRoom] = useState(false);
  const [user, setUser] = useState();

  // Initial Load
  useEffect(() => {
    async function fetchData() {
      const user = await fetchUser();
      if (user) {
        setUser(user);
        setRoom(fetchRoom("romily", true));
      }
    }
    fetchData();
  }, []);

  return (
    <RoomLayout>
      {room ? (
        <Box w={["100%", "30em"]} h="100%" position="relative">
          <Navbar />

          <Box
            display="flex"
            justifyContent="center"
            position="relative"
            width="100%"
          >
            {/* background image */}
            <ItemImage item={room.background} zIndex="0" />

            {/* items */}
            <Box position="absolute" zIndex="1">
              {/* Basketball */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.basketball}
                  className={styles.item}
                  width="3rem"
                  filter="auto"
                  brightness="60%"
                  right={SizeFormatter(
                    "7rem", //iphone se
                    "8rem", //iphone xr
                    "7rem", //iphone 12pro
                    "7.5rem", //pixel 5
                    "7rem", //samsung galaxy s8+
                    "8rem", //samsung galaxy s20 ultra
                    "10rem", //ipad air
                    "10rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "20rem",
                    "22.5rem",
                    "21rem",
                    "21rem",
                    "19rem",
                    "22.5rem",
                    "26.5rem",
                    "26.5rem"
                  )}
                />
              </Hint>

              {/* Punching Bag */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.punchingbag}
                  className={styles.item}
                  width={SizeFormatter(
                    "6.5rem", //iphone se
                    "6.5rem", //iphone xr
                    "6.5rem", //iphone 12pro
                    "6.5rem", //pixel 5
                    "6.5rem", //samsung galaxy s8+
                    "6.5rem", //samsung galaxy s20 ultra
                    "9rem", //ipad air
                    "9rem" //ipad mini
                  )}
                  filter="auto"
                  brightness="70%"
                  left={SizeFormatter(
                    "5rem", //iphone se
                    "6rem", //iphone xr
                    "5.5rem", //iphone 12pro
                    "5.5rem", //pixel 5
                    "5rem", //samsung galaxy s8+
                    "6rem", //samsung galaxy s20 ultra
                    "6rem", //ipad air
                    "6rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "9rem", //iphone se
                    "11.5rem", //iphone xr
                    "10rem", //iphone 12pro
                    "10rem", //pixel 5
                    "8rem", //samsung galaxy s8+
                    "11rem", //samsung galaxy s20 ultra
                    "12rem", //ipad air
                    "12rem" //ipad mini
                  )}
                />
              </Hint>

              {/* Towel */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.towel}
                  className={styles.item}
                  width="4rem"
                  filter="auto"
                  brightness="80%"
                  left={SizeFormatter(
                    "1rem", //iphone se
                    "1rem", //iphone xr
                    "1rem", //iphone 12pro
                    "1rem", //pixel 5
                    "1rem", //samsung galaxy s8+
                    "1rem", //samsung galaxy s20 ultra
                    "1rem", //ipad air
                    "1rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "6rem", //iphone se
                    "8rem", //iphone xr
                    "7rem", //iphone 12pro
                    "7rem", //pixel 5
                    "5rem", //samsung galaxy s8+
                    "8rem", //samsung galaxy s20 ultra
                    "8.6rem", //ipad air
                    "8.6rem" //ipad mini
                  )}
                />
              </Hint>

              {/* Clothes */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.clothes}
                  className={styles.item}
                  width="8rem"
                  filter="auto"
                  brightness="80%"
                  right={SizeFormatter(
                    "1rem", //iphone se
                    "1rem", //iphone xr
                    "1rem", //iphone 12pro
                    "1rem", //pixel 5
                    "1rem", //samsung galaxy s8+
                    "1rem", //samsung galaxy s20 ultra
                    "1rem", //ipad air
                    "1rem" //ipad mini
                  )}
                  bottom={SizeFormatter(
                    "2rem", //iphone se
                    "0rem", //iphone xr
                    "1rem", //iphone 12pro
                    "1rem", //pixel 5
                    "2.5rem", //samsung galaxy s8+
                    "0rem", //samsung galaxy s20 ultra
                    "1rem", //ipad mini
                    "1rem"
                  )}
                />
              </Hint>

              {/* Dumbbell */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.dumbbell}
                  className={styles.item}
                  filter="auto"
                  brightness="70%"
                  width={SizeFormatter(
                    "2rem", //iphone se
                    "2rem", //iphone xr
                    "2rem", //iphone 12pro
                    "2rem", //pixel 5
                    "2rem", //samsung galaxy s8+
                    "2rem", //samsung galaxy s20 ultra
                    "3rem", //ipad air
                    "3rem" //ipad mini
                  )}
                  right={SizeFormatter(
                    "6rem", //iphone se
                    "7rem", //iphone xr
                    "6.5rem", //iphone 12pro
                    "6.5rem", //pixel 5
                    "6rem", //samsung galaxy s8+
                    "7rem", //samsung galaxy s20 ultra
                    "9rem", //ipad air
                    "9rem" //ipad mini
                  )}
                  bottom={SizeFormatter(
                    "7.5rem", //iphone se
                    "5.9rem", //iphone xr
                    "6.9rem", //iphone 12pro
                    "6.8rem", //pixel 5
                    "8rem", //samsung galaxy s8+
                    "6rem", //samsung galaxy s20 ultra
                    "8.2rem", //ipad air
                    "8.2rem" //ipad mini
                  )}
                />
              </Hint>
              <Hint>
                <ItemImage
                  item={room.clues.laptop}
                  filter="auto"
                  brightness="70%"
                  className={styles.item}
                  width={SizeFormatter(
                    "5rem", //iphone se
                    "5.8rem", //iphone xr
                    "6.2rem", //iphone 12pro
                    "6.5rem", //pixel 5
                    "6rem", //samsung galaxy s8+
                    "6.5rem", //samsung galaxy s20 ultra
                    "7.4rem", //ipad air
                    "7.4rem" //ipad mini
                  )}
                  left={SizeFormatter(
                    "2rem", //iphone se
                    "2rem", //iphone xr
                    "2.5rem", //iphone 12pro
                    "2.5rem", //pixel 5
                    "2rem", //samsung galaxy s8+
                    "1.7rem", //samsung galaxy s20 ultra
                    "2rem", //ipad air
                    "2rem" //ipad mini
                  )}
                  bottom={SizeFormatter(
                    "4.2rem", //iphone se
                    "2.7rem", //iphone xr
                    "6rem", //iphone 12pro
                    "4rem", //pixel 5
                    "5.8rem", //samsung galaxy s8+
                    "3.3rem", //samsung galaxy s20 ultra
                    "4.6rem", //ipad air
                    "4.6rem" //ipad mini
                  )}
                />
              </Hint>
            </Box>
          </Box>
          <Box mt="2%" w="100%" background={"white"}>
            Text Component Here
          </Box>
        </Box>
      ) : (
        <Loading />
      )}
    </RoomLayout>
  );
}
