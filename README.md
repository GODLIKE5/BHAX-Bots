# BHAX-Bots


# SOCKET NOTES

Data is sent via socket.io

```

function Connection() {
    var _0x65c4x16c = null;
    var self = this;
    var data;
    self.connect = function () {
        socket = io("minimap.alis.io:8001", {
            transports: ["websocket"]
        });
        socket.on("updateCoords", function (inplace) {
            //  console.log(inplace)
            minimap.updateNode(inplace);
        });
        socket.on("receiveMessage", function (data) {
            //console.log(data)
            chatRoom.receiveMessage(data.sender, data.msg);
        });
    };
    self.emit = function (name, data) {
        socket.emit(name, data);
    };
    self.joinRoom = function (user) {
        if (data) {
            self.leaveRoom(data);
        }
        if ($(".partyToken").val() != "") {
            self.emit("joinRoom", user);
            data = user;
        }
    };
    self.leaveRoom = function (socket) {
        self.emit("leaveRoom", socket);
    };
    self.uploadCoords = function (eventData) {
        eventData.name = myApp.getName();
        eventData.serverAddress = myApp.getCurrentPartyCode();
        eventData.timeStamp = Date.now();
        eventData.socketRoom = data;
        self.emit("coords", eventData);
    };
    self.sendMessage = function (message) {
        message.socketRoom = data;
        if ($(".partyToken").val() != "") {
            self.emit("sendMessage", message);
        }
    };
}
```
