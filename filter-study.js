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

const textArray = allText.split('**Data**').join('|**Data**').split('|');
textoutput.innerHTML = textArray;
// // const contents = allText.reduce((acc, val) => {

// //   console.log(val);

// // });
// // console.log(contents);

// const room1Contents = textArray.filter((text) => {
//   return (text.indexOf('**Data**') !== -1);
//   const room2Contents = room1Contents.filter((text) => {
//     return (text.indexOf('-|-') !== -1 && text.indexOf('!') === -1);
//   });
// });

// const allText; // Acquired from a text source
// const markers = ['**Data**', '-|-', '!'];

// const begText = marker1Text(allText, markers[0]);
// const endText = marker2Text(begText, markers[1]);
// const prsText = parseText(endText, markers[2]);

// function marker1Text(text, marker) {

//   // console.log('text', text);
//   console.log('marker', marker);
//   textoutput.innerHTML = marker;

//   let textArray = text.split(marker); // Separate into array elements, removing delimiters
//   console.log('textArray', textArray);
//   textoutput.innerHTML += '<br/>' + textArray;

//   textArray = textArray.splice(1); // Remove the chaff
//   console.log('shift', textArray);
//   textoutput.innerHTML = '<br/>' + textArray;

//   let delimitersBack = textArray.map((arrayItem) => { // Put the delimiters back
//     return marker + arrayItem;
//   });
  
//   textoutput.innerHTML = delimitersBack;

//   textArray = delimitersBack.join(marker);

//   textoutput.innerHTML = 'Help';

//   console.log(marker + marker);
//   const mLocation = textArray.indexOf(marker+marker);
//   console.log(mLocation);
//   textArray.replace(marker+marker, marker);

//   textoutput.innerHTML = textArray;

//   // console.log(textArray);

//   return (text.indexOf(marker) !== -1) ? text : ''
// };

// function marker2Text(text, marker) {
//   return (text.indexOf(marker) !== -1) ? text : ''
// };

// function parseText(text, marker) {
//   return (text.indexOf(marker) === -1) ? text : ''
// };

// console.log('begText', begText);
// console.log('endText', endText);
// console.log('prsText', prsText);