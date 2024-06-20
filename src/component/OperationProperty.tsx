import {Row} from "./base/Row";

import {ColoredLine} from "./base/ColoredLine";

export type TOperationProperty = {
  header: string,
  value: string | number,
}

export function OperationProperty({header, value}: TOperationProperty) {
  return (
    <div style={{marginBottom: "16pt}"}}>
      <Row>
        <div style={{lineHeight: "5pt"}}>
          <p style={{color: "gray", fontSize: 12}}>{header}</p>
          <p style={{fontWeight: "bold", color: "#3A83F1"}}>{value}</p>
        </div>
      </Row>
      <ColoredLine color="#fafafa"/>
    </div>
  );
}