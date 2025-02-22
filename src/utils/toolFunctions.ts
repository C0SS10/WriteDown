export const formatUppercase = (
  content: string,
  start: number,
  end: number
) => {
  const selectedText = content.slice(start, end);
  if (selectedText === selectedText.toUpperCase()) {
    return (
      content.slice(0, start) + selectedText.toLowerCase() + content.slice(end)
    );
  } else {
    return (
      content.slice(0, start) + selectedText.toUpperCase() + content.slice(end)
    );
  }
};

export const formatBold = (content: string, start: number, end: number) => {
  const selectedText = content.slice(start, end);
  if (selectedText.startsWith("**") && selectedText.endsWith("**")) {
    return (
      content.slice(0, start) + selectedText.slice(2, -2) + content.slice(end)
    );
  } else {
    return content.slice(0, start) + `**${selectedText}**` + content.slice(end);
  }
};

export const formatItalic = (content: string, start: number, end: number) => {
  const selectedText = content.slice(start, end);
  if (selectedText.startsWith("*") && selectedText.endsWith("*")) {
    return (
      content.slice(0, start) + selectedText.slice(1, -1) + content.slice(end)
    );
  } else {
    return content.slice(0, start) + `*${selectedText}*` + content.slice(end);
  }
};

export const formatHeading = (content: string, start: number, end: number) => {
  const selectedText = content.slice(start, end);
  if (selectedText.startsWith("#")) {
    return content.slice(0, start) + selectedText.slice(2) + content.slice(end);
  }
  return content.slice(0, start) + `# ${selectedText}` + content.slice(end);
};

export const formatSubheading = (
  content: string,
  start: number,
  end: number
) => {
  const selectedText = content.slice(start, end);
  if (selectedText.startsWith("##")) {
    return content.slice(0, start) + selectedText.slice(3) + content.slice(end);
  }
  return content.slice(0, start) + `## ${selectedText}` + content.slice(end);
};

export const formatSubitem = (content: string, start: number, end: number) => {
  const selectedText = content.slice(start, end);
  if (selectedText.startsWith("###")) {
    return content.slice(0, start) + selectedText.slice(4) + content.slice(end);
  }
  return content.slice(0, start) + `### ${selectedText}` + content.slice(end);
};

export const formatOrderedList = (
  content: string,
  start: number,
  end: number
) => {
  const selectedText = content.slice(start, end);
  if (selectedText.startsWith("1.")) {
    return content.slice(0, start) + selectedText.slice(3) + content.slice(end);
  }
  return (
    content.slice(0, start) + `1. ${selectedText}\n2. ` + content.slice(end)
  );
};

export const formatUnorderedList = (
  content: string,
  start: number,
  end: number
) => {
  const selectedText = content.slice(start, end);
  if (selectedText.startsWith("- ")) {
    return content.slice(0, start) + selectedText.slice(3) + content.slice(end);
  }
  return content.slice(0, start) + `- ${selectedText}\n- ` + content.slice(end);
};
