let textoutput = document.getElementById('textoutput');

const allText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum lorem sed 
risus ultricies tristique nulla aliquet enim. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Sit amet purus gravida quis blandit turpis cursus. 
Sit amet dictum sit amet justo. Elementum facilisis leo vel fringilla est ullamcorper. Aliquet risus feugiat in ante metus dictum at tempor. Eget magna fermentum 
iaculis eu non. Sit amet risus nullam eget felis eget. Ullamcorper velit sed ullamcorper morbi. Ut morbi tincidunt augue interdum velit euismod in. Neque egestas 
congue quisque egestas diam. Dui vivamus arcu felis bibendum ut tristique et. Leo integer malesuada nunc vel risus commodo. Sed odio morbi quis commodo odio aenean 
sed adipiscing diam.**Data**
In ante metus dictum at tempor. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Mauris rhoncus aenean vel elit. Ac tortor vitae purus faucibus ornare 
suspendisse sed nisi lacus. Dui accumsan sit amet nulla facilisi morbi tempus. Fermentum posuere urna nec tincidunt praesent. Quis lectus nulla at volutpat. Ac 
feugiat sed lectus vestibulum mattis. Egestas erat imperdiet sed euismod. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Cursus mattis molestie 
a iaculis at erat pellentesque adipiscing commodo. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Amet cursus sit amet dictum sit. Et malesuada fames ac 
turpis. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Eu sem integer vitae justo eget magna fermentum iaculis eu. Faucibus vitae aliquet nec 
ullamcorper sit amet. Id diam vel quam elementum pulvinar etiam non quam.
-|-**Data**
Suspendisse sed nisi lacus sed viverra tellus in hac. Semper eget duis at tellus at. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Nulla malesuada 
pellentesque elit eget gravida cum sociis natoque. Purus sit amet volutpat consequat. Morbi tristique senectus et netus et malesuada. Tortor consequat id porta nibh 
venenatis cras sed felis eget. Egestas diam in arcu cursus. Et netus et malesuada fames ac turpis egestas sed. Ornare suspendisse sed nisi lacus sed viverra tellus 
in hac. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Nibh tortor id aliquet lectus proin nibh. Lectus magna fringilla urna porttitor rhoncus dolor 
purus non. A arcu cursus vitae congue. Vulputate enim nulla aliquet porttitor. Eu scelerisque felis imperdiet proin fermentum leo vel. Amet purus gravida quis 
blandit turpis. A diam sollicitudin tempor id eu. Molestie a iaculis at erat pellentesque adipiscing. Scelerisque felis imperdiet proin fermentum leo vel orci-|-`;

const markers = ['**Data**', '-|-', '!'];

function appendMarkerToFrontOfArrayElements(txtArray, marker) {
  const transformation = txtArray.map((txtArrayItem) => {
    // Transformation
    txtArrayItem = marker + txtArrayItem;
    return txtArrayItem;
  });
  return transformation;
}

function removeMarkerFromFrontOfArrayElements(txtArray, marker) {
  const transformation = txtArray.map((txtArrayItem) => {
    // Transformation
    txtArrayItem = txtArrayItem.replace(marker, '');

    console.log(txtArrayItem);

    return txtArrayItem;
  });
  return transformation;
}

function removeFirstElement(iArray) {
  const removeFirstElement = iArray.filter((element, i) => {
    // Filter
    if (i>0) { return element; } // use a ternary instead
  });
  return removeFirstElement;
}

function frontJoin(array, delimiter) {
  return delimiter + array.join(delimiter);
}

function showData(data, label, mode) {

  if (mode === 'append') {
    textoutput.innerHTML += `<div style='font-weight:bold'>${ label }</div> ${ data } <br/><br/>`;
  } else {
    textoutput.innerHTML = `<div style='font-weight:bold'>${ label }</div> ${ data } <br/><br/>`;
  }
}

const textArray = allText.split('**Data**');
showData(textArray, "Split the initial array");
const noFirstElement = removeFirstElement(textArray);
showData(noFirstElement, 'noFirstElement, Convert Array to String', 'append');
const removeMarkers = removeMarkerFromFrontOfArrayElements(noFirstElement, markers[0]);
showData(removeMarkers, 'Removed Markers', 'append');
const newText = frontJoin(removeMarkers, markers[0]);
showData(newText, 'String, Double Marker Problem', 'append');

const room2 = newText.split(markers[1]);
showData(room2, 'Room 2', 'append');
