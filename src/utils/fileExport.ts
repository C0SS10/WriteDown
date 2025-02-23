import jsPDF from "jspdf";

export async function exportIntoPDF() {
  const fileContent = document.getElementById("file-content");
  if (!fileContent) return;

  // Crear un nuevo PDF
  const pdf = new jsPDF("p", "cm", "a4");

  pdf.addFont("Roboto-normal.ttf", "Roboto", "normal");
  pdf.setFont("Roboto");

  try {
    await pdf.html(fileContent, {
      callback: (pdf) => {
        pdf.save("WriteDown.pdf");
      },
      margin: [8, 2, 8, 2],
      autoPaging: "text",
      width: 190,
      windowWidth: fileContent.scrollWidth,
    });
  } catch (error) {
    console.error("Error al exportar el PDF:", error);
  }
}
