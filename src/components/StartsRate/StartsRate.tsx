import Rating from "@material-ui/lab/Rating";

export type TStarsRatesSizes = "small" | "medium" | "large";

export type TStarsRate = {
  rate?: number;
  size?: TStarsRatesSizes;
  style?: React.CSSProperties;
  readonly?: boolean;
  onChangeValue?: (value: number) => void;
};

export const StarsRate: React.FC<TStarsRate> = ({
  rate,
  style,
  size,
  readonly = true,
  onChangeValue,
}) => {
  return (
    <Rating
      value={rate}
      readOnly={readonly}
      style={{ ...style }}
      size={size}
      onChange={(_, value) => onChangeValue && value && onChangeValue(value)}
    />
  );
};
