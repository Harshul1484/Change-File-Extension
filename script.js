

/*  
  ⣀⠀⠐⣶⣄⣀⣀⠀⠀⣠⠾⣿⣇⠹⣄⣩⣿⣿⡳⣆⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀
⠛⠛⠻⠿⠿⠿⠿⠿⠿⠿⣿⠟⠋⠀⢀⠀⠀⠈⠙⠭⣿⣿⣦⣦⣤⣄⣰⣠⣀⣀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⠅⠀⡀⠀⠀⠄⠂⠀⠀⠀⠈⢝⣏⠉⠉⠉⠉⠉⠛⠛
⠀⠀⠀⠀⠀⠀⠀⠀⣸⡏⠀⢨⠈⠆⠀⠀⢀⠁⠌⢀⠀⠀⢟⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣰⡧⠱⣿⣿⠆⠂⡄⢀⣤⣥⡄⠀⠠⠀⠀⡻⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢰⣡⢉⡀⣠⠀⢄⢄⠢⢀⠈⠋⠁⠀⠀⠀⠀⠐⢿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢸⢇⠠⢴⣏⣴⠶⣷⣵⣄⡤⡐⡀⢢⠐⠄⠀⠀⣾⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢼⡄⠀⠈⢈⠆⢃⠜⠛⠉⠀⠱⢈⠂⠀⣀⣴⠏⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠙⢲⠶⢴⠄⢨⠶⠠⠄⡀⣦⡔⣸⠶⠟⠙⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⡴⡛⠻⠁⠀⠀⠂⠀⠀⠉⡟⡶⢍⠳⡤⠬⡈⠀⠉⣈⠀⠀
⠀⠀⢐⠶⠔⣲⠺⠓⡣⠀⠀⠀⠀⠀⠀⢠⠐⠤⠀⢹⡈⡆⠀⡖⠆⣓⣐⠛⠀⠀
⠀⠀⠀⡤⠋⢷⣉⣦⢘⠲⣄⠀⠽⠄⠀⠀⠇⠀⠀⠈⢷⠔⠀⠹⠞⠹⢤⠀⠀⠀
⠀⠀⠈⢧⣸⠃⠀⠘⠐⠓⡀⢳⣴⢄⠀⠬⣒⣨⡀⠔⠡⠐⡶⢗⠿⡾⠣⠃⠀⠀
⠀⠀⠀⠀⠻⠳⠶⣷⣦⣤⡵⠿⢿⠛⡟⠯⠉⠉⠁⢀⣤⣤⡄⠤⢠⢠⠓⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⡀⣀⠈⠀⣀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠋⠂⠀⠀⠀
*/


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
  
  // Create a new filename with the new extension
  const parts = file.name.split(".");
  parts.pop();
  const filename = parts.join(".") + newExtension;
  
  // Create a new File object with the new filename
  const newFile = new File([file], filename, { type: file.type });
  
  // Create a download link for the new file
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(newFile);
  downloadLink.download = newFile.name;
  downloadLink.innerHTML = "Download new file";

const downloadButton = document.createElement("button");
downloadButton.innerText = "Download new file";
downloadButton.onclick = () => {
  downloadLink.click();
}
document.getElementById("result").innerHTML = "";
document.getElementById("result").appendChild(downloadButton);
}
