import { Breadcrumb, Layout, Row } from "antd";
import { useState } from "react";
import { CarbonFootprintResult } from "../components/CarbonFootprintResult";
import { CarbonCalculatorCard } from "../components/CarbonCalculatorCard";
import { NavBar } from "../components/NavBar";

const { Content, Footer } = Layout;

export const HouseCarbonCalculator = () => {
  const [electricImpact, setElectricImpact] = useState(0);
  const [naturalGasImpact, setNaturalGasImpact] = useState(0);
  const [fuelOilImpact, setFuelOilImpact] = useState(0);
  const [lpgImpact, setLpgImpact] = useState(0);
  const [wasteImpact, setWasteImpact] = useState(0);
  const [waterImpact, setWaterImpact] = useState(0);

  return (
    <Layout className="layout">
      <NavBar />
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Housing Impact</Breadcrumb.Item>
          <Breadcrumb.Item>Carbon Footprint Calculator</Breadcrumb.Item>
        </Breadcrumb>
        <CarbonFootprintResult
          value={
            electricImpact +
            naturalGasImpact +
            fuelOilImpact +
            lpgImpact +
            wasteImpact +
            waterImpact
          }
        />
        <div className="site-layout-content">
          <h1 style={{ padding: "5px 0" }}>
            To estimate the amount of Co<sub>2</sub> produced in your house,
            please enter the power source usage <b>(per individual)</b>:
          </h1>
          <Row gutter={16}>
            <CarbonCalculatorCard
              title="Electricity (annually)"
              type="electric"
              impact={electricImpact}
              setImpact={setElectricImpact}
              options={[{ value: "kWh", title: "kWh" }]}
            />
            <CarbonCalculatorCard
              impact={naturalGasImpact}
              setImpact={setNaturalGasImpact}
              title="Natural Gas (annually)"
              type="naturalGas"
              options={[
                { value: "mcf-therm", title: "Mcf" },
                { value: "Therms", title: "Therms" },
              ]}
            />
            <CarbonCalculatorCard
              impact={fuelOilImpact}
              setImpact={setFuelOilImpact}
              title="Fuel Oil (annually)"
              type="fuelOil"
              options={[
                { value: "galloon-liter", title: "Galloon" },
                { value: "liter", title: "Liter" },
              ]}
            />
            <CarbonCalculatorCard
              impact={lpgImpact}
              setImpact={setLpgImpact}
              title="LPG (annually)"
              type="lpg"
              options={[
                { value: "galloon-liter", title: "Galloon" },
                { value: "liter", title: "Liter" },
              ]}
            />
            <CarbonCalculatorCard
              impact={wasteImpact}
              setImpact={setWasteImpact}
              title="Waste (weekly)"
              type="waste"
              options={[{ value: "kg", title: "kg" }]}
            />
            <CarbonCalculatorCard
              impact={waterImpact}
              setImpact={setWaterImpact}
              title="Water (daily)"
              type="water"
              options={[
                { value: "galloon-liter", title: "Galloon" },
                { value: "liter", title: "Liter" },
              ]}
            />
          </Row>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Personal Carbon Footprint Calculator Inc 2022
      </Footer>
    </Layout>
  );
};
