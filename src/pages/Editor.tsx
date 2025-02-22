import { useState } from "react";
import { Columns2, PanelBottomOpen } from "lucide-react";
import { ToolBar } from "@components/molecules/ToolBar";
import MarkdownArea from "@components/organisms/MarkdownArea";
import ReaderArea from "@components/organisms/ReaderArea";
import { ToolButtonProps } from "@/types/ToolButton";

export default function Editor() {
  const [markdownContent, setMarkdownContent] = useState("");
  const [isPreviewVisible, setIsPreviewVisible] = useState(true);
  const [isToolbarVisible, setIsToolbarVisible] = useState(true);

  const toolStyles = "h-10 w-10 text-gray-200";

  const tools: ToolButtonProps[] = [
    {
      title: isToolbarVisible
        ? "Ocultar barra de herramientas"
        : "Mostrar barra de herramientas",
      icon: <PanelBottomOpen className={toolStyles} />,
      isActive: false,
      onClick: () => setIsToolbarVisible((isVisible) => !isVisible),
    },
    {
      title: isPreviewVisible ? "Ocultar vista previa" : "Mostrar vista previa",
      icon: <Columns2 className={toolStyles} />,
      isActive: false,
      onClick: () => setIsPreviewVisible((isVisible) => !isVisible),
    },
  ];

  return (
    <div className="h-screen w-screen flex items-center justify-center gap-4 bg-slate-700">
      <MarkdownArea
        contentMarkdown={markdownContent}
        onChange={(e) => setMarkdownContent(e.target.value)}
        isToolbarVisible={isToolbarVisible}
      />
      <ToolBar tools={tools} isVertical={true} />
      {isPreviewVisible && (
        <ReaderArea
          content={markdownContent}
          isToolbarVisible={isToolbarVisible}
        />
      )}
    </div>
  );
}
