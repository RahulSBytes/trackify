import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import InputField from "./InputField";

interface SelectFieldProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  options: readonly {
    label: string;
    value: string;
  }[];
  placeholder?: string;
}

export function SelectField<T extends FieldValues>({
  form,
  name,
  label,
  options,
  placeholder,
}: SelectFieldProps<T>) {
  return (
    <InputField form={form} name={name} label={label}>
      {(field) => (
        <Select value={field.value} onValueChange={(value) => field.onChange(value)}>
          <SelectTrigger className="min-h-10 w-full border">
            <SelectValue placeholder={placeholder ?? `Select ${label.toLowerCase()}`} />
          </SelectTrigger>
          <SelectContent className="mt-9">
            {options.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </InputField>
  );
}