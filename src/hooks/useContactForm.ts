import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { sendContactForm } from "@/services/api"; // This would be the actual API service

// Validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type FormValues = z.infer<typeof formSchema>;

export function useContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = useCallback(
    async (data: FormValues) => {
      setIsSubmitting(true);
      try {
        // Replace this with later with the actual API call
        // await sendContactForm(data);
        await new Promise((resolve) => setTimeout(resolve, 1000));

        toast({
          title: "Message Sent!",
          description:
            "We've received your message and will get back to you soon.",
        });

        form.reset();
      } catch (error) {
        console.error("Form submission error:", error);
        toast({
          title: "Something went wrong",
          description: "We couldn't send your message. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [form, toast],
  );

  return { form, onSubmit, isSubmitting };
}
