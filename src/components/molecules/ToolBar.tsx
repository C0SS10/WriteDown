import { ToolButtonProps } from "../../types/ToolButton";
import { ToolButton } from "../atoms/ToolButton";

interface ToolBarProps {
  tools: ToolButtonProps[];
  isVertical?: boolean;
}

export const ToolBar = ({ tools, isVertical }: ToolBarProps) => {
  return (
    <section
      className={`flex ${
        isVertical ? "flex-col" : "flex-row p-4 mx-4"
      } justify-center items-center gap-2 bg-slate-400/10 backdrop-blur-md rounded-lg border border-slate-200/20 shadow-lg`}
    >
      {tools.map((tool, index) => (
        <ToolButton
          key={index}
          title={tool.title}
          icon={tool.icon}
          isActive={tool.isActive}
          onClick={tool.onClick}
        />
      ))}
    </section>
  );
};
