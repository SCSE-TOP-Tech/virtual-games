"use client";
import styles from "./components/styles.module.css";
import { Box, Img } from "@chakra-ui/react";
import { ItemImage, SizeFormatter } from "../../components/ImageComp";
import { useEffect, useState } from "react";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import Navbar from "../../components/Navbar";
import Hint from "../../components/Hint";
import { fetchUser } from "@/resources/prisma/fetchUser";
import Loading from "@/app/rooms/loading";
import RoomLayout from "@/app/rooms/layout";
import Phone from "./components/Phone";

export default function BrandRoom() {
  const [room, setRoom] = useState(false);
  const [isPhoneOpen, viewPhone] = useState(false);
  const [user, setUser] = useState();
  const togglePhone = () => {
    // opens and closes phone display
    viewPhone(!isPhoneOpen);
  };

  // Initial Load
  useEffect(() => {
    async function fetchData() {
      const currentUser = await fetchUser();
      if (currentUser) {
        setUser(currentUser);
        setRoom(fetchRoom("brand", true));
      }
    }
    fetchData();
  }, [user, setUser]);


  return (
    <RoomLayout>
      {room ? (
        <div>
        <Box w={["100%", "30em"]} h="100%" p={4} position="relative">
          <Navbar />
          <Box
            display="flex"
            justifyContent="center"
            position="relative"
            width="100%"
          >
            {/* background image */}
            {isPhoneOpen && <Phone handler={togglePhone} />}
            <ItemImage item={room.background} />
            <Box position="absolute" zIndex="1">
              {/* temp custom image to be used */}
              {/* galaxy phone */}
              <Hint>
                <ItemImage
                  item={room.clues.galaxy_phone}
                  className={styles.item}
                  width="20rem"
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
                  bottom={SizeFormatter(
                    "1rem", //iphone se
                    "1rem", //iphone xr
                    "1rem", //iphone 12pro
                    "1rem", //pixel 5
                    "1rem", //samsung galaxy s8+
                    "1rem", //samsung galaxy s20 ultra
                    "1rem", //ipad air
                    "1rem" //ipad mini
                  )}
                  onClick={togglePhone}
                />
              </Hint>
            </Box>
          </Box>
          <Box mt="2%" w="100%" background={"white"}>
            Text Component Here
          </Box>
        </Box>
      </div>
      ) : (
        <Loading />
      )}
    </RoomLayout>
  );
}