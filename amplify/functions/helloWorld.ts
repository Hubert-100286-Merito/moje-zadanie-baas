import { defineFunction } from "@aws-amplify/backend";

export const helloWorld = defineFunction({
  name: "helloWorld",
  entry: "./src/helloWorld.ts", // ścieżka względem ROOT repo (obok amplify/)
});