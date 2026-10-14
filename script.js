let userReply = "";
let currentMessage = 0;

// The three incoming text message scenarios
const messages = [
    {
        image: "images/message1.png",
        text: "Boss: Hey, can we talk about your work from yesterday? I have some concerns."
    },
    {
        image: "images/message2.png",
        text: "Mom: I'm disappointed you didn't tell me you'd be home late. We need to talk."
    },
    {
        image: "images/message3.png",
        text: "Lab Partner: Why didn't you finish your part of the lab?? Now we're both going to lose marks."
    }
];

// Display a random message
function newMessage() {
    currentMessage = Math.floor(Math.random() * messages.length);

    document.getElementById("messageImage").src =
        messages[currentMessage].image;

    document.getElementById("messageText").textContent =
        messages[currentMessage].text;

    document.getElementById("reply").value = "";
    document.getElementById("feedback").textContent = "";
    document.getElementById("yourReply").textContent = "";

    document.getElementById("stage1").style.display = "block";
    document.getElementById("stage2").style.display = "none";
    document.getElementById("againButton").style.display = "none";
}

// Move to the next stage after the user types a reply
function nextStage() {
    userReply = document.getElementById("reply").value;

    if (userReply.trim() === "") {
        alert("Please type a reply first!");
        return;
    }

    document.getElementById("yourReply").textContent = userReply;

    document.getElementById("stage1").style.display = "none";
    document.getElementById("stage2").style.display = "block";
}

// Give feedback based on how the user feels
function chooseFeeling(feeling) {
    if (feeling === "calm") {
        document.getElementById("feedback").textContent =
            "You feel calm. Review your message and make sure it says what you mean.";
    }
    else if (feeling === "upset") {
        document.getElementById("feedback").textContent =
            "You feel upset. Take a moment before deciding whether to send your reply.";
    }
    else if (feeling === "angry") {
        document.getElementById("feedback").textContent =
            "You feel angry. Pause and consider rewriting your message calmly.";
    }

    document.getElementById("againButton").style.display = "inline-block";
}

// Show the first random message when the page loads
newMessage();

