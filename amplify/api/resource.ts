// amplify/api/resource.ts
import { defineApi } from "@aws-amplify/backend";
import { helloWorld } from "../functions/helloWorld";

export const api = defineApi({
  name: "restApi",
  routes: [
    {
      path: "/hello",
      method: "GET",
      function: helloWorld,        // <-- wskazujemy eksport funkcji
      authorizationType: "NONE",   // na potrzeby szybkich testów
    },
  ],
});