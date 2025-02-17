import { MarkdownTool } from "@/types/MarkdownTools";
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
import {
  formatBold,
  formatHeading,
  formatItalic,
  formatOrderedList,
  formatStrikethrough,
  formatSubheading,
  formatSubitem,
  formatUnorderedList,
  formatUppercase,
} from "./toolFunctions";

export const uppercase: MarkdownTool = {
  title: "Mayúscula",
  icon: <ALargeSmall className="h-10 w-10 text-gray-200" />,
  isActive: false,
  onClick: formatUppercase,
};

export const bold: MarkdownTool = {
  title: "Negrita",
  icon: <Bold className="h-10 w-10 text-gray-200" />,
  isActive: false,
  onClick: formatBold,
};

export const italic: MarkdownTool = {
  title: "Itálica",
  icon: <Italic className="h-10 w-10 text-gray-200" />,
  isActive: false,
  onClick: formatItalic,
};

export const strikethrough: MarkdownTool = {
  title: "Tachado",
  icon: <Strikethrough className="h-10 w-10 text-gray-200" />,
  isActive: false,
  onClick: formatStrikethrough,
};

export const heading: MarkdownTool = {
  title: "Título",
  icon: <Heading1 className="h-10 w-10 text-gray-200" />,
  isActive: false,
  onClick: formatHeading,
};

export const subheading: MarkdownTool = {
  title: "Subtítulo",
  icon: <Heading2 className="h-10 w-10 text-gray-200" />,
  isActive: false,
  onClick: formatSubheading,
};

export const subitem: MarkdownTool = {
  title: "Subitem",
  icon: <Heading3 className="h-10 w-10 text-gray-200" />,
  isActive: false,
  onClick: formatSubitem,
};

export const orderedList: MarkdownTool = {
  title: "Lista ordenada",
  icon: <ListOrdered className="h-10 w-10 text-gray-200" />,
  isActive: false,
  onClick: formatOrderedList,
};

export const unorderedList: MarkdownTool = {
  title: "Lista desordenada",
  icon: <List className="h-10 w-10 text-gray-200" />,
  isActive: false,
  onClick: formatUnorderedList,
};
