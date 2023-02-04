import user from "../interfaces/user";
import chatHeaderTemplate from "./chatHeader.html"
import chatBodyTemplate from "./chatBody.html"
import chatFooterTemplate from "./chatFooter.html"
import message from "../interfaces/message";
import userInfo from "../interfaces/userInfo";


let chatVersions : Map<number, Map<number, number>> ; 

export function addClickChat() {
    document.getElementById("showChatUsers").onclick = ()=>{
        showUsersChat(), document.getElementById("alert").removeAttribute("hidden");
    };
}


function showUsersChat() {
    fetch("/user")
        .then((response) => response.json())
        .then((data: user[]) => {
            fetch("/user/this")
                .then((thisUserSerialyzed) => thisUserSerialyzed.json())
                .catch((error) => {
                        return;
                })
                .then((thisUser) => {
                    let chatBox = document.getElementById("chatBox");
                    chatBox.innerHTML = "";
                    let div = document.createElement("div");
                    div.setAttribute("class", "list-group");
                    for (let user of data) {
                        if (user.userId != thisUser.userId) {
                            let btn = document.createElement("button");
                            btn.setAttribute("type", "button");
                            btn.setAttribute("class", "list-group-item list-group-item-action");
                            btn.id = "" + user.userId;
                            btn.innerHTML = user.username + " " + user.rating + " <i class='fa-regular fa-star'></i>";
                            btn.onclick = () => { findChat(Number(btn.id)) };
                            div.append(btn);
                            chatBox.append(div);
                        }
                    }
                })

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
                        chatTitle.innerHTML = userInfo.username + " " + userInfo.rating + " <i class='fa-regular fa-star'></i>";
                        openChat(Number(idChat));
                    })
            }
        });
}

async function openChat(chatId: number) {
    document.getElementById("chatBody").innerHTML = "";
    document.getElementById("backToList").onclick = showUsersChat;
    await fetch("/chat/conversation/" + chatId)
        .then((serializedConversation) => serializedConversation.json())
        .then((conversation: message[]) => {

            fetch("/user/this")
                .then((serializedThisUserInfo) => serializedThisUserInfo.json())
                .then((thisUserInfo: userInfo) => {

                    let textBox = document.getElementById("messageText") as HTMLInputElement;
                    document.getElementById("button-addon2").onclick = () => {
                        createMessage(thisUserInfo.userId, chatId);
                        textBox.value = "";
                    };
                    textBox.onkeydown = (e) => {
                        if (e.key == 'Enter') {
                            createMessage(thisUserInfo.userId, chatId);
                            textBox.value = "";
                        }
                    }
                    for (let message of conversation) {
                        if (message.username == thisUserInfo.username) {
                            buildMessageSended(thisUserInfo.username, thisUserInfo.rating, message.timestamp, message.text);
                        } else {
                            buildMessageRecived(message.username, message.rating, message.timestamp, message.text);
                        }
                    }
                })
        })

    function buildMessageRecived(username: string, rating: number, timestamp: string, text: string) {
        let chatBody = document.getElementById("chatBody");
        let divInfo = document.createElement("div");
        divInfo.setAttribute("class", "d-flex justify-content-between");
        let pDate = document.createElement("p");
        pDate.setAttribute("class", "small mb-1 text-muted");
        pDate.innerHTML = normalPersonDateTransform(timestamp);
        let pUsername = document.createElement("p");
        pUsername.setAttribute("class", "small mb-1");
        pUsername.innerHTML = username + " " + rating + "<i class='fa-regular fa-star'></i>";

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

    function buildMessageSended(username: string, rating: number, timestamp: string, text: string) {
        let chatBody = document.getElementById("chatBody");

        let divInfo = document.createElement("div");
        divInfo.setAttribute("class", "d-flex justify-content-between");
        let pDate = document.createElement("p");
        pDate.setAttribute("class", "small mb-1 text-muted");
        pDate.innerHTML = normalPersonDateTransform(timestamp);
        let pUsername = document.createElement("p");
        pUsername.setAttribute("class", "small mb-1");
        pUsername.innerHTML = username + " " + rating + "<i class='fa-regular fa-star'></i>";

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

function normalPersonDateTransform(timestamp: string): string {
    let date = new Date(timestamp);
    return date.toLocaleString();
}

export function searchNotification() {
    fetch("/isAnUserLogged")
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                let intervalId = setInterval(searchUserChats, 5000);
                fetch("/createInterval/" + intervalId)
                    .then((response) => response.json())
                    .then((data) => {
                        if (data) {
                            
                        }
                    })
            }
        })
}

export function stopSearchNotification() {
    fetch("/deleteInterval")
        .then((response) => response.json())
        .then((data) => {
            clearInterval(data);
        })
}

export function searchUserChats() {
    console.log("Lois");
    fetch("/chat/allUserChat")
    .then((response)=>response.json())
    .then((data)=>{
        if(chatVersions.get(data.id)==undefined){
            chatVersions.set(data.id, new Map<number, number>());
        }
        for(let id of data.chatIds){
            if(chatVersions.get(data.id).get(id)==undefined){
                chatVersions.get(data.id).set(id, 0);
            }
            fetch("/chat/version/"+id)
            .then((serializedVersion)=>serializedVersion.json())
            .then((version)=>{
                if((version > chatVersions.get(data.id).get(id))){
                    document.getElementById("alert").setAttribute("hidden", "true");
                    chatVersions.get(data.id).set(id, version);
                }
            })
        }
    })    
}

export default addClickChat;
