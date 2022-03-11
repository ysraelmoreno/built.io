import React, {
  ForwardedRef,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { CheckboxBox, CheckboxContainer, CheckboxLabel } from "./styles";
import { CheckIcon } from "@modulz/radix-icons";

interface CheckboxProps {
  children: React.ReactNode;
  name: string;
}

const Checkbox = forwardRef(
  (
    { children, name, ...props }: CheckboxProps,
    forwardedRef: ForwardedRef<HTMLInputElement>
  ) => {
    const [isChecked, setIsChecked] = useState(false);

    const checkboxRef = useRef<HTMLInputElement>(null);

    const handleCheck = useCallback(() => {
      const checkboxValue = !isChecked;
      setIsChecked(checkboxValue);

      if (checkboxRef?.current) {
        checkboxRef.current.checked = checkboxValue ? true : false;
      }
    }, [isChecked, checkboxRef]);

    useImperativeHandle(
      forwardedRef,
      () => checkboxRef.current as HTMLInputElement
    );

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
);

export default Checkbox;
