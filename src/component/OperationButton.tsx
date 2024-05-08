import './OperationButton.css';

type TImageButtonParameters = {
  src: string
  text: string
  onClick: () => void
}

export function OperationButton({src, text, onClick}: TImageButtonParameters) {
  return (
    <div className="operation-wrapper" onClick={onClick}>
      <div className="operation-button-img">
        <img src={src} alt={text}/>
      </div>
      <p style={{textAlign: "center"}}>{text}</p>
    </div>
  );
}