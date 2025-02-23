import { ReaderAreaProps } from "@/types/MarkdownArea";
import { ToolButtonProps } from "@/types/ToolButton";
import { exportIntoPDF } from "@/utils/fileExport";
import { ToolBar } from "@components/molecules/ToolBar";
import { ClipboardPen, File } from "lucide-react";
import Markdown from "react-markdown";

export default function ReaderArea({
  content,
  isToolbarVisible,
}: ReaderAreaProps) {
  const toolStyles = "h-10 w-10 text-gray-200";

  const tools: ToolButtonProps[] = [
    {
      title: "Exportar",
      icon: <File className={toolStyles} />,
      isActive: false,
      onClick: exportIntoPDF,
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
      {isToolbarVisible && <ToolBar tools={tools} />}
      <div
        className="prose bg-transparent border border-slate-200/20 shadow-md resize-none rounded-md p-4 w-[46rem] h-[36rem] text-xl text-slate-950 outline-none mx-4 overflow-y-auto"
        id="file-content"
      >
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}
