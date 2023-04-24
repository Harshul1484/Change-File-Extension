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



$(document).ready(function() {
  // Handle touch events on mobile devices
  $('button').on('touchstart', function() {
    $(this).addClass('hover');
  });
  $('button').on('touchend', function() {
    $(this).removeClass('hover');
  });

  // Handle file upload and extension change
  function changeExtension() {
    var fileUpload = document.getElementById("fileUpload");
    var newExtension = document.getElementById("newExtension").value;
    var result = document.getElementById("result");

    if (typeof fileUpload.files !== "undefined") {
      var fileName = fileUpload.files[0].name;
      if (fileName.lastIndexOf(".") !== -1 && fileName.lastIndexOf(".") !== 0) {
        var lastIndex = fileName.lastIndexOf(".");
        var extension = fileName.substring(lastIndex);
        var newFileName = fileName.substring(0, lastIndex) + newExtension;
        result.innerHTML = "New filename: " + newFileName;
      } else {
        result.innerHTML = "Invalid file format";
      }
    } else {
      result.innerHTML = "Please select a file";
    }
  }

  $('button').on('click', function() {
    changeExtension();
  });
});

