let count=0;
document.getElementById("decreaseBtn").onclick=function (){
    
    if(count==0){
        count=0
        document.getElementById("countLabel").innerHTML=count;

    }else{
        count-=1
        sdocument.getElementById("countLabel").innerHTML=count;
    }
    
}

document.getElementById("resetBtn").onclick=function (){
    count=0;
    document.getElementById("countLabel").innerHTML=count;
}
document.getElementById("increaseBtn").onclick=function (){
    count+=1;
    document.getElementById("countLabel").innerHTML=count;
}
document.getElementById("decreaseBtn").onclick=function (){
    count-=1;
    document.getElementById("countLabel").innerHTML=count;
}