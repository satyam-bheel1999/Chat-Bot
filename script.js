let letTalk = () =>{
    let talk = {
        "Good morning Bot" : "Very Good morning",
        "Who are you" : "Satyam Bheel is here",
        "How are you" : "I am good..",
        "Can you please help me" : "Of course, tell me",
        "Okey! bye.." : " Bye meet soon.."
    }

    let user = document.getElementById("inbox").value;
    let p = new Promise((resolve, reject) =>{
        document.getElementById("answerBox").innerHTML = "Bot is typing......";
        setTimeout(() =>{
            if(user in talk){
                document.getElementById("answerBox").innerHTML = talk[user];
            }
            else{
                document.getElementById("answerBox").innerHTML= "Sorry, didn't get";
            }
            resolve(true);

        },3000);

    })
    
}