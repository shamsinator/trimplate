import { debounce } from "lodash";
import { useCallback } from "react";
import { UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormValues } from "@/hooks/useContactForm";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface ContactFormFieldProps {
  form: UseFormReturn<FormValues>;
  name: keyof FormValues;
  label: string;
  placeholder: string;
  type?: "text" | "email";
  as?: "input" | "textarea";
}

export default function ContactFormField({
  form,
  name,
  label,
  placeholder,
  type = "text",
  as = "input",
}: ContactFormFieldProps) {
  // Debounced validation to improve performance
  const debouncedValidation = useCallback(
    debounce(() => {
      form.trigger(name);
    }, 300),
    [form, name],
  );

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <FormControl>
            {as === "textarea" ? (
              <Textarea
                id={name}
                placeholder={placeholder}
                rows={6}
                aria-invalid={!!form.formState.errors[name]}
                aria-describedby={`${name}-error`}
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  debouncedValidation();
                }}
                data-track="Input"
                data-category="Contact"
                data-label={`Form ${name}`}
              />
            ) : (
              <Input
                id={name}
                type={type}
                placeholder={placeholder}
                aria-invalid={!!form.formState.errors[name]}
                aria-describedby={`${name}-error`}
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  debouncedValidation();
                }}
                data-track="Input"
                data-category="Contact"
                data-label={`Form ${name}`}
              />
            )}
          </FormControl>
          <FormMessage id={`${name}-error`} />
        </FormItem>
      )}
    />
  );
}
