const numberField=document.querySelector(".number-field");
const FtoC = (f)=>{
    return Math.trunc(((f-32)*5)/9);
}
const CtoF = (c)=>{
    return Math.trunc(((9*c)/5)+32);
}
const convert=(temp,fun)=>{
    return fun(temp);
}
const calc=()=>{
    var temp=numberField.value;
    console.log(temp);
    const selectMenu1=document.querySelector("#input-unit"),selectMenu2=document.querySelector("#output-unit");
    let str;
    if(temp=="")
    {
        str="No number is selected!"

    }
else if(selectMenu1.value=="dummy" || selectMenu2.value=="dummy" )
{
    str="Please select valid units!";
}
else if(selectMenu1.value===selectMenu2.value)
{
    str=`Both the units are same`;

}
else
{
    let finalTemp;
    str="= ";
    if(selectMenu2.value=="Fareh")
    {
        finalTemp=convert(temp,CtoF);
        str+=finalTemp+"\u00B0F";

    }
    else
    {
        finalTemp=convert(temp,FtoC);
        str+=finalTemp+"\u00B0C";
    }
}
return str;
}
const but=document.querySelector(".btn");
const output=document.querySelector(".output");
but.addEventListener('click',()=>{
    let audio = new Audio('sounds/click.wav');
    audio.play();
    let str=calc();
    // console.log(str);
    output.innerHTML=`<strong>${str}</strong>`;
});



