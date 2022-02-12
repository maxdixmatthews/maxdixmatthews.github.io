let FoodReviews =[
    "A hefty steak resturant. Make sure to go here when someone else it paying, otherwise be sure to forget your wallet",
    "Fun name. Sounds like it was owned by the biblical king of babylon and you eat to fund his inquisition into Syria. Food good.",
    "Food and service is very good. The steaks and garlic breadwere the standout. Very accomidating to disabilities",
    "Lots of food. Lots and lots of food, more food than I could eat. More food than anyone could. The quantity makes up for quality",
    "When you're here it feels like everyone's your friends. But when the bill is paid (and you fail to tip) these friends dessert you.",
    "Apparently shut down now, but when open had the best pork around. For fine dining not badly priced would absolutely return if it wasn't shut down"
]

// function loadRev(string,id){
//     let text = FoodReviews[string-1]
//     let result = text.substr(0,100)
//     result += "..."

//     document.getElementById(id).innerHTML = result;
// }

function showFoodRevs(){
    for (let i = 0; i < FoodReviews.length; i++) {
        let num = "f"+(i+1).toString()
        let text = FoodReviews[i]
        let result = text.substr(0,100)
        result += "..."
        document.getElementById(num).innerHTML = result;
    }
 }
// function showRev1(){
//     // alert("Everything is great, if it would cover the bill I would give my liver to eat here again.")
//     document.getElementById("f1").innerHTML = "Everything is great, if it would cover the bill I would give my liver to eat here again."
// }

// function showRev2(){
//     // alert("Everything is great, if it would cover the bill I would give my liver to eat here again.")
//     document.getElementById("f2").innerHTML = "Food and service is very good. The steaks were the standout, along with the garlic bread. Very accomidating to disabilities"
// }

// function showRev3(){
//     // alert("Everything is great, if it would cover the bill I would give my liver to eat here again.")
//     document.getElementById("f3").innerHTML = "Lots of food. Lots and lots of food, more food than I could eat. More food than anyone could. The quantity makes up for quality"
// }

// function showRev4(){
//     // alert("Everything is great, if it would cover the bill I would give my liver to eat here again.")
//     document.getElementById("f4").innerHTML = FoodReviews[3]
// }

// function showRev5(){
//     // alert("Everything is great, if it would cover the bill I would give my liver to eat here again.")
//     document.getElementById("f5").innerHTML = FoodReviws[4]
// }

let BookReviews =[
    "A great intro to UBI. Lowry covers all the main arguments for a UBI (poverty, technological unemployment, ect.) and offers convincing rebuttles of the arguments against.",
    "The fifth book in the Throne of Glass series. My favourite one up to now. The plot entertainingly moved through all the antagonists quickly. The male love interest wasn't great.",
    "An easy to read novel about university life. The characters were very on the nose. I couldn't tell if they were ironic deconstructions of steriotypes or just shallow but it was hard to engage with them. Keen to Reid her next book.",
    "A compilation of David Sedaris' greatest hits. There is not overiding story in the collection of essays from <i> <a style='color:black', href='https://www.bookdepository.com/Calypso-David-Sedaris/9780349141893?ref=grid-view&qid=1642427863552&sr=1-1'>Calypso</a></i>, <i><a style='color:black', href='https://www.bookdepository.com/Let-s-Explore-Diabetes-With-Owls/9780349119427'>Let's explore Diabetes with Owls</a></i> and <i><a style='color:black', href='https://www.bookdepository.com/When-You-Are-Engulfed-in-Flames/9780316154680'>Engulfed</a></i>. Read <i><a style='color:black', href='https://www.bookdepository.com/Calypso-David-Sedaris/9780349141893?ref=grid-view&qid=1642427863552&sr=1-1'>Calypso</a></i> if you want a plotted story.",
    "A short autobiographical guidebook. In Patchett's memoir she gives a lot of practical advice about writing. Final line: 'Writing is a miserable, awful buisness... It is better than anything in the world'.",
    "David Sedaris' diaries from 2003-2020. A funny insight into how Sedaris sees the world and goes about his life. I prefered his first collection of diaries, <i> <a style='color:black', href='https://www.hachette.com.au/david-sedaris/theft-by-finding-diaries-volume-one'>Theft By Finding</a></i>, as it had more of a story arc. I really liked the 2020 COVID bits. "
]

