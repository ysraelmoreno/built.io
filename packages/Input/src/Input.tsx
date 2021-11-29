import {
  FocusEvent,
  InputHTMLAttributes,
  useState,
  useEffect,
  forwardRef,
  ForwardedRef,
  useCallback,
} from "react";

import { IconBaseProps } from "react-icons";
import generateHash from "./utils/generateHash";
import {
  InputContainer,
  InputWrapper,
  InputLabel,
  ErrorMessage,
} from "./styles";

type InputProps = {
  icon?: React.ComponentType<IconBaseProps>;
  floatingLabel?: boolean;
  label?: string;
  variant?: "primary" | "alternative";
  error?: string;
  id?: string;
  placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef(
  (
    {
      placeholder,
      floatingLabel = true,
      icon: Icon,
      variant = "primary",
      defaultValue,
      type = "text",
      error,
      label,
      id = generateHash(),
      ...props
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const handleFocus = useCallback(
      (ev: FocusEvent<HTMLInputElement>) => {
        setIsFocused((prevState) => (placeholder ? true : !prevState));
        setIsFilled(!!ev.target.value);
      },
      [placeholder]
    );

    useEffect(() => {
      if (defaultValue || placeholder) setIsFilled(true);
    }, []);

    return (
      <>
        <InputContainer variant={variant}>
          <InputLabel
            floatingLabel={floatingLabel}
            htmlFor={id}
            isFilled={isFilled}
            isFocused={isFocused}
            variant={variant}
          >
            {Icon && <Icon />}
            {label}
          </InputLabel>
          <InputWrapper
            type={type}
            ref={ref}
            id={id}
            defaultValue={defaultValue}
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={handleFocus}
            {...props}
          />
        </InputContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </>
    );
  }
);

export default Input;
