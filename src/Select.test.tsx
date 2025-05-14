import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Select from "./Select";
import { HeadlessMantineProvider } from "@mantine/core";

describe("Select", () => {
  it("renders the component", async () => {
    const user = userEvent.setup();
    const data = [
      { label: "A", value: "a" },
      { label: "B", value: "b" },
      { label: "J", value: "j" },
      { label: "M", value: "m" },
    ];
    const label = "Select component";
    render(
      <HeadlessMantineProvider>
        <Select data={data} label={label} onChange={() => {}} value={null} />
      </HeadlessMantineProvider>
    );

    await user.click(
      screen.getByRole("textbox", {
        name: label,
      })
    );

    const options = screen.getAllByRole("option");

    expect(options).toHaveLength(4);
  });
});
