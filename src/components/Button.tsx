import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string,
  children: React.ReactNode,
  className?: string,
}

export const Button = ({ href, children, className}: ButtonProps) => (
  <a
    href={href}
    className={cn(
      "bg-[#8052FF] inline-block font-bold text-white px-8 py-4 rounded-full",
      className
    )}
  >
    {children}
  </a>
);
