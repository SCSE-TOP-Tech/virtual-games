"use client";
import styles from "./components/styles.module.css";
import { Container, Text, Box } from "@chakra-ui/react";
import { Suspense, useEffect, useState } from "react";
import fetchRoom from "@/pages/api/rooms/fetchRoom";
import { CldImage, ItemImage, SizeFormatter } from "../components/ImageComp";
import Map from "../Map";
export default function CooperPage() {
  const [room, setRoom] = useState(false);
  const a = SizeFormatter();
  const b = {
    iphone_se: "0",
    iphone_xr: "8rem",
    iphone_12pro: "0",
    pixel_5: "0",
    galaxy_s8plus: "0",
    galaxy_s20ultra: "0",
    ipad_air: "0",
    ipad_mini: "0",
  };
  //console.log(a.iphone_se === b.iphone_se);
  //console.log(isEqual(a, b));
  // Initial Load
  useEffect(() => {
    fetchRoom("cooper", true).then((data) => {
      setRoom(data);
    });
  }, []);

  return (
    <div>
      {room && (
        <div>
          <Box w={["100%", "30em"]} h="100%" p={4}>
            {/* background ima`ge */}
            <Container display="flex" justifyContent="space-around">
              {/* placeholders for components  */}
              <Map />
              <Box color="red" fontWeight="bold" fontSize="2vh">
                Time placeholder
              </Box>
            </Container>
            <Box
              display="flex"
              justifyContent="center"
              position="relative"
              zIndex="0"
              width="100%"
            >
              <CldImage item={room.background} />
              <Box position="absolute" zIndex="1">
                {/* luggage  */}

                <ItemImage
                  item={room.dummy_objects.luggage}
                  className={styles.item}
                  onClick={console.log("test")}
                  //chakra props
                  right={SizeFormatter(
                    "0",
                    "15rem", //iphone xr prop
                    "0",
                    "0",
                    "0",
                    "0",
                    "0",
                    "0"
                  )}
                  top={{ iphone_xr: "15rem" }}
                  width="8rem"
                  brightness="50%"
                />

                {/* newspaper  */}
                <CldImage
                  item={room.dummy_objects.newspaper}
                  className={styles.item}
                  style={{
                    position: "relative",
                    right: "40px",
                    top: "70px",
                    width: "70px",
                    filter: "brightness(0.75)",
                  }}
                />
                {/* id  */}
                <CldImage
                  item={room.dummy_objects.spaceID_card}
                  className={styles.item}
                  style={{
                    position: "relative",
                    right: "130px",
                    top: "250px",
                    width: "100px",
                    filter: "brightness(0.75)",
                  }}
                />

                {/* coffeemachine  */}
                <CldImage
                  item={room.dummy_objects.coffee_machine}
                  className={styles.item}
                  style={{
                    position: "relative",
                    left: "200px",
                    top: "150px",
                    width: "100px",
                    filter: "brightness(0.75)",
                  }}
                />
              </Box>
            </Box>
            <Box
              position="absolute"
              bottom="10%"
              mt="2%"
              w="28em"
              background="white"
            >
              Text Component Here
            </Box>
          </Box>
        </div>
      )}
    </div>
  );
}
