export type TLineColor = {
  color: string
}

export function ColoredLine({color}: TLineColor) {
 return (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 0
      }}
    />
  );
}