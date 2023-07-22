"use client";
import styles from "./components/styles.module.css";
import Navbar from "../../components/Navbar";
import { Box } from "@chakra-ui/react";
import { ItemImage, SizeFormatter } from "../../components/ImageComp";
import { useEffect, useState } from "react";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import Hint from "../../components/Hint";
import { fetchUser } from "@/resources/prisma/fetchUser";
import RoomLayout from "@/app/rooms/layout";
import Loading from "@/app/rooms/loading";

export default function MaanRoom() {
  const [room, setRoom] = useState(false);
  const [user, setUser] = useState();

  // Initial Load
  useEffect(() => {
    async function fetchData() {
      const user = await fetchUser();
      if (user) {
        setUser(user);
        setRoom(fetchRoom("maan", true));
      }
    }
    fetchData();
  }, []);

  return (
    <RoomLayout>
      {room ? (
        <Box w={["100%", "30em"]} h="100%" p={4} position="relative">
          <Navbar />
          <Box
            display="flex"
            justifyContent="center"
            position="relative"
            width="100%"
          >
            <ItemImage item={room.background} />
            <Box position="absolute" zIndex="1">
              {/* spacesword  */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.spacesword}
                  className={styles.item}
                  width="2.7rem"
                  filter="auto"
                  brightness="75%"
                  right={SizeFormatter(
                    "0rem", //iphone se
                    "0rem", //iphone xr
                    "0rem", //iphone 12pro
                    "0em", //pixel 5
                    "0rem", //samsung galaxy s8+
                    "0rem", //samsung galaxy s20 ultra
                    "0em", //ipad air
                    "0rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "11rem",
                    "12.5rem",
                    "11.7rem",
                    "11.7rem",
                    "10.4rem",
                    "12.4rem",
                    "15rem",
                    "15.2rem"
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
