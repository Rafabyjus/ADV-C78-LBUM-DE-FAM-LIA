var images=
["https://postlmg.cc/zVHtNgH4",
"https://postimg.cc/rRygfbL2",
"https://postimg.cc/878yzzhc",
"https://postimg.cc/NK1d9v44",
"https://postimg.cc/sBT97jZp",
"https://postimg.cc/BPXhX8YL"];
var names = ["Álbum de Família","Rodrigo Silva","Diego Silva","Roberto Silva","Aline Silva","Sonia Silva"];

var i = 0;
function update()
{
    i++;
    var numbersOfFamilyMemberInArray = 5
    if(i > numbersOfFamilyMemberInArray)
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("familyMemberImage").src = updatedImage;
    document.getElementById("familyMemberName").src = updatedName;
}
