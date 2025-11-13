let students = {
    "ali" : [17, "🐕"],
    "abdel" : [17, "🧸"],
    "mazen" : [17, "🐎"],
    "ghassane" : [17, "⭐"],
    "yorre" : [17, "🦁"]
};
console.log(students);
const div = document.createElement("div");
document.body.appendChild(div);

let studentsEntries = Object.entries(students);
let sortedEntires = studentsEntries .sort((a,b) => a[1][0] - b[1][0])
    for(let[key, value]of studentsEntries) {
        let paragraph = document.createElement("p")
        div.appendChild(paragraph);
        paragraph.innerHTML= value[1] + " " + key  + " is " + value[0] + " jaar. ";
        paragraph.style.fontSize = (value[0]/9) + "rem"
        paragraph.style. color = "rgb(" + (value[0]*2)+ "," + (value[0]*10) + "," + (value[0]*50) +")";
        div.appendChild(paragraph); 
    
    
    
    
    
    
    
    
    };