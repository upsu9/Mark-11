var birth = document.querySelector("#btn")
var lucky = document.querySelector(".luckyInput")
var birthday = document.querySelector(".myBirthday")
var trueFalse = document.querySelector(".check")

birth.addEventListener("click", clickHandler)

function clickHandler() {
    

    if (birthday.value && lucky.value !== "") {
        sumOfBirthday()
    } else {
        trueFalse.innerText = "print the both fields"
    }


}


function sumOfBirthday() {
    var actualBirthday = birthday.value
    var sumBirthday = actualBirthday.replaceAll("-", "");
    /* console.log(sumBirthday) */
    var sumOfBirthday = 0;
    for (i = 0; i < sumBirthday.length; i++)
        sumOfBirthday = sumOfBirthday + Number(sumBirthday.charAt(i))
    console.log(sumOfBirthday)
    compare(sumOfBirthday, lucky.value)

}

function compare(sumOfBirthday, lucky) {


    if (sumOfBirthday % lucky === 0) {
        trueFalse.innerText="you are lucky"
    } else {
        trueFalse.innerText="you are not lucky"
    }


}