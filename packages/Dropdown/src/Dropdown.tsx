import { useState } from "react";
import Button from "../../Button/src";
import { DropdownContainer, DropdownWrapper } from "./styles";
import { createPortal } from "react-dom";

interface DropdownItemProps {
  children: React.ReactNode;
}

interface DropdownProps {
  children: React.ReactNode;
  label: string;
}

function DropdownItem({ children }: DropdownItemProps) {
  return createPortal(
    <DropdownWrapper>{children}</DropdownWrapper>,
    document.querySelector("body") as HTMLElement
  );
}

function Dropdown({ children, label, ...props }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <DropdownContainer>
      <Button onClick={handleOpenDropdown}>{label}</Button>
      <DropdownItem>{children}</DropdownItem>
    </DropdownContainer>
  );
}

export default Dropdown;
