import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@modulz/radix-icons";
import Button from "@kaiju-ui/button/src";
import { useDateInputContext } from "../DateInputContext";
import Flex from "@kaiju-ui/flex";
import Text from "@kaiju-ui/text";

function CalendarHeader() {
  const {
    handleNextMonth,
    handlePrevMonth,
    months,
    currentMonth,
  } = useDateInputContext();

  return (
    <Flex alignItems="center" justifyContent="center">
      <Button
        variant="ghost"
        disabled={new Date().getMonth() === currentMonth}
        onClick={handlePrevMonth}
        css={{
          width: "fit-content",
          "&:disabled": {
            backgroundColor: "transparent !important",
            opacity: 0.3,
          },
        }}
      >
        <ChevronLeftIcon />
      </Button>
      <Text
        as="span"
        css={{
          fontSize: "1.2rem",
          fontWeight: "700",
          minWidth: "110px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {months[currentMonth]}
      </Text>

      <Button
        variant="ghost"
        onClick={handleNextMonth}
        css={{ width: "fit-content" }}
      >
        <ChevronRightIcon />
      </Button>
    </Flex>
  );
}

export default CalendarHeader;
