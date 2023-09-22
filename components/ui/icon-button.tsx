import { cn } from "@/lib/utils";

interface IconButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  className,
  icon,
}) => {
  return (
    <button
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};
