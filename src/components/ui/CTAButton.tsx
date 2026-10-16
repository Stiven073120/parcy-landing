import Button from "@/components/ui/Button";

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  size?: "sm" | "md" | "lg";
  className?: string;
}

/** Llamado a la acción. Por defecto apunta a la app; en la landing se usa con href="#contacto". */
export default function CTAButton({
  children,
  href = "https://app.parcydigital.com",
  variant = "primary",
  size = "lg",
  className = "",
}: CTAButtonProps) {
  return (
    <Button href={href} variant={variant} size={size} className={className}>
      {children}
    </Button>
  );
}
