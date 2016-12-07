Chat system notes:

```
   self.emit = function (name, data) {
        socket.emit(name, data);
    };
 self.sendMessage = function (message) {
        message.socketRoom = data;
        if ($(".partyToken").val() != "") {
            self.emit("sendMessage", message);
        }
    };

```

```
 var errMsg = message.trim();
        if (errMsg) {
            var top = Date.now() - clientTop;
            if (top < 2E3 && errMsg.length < 50) {
                return;
            }
            conn.sendMessage({
                sender: myApp.getName(),
                msg: errMsg
            });
            this.lastMsg = errMsg;
            clientTop = Date.now();
        }
```
