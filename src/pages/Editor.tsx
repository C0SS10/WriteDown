import { Columns2, PanelBottomOpen } from "lucide-react";
import { ToolBar } from "@components/molecules/ToolBar";
import MarkdownArea from "@components/organisms/MarkdownArea";
import ReaderArea from "@components/organisms/ReaderArea";
import { ToolButtonProps } from "../types/ToolButton";

export default function Editor() {
  const toolStyles = "h-10 w-10 text-gray-200";

  const tools: ToolButtonProps[] = [
    {
      title: "Ocultar barra de herramientas",
      icon: <PanelBottomOpen className={toolStyles} />,
      isActive: false,
      onClick: () => console.log("Ocultar barra"),
    },
    {
      title: "Ocultar vista previa",
      icon: <Columns2 className={toolStyles} />,
      isActive: false,
      onClick: () => console.log("Ocultar"),
    },
  ];
  return (
    <div className="h-screen w-screen flex items-center justify-center gap-4 bg-slate-700">
      <MarkdownArea />
      <ToolBar tools={tools} isVertical={true} />
      <ReaderArea />
    </div>
  );
}