function showBookRevs(){
    for (let i = 0; i < BookReviews.length; i++) {
        let num = "f"+(i+1).toString()
        let text = BookReviews[i]
        let result = text.substr(0,100)
        result += "..."
        document.getElementById(num).innerHTML = result;
    }
}

function fullBookRev(divEl){
    let num = "f"+(divEl).toString()
    document.getElementById(num).innerHTML = BookReviews[divEl-1];
}

function fullFoodRev(divEl){
    let num = "f"+(divEl).toString()
    document.getElementById(num).innerHTML = FoodReviews[divEl-1];
}

let chinese1 = [["I'm good", 'Wǒ hěn hǎo'], ['I hate them', 'Wǒ hèn tāmen'], ['pretty', 'Piàoliang'], ['you are', 'Nǐ shì'], ['want', 'yao'], ['shut up', 'bìzuǐ'], ['teacher', 'jiàoshī'], ['who?', 'shéi']];

if(localStorage.getItem("chinese") === null){
    localStorage.setItem('chinese', JSON.stringify(chinese1));
}


let colorsSata = JSON.parse (localStorage.getItem('chinese'));
console.log(colorsSata)


// document.getElementById("f1").onclick = function changeContent(){
//     alert("Everything is great, if it would cover the bill I would give my liver to eat here again.")
//     // document.getElementById("f1").innerHTML = "Everything is great, if it would cover the bill I would give my liver to eat here again."
// };

// document.getElementById("f2").onclick = function diffContent(){
//     document.getElementById("f2").innerHTML = "Food and service is very good. The steaks were the standout, along with the garlic bread. Very accomidating to disabilities"
// };

// document.getElementById("f3").onclick = function(){
//     document.getElementById("f3").innerHTML = "Food and service is very good. The steaks were the standout, along with the garlic bread. Very accomidating to disabilities"
// };

// document.getElementById("f4").onclick = function(){
//     document.getElementById("f4").innerHTML = "Food and service is very good. The steaks were the standout, along with the garlic bread. Very accomidating to disabilities"
// };

// document.getElementById("f5").onclick = function(){
//     document.getElementById("f5").innerHTML = "Food and service is very good. The steaks were the standout, along with the garlic bread. Very accomidating to disabilities"
// };
speechSynthesis.cancel();
var voices = window.speechSynthesis.getVoices();
var contentArray = JSON.parse (localStorage.getItem('chinese'));

let flashcards = document.getElementByid("flashcards");
let createBox = document.getElementById("create-box");
let question = document.getElementById("question");
let answer = document.getElementById("answer");

function speakPls(text){
    var msg = new SpeechSynthesisUtterance();
    // var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[5]; // Note: some voices don't support altering params
    msg.voiceURI = 'native';
    msg.volume = 1; // 0 to 1
    msg.rate = 1; // 0.1 to 10
    msg.pitch = 1; //0 to 2
    msg.text = text;
    msg.lang = 'zh-CN';

    msg.onend = function(e) {
    console.log('Finished in ' + event.elapsedTime + ' miliseconds.');
    };

    speechSynthesis.speak(msg);
}

function delFlashCards(){
    let flashcards = document.getElementById("flashcards");
    // localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
}

function remCardStorage(word){
    console.log(word);
    var allWords = JSON.parse (localStorage.getItem('chinese'));
    var index = allWords[0].indexOf(word[0]);
    console.log(index);
    var newArray = new Array()
    for(var i = 0; i <= allWords.length - 1; i++){
        if(allWords[i][0] != word[0]){
            newArray.push(allWords[i])
        }
    }
    localStorage.setItem('chinese', JSON.stringify(newArray));
    oldWords();
    window.location.reload();
    console.log(newArray);
}

function hideCreateBox(){
    let createBox = document.getElementById("create-box");
    createBox.style.display = "none";
}

function showCreateCardBox(){
    let createBox = document.getElementById("create-box");
    createBox.style.display = "block";
}

