const htmlCode = document.querySelector(".html");
const cssCode = document.querySelector(".css");
const jsCode = document.querySelector(".javascript");
const display = document.querySelector(".display");

function compileCode() {
  display.contentDocument.body.innerHTML =
    htmlCode.value + "<style>" + cssCode.value + "</style>";
  display.contentWindow.eval(jsCode.value);
}

function exportProject() {
  const zip = new JSZip();

  zip.file("index.html", htmlCode.value);
  zip.file("style.css", cssCode.value);
  zip.file("script.js", jsCode.value);

  zip.generateAsync({ type: "blob" }).then(function (blob) {
    console.log(blob);
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "project.zip";
    link.click();
  });
}
