import { ToolButtonProps } from "@/types/ToolButton";

export const ToolButton = ({
  title,
  icon,
  onClick,
  isActive,
  disabled,
}: ToolButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${
        isActive ? "bg-gray-800" : "bg-transparent"
      } p-2 rounded-md hover:scale-110 transition-transform cursor-pointer duration-200 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <abbr title={title}>{icon}</abbr>
    </button>
  );
};
