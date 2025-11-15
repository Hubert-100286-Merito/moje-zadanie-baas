import { defineBackend } from "@aws-amplify/backend";
import { Stack } from "aws-cdk-lib";
import {
  RestApi,
  LambdaIntegration,
  Cors,
  AuthorizationType,
} from "aws-cdk-lib/aws-apigateway";
import { helloWorld } from "./functions/helloWorld";
import { auth } from "./auth/resource";
import { data } from "./data/resource";

// Rejestracja zasobów Amplify
const backend = defineBackend({ auth, data, helloWorld });

// Osobny stack na API
const apiStack = backend.createStack("api-stack");

// API Gateway (REST)
const restApi = new RestApi(apiStack, "RestApi", {
  restApiName: "restApi",
  deploy: true,
  deployOptions: { stageName: "prod" },
  defaultCorsPreflightOptions: {
    allowOrigins: Cors.ALL_ORIGINS,
    allowMethods: Cors.ALL_METHODS,
    allowHeaders: Cors.DEFAULT_HEADERS,
  },
});

// Integracja Lambdy
const lambdaIntegration = new LambdaIntegration(
  backend.helloWorld.resources.lambda
);

// Ścieżka /hello (publiczny GET do łatwych testów)
const helloPath = restApi.root.addResource("hello");
helloPath.addMethod("GET", lambdaIntegration, {
  authorizationType: AuthorizationType.NONE,
});
