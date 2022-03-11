import React from "react";
import { ToastItemContainer, ToastItemVariants } from "./styles";
import Flex from "@kaiju-ui/flex";
import { FiX } from "react-icons/fi";

interface ToastItemProps extends ToastItemVariants {
  message?: string;
  title: string;
  id: string;
  type?: "success" | "error";
}

function ToastItem({ message, title, id, type = "success" }: ToastItemProps) {
  return (
    <>
      <ToastItemContainer type={type}>
        <Flex justifyContent="spaceBetween">
          <Flex direction="column" css={{ marginRight: "10px" }}>
            {title && <strong>{title}</strong>}
            {message && <p>{message}</p>}
          </Flex>
          <Flex
            css={{
              svg: {
                "&:hover": {
                  cursor: "pointer",
                },
              },
            }}
          >
            <FiX />
          </Flex>
        </Flex>
      </ToastItemContainer>
    </>
  );
}

export default ToastItem;
