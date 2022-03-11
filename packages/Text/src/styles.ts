import { VariantProps } from "@stitches/react";
import { styled } from "@kaiju-ui/theme";

export const TextContainer = styled("span", {
  fontFamily: "Poppins",
});

export type TextVariantsProps = VariantProps<typeof TextContainer>;
