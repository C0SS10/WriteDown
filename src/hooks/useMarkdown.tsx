import { useRef } from "react";

export function useMarkdown() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const getSelection = () => {
    if (!textareaRef.current) return { start: 0, end: 0 };
    return {
      start: textareaRef.current.selectionStart,
      end: textareaRef.current.selectionEnd,
    };
  };

  const setSelection = (start: number, end: number) => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(start, end);
    }
  };

  return { textareaRef, getSelection, setSelection };
}
