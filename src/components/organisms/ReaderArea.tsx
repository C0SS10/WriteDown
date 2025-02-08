import { ToolButtonProps } from "@/types/ToolButton";
import { Textarea } from "@components/atoms/Textarea";
import { ToolBar } from "@components/molecules/ToolBar";
import { ClipboardPen, File } from "lucide-react";

export default function ReaderArea() {
  const toolStyles = "h-10 w-10 text-gray-200";

  const tools: ToolButtonProps[] = [
    {
      title: "Exportar",
      icon: <File className={toolStyles} />,
      isActive: false,
      onClick: () => console.log("Exportar archivo PDF"),
    },
    {
      title: "Limpiar",
      icon: <ClipboardPen className={toolStyles} />,
      isActive: false,
      onClick: () => console.log("Limpiar"),
    },
  ];

  return (
    <div className="flex flex-col gap-2 items-end">
      <ToolBar tools={tools} />
      <Textarea />
    </div>
  );
}
