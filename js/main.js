let title = new Vue({
    el: "#title",
    data: {
        selectedRoom: {name: "The Chato"}
    }
});

let input_text = new Vue({
    el: "#input-text",
    data: {
        text: ""
    },
    methods: {
        putText: function() {
            if (this.text !== "") {
                let messageItem = document.createElement("li");
                let messagesContainer = document.getElementById("chat");
                let date = new Date()
                messageItem.innerText = `[${date.toLocaleString()}] ${this.text}`
                messagesContainer.appendChild(messageItem)
                this.text = "";
            }
        }
    }
});

let rooms = new Vue({
    el: "#rooms",
    data: {
        rooms: [
            {name: "ChatoRoom"},
            {name: "Room1"},
            {name: "Room2"}
        ]
    },
    methods: {
        selectRoom: function(room) {
            title.selectedRoom = room;
        }
    }
});
