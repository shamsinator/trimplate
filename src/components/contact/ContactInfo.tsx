import { MapPin, Phone, Mail } from "lucide-react";

interface LinkContent {
  text: string;
  href: string;
  trackingLabel: string;
}

interface ContactInfoProps {
  title: string;
  content: string | LinkContent;
  icon?: string;
}

export default function ContactInfo({
  title,
  content,
  icon,
}: ContactInfoProps) {
  const IconComponent = icon ? getIconByName(icon) : null;

  return (
    <div className="text-center space-y-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
      {IconComponent && (
        <div className="flex justify-center">
          <IconComponent className="w-5 h-5 text-primary" />
        </div>
      )}
      <h2 className="font-medium">{title}</h2>
      <div className="text-sm text-muted-foreground">
        {typeof content === "string" ? (
          <p>{content}</p>
        ) : (
          <a
            href={content.href}
            className="hover:text-primary transition-colors"
            data-track="Click"
            data-category="Contact"
            data-label={content.trackingLabel}
          >
            {content.text}
          </a>
        )}
      </div>
    </div>
  );
}

// Helper function to get icon component
function getIconByName(name: string) {
  switch (name) {
    case "map-pin":
      return MapPin;
    case "phone":
      return Phone;
    case "mail":
      return Mail;
    default:
      return null;
  }
}
