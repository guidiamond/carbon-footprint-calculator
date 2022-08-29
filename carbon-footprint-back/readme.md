# Carbon Footprint Calculator API

# How to start:

- Copy the .env.example file to a new file, changing the variables inside
- Run: ``yarn install && yarn dev`` (DEFAULT PORT: 5000)

# Routes:
 - To get more info and access to **documentation**: ``http://localhost:PORT/docs``
 - Calculate carbon footprint on food: ``http://localhost:PORT/impact/food``
 - Calculate carbon footprint on house:
 ``http://localhost:PORT/impact/house``
 # Available commands:
 - Run server in development mode: ``yarn dev``
 - Run tests: ``yarn test``
 - Check test coverage: ``yarn test:coverage``
 
 # Calculations
 While some sources for the data can change, the formula for calculating the co2 emissions all follow the same pattern:
 ``Consumption * EF (Emission Factor) = emissions (kg CO2 e/yr)``
 
# Emission factor sources:
[FOOD](https://escholarship.org/content/qt55b3r1qj/qt55b3r1qj_noSplash_180824a8a7999e6ed012089791ef3796.pdf?t=krnb1h)

[HOUSE](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/50202074-4db6-4c62-ba6a-9cc4d86ff238/4__Calculate_your_carbon_footprint__shrinkthatfootprint.com.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220828%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220828T160814Z&X-Amz-Expires=86400&X-Amz-Signature=f8cc8c83898cd93c9d59a1765a72fd8c5be6e495ffca2149e0b5c297f39d014a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%224_%2520Calculate%2520your%2520carbon%2520footprint%2520%25E2%2580%2593%2520shrinkthatfootprint.com.pdf%22&x-id=GetObject)
