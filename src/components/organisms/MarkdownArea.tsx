import { Textarea } from "../atoms/Textarea";
import { ToolBar } from "../molecules/ToolBar";

export default function MarkdownArea() {
  return (
    <section className="flex flex-col gap-2">
      <ToolBar />
      <Textarea />
    </section>
  );
}
