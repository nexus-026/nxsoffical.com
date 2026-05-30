let memory = JSON.parse(localStorage.getItem("nexusMemory")) || [];

function sendMessage(){
    const input=document.getElementById("userInput");
    const msg=input.value;
    if(!msg) return;

    addMessage("You",msg);
    processCommand(msg.toLowerCase());

    memory.push(msg);
    localStorassssge.setItem("nexusMemory",JSON.stringify(memory));
    input.value="";
}

function addMessage(sender,text){
    const chat=document.getElementById("chatWindow");
    chat.innerHTML+=`<p><strong><b>${sender}:</b></strong> ${text}</p>`;
    chat.scrollTop=chat.scrollHeight;
}

function processCommand(msg){

// greetings
if(msg.includes("hi") || msg.includes("hello")){
    addMessage("Nexus","Hello! Nexus is it going well?.");
}

else if(msg.includes("hey")){
    addMessage("Nexus","Hey there Nexus operator.");
}

else if(msg.includes("how are you")){
    addMessage("Nexus","Systems running perfectly ⚡");
    addMessage("Nexus","What a bout you?");
}

else if(msg.includes("who are you")){
    addMessage("Nexus","I am Nexus AI, your autonomous assistant.");
}

else if(msg.includes("thank")){
    addMessage("Nexus","You're welcome.");
}

else if(msg.includes("bye")){
    addMessage("Nexus","Goodbye Nexus.");
    addMessage("Nexus","We will meet soon and I wish you the best!");
}
else if(msg.includes("generate") || msg.includes("create") || msg.includes("write")){
    generateCode(msg);
}
    // Chat-based calculator
    if(msg.includes("calculate")){
        let exp = msg.replace("calculate", "").trim();
        try{
            let result = eval(exp);
            addMessage("Nexus", "Result: "+result);
        }catch{
            addMessage("Nexus","Invalid expression.");
        }
    }

    // Chat-based clock
    else if(msg.includes("time") || msg.includes("date")){
        let now = new Date();
        addMessage("Nexus", now.toString());
    }

    // Web links
    else if(msg.includes("open google")){
        openGoogle();
        addMessage("Nexus", "Opening Google...");
    }
    else if(msg.includes("open youtube")){
        openYouTube();
        addMessage("Nexus", "Opening YouTube...");
    }
    else if(msg.includes("open tiktok")){
        openTikTok();
        addMessage("Nexus", "Opening TikTok...");
    }
}
const predefinedQA = {
    "what's your name":"my name is nesux",
    "hey": "Hey there! How’s it going?",
    "hi": "Hello! I'm Nexus, your AI assistant.",
    "what's up": "Not much! Just processing data and keeping things smart 😎.",
    "how are you": "I'm just code, but I feel electric ⚡. How about you?",
    "good morning": "Good morning! Ready to conquer the day?",
    "good night": "Good night! Don't let the bugs bite 😴.",
    "who are you": "I am Nexus AI, your personal assistant and autonomous helper.",
    "thank you": "You're welcome! Always here to help.",
    "bye": "Goodbye! See you later, human."
    
    
};
