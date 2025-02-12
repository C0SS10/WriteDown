import { useCallback } from "react";

export function useMarkdown(setContent: (value: string) => void) {
  const formatText = useCallback(
    (symbol: string, wrapper?: boolean) => {
      const markdownTextArea = document.getElementById(
        "markdown-textarea"
      ) as HTMLTextAreaElement | null;

      if (!markdownTextArea) return;

      const { selectionStart, selectionEnd, value } = markdownTextArea;
      const selectedText = value.substring(selectionStart, selectionEnd);

      let newText = "";

      if (selectedText) {
        newText = wrapper
          ? `${symbol}${selectedText}${symbol}`
          : `${symbol} ${selectedText}`;
      } else {
        newText = wrapper ? `${symbol} ${symbol}` : `${symbol}`;
      }

      const updateContent =
        value.substring(0, selectionStart) +
        newText +
        value.substring(selectionEnd);

      setContent(updateContent);

      // Mover el cursor al final del texto
      const cursorPosition = selectionStart + newText.length;
      setTimeout(
        () =>
          markdownTextArea.setSelectionRange(cursorPosition, cursorPosition),
        0
      );
    },
    [setContent]
  );

  return { formatText };
}
