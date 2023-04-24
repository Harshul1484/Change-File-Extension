function changeExtension() {
  // Get the uploaded file
  const file = document.getElementById("fileUpload").files[0];

  // Get the new extension from the selected option
  const extensionSelect = document.getElementById("newExtension");
  const newExtension = extensionSelect.options[extensionSelect.selectedIndex].value;

  // Check if a file was uploaded
  if (!file) {
    document.getElementById("result").innerHTML = "Please select a file";
    return;
  }

  // Check if the selected conversion is supported
  if (
    (file.type === "image/jpeg" && newExtension === ".pdf") ||
    (file.type === "image/png" && newExtension === ".pdf") ||
    (file.type === "application/pdf" && newExtension !== ".pdf") ||
    (file.type === "image/jpeg" && newExtension === ".png") ||
    (file.type === "image/png" && newExtension === ".jpg")
  ) {
    document.getElementById("result").innerHTML = "Unsupported conversion";
    return;
  }

  // Create a new filename with the new extension
  const parts = file.name.split(".");
  parts.pop(); // remove the old file extension
  const filename = parts.join(".") + newExtension; // add the new file extension

  // Create a new File object with the new filename
  const newFile = new File([file], filename, { type: file.type });

  // Create a download button for the new file
  const downloadButton = document.createElement("button");
  downloadButton.innerText = "Download new file";
  downloadButton.onclick = () => {
    const blob = new Blob([newFile], { type: file.type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = newFile.name;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Display the download button
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").appendChild(downloadButton);
}




