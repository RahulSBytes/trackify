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
  className ?: string
  required ?: boolean
}

export function SelectField<T extends FieldValues>({
  form,
  name,
  label,
  options,
  placeholder,
  className, 
  required,
}: SelectFieldProps<T>) {
  return (
    <InputField className={className} form={form} name={name} label={label} required={required}>
      {(field) => (
        <Select value={field.value} onValueChange={(value) => field.onChange(value)}>
          <SelectTrigger className="min-h-10 w-full border">
            <SelectValue placeholder={placeholder ?? `Select ${label.toLowerCase()}`} />
          </SelectTrigger>
          <SelectContent>
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