import user from "../interfaces/user";
import chatHeaderTemplate from "./chatHeader.html"
import chatBodyTemplate from "./chatBody.html"
import chatFooterTemplate from "./chatFooter.html"
import message from "../interfaces/message";
import userInfo from "../interfaces/userInfo";

export function addClickChat() {
    document.getElementById("showChatUsers").onclick = showUsersChat;
}


function showUsersChat() {
    fetch("/user")
        .then((response) => response.json())
        .then((data: user[]) => {
            let chatBox = document.getElementById("chatBox");
            chatBox.innerHTML = "";
            let div = document.createElement("div");
            div.setAttribute("class", "list-group");
            for (let user of data) {
                let btn = document.createElement("button");
                btn.setAttribute("type", "button");
                btn.setAttribute("class", "list-group-item list-group-item-action");
                btn.id = "" + user.userId;
                btn.innerHTML = user.username + " " + user.rating;
                btn.onclick = () => { findChat(Number(btn.id)) };
                div.append(btn);
                chatBox.append(div);
            }
        })
}

function findChat(idReceiver: number) {
    fetch("/chat/" + idReceiver)
        .then((serializedIdChat) => serializedIdChat.json())
        .then((idChat) => {
            if (idChat != -1) {
                fetch("/user/" + idReceiver)
                    .then((serializedUserInfo) => serializedUserInfo.json())
                    .then((userInfo) => {
                        let chatBox = document.getElementById("chatBox");
                        chatBox.innerHTML = "";
                        chatBox.innerHTML = chatHeaderTemplate + chatBodyTemplate + chatFooterTemplate;
                        let chatTitle = document.getElementById("chatTitle");
                        chatTitle.innerHTML = userInfo.username;
                        openChat(Number(idChat));
                    })
            }
        });
}

async function openChat(chatId: number) {
    document.getElementById("chatBody").innerHTML = "";
    await fetch("/chat/conversation/" + chatId)
        .then((serializedConversation) => serializedConversation.json())
        .then((conversation: message[]) => {

            fetch("/user/this")
                .then((serializedThisUserInfo) => serializedThisUserInfo.json())
                .then((thisUserInfo: userInfo) => {
                    document.getElementById("button-addon2").onclick = () => { createMessage(thisUserInfo.userId, chatId) };
                    for (let message of conversation) {
                        buildMessage(message, thisUserInfo.username);
                    }
                })
        })

    async function buildMessage(message: message, thisUserUsername: string) {
        //INIZIO PROBLEMA
        fetch("/user/" + message.userId)
            .then((serializedUserInfo) => serializedUserInfo.json())
            .then((userInfo: userInfo) => {
        //FINE PROBLEMA
                if (userInfo.username == thisUserUsername) {
                    buildMessageSended(thisUserUsername, message.timestamp, message.text);
                } else {
                    buildMessageRecived(userInfo.username, message.timestamp, message.text);
                }
            })
    }

    function buildMessageRecived(username: string, timestamp: string, text: string) {
        let chatBody = document.getElementById("chatBody");
        let divInfo = document.createElement("div");
        divInfo.setAttribute("class", "d-flex justify-content-between");
        let pDate = document.createElement("p");
        pDate.setAttribute("class", "small mb-1 text-muted");
        pDate.innerHTML = timestamp;
        let pUsername = document.createElement("p");
        pUsername.setAttribute("class", "small mb-1");
        pUsername.innerHTML = username;

        let divText = document.createElement("div");
        divText.setAttribute("class", "d-flex flex-row justify-content-start");
        let divInner = document.createElement("div");
        let pText = document.createElement("p");
        pText.setAttribute("class", "small p-2 ms-3 mb-3 rounded-3");
        pText.innerHTML = text;

        let imgAvatar = document.createElement("img");
        imgAvatar.setAttribute("src", "./img/profile.png");
        imgAvatar.setAttribute("alt", "avatar");
        imgAvatar.setAttribute("style", "width: 45px; height: 100%;");

        divInfo.append(pUsername, pDate);
        divInner.append(pText);
        divText.append(imgAvatar, divInner);
        chatBody.append(divInfo, divText);
    }

    function buildMessageSended(username: string, timestamp: string, text: string) {
        let chatBody = document.getElementById("chatBody");

        let divInfo = document.createElement("div");
        divInfo.setAttribute("class", "d-flex justify-content-between");
        let pDate = document.createElement("p");
        pDate.setAttribute("class", "small mb-1 text-muted");
        pDate.innerHTML = timestamp;
        let pUsername = document.createElement("p");
        pUsername.setAttribute("class", "small mb-1");
        pUsername.innerHTML = username;

        let divText = document.createElement("div");
        divText.setAttribute("class", "d-flex flex-row justify-content-end mb-4 pt-1");
        let divInner = document.createElement("div");
        let pText = document.createElement("p");
        pText.setAttribute("class", "small p-2 me-3 mb-3 text-white rounded-3 bg-warning");
        pText.innerHTML = text;

        let imgAvatar = document.createElement("img");
        imgAvatar.setAttribute("src", "./img/profile.png");
        imgAvatar.setAttribute("alt", "avatar");
        imgAvatar.setAttribute("style", "width: 45px; height: 100%;");

        divInfo.append(pDate, pUsername);
        divInner.append(pText);
        divText.append(divInner, imgAvatar);
        chatBody.append(divInfo, divText);
    }

    function createMessage(userID: number, chatID: number) {
        let text = document.getElementById("messageText") as HTMLInputElement;

        const newMessage = {
            chatId: chatID,
            userId: userID,
            text: text.value
        }

        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMessage)
        }

        fetch("/chat", request)
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    openChat(chatID);
                }
            })
    }
}

export default addClickChat;
