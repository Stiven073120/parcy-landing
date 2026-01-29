import Button from "@/components/ui/Button";

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CTAButton({
  children,
  href = "https://app.parcydigital.com",
  variant = "primary",
  size = "lg",
  className = "",
}: CTAButtonProps) {
  return (
    <Button 
      href={href}
      variant={variant}
      size={size}
      className={`rounded-xl ${className}`}
    >
      {children}
    </Button>
  );
}
