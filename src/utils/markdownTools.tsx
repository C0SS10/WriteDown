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

export const uppercase: MarkdownTool = {
  title: "Mayúscula",
  icon: <ALargeSmall className="h-10 w-10 text-gray-200" />,
  isActive: false,
  onClick: (content, start, end) => {
    const selectedText = content.slice(start, end);
    if (selectedText === selectedText.toUpperCase()) {
      return (
        content.slice(0, start) +
        selectedText.toLowerCase() +
        content.slice(end)
      );
    } else {
      return (
        content.slice(0, start) +
        selectedText.toUpperCase() +
        content.slice(end)
      );
    }
  },
};

export const bold: MarkdownTool = {
  title: "Negrita",
  icon: <Bold className="h-10 w-10 text-gray-200" />,
  isActive: false,
  onClick: (content, start, end) => {
    const selectedText = content.slice(start, end);
    if (selectedText.startsWith("*") && selectedText.endsWith("*")) {
      return (
        content.slice(0, start) + selectedText.slice(1, -1) + content.slice(end)
      );
    } else {
      return content.slice(0, start) + `*${selectedText}*` + content.slice(end);
    }
  },
};

export const italic: MarkdownTool = {
  title: "Itálica",
  icon: <Italic className="h-10 w-10 text-gray-200" />,
  isActive: false,
  onClick: (content, start, end) => {
    const selectedText = content.slice(start, end);
    if (selectedText.startsWith("_") && selectedText.endsWith("_")) {
      return (
        content.slice(0, start) + selectedText.slice(1, -1) + content.slice(end)
      );
    } else {
      return content.slice(0, start) + `_${selectedText}_` + content.slice(end);
    }
  },
};

export const strikethrough: MarkdownTool = {
  title: "Tachado",
  icon: <Strikethrough className="h-10 w-10 text-gray-200" />,
  isActive: false,
  onClick: (content, start, end) => {
    const selectedText = content.slice(start, end);
    if (selectedText.startsWith("~") && selectedText.endsWith("~")) {
      return (
        content.slice(0, start) + selectedText.slice(1, -1) + content.slice(end)
      );
    } else {
      return content.slice(0, start) + `~${selectedText}~` + content.slice(end);
    }
  },
};

export const heading: MarkdownTool = {
  title: "Título",
  icon: <Heading1 className="h-10 w-10 text-gray-200" />,
  isActive: false,
  onClick: (content, start, end) => {
    const selectedText = content.slice(start, end);
    return content.slice(0, start) + `# ${selectedText}` + content.slice(end);
  },
};

export const subheading: MarkdownTool = {
  title: "Subtítulo",
  icon: <Heading2 className="h-10 w-10 text-gray-200" />,
  isActive: false,
  onClick: (content, start, end) => {
    const selectedText = content.slice(start, end);
    return content.slice(0, start) + `## ${selectedText}` + content.slice(end);
  },
};

export const subitem: MarkdownTool = {
  title: "Subitem",
  icon: <Heading3 className="h-10 w-10 text-gray-200" />,
  isActive: false,
  onClick: (content, start, end) => {
    const selectedText = content.slice(start, end);
    return content.slice(0, start) + `### ${selectedText}` + content.slice(end);
  },
};

/* const tools: ToolButtonProps[] = [
    {
      title: "Mayúscula",
      icon: <ALargeSmall className={toolStyles} />,
      isActive: false,
      onClick: () => handleToolClick(),
    },
    {
      title: "Negrita",
      icon: <Bold className={toolStyles} />,
      isActive: false,
      onClick: () => handleBold(),
    },
    {
      title: "Itálica",
      icon: <Italic className={toolStyles} />,
      isActive: false,
      onClick: () => console.log("first"),
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
 */
