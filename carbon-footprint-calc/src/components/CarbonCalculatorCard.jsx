import { Card, Col } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { carbonFCApi } from "../api/api";
import { ROUTES } from "../constants/routes";
import { roundNumber } from "../utils/roundNumber";
import { unitConverter } from "../utils/unitConverter";
import { SearchInput } from "./InputWithDebounce";
import { SelectOptions } from "./SelectOptions";

// Defines which route to make request to depending on current page
const pageToRoute = {
  [ROUTES.houseImpact]: "/impact/house",
  [ROUTES.foodImpact]: "/impact/food",
};

export const CarbonCalculatorCard = ({
  title,
  type,
  impact,
  setImpact,
  options,
}) => {
  const [input, setInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedOption, setSelectedOption] = useState(options[0]?.value);
  const { pathname } = useLocation();

  const fetchData = useCallback(async () => {
    // Convert unit if it's not in the standard as the api
    const convertedUnit = unitConverter[selectedOption]
      ? unitConverter[selectedOption](input)
      : input;

    const response = await carbonFCApi.get(pageToRoute[pathname], {
      params: { type, input: convertedUnit },
    });

    const { emission } = response.data;
    // Compare to undefined to ensure that 0 will enter the conditional
    if (emission !== undefined) {
      setImpact(emission);
      setErrorMsg("");
    }
  }, [selectedOption, input, type, setImpact, pathname]);

  useEffect(() => {
    if (input) {
      fetchData().catch((err) => {
        console.error(err);
        setErrorMsg(err?.response?.data?.error || "invalid input");
      });
    }
  }, [fetchData, input]);

  return (
    <Col xs={24} sm={24} md={8} lg={8} style={{ paddingBottom: "10px" }}>
      <Card title={title} size="medium">
        <p style={{ color: "red" }}>{errorMsg}</p>
        <SearchInput
          type="number"
          status={errorMsg ? "error" : "ok"}
          onChange={(e) => setInput(e)}
          delayMs={500}
        />
        <SelectOptions
          options={options}
          onChange={(e) => setSelectedOption(e)}
        />
        <p>
          {roundNumber(impact)} kg CO<sub>2</sub>/year
        </p>
      </Card>
    </Col>
  );
};
