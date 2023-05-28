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
        top={children.props.top}
        right={children.props.right}
        width={SizeFormatter(
          "12rem", //iphone se
          "12rem", //iphone xr
          "12rem", //iphone 12pro
          "12rem", //pixel 5
          "12rem", //samsung galaxy s8+
          "12rem", //samsung galaxy s20 ultra
          "18rem", //ipad air
          "18rem" //ipad mini
        )}
      >
        <PopoverCloseButton />
        <PopoverHeader>
          {itemInfo?.name ? itemInfo.name : "An Item!"}
        </PopoverHeader>
        <PopoverBody>
          {itemInfo?.desc ? itemInfo.desc : "A mysterious item is found"}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Hint;
