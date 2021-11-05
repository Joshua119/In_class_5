// ADD NEW ITEM TO END OF LIST
var elements = document.getElementsByTagName("li");
var firstItem = elements[0];

var node = document.createElement("li");         
var text = document.createTextNode("cream");         
node.appendChild(text);                            
var parent_name = document.getElementById("one").parentNode;
parent_name.appendChild(node);     

// ADD NEW ITEM START OF LIST
var node = document.createElement("li");         
var text = document.createTextNode("kale"); 
node.appendChild(text);                            
parent_name.insertBefore(node, document.getElementById("one"));   

// ADD A CLASS OF COOL TO ALL LIST ITEMS

elements = document.getElementsByTagName("li");
for(var i = 0; i < document.getElementsByTagName("li").length; i++) {
    var item = elements[i];
    item.setAttribute('class', 'cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

var j = document.getElementsByTagName("li").length;
document.querySelector("h2").innerText = "Buy " + j + " groceries";
