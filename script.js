let reviews =[
    "Everything is great, if it would cover the bill I would give my liver to eat here again.",
    "Food and service is very good. The steaks were the standout, along with the garlic bread. Very accomidating to disabilities",
    "Lots of food. Lots and lots of food, more food than I could eat. More food than anyone could. The quantity makes up for quality",
    "When you're here it feels like you have friends. But when the bill is paid these friends dessert you and kick you out",
    "Apparently shut down now, but when open had the best pork around. For fine dining not badly priced would absolutely return"
]

function loadRev(string,id){
    let text = reviews[string-1]
    let result = text.substr(0,100)
    result += "..."

    document.getElementById(id).innerHTML = result;
}

function showRev1(){
    // alert("Everything is great, if it would cover the bill I would give my liver to eat here again.")
    document.getElementById("f1").innerHTML = "Everything is great, if it would cover the bill I would give my liver to eat here again."
}

function showRev2(){
    // alert("Everything is great, if it would cover the bill I would give my liver to eat here again.")
    document.getElementById("f2").innerHTML = "Food and service is very good. The steaks were the standout, along with the garlic bread. Very accomidating to disabilities"
}

function showRev3(){
    // alert("Everything is great, if it would cover the bill I would give my liver to eat here again.")
    document.getElementById("f3").innerHTML = "Lots of food. Lots and lots of food, more food than I could eat. More food than anyone could. The quantity makes up for quality"
}

function showRev4(){
    // alert("Everything is great, if it would cover the bill I would give my liver to eat here again.")
    document.getElementById("f4").innerHTML = reviews[3]
}

function showRev5(){
    // alert("Everything is great, if it would cover the bill I would give my liver to eat here again.")
    document.getElementById("f5").innerHTML = reviews[4]
}



document.getElementById("f1").onclick = function changeContent(){
    alert("Everything is great, if it would cover the bill I would give my liver to eat here again.")
    // document.getElementById("f1").innerHTML = "Everything is great, if it would cover the bill I would give my liver to eat here again."
};

document.getElementById("f2").onclick = function diffContent(){
    document.getElementById("f2").innerHTML = "Food and service is very good. The steaks were the standout, along with the garlic bread. Very accomidating to disabilities"
};

document.getElementById("f3").onclick = function(){
    document.getElementById("f3").innerHTML = "Food and service is very good. The steaks were the standout, along with the garlic bread. Very accomidating to disabilities"
};

document.getElementById("f4").onclick = function(){
    document.getElementById("f4").innerHTML = "Food and service is very good. The steaks were the standout, along with the garlic bread. Very accomidating to disabilities"
};

document.getElementById("f5").onclick = function(){
    document.getElementById("f5").innerHTML = "Food and service is very good. The steaks were the standout, along with the garlic bread. Very accomidating to disabilities"
};