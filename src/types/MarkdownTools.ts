export type MarkdownTool = {
  title: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: (content: string, start: number, end: number) => string;
};
