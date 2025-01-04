import {
  ALargeSmall,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
} from "lucide-react";
import { ToolButton } from "../atoms/ToolButton";
import { ToolButtonProps } from "../../types/ToolButton";

export const ToolBar = () => {
  const toolStyles = "h-10 w-10 text-gray-200";

  const tools: ToolButtonProps[] = [
    {
      title: "Mayúscula",
      icon: <ALargeSmall className={toolStyles} />,
      isActive: false,
    },
    {
      title: "Negrita",
      icon: <Bold className={toolStyles} />,
      isActive: false,
    },
    {
      title: "Itálica",
      icon: <Italic className={toolStyles} />,
      isActive: false,
    },
    {
      title: "Subrayado",
      icon: <Strikethrough className={toolStyles} />,
      isActive: false,
    },
    {
      title: "Título",
      icon: <Heading1 className={toolStyles} />,
      isActive: false,
    },
    {
      title: "Subtítulo",
      icon: <Heading2 className={toolStyles} />,
      isActive: false,
    },
    {
      title: "Subitem",
      icon: <Heading3 className={toolStyles} />,
      isActive: false,
    },
    {
      title: "Lista ordenada",
      icon: <ListOrdered className={toolStyles} />,
      isActive: false,
    },
    {
      title: "Lista desordenada",
      icon: <List className={toolStyles} />,
      isActive: false,
    },
  ];
  return (
    <section className="flex gap-2 p-4 bg-slate-400/10 backdrop-blur-md rounded-lg border border-slate-200/20 shadow-lg">
      {tools.map((tool, index) => (
        <ToolButton
          key={index}
          title={tool.title}
          icon={tool.icon}
          isActive={tool.isActive}
          onClick={() => console.log(tool.title)}
        />
      ))}
    </section>
  );
};
