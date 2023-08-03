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
                  width="1.3rem"
                  filter='auto'
                  brightness='100%'
                  right={SizeFormatter(
                    "2.6rem", //iphone se
                    "2.9rem", //iphone xr
                    "2.8rem", //iphone 12pro
                    "2.6rem", //pixel 5
                    "1rem", //samsung galaxy s8+
                    "1rem", //samsung galaxy s20 ultra
                    "1rem", //ipad air
                    "1rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "13.7rem", //iphone se
                    "15.2rem", //iphone xr
                    "15.3rem", //iphone 12pro
                    "15.2rem", //pixel 5
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
      ) : (
        <Loading />
      )}
    </RoomLayout>
  );
}