export type TTwoColumns = {
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export default function TwoColumns({ left, right }: TTwoColumns): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          flex: "1 1 100%",
          overflowX: "hidden",
          marginRight: "20px",
        }}
      >
        {left}
      </div>
      <div
        style={{
          flex: "1 1 100%",
          overflowX: "hidden",
          marginLeft: "20px",
        }}
      >
        {right}
      </div>
    </div>
  );
}
