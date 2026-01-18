interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

export default function Button({
  children,
  icon,
  iconPosition = "right",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "py-[14px] px-[18px] bg-black rounded-full text-white cursor-pointer inline-flex items-center justify-center gap-2 transition-colors group";
  const combinedClassName = `${baseStyles} ${className}`.trim();

  return (
    <button className={combinedClassName} {...props}>
      {icon && iconPosition === "left" && (
        <span className="shrink-0 transition-transform group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="shrink-0 transition-transform group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </button>
  );
}
