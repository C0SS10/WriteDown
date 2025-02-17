export const handleUppercase = (
  content: string,
  start: number,
  end: number
) => {
  const selectedText = content.slice(start, end);

  if (selectedText === selectedText.toUpperCase()) {
    // Si ya está en mayúsculas, convertir a minúsculas
    return (
      content.slice(0, start) + selectedText.toLowerCase() + content.slice(end)
    );
  } else {
    // Convertir a mayúsculas
    return (
      content.slice(0, start) + selectedText.toUpperCase() + content.slice(end)
    );
  }
};

export const handleBold = (content: string, start: number, end: number) => {
  const selectedText = content.slice(start, end);

  // Si el texto ya está en negrita, quitarlo
  if (selectedText.startsWith("*") && selectedText.endsWith("*")) {
    return (
      content.slice(0, start) + selectedText.slice(1, -1) + content.slice(end)
    );
  } else {
    // Aplicar negrita
    return content.slice(0, start) + `*${selectedText}*` + content.slice(end);
  }
};

// Otras funciones para las herramientas...
