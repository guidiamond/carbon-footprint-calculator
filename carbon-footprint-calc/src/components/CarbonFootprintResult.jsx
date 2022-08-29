import { roundNumber } from "../utils/roundNumber";

export const CarbonFootprintResult = ({ value }) => {
  return (
    <div
      style={{
        minHeight: "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20px",
      }}
    >
      <h4> Your carbon footprint: </h4>
      <h3 style={{ paddingLeft: "5px", fontWeight: "bold" }}>
        {roundNumber(value)} kg CO<sub>2</sub>/year
      </h3>
    </div>
  );
};
