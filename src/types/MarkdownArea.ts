export type MarkdownAreaProps = {
  contentMarkdown: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isToolbarVisible: boolean;
};

export type ReaderAreaProps = {
  content: string;
  isToolbarVisible: boolean;
};
