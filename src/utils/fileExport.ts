import jsPDF from "jspdf";

export async function exportIntoPDF() {
  const fileContent = document.getElementById("file-content");
  if (!fileContent) return;

  try {
    // Crear un nuevo PDF
    const pdf = new jsPDF("p", "mm", "a4");

    pdf.setFont("courier");

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
