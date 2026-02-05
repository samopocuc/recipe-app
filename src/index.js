import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/main/main.scss";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(<App />);

