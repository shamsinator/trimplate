import { UseFormReturn } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FormValues } from "@/hooks/useContactForm";
import ContactFormField from "./ContactFormField";

interface ContactFormProps {
  form: UseFormReturn<FormValues>;
  onSubmit: (data: FormValues) => Promise<void>;
  isSubmitting: boolean;
}

export default function ContactForm({
  form,
  onSubmit,
  isSubmitting,
}: ContactFormProps) {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        aria-label="Contact form"
        data-track="Form"
        data-category="Contact"
        data-label="Contact Form"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactFormField
            form={form}
            name="name"
            label="Name"
            placeholder="Your name"
          />
          <ContactFormField
            form={form}
            name="email"
            label="Email"
            placeholder="Your email"
            type="email"
          />
        </div>
        <ContactFormField
          form={form}
          name="subject"
          label="Subject"
          placeholder="Message subject"
        />
        <ContactFormField
          form={form}
          name="message"
          label="Message"
          placeholder="Your message"
          as="textarea"
        />
        <div className="space-y-2">
          <Button
            type="submit"
            className="w-full relative"
            disabled={isSubmitting}
            data-track="Submit"
            data-category="Contact"
            data-label="Contact Form"
            data-meta={`{"subject":"${form.watch("subject")}"}`}
          >
            {isSubmitting ? (
              <>
                <span className="mr-2">Sending...</span>
                <span className="animate-spin">⟳</span>
              </>
            ) : (
              "Send Message"
            )}
          </Button>
          {form.formState.isSubmitSuccessful && (
            <p className="text-sm text-green-600 text-center">
              Your message has been sent successfully.
            </p>
          )}
        </div>
      </form>
    </Form>
  );
}
