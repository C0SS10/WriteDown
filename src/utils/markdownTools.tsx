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
    }
    return content.slice(0, start) + `~${selectedText}~` + content.slice(end);
  },
};

export const heading: MarkdownTool = {
  title: "Título",
  icon: <Heading1 className="h-10 w-10 text-gray-200" />,
  isActive: false,
  onClick: (content, start, end) => {
    const selectedText = content.slice(start, end);
    if (selectedText.startsWith("#")) {
      return (
        content.slice(0, start) + selectedText.slice(1) + content.slice(end)
      );
    }
    return content.slice(0, start) + `# ${selectedText}` + content.slice(end);
  },
};

export const subheading: MarkdownTool = {
  title: "Subtítulo",
  icon: <Heading2 className="h-10 w-10 text-gray-200" />,
  isActive: false,
  onClick: (content, start, end) => {
    const selectedText = content.slice(start, end);
    if (selectedText.startsWith("##")) {
      return (
        content.slice(0, start) + selectedText.slice(2) + content.slice(end)
      );
    }
    return content.slice(0, start) + `## ${selectedText}` + content.slice(end);
  },
};

export const subitem: MarkdownTool = {
  title: "Subitem",
  icon: <Heading3 className="h-10 w-10 text-gray-200" />,
  isActive: false,
  onClick: (content, start, end) => {
    const selectedText = content.slice(start, end);
    if (selectedText.startsWith("###")) {
      return (
        content.slice(0, start) + selectedText.slice(3) + content.slice(end)
      );
    }
    return content.slice(0, start) + `### ${selectedText}` + content.slice(end);
  },
};

export const orderedList: MarkdownTool = {
  title: "Lista ordenada",
  icon: <ListOrdered className="h-10 w-10 text-gray-200" />,
  isActive: false,
  onClick: (content, start, end) => {
    const selectedText = content.slice(start, end);
    if (selectedText.startsWith("1.")) {
      return (
        content.slice(0, start) + selectedText.slice(3) + content.slice(end)
      );
    }
    return (
      content.slice(0, start) + `1. ${selectedText}\n2. ` + content.slice(end)
    );
  },
};

export const unorderedList: MarkdownTool = {
  title: "Lista desordenada",
  icon: <List className="h-10 w-10 text-gray-200" />,
  isActive: false,
  onClick: (content, start, end) => {
    const selectedText = content.slice(start, end);
    if (selectedText.startsWith("• ")) {
      return (
        content.slice(0, start) + selectedText.slice(3) + content.slice(end)
      );
    }
    return (
      content.slice(0, start) + `• ${selectedText}\n• ` + content.slice(end)
    );
  },
};
