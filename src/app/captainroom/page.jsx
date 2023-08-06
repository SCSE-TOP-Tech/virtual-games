"use client";
import styles from "./components/styles.module.css";
import { Box } from "@chakra-ui/react";
import { useEffect, useState, Suspense } from "react";
import fetchRoom from "@/resources/cloudinary/fetchRoom";
import Inventory from "../components/Inventory";
import { ItemImage, SizeFormatter } from "../components/ImageComp";
import Hint from "../components/Hint";
import Navbar from "../components/Navbar";

export default function CaptainRoom() {
  const [room, setRoom] = useState(false);
  const [inventory, setInventory] = useState([])

  // Initial Load
  useEffect(() => {
    fetchRoom("captain", false).then((data) => {
      setRoom(data);
    });
  }, []);
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      {room && (
        <Box w={["100%", "30em"]} h="100%" position="relative">
          <Navbar />
          {/* container for background image and items*/}
          <Box
            display="flex"
            justifyContent="center"
            zIndex="0"
            width="100%"
          >
            {/* background image */}
            <ItemImage height="80%" item={room.background} />
            {/* items container */}
            <Box position="absolute" zIndex="1">
              <Hint>
                <ItemImage
                  item={room.clues.music_albums}
                  onClick={() => setInventory((prev) => [...prev, "music_albums"])}
                  className={styles.item}
                  width="4rem"
                  filter="auto"
                  brightness="50%"
                  right={SizeFormatter(
                    "5rem", //iphone se
                    "5rem", //iphone xr
                    "5rem", //iphone 12pro
                    "5rem", //pixel 5
                    "5rem", //samsung galaxy s8+
                    "5rem", //samsung galaxy s20 ultra
                    "7rem", //ipad air
                    "7rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "18rem", //iphone se
                    "18rem", //iphone xr
                    "18rem", //iphone 12pro
                    "18rem", //pixel 5
                    "18rem", //samsung galaxy s8+
                    "18rem", //samsung galaxy s20 ultra
                    "18rem", //ipad air
                    "18rem" //ipad mini
                  )}
                />
              </Hint>

              {/* Lipstick */}
              <Hint>
                <ItemImage
                  item={room.clues.lipstick}
                  onClick={() => setInventory((prev) => [...prev, "lipstick"])}

                  className={styles.item}
                  width="2rem"
                  filter="auto"
                  brightness="70%"
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
                  top={SizeFormatter(
                    "30rem", //iphone se
                    "30rem", //iphone xr
                    "30rem", //iphone 12pro
                    "30rem", //pixel 5
                    "30rem", //samsung galaxy s8+
                    "30rem", //samsung galaxy s20 ultra
                    "30rem", //ipad air
                    "30rem" //ipad mini
                  )}
                />
              </Hint>

              {/* Guestbook */}
              <Hint>
                <ItemImage
                  item={room.clues.guestbook}
                  onClick={() => setInventory((prev) => [...prev, "guestbook"])}

                  className={styles.item}
                  width="3rem"
                  filter="auto"
                  brightness="80%"
                  left={SizeFormatter(
                    "11.5rem", //iphone se
                    "11.5rem", //iphone xr
                    "11.5rem", //iphone 12pro
                    "11.5rem", //pixel 5
                    "11rem", //samsung galaxy s8+
                    "11.5rem", //samsung galaxy s20 ultra
                    "13rem", //ipad air
                    "13rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "19rem", //iphone se
                    "19rem", //iphone xr
                    "19rem", //iphone 12pro
                    "19rem", //pixel 5
                    "19rem", //samsung galaxy s8+
                    "19rem", //samsung galaxy s20 ultra
                    "19rem", //ipad air
                    "19rem" //ipad mini
                  )}
                />
              </Hint>

              {/* Note */}
              <Hint>
                <ItemImage
                  item={room.clues.note}
                  onClick={() => setInventory((prev) => [...prev, "note"])}
                  
                  className={styles.item}
                  width="1.5rem"
                  right={SizeFormatter(
                    "4rem", //iphone se
                    "4.5rem", //iphone xr
                    "4rem", //iphone 12pro
                    "4rem", //pixel 5
                    "4rem", //samsung galaxy s8+
                    "4.5rem", //samsung galaxy s20 ultra
                    "6rem", //ipad air
                    "6rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "16rem", //iphone se
                    "16rem", //iphone xr
                    "16rem", //iphone 12pro
                    "16rem", //pixel 5
                    "16rem", //samsung galaxy s8+
                    "16rem", //samsung galaxy s20 ultra
                    "16rem", //ipad air
                    "16rem" //ipad mini
                  )}
                />
              </Hint>

              {/* blood letter */}
              <Hint>
                <ItemImage
                  item={room.clues.blood_letter}
                  onClick={() => setInventory((prev) => [...prev, "blood_letter"])}

                  className={styles.item}
                  width="10rem"
                  right={SizeFormatter(
                    "0rem", //iphone se
                    "0rem", //iphone xr
                    "0rem", //iphone 12pro
                    "0rem", //pixel 5
                    "0rem", //samsung galaxy s8+
                    "0rem", //samsung galaxy s20 ultra
                    "0rem", //ipad air
                    "0rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "4rem", //iphone se
                    "4rem", //iphone xr
                    "4rem", //iphone 12pro
                    "4rem", //pixel 5
                    "4rem", //samsung galaxy s8+
                    "4rem", //samsung galaxy s20 ultra
                    "4rem", //ipad air
                    "4rem" //ipad mini
                  )}
                />
              </Hint>

              {/* broken watch */}
              <Hint>
                <ItemImage
                  item={room.clues.broken_watch}
                  onClick={() => setInventory((prev) => [...prev, "broken_watch"])}

                  className={styles.item}
                  width="3.5rem"
                  left={SizeFormatter(
                    "6.5rem", //iphone se
                    "6.5rem", //iphone xr
                    "6.5rem", //iphone 12pro
                    "6.5rem", //pixel 5
                    "6.5rem", //samsung galaxy s8+
                    "6.5rem", //samsung galaxy s20 ultra
                    "7rem", //ipad air
                    "7rem" //ipad mini
                  )}
                  top={SizeFormatter(
                    "13.5rem", //iphone se
                    "13.5rem", //iphone xr
                    "13.5rem", //iphone 12pro
                    "13.5rem", //pixel 5
                    "13.5rem", //samsung galaxy s8+
                    "13.5rem", //samsung galaxy s20 ultra
                    "13.5rem", //ipad air
                    "13.5rem" //ipad mini
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
