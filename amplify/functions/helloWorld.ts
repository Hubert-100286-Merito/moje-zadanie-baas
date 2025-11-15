// amplify/functions/helloWorld.ts
import * as a from "@aws-amplify/backend";

export const helloWorld = a.function({
  name: "helloWorld",
  entry: "./src/helloWorld.ts",
});