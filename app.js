console.log('hi')

var birth = document.querySelector("#btn")
var lucky = document.querySelector(".luckyInput")
var birthday = document.querySelector(".myBirthday")

birth.addEventListener("click", clickHandler)
function clickHandler ()
{

    var da = birthday.value.map(Date.parse);
   
}


/* onsole.log(da)
console.log("okay you can do it")
console.log(typeof birthday.value)
console.log(Date.parse (birthday.value))
} */