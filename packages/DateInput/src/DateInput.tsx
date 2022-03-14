import React, {
  InputHTMLAttributes,
  useState,
  useEffect,
  useCallback,
  useRef,
  ChangeEvent,
} from "react";
import {
  DateInputLabel,
  InputContainer,
  InputContent,
  InputWrapper,
} from "./styles";
import { DateInputProvider, useDateInputContext } from "./DateInputContext";
import maskCreation from "./utils/inputMaskCreation";
import Calendar from "./Calendar";
import { BsCalendar3 } from "react-icons/bs";

export interface DateInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  placeholder?: string;
  defaultValue?: string;
}

function DateInput({
  label,
  placeholder,
  name,
  defaultValue,
  ...props
}: DateInputProps) {
  return (
    <DateInputProvider>
      <DateInputWrapper
        label={label}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
        {...props}
      />
    </DateInputProvider>
  );
}

function DateInputWrapper({
  label,
  name,
  placeholder,
  defaultValue,
  onChange,
  ...props
}: DateInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [inputValue, setInputValue] = useState<string | readonly string[]>("");

  const {
    registerPositions,
    calendarOpen,
    setYear,
    handleValue,
    handleCalendar,
    value,
  } = useDateInputContext();

  const divContainerRef = useRef<HTMLDivElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const valueDateRegex = /(?=[0-9]{2,2}\/[0-9]{2,2}\/[0-9]{4,4})/gm;

  const handleChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      setIsFocused(!!ev.target.value);

      const valueMasked = maskCreation({
        type: "date",
        value: ev.target.value,
      });

      if (valueDateRegex.test(valueMasked)) {
        const valueSplitted = valueMasked.split("/");
        const day = Number(valueSplitted[0]);
        const month = valueSplitted[1];
        const year = valueSplitted[2];

        handleValue({
          day,
          month,
          year,
          formatted: valueMasked,
        });
      }

      setInputValue(valueMasked);

      onChange && onChange(ev);
    },
    [onChange, handleValue, valueDateRegex]
  );

  const setFocus = useCallback(() => {
    handleCalendar();

    if (hasValue) {
      setIsFocused(true);
      return;
    }

    if (placeholder) {
      setIsFocused(true);
      return;
    }

    setIsFocused((prevState) => !prevState);
  }, [handleCalendar, placeholder, hasValue]);

  const handleBlur = useCallback(() => {
    if (hasValue) {
      setIsFocused(true);
      return;
    }

    if (placeholder) {
      setIsFocused(true);
      return;
    }

    setIsFocused((prevState) => !prevState);
  }, [hasValue, placeholder]);

  useEffect(() => {
    setHasValue(!!value.formatted);
  }, [value]);

  useEffect(() => {
    const xPosition = divContainerRef.current?.getBoundingClientRect().left;
    const yPosition = divContainerRef.current?.getBoundingClientRect().top;

    if (xPosition && yPosition) {
      registerPositions({
        x: xPosition,
        y: yPosition,
      });
    }
  }, [registerPositions]);

  useEffect(() => {
    if (placeholder || defaultValue) {
      setIsFocused(true);
    }
  }, [placeholder, defaultValue]);

  useEffect(() => {
    if (defaultValue) {
      const splittedDate = defaultValue.split("/");

      handleValue({
        day: Number(splittedDate[0]),
        month: splittedDate[1],
        year: splittedDate[2],
        formatted: defaultValue,
      });
    }
  }, []);

  useEffect(() => {
    setYear("2021");
  }, [setYear]);

  useEffect(() => {
    if (value.formatted) {
      setInputValue(value.formatted);
      setIsFocused(true);
    }
  }, [value.formatted]);

  useEffect(() => {
    if (defaultValue) {
      setHasValue(!!defaultValue);
      setInputValue(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    if (defaultValue) {
      setIsFocused(true);
    }
  }, [defaultValue]);

  return (
    <>
      <InputContainer ref={divContainerRef}>
        <InputContent>
          <DateInputLabel isFocused={isFocused} htmlFor={name}>
            {label}
          </DateInputLabel>
          <InputWrapper
            onChange={handleChange}
            onFocus={setFocus}
            onBlur={handleBlur}
            name={name}
            id={name}
            maxLength={10}
            value={inputValue}
            ref={inputRef}
            placeholder={placeholder}
            {...props}
          />
          <BsCalendar3 />
        </InputContent>
        {calendarOpen && <Calendar />}
      </InputContainer>
    </>
  );
}

export default DateInput;
