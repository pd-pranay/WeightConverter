// const input= document.getElementById('userValue');
// var weight;

// document.getElementById('weight').addEventListener('input',function(e){
//     weight = e.target.value;
// });

// input.addEventListener('input',function(e){
//     let kgs = e.target.value;
//     console.log(weight);

//     document.getElementById('gramOp').innerHTML= kgs*1000;
//     document.getElementById('poundOp').innerHTML= kgs* 2.2046;35.274
//     document.getElementById('ounceOp').innerHTML= kgs* 35.274;
// });

document.getElementById("output").style.visibility = "hidden";
document.getElementById('myForm').addEventListener('submit',function(e){
    document.getElementById("output").style.visibility = "visible";
    let kg  = document.getElementById('userValue').value;
    let type  = document.getElementById('weight').value;
    console.log(kg+" " ,type);
   
    if(type ==="grams"){
        document.getElementById('gramOp').innerHTML= kg*1000;
        document.getElementById('poundOp').innerHTML= null;
        document.getElementById('ounceOp').innerHTML= null;
    }else if(type ==="pounds"){
        document.getElementById('poundOp').innerHTML= kg* 2.2046;
        document.getElementById('gramOp').innerHTML= null;
        document.getElementById('ounceOp').innerHTML= null;
    }else{
        document.getElementById('ounceOp').innerHTML= kg* 35.274;   
        document.getElementById('poundOp').innerHTML= null;
        document.getElementById('gramOp').innerHTML= null;
    }
    e.preventDefault();
});