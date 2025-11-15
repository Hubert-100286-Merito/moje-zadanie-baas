import { defineFunction } from "@aws-amplify/backend";

export const helloWorld = defineFunction({
  name: "helloWorld",
  entry: "../../src/helloWorld.ts", // <-- UWAGA: dwa '…/..' do katalogu głównego
});
