"use client";
import styles from "./components/styles.module.css";
import { Box } from "@chakra-ui/react";
import { Suspense, useEffect, useState } from "react";
import { ItemImage, SizeFormatter } from "@/app/components/ImageComp";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import Inventory from "../components/Inventory";
import Navbar from "../components/Navbar";
import Hint from "../components/Hint";

export default function CarmenRoom() {
  const [room, setRoom] = useState(false);
  const [inventory, setInventory] = useState([])

  // Initial Load
  useEffect(() => {
    fetchRoom("carmen", true).then((data) => {
      setRoom(data);
    });
  }, []);

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      {room && (
        <Box w={["100%", "30em"]} h="100%" p={4} position="relative">
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
              {/* mail */}
              <Hint>
                <ItemImage
                  item={room.clues.mail}
                  onClick={() => setInventory((prev) => [...prev, "mail"])}

                  className={styles.item}
                  width="5.9rem"
                  filter="auto"
                  brightness="76%"
                  right={SizeFormatter(
                    "8rem", //iphone se
                    "9rem", //iphone xr
                    "8.3rem", //iphone 12pro
                    "8.3rem", //pixel 5
                    "7.8rem", //samsung galaxy s8+
                    "8.7rem", //samsung galaxy s20 ultra
                    "10.2rem", //ipad air
                    "10.2rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "8.8rem",
                    "10.3rem",
                    "9.3rem",
                    "9.6rem",
                    "8.3rem",
                    "10.2rem",
                    "12.7rem",
                    "12.7rem"
                  )}
                />
              </Hint>

              {/* master key */}
              <Hint>
                <ItemImage
                  item={room.clues.master_key}
                  onClick={() => setInventory((prev) => [...prev, "master_key"])}

                  className={styles.item}
                  width="2rem"
                  filter="auto"
                  brightness="76%"
                  right={SizeFormatter(
                    "0rem", //iphone se
                    "1rem", //iphone xr
                    "1rem", //iphone 12pro
                    "1rem", //pixel 5
                    "1rem", //samsung galaxy s8+
                    "1.3rem", //samsung galaxy s20 ultra
                    "1.3rem", //ipad air
                    "1.4rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "13rem",
                    "15.7rem",
                    "14rem",
                    "14.4rem",
                    "12.3rem",
                    "15.5rem",
                    "19.5rem",
                    "19.5rem"
                  )}
                />
              </Hint>

              {/* clothspin */}
              <Hint>
                <ItemImage
                  item={room.dummy_objects.clothespin}
                  onClick={() => setInventory((prev) => [...prev, "clothespin"])}

                  className={styles.item}
                  width="1.5rem"
                  filter="auto"
                  brightness="20%"
                  left={SizeFormatter(
                    "11rem", //iphone se
                    "12.2rem", //iphone xr
                    "12rem", //iphone 12pro
                    "12rem", //pixel 5
                    "11rem", //samsung galaxy s8+
                    "12rem", //samsung galaxy s20 ultra
                    "14rem", //ipad air
                    "14rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "12.7rem",
                    "15rem",
                    "13.6rem",
                    "14rem",
                    "11.8rem",
                    "15rem",
                    "19rem",
                    "19rem"
                  )}
                />
              </Hint>
            </Box>
          </Box>
          <Inventory items={inventory} room={room} styles={styles.item} />
        </Box>
      )}
    </Suspense>
  );
}
