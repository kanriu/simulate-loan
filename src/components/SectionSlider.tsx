import Slider from "rc-slider";
import { Text } from "./Text";
import "../styles/sectionSlider.css";
import "../../node_modules/rc-slider/assets/index.css";
import { useEffect, useState, memo } from "react";
import { Data } from "../interfaces/services";
import { useDebouncedValue } from "../hooks/useDebouncedValue";

interface Props {
  onChange: <K extends keyof Data>(value: Data[K], field: K) => void;
  title: string;
  min?: number;
  max?: number;
}

export const SectionSlider = memo(({ onChange, title, min, max }: Props) => {
  console.log("SECTION SLIDER");

  const [value, setValue] = useState(max);
  const debounceValue = useDebouncedValue(String(value));
  const handleChange = (e: number | number[]) => {
    setValue(Number(e));
  };

  useEffect(() => {
    onChange(Number(debounceValue), "quota");
  }, [debounceValue]);
  return (
    <section>
      <Text className="text_bold size_3">{title}</Text>
      <Slider
        className="slider"
        min={min}
        max={max}
        trackStyle={{ backgroundColor: "#773ED7", height: 12 }}
        railStyle={{ height: 12 }}
        handleStyle={{
          height: 35,
          width: 35,
          marginTop: -13,
          border: "none",
          backgroundColor: "white",
          opacity: 1,
          boxShadow: "-1px 1px 4px rgba(0, 0, 0, 0.2)",
        }}
        value={value}
        onChange={handleChange}
      />
      <div className="div_container">
        <Text className="text_bold size_3 color_primary">{`${value} cuotas`}</Text>
        <Text className="text_regular size_3 color_gray">{`Máximo: ${max}`}</Text>
      </div>
    </section>
  );
});
