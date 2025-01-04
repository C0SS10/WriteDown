import { ToolButtonProps } from "../../types/ToolButton";

export const ToolButton = ({
  title,
  icon,
  onClick,
  isActive,
}: ToolButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive ? "bg-gray-800" : "bg-transparent"
      } p-2 rounded-md hover:scale-110 transition-transform cursor-pointer duration-200`}
    >
      <abbr title={title}>{icon}</abbr>
    </button>
  );
};
