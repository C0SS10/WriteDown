import MarkdownArea from "../components/organisms/MarkdownArea";

export default function Editor() {
  return (
    <div className="h-screen w-screen flex flex-col items-start justify-center gap-4 bg-slate-700">
      <MarkdownArea />
    </div>
  );
}
