import user from "../interfaces/user";
import chatHeaderTemplate from "./chatHeader.html"
import chatBodyTemplate from "./chatBody.html"
import chatFooterTemplate from "./chatFooter.html"
import message from "../interfaces/message";
import userInfo from "../interfaces/userInfo";

let chatID : number;
let userID : number;

export function addClickChat(){
    document.getElementById("showChatUsers").onclick = showUsersChat;
}


function showUsersChat() {
    let users: user[] = [];
    fetch("/user")
        .then((response) => response.json())
        .then((data) => {
            for (let user of data) {
                users.push(user);
            }
            let chatBox = document.getElementById("chatBox");
            chatBox.innerHTML = "";
            for (let user of users) {
                let div = document.createElement("div");
                div.setAttribute("class", "list-group")
                let btn = document.createElement("button");
                btn.setAttribute("type", "button");
                btn.setAttribute("class", "list-group-item list-group-item-action");
                btn.id = "" + user.userId;
                btn.innerHTML = user.username;
                btn.onclick = () => { findChat(Number(btn.id)) };
            }
        })
}

function findChat(idReceiver: number) {
    fetch("/findChat/" + idReceiver)
        .then((response) => response.json())
        .then((data) => {
            if (data != -1) {
                openChat(Number(data));
                chatID = data;
            }
        });
}

function openChat(chatId: number) {
    let chatBox = document.getElementById("chatBox");
    chatBox.innerHTML = "";
    chatBox.append(chatHeaderTemplate, chatBodyTemplate, chatFooterTemplate);
    let chatTitle = document.getElementById("chatTitle");
    let chatConversation = document.getElementById("chatBody");
    document.getElementById("button-addon2").onclick = createMessage;

    fetch("/chat/conversation/" + chatId)
        .then((serializedConversation) => serializedConversation.json())
        .then((conversation:message[]) => {

            fetch("/user")
            .then((serializedThisUserInfo)=>serializedThisUserInfo.json())
            .then((thisUserInfo:userInfo)=>{
                userID = thisUserInfo.userId;
                for (let message of conversation) {

                    fetch("/user/"+message.userId)
                    .then((serializedUserInfo)=>serializedUserInfo.json())
                    .then((userInfo:userInfo)=>{
                        if(userInfo.username==thisUserInfo.username){
                            buildMessageSended();
                        }else{
                            buildMessageRecived();
                        }
                    })
                }
            })
        })

    function buildMessageRecived() {
        let chatBody = document.getElementById("chatBody");
        let divInfo = document.createElement("div");
        divInfo.setAttribute("class", "d-flex justify-content-between");
        let pDate = document.createElement("p");
        pDate.setAttribute("class", "small mb-1 text-muted");        
        pDate.innerHTML="data prova received 03/02/2023 12:43";
        let pUsername = document.createElement("p");
        pUsername.setAttribute("class", "small mb-1");
        pUsername.innerHTML="username prova received";

        let divText = document.createElement("div");
        divText.setAttribute("class", "d-flex flex-row justify-content-start");
        let divInner = document.createElement("div");
        let pText = document.createElement("p");
        pText.setAttribute("class", "small p-2 ms-3 mb-3 rounded-3");
        pText.innerHTML = "messaggio di provaaaaaa ricevutoooo";

        let imgAvatar = document.createElement("img");
        imgAvatar.setAttribute("src", "./img/profile.png");
        imgAvatar.setAttribute("alt", "avatar");
        imgAvatar.setAttribute("style", "style = 'width: 45px; height: 100%;'");

        divInfo.append(pUsername, pDate);
        divInner.append(pText);
        divText.append(imgAvatar, divInner);
        chatBody.append(divInfo, divText);
    }

    function buildMessageSended() {
        let chatBody = document.getElementById("chatBody");

        let divInfo = document.createElement("div");
        divInfo.setAttribute("class", "d-flex justify-content-between");
        let pDate = document.createElement("p");
        pDate.setAttribute("class", "small mb-1 text-muted");
        pDate.innerHTML="data prova sender 03/02/2023 12:43";
        let pUsername = document.createElement("p");
        pUsername.setAttribute("class", "small mb-1");
        pUsername.innerHTML="username prova sender";

        let divText = document.createElement("div");
        divText.setAttribute("class", "d-flex flex-row justify-content-end mb-4 pt-1");
        let divInner = document.createElement("div");
        let pText = document.createElement("p");
        pText.setAttribute("class", "small p-2 me-3 mb-3 text-white rounded-3 bg-warning");
        pText.innerHTML = "messaggio di provaaaaaa inviatooooo weeewewewee scrivo cose a caso per vedere che succede se va a capooooooooooooooooooooooooooooooooooooooooooooooooooooooooo";
       
        let imgAvatar = document.createElement("img");
        imgAvatar.setAttribute("src", "./img/profile.png");
        imgAvatar.setAttribute("alt", "avatar");
        imgAvatar.setAttribute("style", "style = 'width: 45px; height: 100%;'");

        divInfo.append(pDate, pUsername);
        divInner.append(pText);
        divText.append(divInner, imgAvatar);
        chatBody.append(divInfo, divText);
    }

    function createMessage(){
        let text = document.getElementById("messageText") as HTMLInputElement;

        const newMessage = {
            chatId: chatID,
            userId: userID,
            text: text.value
        }

        const request = {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMessage)
        }

        fetch("/chat/", request)
        .then((response)=>response.json())
        .then((data)=>{
            if(data){
                openChat(chatID);
            }
        })
    }
}

export default addClickChat;
