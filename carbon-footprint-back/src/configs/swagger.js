import expressJSDocSwagger from "express-jsdoc-swagger";
import { env } from "./env.js";

export const setupSwagger = (app) => {
  const options = {
    info: {
      version: "1.0.0",
      title: "Personal Carbon Footprint Calculator API",
      description:
        "This Rest API is used for personal carbon footprint calculations",
    },
    baseDir: ".",
    // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
    filesPattern: "../**/*.js",
    // URL where SwaggerUI will be rendered
    swaggerUIPath: "/docs",
    // Expose OpenAPI UI
    exposeSwaggerUI: true,
    // Expose Open API JSON Docs documentation in `apiDocsPath` path.
    exposeApiDocs: false,
    // Open API JSON Docs endpoint.
    apiDocsPath: "/v3/api-docs",
    // Set non-required fields as nullable by default
    notRequiredAsNullable: false,
    // You can customize your UI options.
    // you can extend swagger-ui-express config. You can checkout an example of this
    // in the `example/configuration/swaggerOptions.js`
    swaggerUiOptions: {},
    // multiple option in case you want more that one instance
    multiple: true,
  };
  expressJSDocSwagger(app)(options);
};
