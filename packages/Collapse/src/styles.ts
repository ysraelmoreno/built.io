import { styled, keyframes } from "@kaiju-ui/theme";

export const CollapseContainer = styled("div", {
  borderRadius: "10px",
  padding: "10px",
  width: "100%",

  h5: {
    opacity: "0.4",
    fontWeight: "500",
    margin: "5px 0",
  },
});

export const CollapseItemTrigger = styled("button", {
  width: "100%",
  cursor: "pointer",
  padding: "15px",
  background: "#FFF",
  height: "100%",
  border: "none",
  borderBottom: "1px solid #E5E5E5",
  display: "flex",
  borderRadius: "5px",
  justifyContent: "space-between",
  transition: "all 0.3s ease",

  variants: {
    active: {
      true: {
        background: "#FFEDE2",
      },
    },

    variant: {
      special: {
        borderRadius: "10px",
        border: "1px solid #c4c4c4",
      },
      default: {},
    },
  },

  compoundVariants: [
    {
      variant: "special",
      active: true,
      css: {
        color: "$gray1 !important",
        svg: {
          path: {
            color: "$gray1 !important",
          },
        },
        backgroundColor: "$primary",
        border: "1px solid $primary",
      },
    },
  ],
});

export const CollapseContentContainer = styled("div", {
  display: "block",
  overflow: "hidden",
  height: "0 ",
  borderBottom: "1px solid rgba(218, 218, 218, 0)",
  borderLeft: "1px solid rgba(218, 218, 218, 0)",
  borderRight: "1px solid rgba(218, 218, 218, 0)",
  borderBottomLeftRadius: "10px",
  borderBottomRightRadius: "10px",
  transition: "all 0.4s ease",
  transformOrigin: "top",

  variants: {
    active: {
      true: {
        height: "var(--collapse-content-height)",
        borderBottom: "1px solid rgba(218, 218, 218, 0.8)",
        borderLeft: "1px solid rgba(218, 218, 218, 0.8)",
        borderRight: "1px solid rgba(218, 218, 218, 0.8)",
      },
    },
    type: {
      special: {
        borderBottom: "1px solid $primary",
        borderLeft: "1px solid $primary",
        borderRight: "1px solid $primary",
      },
      default: {},
    },
  },

  compoundVariants: [
    {
      type: "special",
      active: false,
      css: {
        borderBottom: "1px solid rgba(218, 218, 218, 0)",
        borderRight: "1px solid rgba(218, 218, 218, 0)",
        borderLeft: "1px solid rgba(218, 218, 218, 0)",
      },
    },
    {
      type: "special",
      active: true,
      css: {
        borderBottom: "1px solid $primary",
        borderRight: "1px solid $primary",
        borderLeft: "1px solid $primary",
      },
    },
  ],
});

export const CollapseItemContainer = styled("div", {
  [`& + &`]: {
    marginTop: "20px",
  },
});
