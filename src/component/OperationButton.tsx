type TImageButtonParameters = {
  src: string
  text: string
  onClick: () => void
}

const imgStyle = {
  borderRadius: "50%",
  background: "white",
  padding: "24px",
  width: "40px",
  height: "40px",
};

export function OperationButton({src, text, onClick}: TImageButtonParameters) {
  return (
    <div className="operation-wrapper" onClick={onClick}>
      <div style={imgStyle}>
        <img src={src} alt={text}/>
      </div>
      <p style={{textAlign: "center"}}>{text}</p>
    </div>
  );
}