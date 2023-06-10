import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Box,
} from "@chakra-ui/react";
import { SizeFormatter } from "./ImageComp";

const Hint = ({ children }) => {
  const itemInfo = children.props.item;
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Box>{children}</Box>
      </PopoverTrigger>
      <PopoverContent
        top={children.props?.top}
        bottom={children.props?.bottom}
        right={children.props?.right}
        left={children.props?.left}
        width={SizeFormatter(
          "10rem", //iphone se
          "10rem", //iphone xr
          "10rem", //iphone 12pro
          "10rem", //pixel 5
          "10rem", //samsung galaxy s8+
          "10rem", //samsung galaxy s20 ultra
          "18rem", //ipad air
          "18rem" //ipad mini
        )}
      >
        <PopoverCloseButton />
        <PopoverHeader
          fontSize={SizeFormatter(
            "xs", //iphone se
            "xs", //iphone xr
            "xs", //iphone 12pro
            "xs", //pixel 5
            "xs", //samsung galaxy s8+
            "xs", //samsung galaxy s20 ultra
            "md", //ipad air
            "md" //ipad mini
          )}
        >
          {itemInfo?.name ? itemInfo.name : "An Item!"}
        </PopoverHeader>
        <PopoverBody
          fontSize={SizeFormatter(
            "xs", //iphone se
            "xs", //iphone xr
            "xs", //iphone 12pro
            "xs", //pixel 5
            "xs", //samsung galaxy s8+
            "xs", //samsung galaxy s20 ultra
            "md", //ipad air
            "md" //ipad mini
          )}
        >
          {itemInfo?.desc ? itemInfo.desc : "A mysterious item is found"}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Hint;
