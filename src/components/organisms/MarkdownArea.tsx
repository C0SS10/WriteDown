import { Textarea } from "@components/atoms/Textarea";
import { ToolBar } from "@components/molecules/ToolBar";
import { ToolButtonProps } from "@/types/ToolButton";
import { MarkdownAreaProps } from "@/types/MarkdownArea";
import { MarkdownTool } from "@/types/MarkdownTools";
import { useMarkdown } from "@/hooks/useMarkdown";
import { bold, uppercase } from "@/utils/markdownTools";

export default function MarkdownArea({
  contentMarkdown,
  onChange,
  isToolbarVisible,
}: MarkdownAreaProps) {
  const { textareaRef, getSelection, setSelection } = useMarkdown();

  const handleToolClick = (tool: MarkdownTool) => {
    const { start, end } = getSelection();
    const newContent = tool.onClick(contentMarkdown, start, end);
    onChange({
      target: { value: newContent },
    } as React.ChangeEvent<HTMLTextAreaElement>);
    setSelection(start, end);
  };

  const tools: ToolButtonProps[] = [uppercase, bold].map((tool) => ({
    ...tool,
    onClick: () => handleToolClick(tool),
  }));

  return (
    <section className="flex flex-col gap-2 items-start">
      {isToolbarVisible && <ToolBar tools={tools} />}
      <Textarea
        ref={textareaRef}
        placeholder="# Esto es un título"
        value={contentMarkdown}
        onChange={onChange}
      />
    </section>
  );
}
