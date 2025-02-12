import { Textarea } from "../atoms/Textarea";
import { ToolBar } from "../molecules/ToolBar";
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
import { ToolButtonProps } from "@/types/ToolButton";
import { MarkdownAreaProps } from "@/types/MarkdownArea";
import { useMarkdown } from "@/hooks/useMarkdown";

export default function MarkdownArea({
  contentMarkdown,
  onChange,
}: MarkdownAreaProps) {
  const { formatText } = useMarkdown(onChange);

  const toolStyles = "h-10 w-10 text-gray-200";

  const tools: ToolButtonProps[] = [
    {
      title: "Mayúscula",
      icon: <ALargeSmall className={toolStyles} />,
      isActive: false,
      onClick: () => formatText("", false),
    },
    {
      title: "Negrita",
      icon: <Bold className={toolStyles} />,
      isActive: false,
      onClick: () => formatText("**", false),
    },
    {
      title: "Itálica",
      icon: <Italic className={toolStyles} />,
      isActive: false,
      onClick: () => formatText("_", false),
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
  ];

  return (
    <section className="flex flex-col gap-2 items-start">
      <ToolBar tools={tools} />
      <Textarea
        id="markdown-textarea"
        placeholder="# Esto es un título"
        value={contentMarkdown}
        onChange={onChange}
      />
    </section>
  );
}
