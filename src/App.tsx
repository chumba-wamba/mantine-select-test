import Select from "./Select";
import "./App.css";
import { MantineProvider } from "@mantine/core";

function App() {
  const data = [
    { label: "Alekhya", value: "alekhya" },
    { label: "Benjamin", value: "benjamin" },
    { label: "Justin", value: "justin" },
    { label: "Matthew", value: "matthew", disabled: true },
  ];

  return (
    <MantineProvider>
      <Select data={data} label={"label"} onChange={() => {}} value={null} />
    </MantineProvider>
  );
}

export default App;