function divMaker(text){
    var div = document.createElement("div");
    var h2_question = document.createElement("h2");
    var h2_answer = document.createElement("h2");
    var speaker = document.createElement("i");
    var delCard = document.createElement("i")
    let flashcards = document.getElementById("flashcards");
    var br1 = document.createElement("br")
    var br2 = document.createElement("br")
    var br3 = document.createElement("br")

    div.className = 'flashcard';
    h2_question.setAttribute('style', "border-top: 1px solid black; padding: 15px; margin-top: 30px")
    h2_question.innerHTML = text[0];
    h2_answer.setAttribute('style', "text-align: center; display:none; color:red");
    h2_answer.innerHTML = text[1];

    delCard.className = "fa fa-close"
    delCard.setAttribute('style',"position: relative; padding-bottom:90%; padding-left: 90%; color:red")
    // delCard.setAttribute('onclick','deleteCard')

    speaker.className = "fas fa-volume-up"; 
    speaker.setAttribute('onclick','speakPls');
    speaker.setAttribute('style', " position: relative; padding-left:90%");

    div.appendChild(h2_question);
    div.appendChild(h2_answer);
    div.appendChild(br1);
    div.appendChild(br2);

    div.appendChild(speaker)
    div.appendChild(delCard)

    div.addEventListener("click", function(){
        if(h2_answer.style.display == "none")
            h2_answer.style.display = "block";
        else 
            h2_answer.style.display = "none";

    })

    speaker.addEventListener("click", function(){
        speakPls(text[1]);
    })

    delCard.addEventListener("click", function(){
        remCardStorage(text);
    })

    flashcards.appendChild(div);
}


function oldWords(){
    let refillData = JSON.parse (localStorage.getItem('chinese'));
    for (let i = 0; i < refillData.length; i++) {
        divMaker(refillData[i]);
      }
}

function addFlashcard(){
    let question = document.getElementById("question");
    let answer = document.getElementById("answer");
    let contentArray = JSON.parse (localStorage.getItem('chinese'));
    let flashcard_info = [
        question.value,
        answer.value
    ];
    contentArray.push(flashcard_info);
    localStorage.setItem('chinese', JSON.stringify(contentArray));
    let content = JSON.parse (localStorage.getItem('chinese'));
    console.log(content);

    divMaker(flashcard_info);
    question.value = ''
    answer.value = ''
}

// shan's functions 
let d = new Date();
let time = d.getTime();

let time_to_expire= time + 2*3600000 

let anxiety_list = {
    "expire":time_to_expire,
    "iron": 0,
    "stove": 0,
    "straightener":0,
    "other":0
}
console.log(anxiety_list)

localStorage.setItem('anxiety', JSON.stringify(anxiety_list));
let blahh = JSON.parse (localStorage.getItem('anxiety'));
console.log(blahh)
if(localStorage.getItem("anxiety") === null){
    localStorage.setItem('anxiety', JSON.stringify(anxiety_list));
}

function saveInfo(){
    var iron = document.getElementById("iron").checked;
    let stove = document.getElementById("stove").checked;
    let straightener = document.getElementById("straightener").checked;
    let other = document.getElementById("other").checked;

    const d = new Date();
    let time = d.getTime();

    let time_to_expire= time+ 2*3600000 
    let check_list = JSON.parse (localStorage.getItem('anxiety'));

    let anxiety_list = {
        "expire":time_to_expire,
        "iron": check_list.iron||iron,
        "stove": check_list.stove||stove,
        "straightener":check_list.straightener||straightener,
        "other":check_list.other||other
    }
    localStorage.setItem('anxiety', JSON.stringify(anxiety_list));
    let allIt = JSON.parse (localStorage.getItem('anxiety'));
    console.log(allIt)
}

function newInfo(){
    let d = new Date();
    let time = d.getTime();

    let time_to_expire= time + 2*3600000 

    let anxiety_list = {
        "expire":time_to_expire,
        "iron": false,
        "stove": false,
        "straightener": false,
        "other": false
    }

    localStorage.setItem('anxiety', JSON.stringify(anxiety_list));
    let del = JSON.parse (localStorage.getItem('anxiety'));
    console.log(del)
}

function checkComplete(){
    let what_is_on = JSON.parse (localStorage.getItem('anxiety'));
    var warning = document.getElementById("isItDone")
    const d = new Date();
    let time = d.getTime();
    let printStr ="WARNING WARNING"
    if(time > what_is_on.expire){
        printStr+="NOT COMPLETE";
        newInfo()
    }

    if(!what_is_on.iron){
        printStr+=" IRON ON"
    }

    if(!what_is_on.stove){
        printStr+=" STOVE ON"
    }

    if(!what_is_on.straightener){
        printStr+=" STRAIGHTENER ON"
    }
    if(printStr === "WARNING WARNING"){
        printStr = "YOU ARE SAFE! Good job shan"
    }
    warning.innerHTML=printStr
}