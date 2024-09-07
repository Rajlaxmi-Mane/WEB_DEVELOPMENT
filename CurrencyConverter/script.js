const baseUrl = "https://cdn.jsdelivr.net/gh/fawazahned0/currency-api@1/latest/currencies"
const dropdowns = document.querySelectorAll(".dropdown select");
const button=document.querySelector("form button");
const fromCur=document.querySelector(".from select");
const toCur=document.querySelector(".to select");

const msg=document.querySelector(".msg ")

for (let select of dropdowns) {
    for (curCode in countryList) {
        let newOptions = document.createElement("option");
        newOptions.innerText = curCode;
        newOptions.value = curCode;
        if (select.name == "from" && curCode === "USD") {
            newOptions.selected = "selected";
        } else if (select.name == "to" && curCode === "INR") {
            newOptions.selected = "selected";
        }
        select.append(newOptions);

    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}


const updateFlag = (element) => {
    let curCode = element.value;
    let countryCode = countryList[curCode];
    let newSorce = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSorce;
}


button.addEventListener("click", async(evt)=>{
    evt.preventDefault();
    let amt=document.querySelector(".amt input");
    let amtval=amt.value;

    if(amtval === "" || amtval < 1){
        amtval=1;
        amtval.value = "1";
        prompt("enter valid amount....")  
    }
    
    const url=`${baseUrl}/${fromCur.value.toLowerCase()}/${toCur.value.toLowerCase()}.json`;

    let respnse=await fetch(url);
    let data=await respnse.json();
    let rate=data[toCur.toLowerCase()];

    let finalAmt=amt.value*rate;
    msg.innerText=`1${amtval} ${fromCur} = ${finalAmt} ${toCur}`;
    
})


