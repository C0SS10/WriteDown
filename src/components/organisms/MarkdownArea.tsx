import { Textarea } from "../atoms/Textarea";
import { ToolBar } from "../molecules/ToolBar";
import {
  ALargeSmall,
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Image,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
} from "lucide-react";
import { ToolButtonProps } from "../../types/ToolButton";

export default function MarkdownArea() {
  const toolStyles = "h-10 w-10 text-gray-200";

  const tools: ToolButtonProps[] = [
    {
      title: "Mayúscula",
      icon: <ALargeSmall className={toolStyles} />,
      isActive: false,
      onClick: () => console.log("Mayúscula"),
    },
    {
      title: "Negrita",
      icon: <Bold className={toolStyles} />,
      isActive: false,
      onClick: () => console.log("Negrita"),
    },
    {
      title: "Itálica",
      icon: <Italic className={toolStyles} />,
      isActive: false,
      onClick: () => console.log("Itálica"),
    },
    {
      title: "Subrayado",
      icon: <Strikethrough className={toolStyles} />,
      isActive: false,
      onClick: () => console.log("Subrayado"),
    },
    {
      title: "Título",
      icon: <Heading1 className={toolStyles} />,
      isActive: false,
      onClick: () => console.log("Título"),
    },
    {
      title: "Subtítulo",
      icon: <Heading2 className={toolStyles} />,
      isActive: false,
      onClick: () => console.log("Subtítulo"),
    },
    {
      title: "Subitem",
      icon: <Heading3 className={toolStyles} />,
      isActive: false,
      onClick: () => console.log("Subitem"),
    },
    {
      title: "Lista ordenada",
      icon: <ListOrdered className={toolStyles} />,
      isActive: false,
      onClick: () => console.log("Lista ordenada"),
    },
    {
      title: "Lista desordenada",
      icon: <List className={toolStyles} />,
      isActive: false,
      onClick: () => console.log("Lista desordenada"),
    },
    {
      title: "Código",
      icon: <Code className={toolStyles} />,
      isActive: false,
      onClick: () => console.log("Código"),
    },
    {
      title: "Imagen",
      icon: <Image className={toolStyles} />,
      isActive: false,
      onClick: () => console.log("Imagen"),
    },
  ];

  return (
    <section className="flex flex-col gap-2">
      <ToolBar tools={tools} />
      <Textarea />
    </section>
  );
}
