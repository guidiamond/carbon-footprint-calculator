import { Breadcrumb, Layout, Row } from "antd";
import { CarbonFootprintResult } from "../components/CarbonFootprintResult";
import { useState } from "react";
import { CarbonCalculatorCard } from "../components/CarbonCalculatorCard";
import { NavBar } from "../components/NavBar";

const { Content, Footer } = Layout;

export const FoodCarbonCalculator = () => {
  const [meat, setMeat] = useState(0);
  const [dairy, setDairy] = useState(0);
  const [fruitVeggies, setFruitVeggies] = useState(0);
  const [snacks, setSnacks] = useState(0);
  const [cerealsBakery, setCerealsBakery] = useState(0);
  const [drinks, setDrinks] = useState(0);

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
          <Breadcrumb.Item>Food Impact</Breadcrumb.Item>
          <Breadcrumb.Item>Carbon Footprint Calculator</Breadcrumb.Item>
        </Breadcrumb>
        <CarbonFootprintResult
          value={meat + dairy + fruitVeggies + snacks + cerealsBakery + drinks}
        />
        <div className="site-layout-content">
          <h1 style={{ padding: "5px 0" }}>
            To estimate the amount of Co<sub>2</sub> produced in your diet,
            please enter your <b>daily</b> consumption of:
          </h1>
          <Row gutter={16}>
            <CarbonCalculatorCard
              title="Meat"
              type="meat"
              impact={meat}
              setImpact={setMeat}
              options={[{ value: "kcal", title: "kcal" }]}
            />
            <CarbonCalculatorCard
              title="Dairy"
              type="dairy"
              impact={dairy}
              setImpact={setDairy}
              options={[{ value: "kcal", title: "kcal" }]}
            />
            <CarbonCalculatorCard
              title="Snacks & Other"
              type="snacks"
              impact={snacks}
              setImpact={setSnacks}
              options={[{ value: "kcal", title: "kcal" }]}
            />
            <CarbonCalculatorCard
              title="Fruits & Veggies"
              type="fruitsVeggies"
              impact={fruitVeggies}
              setImpact={setFruitVeggies}
              options={[{ value: "kcal", title: "kcal" }]}
            />
            <CarbonCalculatorCard
              title="Cereals & Bakery"
              type="cerealsBakery"
              impact={cerealsBakery}
              setImpact={setCerealsBakery}
              options={[{ value: "kcal", title: "kcal" }]}
            />
            <CarbonCalculatorCard
              title="Drinks"
              type="drinks"
              impact={drinks}
              setImpact={setDrinks}
              options={[{ value: "kcal", title: "kcal" }]}
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
