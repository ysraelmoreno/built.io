import React, {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { CheckboxBox, CheckboxContainer, CheckboxLabel } from "./styles";
import { CheckIcon } from "@modulz/radix-icons";

interface CheckboxProps {
  children: React.ReactNode;
  name: string;
}

function Checkbox({ children, name, ...props }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleCheck = useCallback(() => {
    const checkboxValue = !isChecked;
    setIsChecked(checkboxValue);

    if (checkboxRef.current) {
      checkboxRef.current.checked = checkboxValue ? true : false;
    }
  }, [isChecked, checkboxRef]);

  return (
    <>
      <CheckboxContainer type="button" onClick={handleCheck}>
        <CheckboxBox isChecked={isChecked}>
          {isChecked && <CheckIcon />}
        </CheckboxBox>
        <CheckboxLabel>{children}</CheckboxLabel>
      </CheckboxContainer>
      <input
        type="checkbox"
        style={{ display: "none" }}
        ref={checkboxRef}
        name={name}
        {...props}
      />
    </>
  );
}

export default Checkbox;
