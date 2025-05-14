import { Select as MantineSelect } from "@mantine/core";
import { type ReactNode } from "react";

interface SelectData {
  label: string;
  value: string;
  disabled?: boolean;
}

export type SelectChangeEventHandler = (
  value: string | null,
  option: SelectData
) => void;

interface SelectProps {
  readonly data: SelectData[];
  readonly label: ReactNode;
  readonly onChange: SelectChangeEventHandler;
  readonly value: string | null;
}

export default function Select({ data, label, onChange, value }: SelectProps) {
  return (
    <MantineSelect
      allowDeselect={false}
      checkIconPosition="right"
      comboboxProps={{
        offset: 0,
      }}
      data={data}
      label={label}
      maxDropdownHeight={256}
      onChange={onChange}
      searchable
      size="md"
      value={value}
    />
  );
}
