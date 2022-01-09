let FoodReviews =[
    "Everything is great, if it would cover the bill I would give my liver to eat here again.",
    "Food and service is very good. The steaks were the standout, along with the garlic bread. Very accomidating to disabilities",
    "Lots of food. Lots and lots of food, more food than I could eat. More food than anyone could. The quantity makes up for quality",
    "When you're here it feels like you have friends. But when the bill is paid these friends dessert you and kick you out",
    "Apparently shut down now, but when open had the best pork around. For fine dining not badly priced would absolutely return"
]

function loadRev(string,id){
    let text = FoodReviews[string-1]
    let result = text.substr(0,100)
    result += "..."

    document.getElementById(id).innerHTML = result;
}

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
    "A great intro to UBI. Lowry covers all the main arguments for a UBI (poverty, technological unemployment, ect.) and offers convincing rebuttles of the arguments against."
]

function showBookRevs(){
    for (let i = 0; i < FoodReviews.length; i++) {
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

let chinese1 = [["I'm good", 'Wǒ hěn hǎo'], ['I hate them', 'Wǒ hèn tāmen'], ['pretty', 'Piàoliang'], ['you are', 'Nǐ shì'], ['want', 'yao'], ['shut up', 'bìzuǐ'], ['teacher', 'jiàoshī'], ['who?', 'shéi']];
localStorage.setItem('chinese', JSON.stringify(chinese1));

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


var contentArray = JSON.parse (localStorage.getItem('chinese'));

let flashcards = document.getElementByid("flashcards");
let createBox = document.getElementById("create-box");
let question = document.getElementById("question");
let answer = document.getElementById("answer");

function delFlashCards(){
    let flashcards = document.getElementById("flashcards");
    // localStorage.clear();
    flashcards.innerHTML = '';
    contentArray = [];
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
    let flashcards = document.getElementById("flashcards");

    div.className = 'flashcard';
    h2_question.setAttribute('style', "border-top: 1px solid black; padding: 15px; margin-top: 30px")
    h2_question.innerHTML = text[0];
    h2_answer.setAttribute('style', "text-allgin: center; display:none; color:red");
    h2_answer.innerHTML = text[1];

    div.appendChild(h2_question);
    div.appendChild(h2_answer);

    div.addEventListener("click", function(){
        if(h2_answer.style.display == "none")
            h2_answer.style.display = "block";
        else 
            h2_answer.style.display = "none";

    })
    flashcards.appendChild(div);
}



function oldWords(){
    for (let i = 0; i < chinese1.length; i++) {
        divMaker(chinese1[i]);
      }
}

function addFlashcard(){
    let question = document.getElementById("question");
    let answer = document.getElementById("answer");
    let contentArray = localStorage.getItem('chinese') ? JSON.parse(localStorage.getItem('items')) : [];
    let flashcard_info = [
        question.value,
        answer.value
    ]
    // contentArray.push(flashcard_info);
    localStorage.setItem('chinese', JSON.stringify(contentArray));
    divMaker(flashcard_info);
    question.value = ''
    answer.value = ''

}



// document.getElementById("show_card_box").addEventListener("click", () => {
//   document.getElementById("create_card").style.display = "block";
// });

// document.getElementById("close_card_box").addEventListener("click", () => {
//   document.getElementById("create_card").style.display = "none";
// });

// flashcardMaker = (text) => {
//   const flashcard = document.createElement("div");
//   const question = document.createElement('h2');
//   const answer = document.createElement('h2');

//   flashcard.className = 'flashcard';

//   question.setAttribute("style", "border-top:1px solid red; padding: 15px; margin-top:30px");
//   question.textContent = text.my_question;

//   answer.setAttribute("style", "text-align:center; display:none; color:red");
//   answer.textContent = text.my_answer;

//   flashcard.appendChild(question);
//   flashcard.appendChild(answer);

//   flashcard.addEventListener("click", () => {
//     if(answer.style.display == "none")
//       answer.style.display = "block";
//     else
//       answer.style.display = "none";
//   })

//   document.querySelector("#flashcards").appendChild(flashcard);
// }

// contentArray.forEach(flashcardMaker);

// addFlashcard = () => {
//   const question = document.querySelector("#question");
//   const answer = document.querySelector("#answer");

//   let flashcard_info = {
//     'my_question' : question.value,
//     'my_answer'  : answer.value
//   }

//   contentArray.push(flashcard_info);
//   localStorage.setItem('items', JSON.stringify(contentArray));
//   flashcardMaker(contentArray[contentArray.length - 1]);
//   question.value = "";
//   answer.value = "";
// }