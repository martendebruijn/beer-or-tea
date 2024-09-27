import { timeFor } from "./timeFor/timeFor";

const now = new Date();
const drink = timeFor(now);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <p>Time for ${drink === "beer" ? "🍺" : "🫖"}</p>
  </div>
`;
