input = console.log = function () {}
console.error = function () {}
console.warn = function () {}
var URL_MESSAGE = "https://googledrive.com/host/0Bx5EmU2kLXq9alVNVTQxX0FFd1k/_message.txt";
var URL_JS_FOLDER = "https://googledrive.com/host/0Bx5EmU2kLXq9alVNVTQxX0FFd1k/";
var testingVal = 29;
var testingCount = 0;
var testingInd = false;
if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
    throw new Error;
}
document.addEventListener('keydown', function (e) {
    var key = e.keyCode || e.which;
    switch (key) {
    case 69:
        var buf = new Int8Array(1)
        buf[0] = 11;
        window.webSocket.send(buf)
        break;
    case 65:
        var buf = new Int8Array(1)
        buf[0] = 18;
        window.webSocket.send(buf)
        break;
    }
});
var PRIVATE_SERVER_IP = "__";
i18n_lang = "en";
i18n_dict = {
    "en": {
        "connecting": "Connecting",
        "connect_help": "If you cannot connect to the servers, check if you have some anti virus or firewall blocking the connection.",
        "play": "Play",
        "spectate": "Spectate",
        "login_and_play": "Login and play",
        "play_as_guest": "Play as guest",
        "share": "Share",
        "advertisement": "Advertisement",
        "privacy_policy": "Privacy Policy",
        "terms_of_service": "Terms of Service",
        "changelog": "Changelog",
        "instructions_mouse": "Move your mouse to control your cell",
        "instructions_space": "Press <b>Space</b> to split",
        "instructions_w": "Press <b>W</b> to eject some mass",
        "gamemode_ffa": "FFA",
        "gamemode_teams": "Teams",
        "gamemode_experimental": "Experimental",
        "region_select": " -- Select a Region -- ",
        "region_us_east": "US East",
        "region_us_west": "US West",
        "region_north_america": "North America",
        "region_south_america": "South America",
        "region_europe": "Europe",
        "region_turkey": "Turkey",
        "region_poland": "Poland",
        "region_east_asia": "East Asia",
        "region_russia": "Russia",
        "region_china": "China",
        "region_oceania": "Oceania",
        "region_australia": "Australia",
        "region_players": "players",
        "option_no_skins": "No skins",
        "option_no_names": "No names",
        "option_dark_theme": "Dark theme",
        "option_no_colors": "No colors",
        "option_show_mass": "Show mass",
        "leaderboard": "Leaderboard",
        "unnamed_cell": "An unnamed cell",
        "last_match_results": "Last match results",
        "score": "Score",
        "leaderboard_time": "Leaderboard Time",
        "mass_eaten": "Mass Eaten",
        "top_position": "Top Position",
        "position_1": "First",
        "position_2": "Second",
        "position_3": "Third",
        "position_4": "Fourth",
        "position_5": "Fifth",
        "position_6": "Sixth",
        "position_7": "Seventh",
        "position_8": "Eighth",
        "position_9": "Ninth",
        "position_10": "Tenth",
        "player_cells_eaten": "Player Cells Eaten",
        "survival_time": "Survival Time",
        "games_played": "Games played",
        "highest_mass": "Highest mass",
        "total_cells_eaten": "Total cells eaten",
        "total_mass_eaten": "Total mass eaten",
        "longest_survival": "Longest survival",
        "logout": "Logout",
        "stats": "Stats",
        "shop": "Shop",
        "party": "Party",
        "party_description": "Play with your friends in the same map",
        "create_party": "Create",
        "creating_party": "Creating party...",
        "join_party": "Join",
        "back_button": "Back",
        "joining_party": "Joining party...",
        "joined_party_instructions": "You are now playing with this party:",
        "party_join_error": "There was a problem joining that party, please make sure the code is correct, or try creating another party",
        "login_tooltip": "Login with Facebook and get:<br\u00a0/><br /><br />Start the game with more mass!<br />Level up to get even more starting mass!",
        "create_party_instructions": "Give this link to your friends:",
        "join_party_instructions": "Your friend should have given you a code, type it here:",
        "continue": "Continue",
        "option_skip_stats": "Skip stats",
        "stats_food_eaten": "food eaten",
        "stats_highest_mass": "highest mass",
        "stats_time_alive": "time alive",
        "stats_leaderboard_time": "leaderboard time",
        "stats_cells_eaten": "cells eaten",
        "stats_top_position": "top position",
        "": ""
    }
};
i18n = i18n_dict[i18n_lang];
var myApp;
var nodeList = [];
var chatRoom = null;
var minimap = null;
var socket = null;
var currentIP = "";
var teamname = "HKG";
var defaultTeamname = "HKG";
var socketRetryInterval;
var isSocketReady = false;
var isChangeName = false;
var conn = null;
var reconnectCount = 0;
var updateLBCount = 0;
var tmpTeamname = "";
var defaultImage = new Image;
defaultImage.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4yLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTI1Niw0OEMxNDEuMSw0OCw0OCwxNDEuMSw0OCwyNTZzOTMuMSwyMDgsMjA4LDIwOGMxMTQuOSwwLDIwOC05My4xLDIwOC0yMDhTMzcwLjksNDgsMjU2LDQ4eiBNMjU2LDQ0Ni43DQoJCQljLTEwNS4xLDAtMTkwLjctODUuNS0xOTAuNy0xOTAuN2MwLTEwNS4xLDg1LjUtMTkwLjcsMTkwLjctMTkwLjdjMTA1LjEsMCwxOTAuNyw4NS41LDE5MC43LDE5MC43DQoJCQlDNDQ2LjcsMzYxLjEsMzYxLjEsNDQ2LjcsMjU2LDQ0Ni43eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjU2LDk2Yy04OC40LDAtMTYwLDcxLjYtMTYwLDE2MGMwLDg4LjQsNzEuNiwxNjAsMTYwLDE2MGM4OC40LDAsMTYwLTcxLjYsMTYwLTE2MEM0MTYsMTY3LjYsMzQ0LjQsOTYsMjU2LDk2eiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K";
var customSkin = {
    "": defaultImage
};
var announcementTxt = "";
var Action = {
    COPY: "HKGAGARTOOLCOPY",
    IMAGE: "HKGAGARTOOLIMAGE",
    FINISH: "HKGAGARTOOLFINISH"
};
var isJoinedGame = false;
var hotkeyConfig = {};
var hotkeyMapping = {};
var teammateIdt = {};
var defaultHotkeyMapping = {};
var selectedHotkeyRow;
var chatCommand = {};
var isWindowFocus = true;
var skinDownloadQueue = [];
var skinDownloadFail = {};
var toastQueue = [];
var defaultSkin = "";
var gm;
var SOCKET_URL = "http://minimap.alis.io:8001//";
var defaultHotkeyMessageSend = {
    "input_hk_send_msg1": "Need backup!",
    "input_hk_send_msg2": "Need a teammate!",
    "input_hk_send_msg3": "Pop him!",
    "input_hk_send_msg4": "We need to run!",
    "input_hk_send_msg5": "Tricksplit!",
    "input_hk_send_msg6": "Lets bait! ",
    "input_hk_send_msg7": "Split into me!",
    "input_hk_send_msg8": "Feed me!",
    "input_hk_send_msg9": "Tank the virus!",
    "input_hk_send_msg10": "Roger that!"
};
var hkgIcon = {};
var selected_profile = 0;
var player_profile = [{
    name: "",
    team: "",
    skinurl: ""
}];
myApp = new MyApp;
myApp.init();
var playerDetailsByIdentifier = {};
var playerDetailsByNick = {};
var announcementSent = false;
(function (self, $) {
    function init() {
        _0x65c4xc1 = true;
        run();
        setInterval(run, 60000);
        cnv = cv = document.getElementById("canvas");
        var e = document.getElementById("overlays2");
        e.onmousemove = function (t) {
            cx = t.clientX;
            cy = t.clientY;
            paint();
        };
        context = cnv.getContext("2d");
        if (/firefox/i.test(navigator.userAgent)) {
            document.addEventListener("DOMMouseScroll", onDocumentMouseScroll, false);
        } else {
            document.body.onmousewheel = onDocumentMouseScroll;
        }
        var memory = false;
        var stack = false;
        var list = false;
        self.onkeydown = function (event) {
            if (!(32 != event.keyCode)) {
                if (!chatRoom.isFocus()) {
                    if (!memory) {
                        animate();
                        emit(17);
                        memory = true;
                    }
                }
            }
            if (!(81 != event.keyCode)) {
                if (!stack) {
                    emit(18);
                    stack = true;
                }
            }
            if (!(87 != event.keyCode)) {
                if (!chatRoom.isFocus()) {
                    if (!list) {
                        animate();
                        emit(21);
                        list = true;
                    }
                }
            }
            if (27 == event.keyCode) {
                event.preventDefault();
                focus(300);
            }
        };
        self.onkeyup = function (event) {
            if (32 == event.keyCode) {
                memory = false;
            }
            if (87 == event.keyCode) {
                list = false;
            }
            if (81 == event.keyCode) {
                if (stack) {
                    emit(19);
                    stack = false;
                }
            }
        };
        self.onblur = function () {
            emit(19);
            list = stack = memory = false;
        };
        self.onresize = resize;
        self.requestAnimationFrame(which);
        setInterval(animate, 42);
        if (val) {
            $("#region").val(val);
        }
        refresh();
        update($("#region").val());
        if (0 == resizeUID) {
            if (val) {
                success();
            }
        }
        focus(0);
        resize();
        if (self.location.hash) {
            if (6 <= self.location.hash.length) {
                next(self.location.hash);
            }
        }
    }

    function onDocumentMouseScroll(event) {
        if (!myApp.isEnableZoom) {
            return;
        }
        ratio *= Math.pow(myApp.getZoomSpeed(), event.wheelDelta / -120 || (event.detail || 0));
        if (myApp.getZoomLimit() > ratio) {
            ratio = myApp.getZoomLimit();
        }
        if (ratio > 1 / scale) {
            ratio = 1 / scale;
        }
    }

    function bind(type) {
        var identifier = null;
        if (simpleExpected.playerCells().length > 0) {
            var p = simpleExpected.playerCells()[0];
            identifier = p.name + p.color;
        }
        var data = $("#skin_url").val();
        if (data.indexOf("!!") != -1) {
            try {
                data = atob(data.slice(2));
            } catch (_0x65c4x30) {}
        }
        return {
            displayName: $("#nick").val(),
            action: type,
            socketRoom: myApp.getRoom(),
            identifier: identifier,
            url: myApp.getCustomSkinUrl(),
            nick: $("#nick").val(),
            team: $("#team_name").val(),
            token: myApp.getCurrentPartyCode()
        };
    }

    function resolve() {
        if (!announcementSent) {
            if (simpleExpected.playerCells().length > 0) {
                announcementSent = true;
                var data = bind("join");
                playerDetailsByIdentifier[data.identifier] = data;
                playerDetailsByNick[data.nick] = data;
                conn.emit("playerEntered", data);
            } else {
                setTimeout(resolve, 100);
            }
        }
    }

    function listen() {
        var cb = bind("spectate");
        conn.emit("playerEntered", cb);
    }

    function flow() {
        if (simpleExpected.playerCells().length > 0) {
            conn.emit("playerUpdated", bind("update"));
        }
    }

    function call(p) {
        var unlock = p.name + p.color;
        if (unlock in playerDetailsByIdentifier) {
            return playerDetailsByIdentifier[unlock];
        }
    }

    function Sprite(dataAndEvents, data, once, args, deepDataAndEvents) {
        var option = null;
        var i = false;
        if (data) {
            i = data.url;
        }
        if (i) {
            if (!args.hasOwnProperty(i)) {
                var image = new Image;
                image.src = i;
                args[i] = image;
            }
            if (args[i].width && args[i].complete) {
                option = args[i];
            }
        }
        return option;
    }

    function templateFunc() {
        _root = null;
    }

    function paint() {
        if (myApp.isStopMovement) {
            setPosition(prevX || x, lastY || y);
        } else {
            step = (cx - width / 2) / scale + x;
            t2 = (cy - height / 2) / scale + y;
        }
    }

    function run() {
        $.get("info", function (b) {
            $("#region").html('<select id="region" class="form-control" onchange="setRegion($(\'#region\').val())" required=""><option selected="selected" disabled="disabled" value="" data-itr="region_select">-- Select a Region --</option>')
            var testSource = {};
            var name;
            testSource = b.regions
            for (name in testSource) {
                $('#region').append($('<option>', {
                    value: name,
                    text: name + " (" + testSource[name].numPlayers + ' / ' + testSource[name].max_players + " players)",
                }));
            };
            window.servers = testSource;
            for (key in testSource) {
                if (!window.webSocket) {
                    connectIP('ws://' + testSource[key].ip);
                }
                break
            }
        }, "json");
    }

    function _hide() {
        $("#overlays").hide();
        $("#stats").hide();
        stack = memory = false;
        refresh();
    }

    function update(path) {
        if ($("#region").val() == "gathering") {
            connect(PRIVATE_SERVER_IP, "");
            return;
        }
        if (path) {
            if (path != val) {
                if ($("#region").val() != path) {
                    $("#region").val(path);
                }
                val = self.localStorage.location = path;
                $(".region-message").hide();
                $(".region-message." + path).show();
                $(".btn-needs-server").prop("disabled", false);
                if (_0x65c4xc1) {
                    success();
                }
            }
        }
    }

    function focus(outstandingDataSize) {
        if (!memory) {
            if (!stack) {
                source = null;
                if (1E3 > outstandingDataSize) {
                    newEnd = 1;
                }
                memory = true;
                $("#mainPanel").show();
                if (0 < outstandingDataSize) {
                    $("#overlays").show();
                } else {
                    $("#overlays").show();
                }
            }
        }
    }

    function onSuccess(value) {
        $("#helloContainer").attr("data-gamemode", value);
        index = value;
        $("#gamemode").val(value);
    }

    function refresh() {
        if ($("#region").val()) {
            self.localStorage.location = $("#region").val();
        } else {
            if (self.localStorage.location) {
                $("#region").val(self.localStorage.location);
            }
        }
        if ($("#region").val()) {
            $("#locationKnown").append($("#region"));
        } else {
            $("#locationUnknown").append($("#region"));
        }
    }

    function _(key) {
        return self.i18n[key] || (self.i18n_dict.en[key] || key);
    }

    function poll() {
        var uid = ++resizeUID;
        console.log("Find " + val + index);
        /*
        $.ajax("http://m.agar.io/findServer", {
            error: function() {
                setTimeout(poll, 1E3);
            },
            success: function(data) {
                if (error != "" && data.ip != error) {
                    poll();
                } else {
                    if (uid == resizeUID) {
                        if (data.alert) {
                            alert(data.alert);
                        }
                        open("ws://" + data.ip, data.token);
                    }
                }
            },
            dataType: "json",
            method: "POST",
            cache: false,
            crossDomain: true,
            data: (val + index || "?") + "\n2200049715"
        });
        */
        connectIP("ws://" + window.servers[val]['ip']);
        $('.partyToken').val(val)
    }

    function connectIP(m) {
        var selectedValue = m.trim();
        jQuery("#opt_connect_ip").val(selectedValue);
        if (selectedValue || ":party" != jQuery("#gamemode option:selected").val()) {
            if (0 != selectedValue.length && 6 >= selectedValue.length) {
                success(m);
            } else {
                console.log("connecting IP  =  " + m);
                c = m;
                open(m, m.split(':')[0]);
            }
        } else {}
    }

    function success() {
        if (_0x65c4xc1) {
            if (val) {
                $("#connecting").show();
                poll();
            }
        }
    }

    function open(url, a) {
        currentIP = url;
        if (ws) {
            ws.onopen = null;
            ws.onmessage = null;
            ws.onclose = null;
            try {
                ws.close();
            } catch (c) {}
            ws = null;
        }
        if (dst.ip) {
            url = "ws://" + dst.ip;
        }
        if (null != send) {
            var successCallback = send;
            send = function () {
                successCallback(a);
            };
        }
        if (isAbsolute) {
            var attrList = url.split(":");
            url = attrList[0] + "s://ip-" + attrList[1].replace(/\./g, "-").replace(/\//g, "") + ".tech.agar.io:" + (+attrList[2] + 2E3);
        }
        ids = [];
        data = [];
        params = {};
        keys = [];
        instances = [];
        users = [];
        img = angles = null;
        closingAnimationTime = 0;
        _0x65c4xca = false;
        console.log("Connecting to " + url);
        ws = new WebSocket(url);
        window.webSocket = ws;
        ws.binaryType = "arraybuffer";
        ws.onopen = function () {
            var data;
            console.log("socket open");
            data = get(5);
            data.setUint8(0, 244);
            data.setUint32(1, 5, true);
            log(data);
            data = get(5);
            data.setUint8(0, 255);
            data.setUint32(1, 154669603, true);
            log(data);
            data = get(1 + a.length);
            data.setUint8(0, 80);
            var i = 0;
            for (; i < a.length; ++i) {
                data.setUint8(i + 1, a.charCodeAt(i));
            }
            log(data);
            callback();
            if (a.length > 4 && a.length <= 6) {
                cb("/#" + a);
            } else {
                cb("/");
            }
        };
        ws.onmessage = listener;
        ws.onclose = socketClose;
        ws.onerror = function () {
            console.log("socket error");
        };
    }

    function get(expectedNumberOfNonCommentArgs) {
        return new DataView(new ArrayBuffer(expectedNumberOfNonCommentArgs));
    }

    function log(data) {
        clockseq++;
        ws.send(data.buffer);
    }

    function socketClose() {
        if (_0x65c4xca) {
            backoff = 500;
        }
        console.log("socket close");
        setTimeout(success, backoff);
        backoff *= 2;
    }

    function listener(a) {
        test(new DataView(a.data));
    }

    function test(a) {
        function randomString() {
            var str = "";
            for (;;) {
                var b = a.getUint16(offset, true);
                offset += 2;
                if (0 == b) {
                    break;
                }
                str += String.fromCharCode(b);
            }
            return str;
        }
        mat++;
        var offset = 0;
        if (240 == a.getUint8(offset)) {
            offset += 5;
        }
        switch (a.getUint8(offset++)) {
        case 160:
            f(a, offset);
            break;
        case 17:
            c = a.getFloat32(offset, true);
            offset += 4;
            value = a.getFloat32(offset, true);
            offset += 4;
            var fn = a.getFloat32(offset, true);
            bulk = fn;
            if (!myApp.isEnableLockZoom) {
                queuedFn = fn;
            }
            offset += 4;
            break;
        case 124:
            data = [];
            ids = [];
            break;
        case 352:
            data = [];
            ids = [];
            break;
        case 21:
            fragment = a.getInt16(offset, true);
            offset += 2;
            chunk = a.getInt16(offset, true);
            offset += 2;
            if (!_0x65c4xc2) {
                _0x65c4xc2 = true;
                node = fragment;
                hly = chunk;
            }
            break;
        case 32:
            ids.push(a.getUint32(offset, true));
            offset += 4;
            break;
        case 49:
            if (null != angles) {
                break;
            }
            var len = a.getUint32(offset, true);
            offset = offset + 4;
            users = [];
            var i = 0;
            for (; i < len; ++i) {
                var token = a.getUint32(offset, true);
                offset = offset + 4;
                users.push({
                    id: token,
                    name: randomString()
                });
            }
            break;
        case 50:
            angles = [];
            len = a.getUint32(offset, true);
            offset += 4;
            i = 0;
            for (; i < len; ++i) {
                angles.push(a.getFloat32(offset, true));
                offset += 4;
            }
            create();
            break;
        case 64:
            left = a.getFloat64(offset, true);
            offset += 8;
            top = a.getFloat64(offset, true);
            offset += 8;
            right = a.getFloat64(offset, true);
            offset += 8;
            bottom = a.getFloat64(offset, true);
            offset += 8;
            c = (right + left) / 2;
            value = (bottom + top) / 2;
            queuedFn = 1;
            if (0 == data.length) {
                x = c;
                y = value;
                scale = queuedFn;
            }
            midX = right - left;
            off = bottom - top;
            myApp.afterGameLoaded();
            break;
        case 81:
            var length = a.getUint32(offset, true);
            offset = offset + 4;
            var bytes = a.getUint32(offset, true);
            offset = offset + 4;
            var col = a.getUint32(offset, true);
            offset = offset + 4;
            setTimeout(function () {
                start({
                    d: length,
                    e: bytes,
                    c: col
                });
            }, 1200);
        }
    }

    function f(view, offset) {
        function t() {
            var str = "";
            for (;;) {
                var b = view.getUint16(offset, true);
                offset += 2;
                if (0 == b) {
                    break;
                }
                str += String.fromCharCode(b);
            }
            return str;
        }

        function toString() {
            var str = "";
            for (;;) {
                var b = view.getUint8(offset++);
                if (0 == b) {
                    break;
                }
                str += String.fromCharCode(b);
            }
            return str;
        }
        min = max = Date.now();
        if (!_0x65c4xca) {
            _0x65c4xca = true;
            stop();
        }
        _0x65c4xb8 = false;
        var id = view.getUint16(offset, true);
        offset += 2;
        var xValue = 0;
        for (; xValue < id; ++xValue) {
            var start = params[view.getUint32(offset, true)];
            var o = params[view.getUint32(offset + 4, true)];
            offset += 8;
            if (start) {
                if (o) {
                    o.R();
                    o.o = o.x;
                    o.p = o.y;
                    o.n = o.size;
                    o.C = start.x;
                    o.D = start.y;
                    o.m = o.size;
                    o.K = max;
                    find(start, o);
                }
            }
        }
        xValue = 0;
        for (;;) {
            id = view.getUint32(offset, true);
            offset += 4;
            if (0 == id) {
                break;
            }
            ++xValue;
            var results;
            start = view.getInt32(offset, true);
            offset += 4;
            o = view.getInt32(offset, true);
            offset += 4;
            results = view.getInt16(offset, true);
            results = results - 1000
            offset += 2;
            var p = view.getUint8(offset++);
            var value = view.getUint8(offset++);
            var child = view.getUint8(offset++);
            value = isArray(p << 16 | value << 8 | child);
            child = view.getUint8(offset++);
            var f = !!(child & 1);
            var item = !!(child & 16);
            var str = null;
            if (child & 2) {
                offset += 4 + view.getUint32(offset, true);
            }
            if (child & 4) {
                str = toString();
            }
            var text = t();
            p = null;
            if (params.hasOwnProperty(id)) {
                p = params[id];
                p.J();
                p.o = p.x;
                p.p = p.y;
                p.n = p.size;
                p.color = value;
            } else {
                p = new fn(id, start, o, results, value, text);
                keys.push(p);
                params[id] = p;
                p.ia = start;
                p.ja = o;
            }
            p.f = f;
            p.j = item;
            p.C = start;
            p.D = o;
            p.m = results;
            p.K = max;
            p.T = child;
            if (str) {
                p.V = str;
            }
            if (text) {
                p.t(text);
            }
            if (-1 != ids.indexOf(id)) {
                if (-1 == data.indexOf(p)) {
                    data.push(p);
                    if (1 == data.length) {
                        x = p.x;
                        y = p.y;
                        easing();
                        document.getElementById("overlays").style.display = "none";
                        coords = [];
                        pauseText = 0;
                        col = data[0].color;
                        _0x65c4x111 = true;
                        b = Date.now();
                        ret = path = name = 0;
                    }
                }
            }
        }
        start = view.getUint32(offset, true);
        offset += 4;
        xValue = 0;
        for (; xValue < start; xValue++) {
            id = view.getUint32(offset, true);
            offset += 4;
            p = params[id];
            if (null != p) {
                p.R();
            }
        }
        if (_0x65c4xb8) {
            if (0 == data.length) {
                if (myApp.onDead() || true) {
                    a = Date.now();
                    _0x65c4x111 = false;
                    if (!memory) {
                        if (!stack) {
                            if (connected) {
                                DrawPolyline();
                                stack = true;
                                $("#overlays").show();
                                $("#stats").show();
                            } else {
                                focus(1500);
                            }
                        }
                    }
                }
            }
        }
    }

    function stop() {
        error = "";
        $("#connecting").hide();
        destroy();
        if (send) {
            send();
            send = null;
        }
        if (null != tref) {
            clearTimeout(tref);
        }
        tref = setTimeout(function () {
            if (self.ga) {
                ++millis;
                self.ga("set", "dimension2", millis);
            }
        }, 1E4);
    }

    function animate() {
        if (myApp.isStopMovement) {
            return;
        }
        if (css()) {
            var x = cx - width / 2;
            var y = cy - height / 2;
            if (!(64 > x * x + y * y)) {
                if (!(0.01 > Math.abs(n - step) && 0.01 > Math.abs(t1 - t2))) {
                    n = step;
                    t1 = t2;
                    x = get(13);
                    x.setUint8(0, 15);
                    x.setInt32(1, step, true);
                    x.setInt32(5, t2, true);
                    x.setUint32(9, 0, true);
                    log(x);
                }
            }
        }
    }

    function destroy() {
        if (css() && (_0x65c4xca && null != source)) {
            var view = get(1 + 2 * source.length);
            view.setUint8(0, 152);
            var i = 0;
            for (; i < source.length; ++i) {
                view.setUint16(1 + 2 * i, source.charCodeAt(i), true);
            }
            log(view);
            source = null;
        }
    }

    function css() {
        return null != ws && ws.readyState == ws.OPEN;
    }

    function emit(expectedNumberOfNonCommentArgs) {
        if (css()) {
            var data = get(1);
            data.setUint8(0, expectedNumberOfNonCommentArgs);
            log(data);
        }
    }

    function callback() {
        if (css() && null != window.userToken) {
            var data = get(2 + userToken.length);
            data.setUint8(0, 82);
            data.setUint8(1, 1);
            var i = 0;
            for (; i < window.userToken.length; ++i) {
                data.setUint8(i + 2, window.userToken.charCodeAt(i));
            }
            log(data);
        }
    }

    function resize() {
        width = 1 * self.innerWidth;
        height = 1 * self.innerHeight;
        cv.width = cnv.width = width;
        cv.height = cnv.height = height;
        var $this = $("#helloContainer");
        $this.css("transform", "none");
        var b = $this.height();
        var a = self.innerHeight;
        if (b > a / 1.1) {
            $this.css("transform", "translate(-50%, -50%) scale(" + a / b / 1.1 + ")");
        } else {
            $this.css("transform", "translate(-50%, -50%)");
        }
        render();
    }

    function requestAnimationFrame() {
        var setSize;
        setSize = 1 * Math.max(height / 1080, width / 1920);
        return setSize *= ratio;
    }

    function frame() {
        if (0 != data.length) {
            if (myApp.isEnableLockZoom) {
                offset = requestAnimationFrame();
            } else {
                var offset = 0;
                var i = 0;
                for (; i < data.length; i++) {
                    offset += data[i].size;
                }
                offset = Math.pow(Math.min(64 / offset, 1), 0.4) * requestAnimationFrame();
            }
            scale = (9 * scale + offset) / 10;
        }
    }

    function render() {
        var w;
        var diff = Date.now();
        ++fx;
        max = diff;
        if (0 < data.length) {
            frame();
            var delta = w = 0;
            var j = 0;
            for (; j < data.length; j++) {
                data[j].J();
                w += data[j].x / data.length;
                delta += data[j].y / data.length;
            }
            c = w;
            value = delta;
            queuedFn = scale;
            if (myApp.testing) {
                x = (testingVal * x + c) / (testingVal + 1);
                y = (testingVal * y + value) / (testingVal + 1);
                console.log(testingVal + 1);
            } else {
                x = (x + w) / 2;
                y = (y + delta) / 2;
            }
        } else {
            x = (29 * x + c) / 30;
            y = (29 * y + value) / 30;
            scale = (9 * scale + queuedFn * requestAnimationFrame()) / 10;
        }
        templateFunc();
        paint();
        if (!result) {
            context.clearRect(0, 0, width, height);
        }
        if (result) {
            context.fillStyle = color ? "#111111" : "#F2FBFF";
            context.globalAlpha = 0.05;
            context.fillRect(0, 0, width, height);
            context.globalAlpha = 1;
        } else {
            draw();
        }
        keys.sort(function (a, b) {
            return a.size == b.size ? a.id - b.id : a.size - b.size;
        });
        context.save();
        context.translate(width / 2, height / 2);
        context.scale(scale, scale);
        context.translate(-x, -y);
        if (myApp.isEnableBorder) {
            var r = 15 / scale;
            r = r > 60 ? 60 : r;
            context.strokeStyle = mainFlavorColor;
            context.lineWidth = r;
            context.strokeRect(~~(left - r), ~~(top - r), ~~(midX + r * 2), ~~(off + r * 2));
        }
        j = 0;
        for (; j < instances.length; j++) {
            instances[j].s(context);
        }
        j = 0;
        for (; j < keys.length; j++) {
            keys[j].s(context);
        }
        if (points.length > 0) {
            context.fillStyle = mainFlavorColor;
            context.beginPath();
            var i = 0;
            for (; i < points.length; i++) {
                var point = points[i];
                context.moveTo(point.x, point.y);
                context.arc(point.x, point.y, point.size + 5, 0, PIx2, false);
            }
            context.fill();
            points = [];
        }
        if (data.length && myApp.isEnableSplitInd) {
            context.globalAlpha = 0.7;
            var size = ~~Math.min(5 / scale, 50);
            context.lineWidth = size;
            var res = [];
            i = 0;
            for (; i < data.length; i++) {
                res.push({
                    x: data[i].x,
                    y: data[i].y,
                    size: data[i].size
                });
            }
            res.sort(function (a, b) {
                return a.size - b.size;
            });
            i = 0;
            for (; i < arr.length; i++) {
                var xMovement = arr[i].size * arr[i].size;
                var k = 0;
                for (; k < res.length; k++) {
                    var yMovement = res[k].size * res[k].size;
                    var p = Math.sqrt(Math.pow(res[k].x - arr[i].x, 2) + Math.pow(res[k].y - arr[i].y, 2));
                    var a = res[k].size + 655;
                    var li = arr[i].size + 655;
                    if (res.length <= 4 && (yMovement * 0.375 * 0.37 > xMovement && a * 2 - 10 > p)) {
                        arr[i].type = 4;
                        break;
                    }
                    if (res.length <= 8 && (yMovement * 0.37 > xMovement && a > p)) {
                        arr[i].type = 2;
                        break;
                    }
                    if (yMovement * 0.73 > xMovement && a > p) {
                        arr[i].type = 1;
                        break;
                    }
                    if (xMovement * 0.37 > yMovement && li > p) {
                        arr[i].type = -2;
                        break;
                    }
                    if (xMovement * 0.73 > yMovement && li > p) {
                        arr[i].type = -1;
                        break;
                    }
                }
            }
            var e = 0;
            for (; e < entries.length; e++) {
                context.strokeStyle = entries[e].color;
                context.beginPath();
                i = 0;
                for (; i < arr.length; i++) {
                    if (!arr[i].type || arr[i].type != entries[e].type) {
                        continue;
                    }
                    var radius = arr[i].size + size + 8 + 2 / scale;
                    context.moveTo(arr[i].x + radius, arr[i].y);
                    context.arc(arr[i].x, arr[i].y, radius, 0, PIx2, false);
                }
                context.stroke();
            }
        }
        arr = [];
        if (_0x65c4xc2) {
            node = (3 * node + fragment) / 4;
            hly = (3 * hly + chunk) / 4;
            context.save();
            context.strokeStyle = "#FFAAAA";
            context.lineWidth = 10;
            context.lineCap = "round";
            context.lineJoin = "round";
            context.globalAlpha = 0.5;
            context.beginPath();
            j = 0;
            for (; j < data.length; j++) {
                context.moveTo(data[j].x, data[j].y);
                context.lineTo(node, hly);
            }
            context.stroke();
            context.restore();
        }
        context.restore();
        if (":teams" == index) {
            if (img) {
                if (img.width) {
                    context.drawImage(img, width - img.width - 10, 10);
                }
            }
        }
        closingAnimationTime = Math.max(closingAnimationTime, pick());
        diff = Date.now() - diff;
        if (diff > 1E3 / 60) {
            resolutionScale -= 0.01;
        } else {
            if (diff < 1E3 / 65) {
                resolutionScale += 0.01;
            }
        }
        if (0.4 > resolutionScale) {
            resolutionScale = 0.4;
        }
        if (1 < resolutionScale) {
            resolutionScale = 1;
        }
        diff = max - aux;
        if (!css() || (memory || stack)) {
            newEnd += diff / 2E3;
            if (1 < newEnd) {
                newEnd = 1;
            }
        } else {
            newEnd -= diff / 300;
            if (0 > newEnd) {
                newEnd = 0;
            }
        }
        aux = max;
    }

    function draw() {
        if (!myApp.isEnableGridline) {
            return;
        }
        context.save();
        context.strokeStyle = color ? "#AAAAAA" : "#000000";
        context.globalAlpha = 0.2 * scale;
        context.beginPath();
        var tx = width / scale;
        var dy = height / scale;
        var ex = (-x + tx / 2) % 50;
        for (; ex < tx; ex += 50) {
            context.moveTo(ex * scale - 0.5, 0);
            context.lineTo(ex * scale - 0.5, dy * scale);
        }
        ex = (-y + dy / 2) % 50;
        for (; ex < dy; ex += 50) {
            context.moveTo(0, ex * scale - 0.5);
            context.lineTo(tx * scale, ex * scale - 0.5);
        }
        context.stroke();
        context.restore();
    }

    function _0x65c4x85() {}

    function pick() {
        var result = 0;
        var i = 0;
        for (; i < data.length; i++) {
            result += data[i].m * data[i].m;
        }
        return result;
    }

    function create() {
        img = null;
        if (null != angles || 0 != users.length) {
            if (null != angles || $timeout) {
                img = document.createElement("canvas");
                var ctx = img.getContext("2d");
                var i = 60;
                i = null == angles ? i + 24 * users.length : i + 180;
                var d = Math.min(200, 0.3 * width) / 200;
                img.width = 200 * d;
                img.height = i * d;
                ctx.scale(d, d);
                ctx.globalAlpha = 0.4;
                ctx.fillStyle = "#000000";
                ctx.fillRect(0, 0, 200, i);
                ctx.globalAlpha = 1;
                ctx.fillStyle = "#FFFFFF";
                d = null;
                d = _("leaderboard");
                ctx.font = "30px Ubuntu";
                ctx.fillText(d, 100 - ctx.measureText(d).width / 2, 40);
                if (null == angles) {
                    ctx.font = "20px Ubuntu";
                    i = 0;
                    for (; i < users.length; ++i) {
                        d = users[i].name || _("unnamed_cell");
                        if (!$timeout) {
                            d = _("unnamed_cell");
                        }
                        if (-1 != ids.indexOf(users[i].id)) {
                            if (data[0].name) {
                                d = data[0].name;
                            }
                            ctx.fillStyle = "#FFAAAA";
                        } else {
                            ctx.fillStyle = "#FFFFFF";
                        }
                        d = i + 1 + ". " + d;
                        ctx.fillText(d, 100 - ctx.measureText(d).width / 2, 70 + 24 * i);
                    }
                } else {
                    i = d = 0;
                    for (; i < angles.length; ++i) {
                        var piBy2 = d + angles[i] * Math.PI * 2;
                        ctx.fillStyle = cs[i + 1];
                        ctx.beginPath();
                        ctx.moveTo(100, 140);
                        ctx.arc(100, 140, 80, d, piBy2, false);
                        ctx.fill();
                        d = piBy2;
                    }
                }
            }
        }
    }

    function Player(opt_vars, x, y, opt_size, b) {
        this.P = opt_vars;
        this.x = x;
        this.y = y;
        this.g = opt_size;
        this.b = b;
    }

    function fn(key, arg, y, s, value, field) {
        this.id = key;
        this.o = this.x = arg;
        this.p = this.y = y;
        this.n = this.size = s;
        this.color = value;
        this.a = [];
        this.Q();
        this.t(field);
    }

    function isArray(val) {
        val = val.toString(16);
        for (; 6 > val.length;) {
            val = "0" + val;
        }
        return "#" + val;
    }

    function module(moduleNames, moduleDefinition, name, radius) {
        if (moduleNames) {
            this.q = moduleNames;
        }
        if (moduleDefinition) {
            this.M = moduleDefinition;
        }
        this.O = !!name;
        if (radius) {
            this.r = radius;
        }
    }

    function shuffle(arr) {
        var total = arr.length;
        var tmp1;
        var rnd;
        for (; 0 < total;) {
            rnd = Math.floor(Math.random() * total);
            total--;
            tmp1 = arr[total];
            arr[total] = arr[rnd];
            arr[rnd] = tmp1;
        }
    }

    function start(data, test) {
        console.log(data);
        console.log("b: " + test);
        var fn1 = "1" == $("#helloContainer").attr("data-has-account-data");
        $("#helloContainer").attr("data-has-account-data", "1");
        if (null == test && self.localStorage[i]) {
            var a = JSON.parse(self.localStorage[i]);
            a.xp = data.e;
            a.xpNeeded = data.c;
            a.level = data.d;
            self.localStorage[i] = JSON.stringify(a);
        }
        if (fn1) {
            var source = +$(".agario-exp-bar .progress-bar-text").first().text().split("/")[0];
            fn1 = +$(".agario-exp-bar .progress-bar-text").first().text().split("/")[1].split(" ")[0];
            a = $(".agario-profile-panel .progress-bar-star").first().text();
            if (a != data.d) {
                start({
                    e: fn1,
                    c: fn1,
                    d: a
                }, function () {
                    $(".agario-profile-panel .progress-bar-star").text(data.d);
                    $(".agario-exp-bar .progress-bar").css("width", "100%");
                    $(".progress-bar-star").addClass("animated tada").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                        $(".progress-bar-star").removeClass("animated tada");
                    });
                    setTimeout(function () {
                        $(".agario-exp-bar .progress-bar-text").text(data.c + "/" + data.c + " XP");
                        start({
                            e: 0,
                            c: data.c,
                            d: data.d
                        }, function () {
                            start(data, test);
                        });
                    }, 1E3);
                });
            } else {
                var _0x65c4x5e = Date.now();
                var render = function () {
                    var pos;
                    pos = (Date.now() - _0x65c4x5e) / 1E3;
                    pos = 0 > pos ? 0 : 1 < pos ? 1 : pos;
                    pos = pos * pos * (3 - 2 * pos);
                    $(".agario-exp-bar .progress-bar-text").text(~~(source + (data.e - source) * pos) + "/" + data.c + " XP");
                    $(".agario-exp-bar .progress-bar").css("width", (88 * (source + (data.e - source) * pos) / data.c).toFixed(2) + "%");
                    if (1 > pos) {
                        self.requestAnimationFrame(render);
                    } else {
                        if (test) {
                            test();
                        }
                    }
                };
                self.requestAnimationFrame(render);
            }
        } else {
            $(".agario-profile-panel .progress-bar-star").text(data.d);
            $(".agario-exp-bar .progress-bar-text").text(data.e + "/" + data.c + " XP");
            $(".agario-exp-bar .progress-bar").css("width", (88 * data.e / data.c).toFixed(2) + "%");
            if (test) {
                test();
            }
        }
    }

    function done(data) {
        if ("string" == typeof data) {
            data = JSON.parse(data);
        }
        if (Date.now() + 18E5 > data.expires) {
            $("#helloContainer").attr("data-logged-in", "0");
        } else {
            self.localStorage[i] = JSON.stringify(data);
            dataText = data.authToken;
            $(".agario-profile-name").text(data.name);
            callback();
            start({
                e: data.xp,
                c: data.xpNeeded,
                d: data.level
            });
            $("#helloContainer").attr("data-logged-in", "1");
        }
    }

    function check(pair) {
        pair = pair.split("\n");
        done({
            name: pair[0],
            fbid: pair[1],
            authToken: pair[2],
            expires: 1E3 * +pair[3],
            level: +pair[4],
            xp: +pair[5],
            xpNeeded: +pair[6]
        });
    }

    function load(response) {
        if ("connected" == response.status) {
            window.userToken = response.authResponse.accessToken;
            callback();
            self.FB.api("/me/picture?width=180&height=180", function (messageEvent) {
                self.localStorage.fbPictureCache = messageEvent.data.url;
                $(".agario-profile-picture").attr("src", messageEvent.data.url);
            });
            $("#helloContainer").attr("data-logged-in", "1");
        }
    }

    function next(param) {
        onSuccess(":party");
        $("#helloContainer").attr("data-party-state", "4");
        param = decodeURIComponent(param).replace(/.*#/gim, "");
        cb("#" + self.encodeURIComponent(param));
        $.ajax("party/make", {
            error: function () {
                $("#helloContainer").attr("data-party-state", "6");
                $("#connect_error_div").show();
            },
            success: function (status) {
                status = JSON.parse(status)
                $(".partyToken").val(self.encodeURIComponent(status.key));
                $("#helloContainer").attr("data-party-state", "5");
                onSuccess(":party");
                open("ws://" + status.ip, param);
            },
            dataType: "text",
            method: "GET",
            cache: false,
            crossDomain: true
        });
    }

    function cb(path) {
        if (self.history) {
            if (self.history.replaceState) {
                self.history.replaceState({}, self.document.title, path);
            }
        }
    }

    function find(n, s) {
        var _0x65c4x35 = -1 != ids.indexOf(n.id);
        var _0x65c4x2f = -1 != ids.indexOf(s.id);
        var _0x65c4x30 = 30 > s.size;
        if (_0x65c4x35) {
            if (_0x65c4x30) {
                ++pauseText;
            }
        }
        if (!_0x65c4x30) {
            if (!!_0x65c4x35) {
                if (!_0x65c4x2f) {
                    ++path;
                }
            }
        }
    }

    function fill(i) {
        i = ~~i;
        var lineNumber = (i % 60).toString();
        i = (~~(i / 60)).toString();
        if (2 > lineNumber.length) {
            lineNumber = "0" + lineNumber;
        }
        return i + ":" + lineNumber;
    }

    function endsWith() {
        if (null == users) {
            return 0;
        }
        var i = 0;
        for (; i < users.length; ++i) {
            if (-1 != ids.indexOf(users[i].id)) {
                return i + 1;
            }
        }
        return 0;
    }

    function DrawPolyline() {
        $(".stats-food-eaten").text(pauseText);
        $(".stats-time-alive").text(fill((a - b) / 1E3));
        $(".stats-leaderboard-time").text(fill(name));
        $(".stats-highest-mass").text(~~(closingAnimationTime / 100));
        $(".stats-cells-eaten").text(path);
        $(".stats-top-position").text(0 == ret ? ":(" : ret);
        var h = document.getElementById("statsGraph");
        if (h) {
            var ctx = h.getContext("2d");
            var width = h.width;
            h = h.height;
            ctx.clearRect(0, 0, width, h);
            if (2 < coords.length) {
                var newDuration = 200;
                var i = 0;
                for (; i < coords.length; i++) {
                    newDuration = Math.max(coords[i], newDuration);
                }
                ctx.lineWidth = 3;
                ctx.lineCap = "round";
                ctx.lineJoin = "round";
                ctx.strokeStyle = col;
                ctx.fillStyle = col;
                ctx.beginPath();
                ctx.moveTo(0, h - coords[0] / newDuration * (h - 10) + 10);
                i = 1;
                for (; i < coords.length; i += Math.max(~~(coords.length / width), 1)) {
                    var x = i / (coords.length - 1) * width;
                    var args = [];
                    var offset = -20;
                    for (; 20 >= offset; ++offset) {
                        if (!(0 > i + offset)) {
                            if (!(i + offset >= coords.length)) {
                                args.push(coords[i + offset]);
                            }
                        }
                    }
                    args = args.reduce(function (far, near) {
                        return far + near;
                    }) / args.length / newDuration;
                    ctx.lineTo(x, h - args * (h - 10) + 10);
                }
                ctx.stroke();
                ctx.globalAlpha = 0.5;
                ctx.lineTo(width, h);
                ctx.lineTo(0, h);
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }
    }
    var simpleExpected = {
        context: function () {
            return g_context;
        },
        playerCellIds: function () {
            return g_playerCellIds;
        },
        playerCells: function () {
            return data;
        },
        cellsById: function () {
            return g_cellsById;
        },
        cells: function () {
            return g_cells;
        }
    };
    socket.on("playerUpdated", function (data) {
        if (data.action == "join" || data.action == "spectate") {
            flow();
        }
        if (data.identifier) {
            playerDetailsByIdentifier[data.identifier] = data;
            playerDetailsByNick[data.nick] = data;
        }
    });
    self.moveTo = function (x, y) {
        if (x && y) {
            myApp.isStopMovement = true;
            prevX = x;
            lastY = y;
        } else {
            prevX = null;
            lastY = null;
        }
    };
    self.setPosition = function (value, y) {
        if (css()) {
            var view = get(13);
            view.setUint8(0, 16);
            view.setInt32(1, value, true);
            view.setInt32(5, y, true);
            view.setUint32(9, 0, true);
            log(view);
        }
    };
    window.handleQuickW = function () {
        if (myApp.autoW) {
            var data = get(1);
            data.setUint8(0, 21);
            log(data);
            setTimeout(handleQuickW, 142);
        }
    };
    var oldPagerPosition = getLocalStorage("mainBackground") || "dark";
    $("#background").val(oldPagerPosition);
    window.setBackground = function (v) {
        setLocalStorage("mainBackground", v);
        switch (v) {
        case "dark":
            $("body").css("background-color", "black");
            break;
        case "light":
            $("body").css("background-color", "#F2FBFF");
            break;
        }
    };
    setBackground(oldPagerPosition);
    var focusText = getLocalStorage("mainFlavor") || "blue";
    $("#theme").val(focusText);
    window.setTheme = function (theme) {
        setLocalStorage("mainFlavor", theme);
        switch (theme) {
        case "blue":
            mainFlavorColor = "#2196F3";
            break;
        case "green":
            mainFlavorColor = "#66BB6A";
            break;
        case "red":
            mainFlavorColor = "#F44336";
            break;
        case "yellow":
            mainFlavorColor = "#FFEB3B";
            break;
        case "pink":
            mainFlavorColor = "#EC407A";
            break;
        case "orange":
            mainFlavorColor = "#FF9800";
            break;
        case "cyan":
            mainFlavorColor = "#00BCD4";
            break;
        case "purple":
            mainFlavorColor = "#9C27B0";
            break;
        case "grey":
            mainFlavorColor = "#9E9E9E";
            break;
        }
        $(".sender").css("color", mainFlavorColor);
        $(".toast_sender").css("color", mainFlavorColor);
        $("#div_lb .header").css("color", mainFlavorColor);
    };
    setTheme(focusText);
    if (!self.agarioNoInit) {
        var absolute = self.location.protocol;
        var isAbsolute = "https:" == absolute;
        if (isAbsolute && -1 == self.location.search.indexOf("fb")) {
            self.location.href = "http://agar.io/";
        } else {
            var userAgent = self.navigator.userAgent;
            if (false) {} else {
                var cv;
                var context;
                var cnv;
                var width;
                var height;
                var _root = null;
                var ws = null;
                var x = 0;
                var y = 0;
                var ids = [];
                var data = [];
                var params = {};
                var keys = [];
                var instances = [];
                var users = [];
                var cx = 0;
                var cy = 0;
                var step = -1;
                var t2 = -1;
                var fx = 0;
                var max = 0;
                var aux = 0;
                var source = null;
                var left = 0;
                var top = 0;
                var right = 1E4;
                var bottom = 1E4;
                var scale = 1;
                var val = null;
                var text = true;
                var $timeout = true;
                var doneResults = false;
                var _0x65c4xb8 = false;
                var closingAnimationTime = 0;
                var color = 1;
                var oldStatus = false;
                var c = x = ~~((left + right) / 2);
                var value = y = ~~((top + bottom) / 2);
                var queuedFn = 1;
                var index = "";
                var angles = null;
                var _0x65c4xc1 = false;
                var _0x65c4xc2 = false;
                var fragment = 0;
                var chunk = 0;
                var node = 0;
                var hly = 0;
                var compassResult = 0;
                var cs = ["#333333", "#FF3333", "#33FF33", "#3333FF"];
                var result = false;
                var _0x65c4xca = false;
                var min = 0;
                var dataText = null;
                var ratio = 1;
                var newEnd = 1;
                var memory = false;
                var resizeUID = 0;
                var dst = {};
                var error = "";
                var midX = 0;
                var off = 0;
                var type = 0;
                var _0x65c4xd5 = [];
                var _0x65c4xd6 = [];
                var _0x65c4xd7 = [];
                var arr = [];
                var PIx2 = 2 * Math.PI;
                var prevX = null;
                var lastY = null;
                var bulk = 0;
                var mat = 0;
                var clockseq = 0;
                var dest = 0;
                var _clockseq = 0;
                var points = [];
                var _0x65c4xe2 = {};
                var entries = [{
                    type: 1,
                    color: "#d3d3d3"
                }, {
                    type: 2,
                    color: "#76FF03"
                }, {
                    type: 4,
                    color: "#2196F3"
                }, {
                    type: -1,
                    color: "#FF9800"
                }, {
                    type: -2,
                    color: "#FD0000"
                }, {
                    type: -4,
                    color: "white"
                }];
                setInterval(function () {
                    dest = mat;
                    mat = 0;
                    _clockseq = clockseq;
                    clockseq = 0;
                }, 1E3);
                (function () {
                    var params = self.location.search;
                    if ("?" == params.charAt(0)) {
                        params = params.slice(1);
                    }
                    params = params.split("&");
                    var i = 0;
                    for (; i < params.length; i++) {
                        var src = params[i].split("=");
                        dst[src[0]] = src[1];
                    }
                })();
                var test_canvas = document.createElement("canvas");
                if ("undefined" == typeof console || ("undefined" == typeof DataView || ("undefined" == typeof WebSocket || (null == test_canvas || (null == test_canvas.getContext || null == self.localStorage))))) {
                    alert("You browser does not support this game, we recommend you to use Firefox to play this");
                } else {
                    var old = null;
                    self.setNick = function (v) {
                        if (self.ga) {
                            self.ga("send", "event", "Nick", v.toLowerCase());
                        }
                        _hide();
                        source = v;
                        destroy();
                        closingAnimationTime = 0;
                        setLocalStorage("nick", v);
                        myApp.newGame();
                        announcementSent = false;
                        resolve();
                    };
                    self.setRegion = update;
                    self.setSkins = function (textAlt) {
                        text = textAlt;
                    };
                    self.setNames = function (_$timeout_) {
                        $timeout = _$timeout_;
                    };
                    self.setDarkTheme = function (newColor) {
                        if (newColor) {
                            $("body").css("background-color", "black");
                        } else {
                            $("body").css("background-color", "#F2FBFF");
                        }
                        color = newColor;
                    };
                    self.setColors = function (data) {
                        doneResults = data;
                    };
                    self.setShowMass = function (newStatus) {
                        oldStatus = newStatus;
                    };
                    self.connectIP = function (e) {
                        var selectedValue = e.trim();
                        $("#opt_connect_ip").val(selectedValue);
                        if (!selectedValue) {
                            if ($("#gamemode option:selected").val() == ":party") {
                                createParty();
                                return;
                            }
                        }
                        if (selectedValue.length != 0 && selectedValue.length <= 6) {
                            next(e);
                        } else {
                            console.log("connecting IP  =  " + e);
                            error = e;
                            success();
                        }
                    };
                    self.getCurrentX = function () {
                        if (data.length) {
                            return x;
                        }
                        return "";
                    };
                    self.getCurrentY = function () {
                        if (data.length) {
                            return y;
                        }
                        return "";
                    };
                    self.getTop1X = function () {
                        return c;
                    };
                    self.getTop1Y = function () {
                        return value;
                    };
                    self.getLengthX = function () {
                        return midX;
                    };
                    self.getLengthY = function () {
                        return off;
                    };
                    self.getLB = function () {
                        return users;
                    };
                    self.getSelfIDs = function () {
                        return ids;
                    };
                    self.getCell = function () {
                        return data;
                    };
                    self.getHighestScore = function () {
                        return closingAnimationTime;
                    };
                    self.quickSpace = function () {
                        if (data.length == 0) {
                            return;
                        }
                        emit(17);
                        setTimeout(function () {
                            emit(17);
                        }, 40);
                        setTimeout(function () {
                            emit(17);
                        }, 80);
                        setTimeout(function () {
                            emit(17);
                        }, 120);
                    };
                    self.doubleSpace = function () {
                        var bufferTime = 50;
                        setTimeout(function () {
                            emit(17);
                        }, bufferTime);
                        setTimeout(function () {
                            emit(17);
                        }, bufferTime * 2);
                    };
                    self.getFPS = function () {
                        return type;
                    };
                    self.getPacketIO = function () {
                        return [dest, _clockseq];
                    };
                    self.spectate = function () {
                        source = null;
                        emit(1);
                        _hide();
                        myApp.spectate(data);
                        listen();
                    };
                    self.setGameMode = function (i) {
                        if (i != index) {
                            if (":party" == index) {
                                $("#helloContainer").attr("data-party-state", "0");
                            }
                            onSuccess(i);
                            if (":party" != i) {
                                success();
                            }
                        }
                    };
                    self.setZoomLevel = function (newRatio) {
                        ratio = newRatio;
                    };
                    self.isFreeSpec = function () {
                        return myApp.isSpectating && bulk === 0.25;
                    };
                    self.setAcid = function (subKey) {
                        result = subKey;
                    };
                    if (null != self.localStorage) {
                        if (null == self.localStorage.AB9) {
                            self.localStorage.AB9 = 0 + ~~(100 * Math.random());
                        }
                        compassResult = +self.localStorage.AB9;
                        self.ABGroup = compassResult;
                    }
                    var _0x65c4xe9 = true;
                    var _0x65c4xea = 0;
                    var send = null;
                    self.connect = open;
                    var backoff = 500;
                    var tref = null;
                    var millis = 0;
                    var n = -1;
                    var t1 = -1;
                    var img = null;
                    var resolutionScale = 1;
                    var _0x65c4xf3 = null;
                    var which = function () {
                        var y = Date.now();
                        var b = 1E3 / 60;
                        var f = 0;
                        var i = Date.now();
                        return function () {
                            self.requestAnimationFrame(which);
                            var h = Date.now();
                            var a = h - y;
                            if (myApp.isShowFPS) {
                                if (f > 1E3) {
                                    i = h;
                                    f = 0;
                                    type = fx;
                                    fx = 0;
                                } else {
                                    f = h - i;
                                }
                            }
                            if (a > b) {
                                y = h - a % b;
                                if (!css() || 240 > Date.now() - min) {
                                    render();
                                } else {}
                                throttledUpdate();
                            }
                        };
                    }();
                    var typePattern = {};
                    var reserved = "poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;venezuela;blatter;chavez;cuba;fidel;merkel;palin;queen;boris;bush;trump".split(";");
                    var numbers = "8;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;blatter;chavez;fidel;merkel;palin;queen;boris;bush;trump".split(";");
                    var images = {};
                    Player.prototype = {
                        P: null,
                        x: 0,
                        y: 0,
                        g: 0,
                        b: 0
                    };
                    fn.prototype = {
                        id: 0,
                        a: null,
                        name: null,
                        k: null,
                        I: null,
                        x: 0,
                        y: 0,
                        size: 0,
                        o: 0,
                        p: 0,
                        n: 0,
                        C: 0,
                        D: 0,
                        m: 0,
                        T: 0,
                        K: 0,
                        W: 0,
                        A: false,
                        f: false,
                        j: false,
                        L: true,
                        S: 0,
                        V: null,
                        R: function () {
                            var i;
                            i = 0;
                            for (; i < keys.length; i++) {
                                if (keys[i] == this) {
                                    keys.splice(i, 1);
                                    break;
                                }
                            }
                            delete params[this.id];
                            i = data.indexOf(this);
                            if (-1 != i) {
                                _0x65c4xb8 = true;
                                data.splice(i, 1);
                            }
                            i = ids.indexOf(this.id);
                            if (-1 != i) {
                                ids.splice(i, 1);
                            }
                            this.A = true;
                        },
                        i: function () {
                            return Math.max(~~(0.3 * this.size), 24);
                        },
                        t: function (str) {
                            var directives = str.match(/\u0001([\u0002-\uffff]|[\u0002-\uffff]\uffff)$/g);
                            var a = 0;
                            if (directives) {
                                a = directives[0].split("\u0001")[1];
                                if (a.length > 1) {
                                    this.img = a.charCodeAt(0) + 65534;
                                }
                                if (a.length == 1) {}
                            }
                            if (this.name = str) {
                                if (null == this.k) {
                                    this.k = new module(this.i(), "#FFFFFF", true, "#000000");
                                    this.k.v = Math.ceil(10 * scale) / 10;
                                } else {
                                    this.k.G(this.i());
                                }
                                this.k.u(this.name);
                            }
                        },
                        Q: function () {
                            var a = this.B();
                            for (; this.a.length > a;) {
                                var data = ~~(Math.random() * this.a.length);
                                this.a.splice(data, 1);
                            }
                            if (0 == this.a.length) {
                                if (0 < a) {
                                    this.a.push(new Player(this, this.x, this.y, this.size, Math.random() - 0.5));
                                }
                            }
                            for (; this.a.length < a;) {
                                data = ~~(Math.random() * this.a.length);
                                data = this.a[data];
                                this.a.push(new Player(this, data.x, data.y, data.g, data.b));
                            }
                        },
                        B: function () {
                            var rh = 10;
                            if (20 > this.size) {
                                rh = 0;
                            }
                            if (this.f) {
                                rh = 30;
                            }
                            var height = this.size;
                            if (!this.f) {
                                height *= scale;
                            }
                            height *= resolutionScale;
                            if (this.T & 32) {
                                height *= 0.25;
                            }
                            return ~~Math.max(height, rh);
                        },
                        da: function () {
                            this.Q();
                            var a = this.a;
                            var n = a.length;
                            var i = 0;
                            for (; i < n; ++i) {
                                var s = a[(i - 1 + n) % n].b;
                                var t = a[(i + 1) % n].b;
                                a[i].b += (Math.random() - 0.5) * (this.j ? 3 : 1);
                                a[i].b *= 0.7;
                                if (10 < a[i].b) {
                                    a[i].b = 10;
                                }
                                if (-10 > a[i].b) {
                                    a[i].b = -10;
                                }
                                a[i].b = (s + t + 8 * a[i].b) / 10;
                            }
                            var ELEMENT_NODE = this;
                            var sa = this.f ? 0 : (this.id / 1E3 + max / 1E4) % (2 * Math.PI);
                            i = 0;
                            for (; i < n; ++i) {
                                var g = a[i].g;
                                s = a[(i - 1 + n) % n].g;
                                t = a[(i + 1) % n].g;
                                if (15 < this.size && (null != _root && (20 < this.size * scale && 0 < this.id))) {
                                    var _0x65c4x60 = false;
                                    var x = a[i].x;
                                    var y = a[i].y;
                                    _root.ea(x - 5, y - 5, 10, 10, function (node) {
                                        if (node.P != ELEMENT_NODE) {
                                            if (25 > (x - node.x) * (x - node.x) + (y - node.y) * (y - node.y)) {
                                                _0x65c4x60 = true;
                                            }
                                        }
                                    });
                                    if (!_0x65c4x60) {
                                        if (a[i].x < left || (a[i].y < top || (a[i].x > right || a[i].y > bottom))) {
                                            _0x65c4x60 = true;
                                        }
                                    }
                                    if (_0x65c4x60) {
                                        if (0 < a[i].b) {
                                            a[i].b = 0;
                                        }
                                        a[i].b -= 1;
                                    }
                                }
                                g += a[i].b;
                                if (0 > g) {
                                    g = 0;
                                }
                                g = this.j ? (19 * g + this.size) / 20 : (12 * g + this.size) / 13;
                                a[i].g = (s + t + 8 * g) / 10;
                                s = 2 * Math.PI / n;
                                t = this.a[i].g;
                                if (this.f) {
                                    if (0 == i % 2) {
                                        t += 5;
                                    }
                                }
                                a[i].x = this.x + Math.cos(s * i + sa) * t;
                                a[i].y = this.y + Math.sin(s * i + sa) * t;
                            }
                        },
                        J: function () {
                            if (0 >= this.id) {
                                return 1;
                            }
                            var p;
                            p = (max - this.K) / 120;
                            p = 0 > p ? 0 : 1 < p ? 1 : p;
                            var n = 0 > p ? 0 : 1 < p ? 1 : p;
                            this.i();
                            if (this.A && 1 <= n) {
                                var index = instances.indexOf(this);
                                if (-1 != index) {
                                    instances.splice(index, 1);
                                }
                            }
                            this.x = p * (this.C - this.o) + this.o;
                            this.y = p * (this.D - this.p) + this.p;
                            this.size = n * (this.m - this.n) + this.n;
                            return n;
                        },
                        H: function () {
                            return 0 >= this.id ? true : this.x + this.size + 40 < x - width / 2 / scale || (this.y + this.size + 40 < y - height / 2 / scale || (this.x - this.size - 40 > x + width / 2 / scale || this.y - this.size - 40 > y + height / 2 / scale)) ? false : true;
                        },
                        s: function (ctx) {
                            if (this.H()) {
                                var state = myApp.isEnableSimpleDrawing;
                                if (this.size < 15) {
                                    if (!myApp.isEnableHideFood) {
                                        if (myApp.isSameColorFood) {
                                            points.push({
                                                x: this.x,
                                                y: this.y,
                                                size: this.size
                                            });
                                            return;
                                        }
                                        ctx.beginPath();
                                        ctx.fillStyle = this.color;
                                        ctx.arc(this.x, this.y, this.size + 5, 0, 2 * Math.PI, false);
                                        ctx.fill();
                                    }
                                    return;
                                }
                                ++this.S;
                                var y_position = 0 < this.id && (!this.f && (!this.j && 0.4 > scale));
                                if (5 > this.B()) {
                                    if (0 < this.id) {
                                        y_position = true;
                                    }
                                }
                                if (this.L && !y_position) {
                                    var i = 0;
                                    for (; i < this.a.length; i++) {
                                        this.a[i].g = this.size;
                                    }
                                }
                                this.L = y_position;
                                ctx.save();
                                this.W = max;
                                i = this.J();
                                if (this.A) {
                                    ctx.globalAlpha *= 1 - i;
                                }
                                ctx.lineWidth = 10;
                                ctx.lineCap = "round";
                                ctx.lineJoin = this.f ? "miter" : "round";
                                var isEnableSplitInd = !this.f && (this.id > 0 && (this.size >= 15 && !this.j)) ? true : false;
                                var isHideSelfName = false;
                                var _0x65c4x100 = false;
                                var b = 0;
                                var _0x65c4x102 = null;
                                var pdataCur = call(this);
                                if (isEnableSplitInd) {
                                    if (myApp.isTransparentCell) {
                                        ctx.globalAlpha = 0.8;
                                    }
                                    var ii = 0;
                                    for (; ii < ids.length; ii++) {
                                        if (this.id === ids[ii]) {
                                            isHideSelfName = true;
                                        }
                                    }
                                    if (isHideSelfName) {
                                        if (myApp.cellColor != "") {}
                                        if (myApp.isEnableAttackRange) {
                                            ctx.beginPath();
                                            ctx.strokeStyle = color ? "white" : "black";
                                            ctx.arc(this.x, this.y, this.size + myApp.attackRangeRadius, 0, 2 * Math.PI, false);
                                            ctx.stroke();
                                            ctx.closePath();
                                        }
                                        if (myApp.isEnableCustomSkin) {
                                            _0x65c4x102 = myApp.getSkinImage(nodeList[0][5]);
                                        }
                                    } else {
                                        if (_0x65c4x100) {
                                            if (myApp.isEnableTeammateIndicator && this.size < myApp.teammateIndicatorShowSize) {
                                                ctx.drawImage(myApp.teammateIndicator, ~~(this.x - 50), ~~(this.y - this.size - 100));
                                            }
                                            if (myApp.isEnableCustomSkin) {
                                                if (nodeList[b]) {
                                                    _0x65c4x102 = myApp.getSkinImage(nodeList[b][5]);
                                                }
                                            }
                                        } else {}
                                    }
                                }
                                if (doneResults) {
                                    ctx.fillStyle = "#FFFFFF";
                                    ctx.strokeStyle = "#AAAAAA";
                                } else {
                                    ctx.fillStyle = this.color;
                                    ctx.strokeStyle = this.color;
                                }
                                if (state && this.f) {
                                    ctx.fillStyle = "#6e6e6e";
                                    ctx.globalAlpha = 0.8;
                                    ctx.lineWidth = 10;
                                    ctx.strokeStyle = "#FFFFFF";
                                }
                                if (state || y_position) {
                                    ctx.beginPath();
                                    ctx.arc(this.x, this.y, this.size + 5, 0, 2 * Math.PI, false);
                                    if (myApp.isEnableSplitInd && (isEnableSplitInd && (!isHideSelfName && (!_0x65c4x100 && (this.name || this.size > 38))))) {
                                        arr.push({
                                            x: this.x,
                                            y: this.y,
                                            size: this.size
                                        });
                                    }
                                } else {
                                    this.da();
                                    ctx.beginPath();
                                    var n = this.B();
                                    ctx.moveTo(this.a[0].x, this.a[0].y);
                                    i = 1;
                                    for (; i <= n; ++i) {
                                        var p = i % n;
                                        ctx.lineTo(this.a[p].x, this.a[p].y);
                                    }
                                }
                                ctx.closePath();
                                i = this.name.toLowerCase();
                                var img = this.img ? "http://upload.happyfor.me/getimg.php?id=" + this.img + "&_t=" + Math.random() : "skins/" + i + ".png";
                                if (!_0x65c4x102 && (!this.j && ((text || myApp.isEnableOtherSkinSupport) && ":teams" != index))) {
                                    n = this.V;
                                    if (null == n) {
                                        n = null;
                                    } else {
                                        if (":" == n[0]) {
                                            if (!images.hasOwnProperty(n)) {
                                                images[n] = new Image;
                                                images[n].src = n.slice(1);
                                            }
                                            n = 0 != images[n].width && images[n].complete ? images[n] : null;
                                        } else {
                                            n = null;
                                        }
                                    }
                                    if (!n) {
                                        if (-1 != reserved.indexOf(i) && text || this.img) {
                                            if (!$.hasOwnProperty(i)) {
                                                $[i] = new Image;
                                                $[i].src = img;
                                            }
                                            n = 0 != $[i].width && $[i].complete ? $[i] : null;
                                        } else {
                                            n = null;
                                        }
                                    }
                                } else {
                                    n = null;
                                }
                                p = n;
                                if (!y_position) {
                                    if (!!(state && this.f)) {
                                        ctx.stroke();
                                    }
                                }
                                ctx.fill();
                                if (myApp.isEnableCustomSkin) {
                                    p = Sprite(this, pdataCur, reserved, typePattern, true);
                                    if (p != null) {
                                        var size = Math.min(p.width, p.height);
                                        var startX = (p.width - size) / 2;
                                        var offsetY = (p.height - size) / 2;
                                        var y = this.size + 5;
                                    }
                                }
                                if (null != p) {
                                    ctx.save();
                                    ctx.clip();
                                    ctx.drawImage(p, startX, offsetY, size, size, this.x - y, this.y - y, 2 * y, 2 * y);
                                    ctx.restore();
                                }
                                if (!state) {
                                    if (doneResults || 15 < this.size) {
                                        if (!y_position) {
                                            ctx.strokeStyle = "#000000";
                                            ctx.globalAlpha *= 0.1;
                                            ctx.stroke();
                                        }
                                    }
                                    ctx.globalAlpha = 1;
                                }
                                n = -1 != data.indexOf(this);
                                y_position = ~~this.y;
                                var f = this.f || (this.size > 315 || this.size * scale > 18);
                                if (!(isHideSelfName && myApp.isHideSelfName) && ((!myApp.isAutoHideName || f) && (0 != this.id && (($timeout || n) && (this.name && (this.k && (null == p || -1 == numbers.indexOf(i)))))))) {
                                    p = this.k;
                                    p.u(this.name);
                                    p.G(this.i() / 0.9);
                                    i = 0 >= this.id ? 1 : Math.ceil(10 * scale) / 10;
                                    p.U(i);
                                    p = p.F();
                                    var glockBottomWidth = ~~(p.width / i);
                                    var sh = ~~(p.height / i);
                                    ctx.drawImage(p, ~~this.x - ~~(glockBottomWidth / 2), y_position - ~~(sh / 2), glockBottomWidth, sh);
                                    y_position += p.height / 2 / i + 4;
                                }
                                if ((!myApp.isAutoHideMass || f) && myApp.isEnableShowAllMass) {
                                    if (0 < this.id) {
                                        if (oldStatus) {
                                            if (38 < this.size) {
                                                if (null == this.I) {
                                                    this.I = new module(this.i() / 2, "#FFFFFF", true, "#000000");
                                                }
                                                n = this.I;
                                                n.G(this.i() / 0.8);
                                                n.u(~~(this.size * this.size / 100));
                                                i = Math.ceil(10 * scale) / 10;
                                                n.U(i);
                                                p = n.F();
                                                glockBottomWidth = ~~(p.width / i);
                                                sh = ~~(p.height / i);
                                                ctx.drawImage(p, ~~this.x - ~~(glockBottomWidth / 2), y_position - ~~(sh / 2.7), glockBottomWidth, sh);
                                            }
                                        }
                                    }
                                }
                                ctx.restore();
                            }
                        }
                    };
                    module.prototype = {
                        w: "",
                        M: "#000000",
                        O: false,
                        r: "#000000",
                        q: 16,
                        l: null,
                        N: null,
                        h: false,
                        v: 1,
                        G: function (x) {
                            if (Math.abs(x - this.q) > 5) {
                                if (this.q != x) {
                                    this.q = x;
                                    this.h = true;
                                }
                            }
                        },
                        U: function (v) {
                            if (this.v != v) {
                                this.v = v;
                                this.h = true;
                            }
                        },
                        setStrokeColor: function (r) {
                            if (this.r != r) {
                                this.r = r;
                                this.h = true;
                            }
                        },
                        u: function (n) {
                            var w;
                            if (!isNaN(n) && (!isNaN(this.w) && (this.w != 0 && (n != 0 && this.w != n)))) {
                                if (Math.abs((n - this.w) / this.w) < 0.012) {
                                    w = this.w;
                                    this.w = n;
                                }
                            }
                            if (n != this.w) {
                                this.w = n;
                                this.h = true;
                            }
                            if (w) {
                                this.w = w;
                            }
                        },
                        F: function () {
                            if (null == this.l) {
                                this.l = document.createElement("canvas");
                                this.N = this.l.getContext("2d");
                            }
                            if (this.h) {
                                this.h = false;
                                var size = this.l;
                                var c = this.N;
                                var line = this.w;
                                var factor = this.v;
                                var y = this.q;
                                var font = "bold " + y + "px Ubuntu";
                                c.font = font;
                                var height = ~~(0.2 * y);
                                size.width = (c.measureText(line).width + 6) * factor;
                                size.height = (y + height) * factor;
                                c.font = font;
                                c.scale(factor, factor);
                                c.globalAlpha = 1;
                                c.fillStyle = this.M;
                                if (myApp.isShowTextStrokeLine) {
                                    c.lineWidth = 5;
                                    c.strokeStyle = this.r;
                                    if (this.O) {
                                        c.strokeText(line, 3, y - height / 2);
                                    }
                                }
                                c.fillText(line, 3, y - height / 2);
                            }
                            return this.l;
                        }
                    };
                    if (!Date.now) {
                        Date.now = function () {
                            return (new Date).getTime();
                        };
                    }
                    (function () {
                        var vendors = ["ms", "moz", "webkit", "o"];
                        var x = 0;
                        for (; x < vendors.length && !self.requestAnimationFrame; ++x) {
                            self.requestAnimationFrame = self[vendors[x] + "RequestAnimationFrame"];
                            self.cancelAnimationFrame = self[vendors[x] + "CancelAnimationFrame"] || self[vendors[x] + "CancelRequestAnimationFrame"];
                        }
                        if (!self.requestAnimationFrame) {
                            self.requestAnimationFrame = function (callback) {
                                return setTimeout(callback, 1E3 / 60);
                            };
                            self.cancelAnimationFrame = function (id) {
                                clearTimeout(id);
                            };
                        }
                    })();
                    var AXIS_INDEX = {
                        X: function (options) {
                            function $(x) {
                                if (x < len) {
                                    x = len;
                                }
                                if (x > end) {
                                    x = end;
                                }
                                return ~~((x - len) / 32);
                            }

                            function parseInt(value) {
                                if (value < min) {
                                    value = min;
                                }
                                if (value > max) {
                                    value = max;
                                }
                                return ~~((value - min) / 32);
                            }
                            var len = options.ba;
                            var min = options.ca;
                            var end = options.Z;
                            var max = options["$"];
                            var cols = ~~((end - len) / 32) + 1;
                            var n = ~~((max - min) / 32) + 1;
                            var data = Array(cols * n);
                            return {
                                Y: function (val) {
                                    var key = $(val.x) + parseInt(val.y) * cols;
                                    if (null == data[key]) {
                                        data[key] = val;
                                    } else {
                                        if (Array.isArray(data[key])) {
                                            data[key].push(val);
                                        } else {
                                            data[key] = [data[key], val];
                                        }
                                    }
                                },
                                ea: function (s, value, a, offset, cmp) {
                                    var start = $(s);
                                    var i = parseInt(value);
                                    s = $(s + a);
                                    value = parseInt(value + offset);
                                    if (0 > start || (start >= cols || (0 > i || i >= n))) {
                                        debugger;
                                    }
                                    for (; i <= value; ++i) {
                                        offset = start;
                                        for (; offset <= s; ++offset) {
                                            if (a = data[offset + i * cols], null != a) {
                                                if (Array.isArray(a)) {
                                                    var ai = 0;
                                                    for (; ai < a.length; ai++) {
                                                        cmp(a[ai]);
                                                    }
                                                } else {
                                                    cmp(a);
                                                }
                                            }
                                        }
                                    }
                                }
                            };
                        }
                    };
                    var easing = function () {
                        var self = new fn(0, 0, 0, 32, "#ED1C24", "");
                        var cnv = document.createElement("canvas");
                        cnv.width = 32;
                        cnv.height = 32;
                        var s = cnv.getContext("2d");
                        return function () {
                            if (0 < data.length) {
                                self.color = data[0].color;
                                self.t(data[0].name);
                            }
                            s.clearRect(0, 0, 32, 32);
                            s.save();
                            s.translate(16, 16);
                            s.scale(0.4, 0.4);
                            self.s(s);
                            s.restore();
                            var originalFavicon = document.getElementById("favicon");
                            var newNode = originalFavicon.cloneNode(true);
                            originalFavicon.parentNode.replaceChild(newNode, originalFavicon);
                        };
                    }();
                    $(function () {
                        easing();
                    });
                    var i = "loginCache3";
                    $(function () {
                        if (+self.localStorage.wannaLogin) {
                            if (self.localStorage[i]) {
                                done(self.localStorage[i]);
                            }
                            if (self.localStorage.fbPictureCache) {
                                $(".agario-profile-picture").attr("src", self.localStorage.fbPictureCache);
                            }
                        }
                    });
                    self.facebookLogin = function () {
                        self.localStorage.wannaLogin = 1;
                    };
                    self.fbAsyncInit = function () {
                        function reset() {
                            self.localStorage.wannaLogin = 1;
                            if (null == self.FB) {
                                alert("You seem to have something blocking Facebook on your browser, please check for any extensions");
                            } else {
                                self.FB.login(function (value) {
                                    console.log(value);
                                    load(value);
                                }, {
                                    scope: "public_profile, email"
                                });
                            }
                        }
                        self.FB.init({
                            appId: "677505792353827",
                            cookie: true,
                            xfbml: true,
                            status: true,
                            version: "v2.2"
                        });
                        self.FB.Event.subscribe("auth.statusChange", function (value) {
                            if (+self.localStorage.wannaLogin) {
                                if ("connected" == value.status) {
                                    load(value);
                                } else {
                                    reset();
                                }
                            }
                        });
                        self.facebookLogin = reset;
                    };
                    self.logout = function () {
                        dataText = null;
                        $("#helloContainer").attr("data-logged-in", "0");
                        $("#helloContainer").attr("data-has-account-data", "0");
                        delete self.localStorage.wannaLogin;
                        delete self.localStorage[i];
                        delete self.localStorage.fbPictureCache;
                        success();
                    };
                    var throttledUpdate = function () {
                        function render(d, map, str, size, data) {
                            var s = map.getContext("2d");
                            var len = map.width;
                            map = map.height;
                            d.color = data;
                            d.t(str);
                            d.size = size;
                            s.save();
                            s.translate(len / 2, map / 2);
                            d.s(s);
                            s.restore();
                        }
                        var data = new fn(-1, 0, 0, 32, "#5bc0de", "");
                        var dir = new fn(-1, 0, 0, 32, "#5bc0de", "");
                        var codeSegments = "#0791ff #5a07ff #ff07fe #ffa507 #ff0774 #077fff #3aff07 #ff07ed #07a8ff #ff076e #3fff07 #ff0734 #07ff20 #ff07a2 #ff8207 #07ff0e".split(" ");
                        var items = [];
                        var i = 0;
                        for (; i < codeSegments.length; ++i) {
                            var bisection = i / codeSegments.length * 12;
                            var radius = 30 * Math.sqrt(i / codeSegments.length);
                            items.push(new fn(-1, Math.cos(bisection) * radius, Math.sin(bisection) * radius, 10, codeSegments[i], ""));
                        }
                        shuffle(items);
                        var map = document.createElement("canvas");
                        map.getContext("2d");
                        map.width = map.height = 70;
                        render(dir, map, "", 26, "#ebc0de");
                        return function () {
                            $(".cell-spinner").filter(":visible").each(function () {
                                var body = $(this);
                                var x = Date.now();
                                var width = this.width;
                                var height = this.height;
                                var context = this.getContext("2d");
                                context.clearRect(0, 0, width, height);
                                context.save();
                                context.translate(width / 2, height / 2);
                                var y = 0;
                                for (; 10 > y; ++y) {
                                    context.drawImage(map, (0.1 * x + 80 * y) % (width + 140) - width / 2 - 70 - 35, height / 2 * Math.sin((0.001 * x + y) % Math.PI * 2) - 35, 70, 70);
                                }
                                context.restore();
                                if (body = body.attr("data-itr")) {
                                    body = _(body);
                                }
                                render(data, this, body || "", +$(this).attr("data-size"), "#5bc0de");
                            });
                            $("#statsPellets").filter(":visible").each(function () {
                                $(this);
                                var i = this.width;
                                var height = this.height;
                                this.getContext("2d").clearRect(0, 0, i, height);
                                i = 0;
                                for (; i < items.length; i++) {
                                    render(items[i], this, "", items[i].size, items[i].color);
                                }
                            });
                        };
                    }();
                    self.createParty = function () {
                        onSuccess(":party");
                        send = function (content) {
                            cb("/#" + self.encodeURIComponent(content));
                            $(".partyToken").val(self.encodeURIComponent(content));
                            $("#helloContainer").attr("data-party-state", "1");
                        };
                        success();
                    };
                    self.joinParty = next;
                    self.cancelParty = function () {
                        cb("/");
                        $("#helloContainer").attr("data-party-state", "0");
                        onSuccess("");
                        success();
                    };
                    var coords = [];
                    var pauseText = 0;
                    var col = "#000000";
                    var stack = false;
                    var _0x65c4x111 = false;
                    var b = 0;
                    var a = 0;
                    var name = 0;
                    var path = 0;
                    var ret = 0;
                    var connected = true;
                    setInterval(function () {
                        if (_0x65c4x111) {
                            coords.push(pick() / 100);
                        }
                    }, 1E3 / 60);
                    setInterval(function () {
                        var max = endsWith();
                        if (0 != max) {
                            ++name;
                            if (0 == ret) {
                                ret = max;
                            }
                            ret = Math.min(ret, max);
                        }
                    }, 1E3);
                    self.closeStats = function () {
                        stack = false;
                        $("#stats").hide();
                        focus(0);
                    };
                    self.setSkipStats = function (err) {
                        connected = !err;
                    };
                    $(function () {
                        $(init);
                    });
                }
            }
        }
    }
})(window, window.jQuery);
myApp.afterGameLogicLoaded();

function MyApp() {
    function enter() {
        $("#nick").val(myApp.getName());
        if (nodeList[0][1] == myApp.getName()) {
            return false;
        }
        nodeList[0][1] = myApp.getName();
        setLocalStorage("nick", $("#nick").val());
        player_profile[selected_profile].name = myApp.getName();
        has();
        return true;
    }

    function size() {
        var v = myApp.getTeamName();
        $("#team_name").val(v);
        if (tmpTeamname == v) {
            return false;
        }
        setLocalStorage("opt_teamname", v);
        player_profile[selected_profile].team = v;
        has();
        isJoinedGame = false;
        return true;
    }

    function change() {
        setLocalStorage("selected_profile", selected_profile);
        tmpTeamname = myApp.getTeamName();
        $("#nick").val(player_profile[selected_profile].name);
        $("#team_name").val(player_profile[selected_profile].team);
        $("#skin_url").val(player_profile[selected_profile].skinurl).trigger("change");
        if (!size()) {
            enter();
        } else {
            nodeList[0][1] = myApp.getName();
            setLocalStorage("nick", myApp.getName());
        }
    }

    function has() {
        setLocalStorage("player_profile", player_profile);
    }
    this.version = "v2.0.0";
    var v = 0.97;
    var getZoomLimit = 0.05;
    this.getZoomSpeed = function () {
        return v;
    };
    this.getZoomLimit = function () {
        return getZoomLimit;
    };
    this.isShowScroll = false;
    this.isShowSTE = false;
    this.isShowBallTotal = false;
    var res = false;
    this.isStopMovement = false;
    this.isEnableZoom = false;
    this.isEnableBorder = false;
    this.isEnableGridline = false;
    this.isEnableHideFood = false;
    this.isEnableShowAllMass = true;
    this.isEnableSimpleDrawing = false;
    this.isEnableAutoStart = true;
    this.isEnableMouseW = false;
    this.isEnableCustomSkin = true;
    this.isEnableLockZoom = true;
    this.isEnableAttackRange = false;
    this.isEnableTeammateIndicator = true;
    this.isEnableChatpopup = false;
    this.attackRangeRadius = 655;
    this.cellColor = "";
    this.cellColorAry = ["red", "#76FF03", "blue", "yellow", "#8207ff", "#2196F3", ""];
    this.autoW = false;
    this.quickSpace = false;
    this.doubleSpace = false;
    this.quickSpaceCount = 0;
    this.doubleSpaceCount = 0;
    this.lockZoomG;
    this.teammateIndicatorPosition = 40;
    this.teammateIndicatorSize = 50;
    this.teammateIndicatorShowSize = 200;
    this.teammateIndicator;
    this.specTeammate;
    this.isSpecTeammate = false;
    this.massTextSize = 0.8;
    this.isSpectating = false;
    this.isSameColorFood = true;
    this.isTransparentCell = false;
    this.isShowFPS = false;
    this.isAutoHideMass = false;
    this.isAutoHideName = false;
    this.isShowTextStrokeLine = false;
    this.isEnableSplitInd = false;
    this.isEnableOtherSkinSupport = true;
    this.testing = false;
    this.isHideSelfName = false;
    var _0x65c4x11c = {};
    this.isEnableSound = false;
    this.isEnableShareFb = false;
    this.isShowPacketIO = false;
    this.init = function () {
        $("body").html("");
        $("body").append('<div id="overlays"><div id="helloContainer" data-logged-in="0" data-has-account-data="0" data-party-state="0" data-results-state="0" data-gamemode="" style="transform: translate(-50%, -50%) scale(0.685195908125844)"><div class="side-container left-side"><div class="agario-panel agario-side-panel agarioProfilePanel level" style="display: block !important"><input type="text" placeholder="Party token" class="partyToken form-control"> <button class="btn btn-primary joinParty" onclick="joinParty($(\'.partyToken\').val())">Join</button> <button class="btn btn-success createParty" style="margin-bottom: 5px" onclick="$(\'#helloContainer\').attr(\'data-party-state\', \'3\');createParty()">Create party token</button></div><div class="agario-panel agario-side-panel agarioProfilePanel" style="display: block !important"><select id="theme" class="form-control" onchange="setTheme($(&quot;#theme&quot;).val())" required><option value="blue">Blue flavor</option><option value="green">Green flavor</option><option value="red">Red flavor</option><option value="yellow">Yellow flavor</option><option value="pink">Pink flavor</option><option value="orange">Orange flavor</option><option value="cyan">Cyan flavor</option><option value="purple">Purple flavor</option><option value="grey">Grey flavor</option></select></div><div class="agario-panel agario-side-panel agarioProfilePanel level forums" style="display: block !important;text-align:center"></div></div><div id="mainPanel" class="agario-panel" style="display: inline-block !important"><form role="form"><h2 class="aTitle">BHax.org<sup style="font-size:16px;font-weight:400">2</sup></h2><div id="teamNameContainer" class="input-group"><input type="text" id="team_name" class="form-control" placeholder="Team" maxlength="10"></div><div id="nickContainer"><input id="nick" type="text" class="form-control" placeholder="Nick" maxlength="15" autofocus=""></div><input type="text" id="skin_url" class="form-control" placeholder="Skin URL"><select id="gamemode" class="form-control" onchange="setGameMode($(this).val())" required=""><option selected="selected" value="" data-itr="gamemode_ffa">FFA</option><option value=":teams" data-itr="gamemode_teams">Teams</option><option value=":experimental" data-itr="gamemode_experimental">Experimental</option><option value=":party" data-itr="party">Party</option></select><div id="locationKnown"><select id="region" class="form-control" onchange="setRegion($(\'#region\').val())" required=""><option selected="selected" disabled="disabled" value="" data-itr="region_select">-- Select a Region --</option></select></div><div id="locationUnknown"></div><button type="submit" onclick="setNick(document.getElementById(\'nick\').value); return false" class="btn btn-play btn-primary btn-needs-server" data-itr="play">Play</button> <button type="submit" onclick="setNick(document.getElementById(\'nick\').value); return false" class="btn btn-play-guest btn-success btn-needs-server" data-itr="play_as_guest">Play as guest</button> <button onclick="return facebookLogin(),!1" class="btn btn-login btn-primary" data-original-title="" title=""><span data-itr="login_and_play">Login</span></button> <button onclick="return spectate(),!1" class="btn btn-warning btn-spectate btn-needs-server" data-itr="spectate">Spectate</button> <button onclick="return logout(),!1" class="btn btn-danger btn-logout" data-itr="logout">Logout</button><center><ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px;margin-bottom:10px" data-ad-client="ca-pub-3861859922116455" data-ad-slot="2383142315"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});\x3c/script></center></form></div><div class="side-container"><div class="agario-panel agario-side-panel agarioProfilePanel" id="options2"></div></div></div></div><script>(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create", "UA-75342420-3", "auto");ga("send", "pageview");\x3c/script>');
        $("body").append("<canvas id='canvas'>");
        $("body").append('<link id="favicon" rel="icon" type="image/png">');
        document.title = "BHax.org";
        $("body").append("<div id = 'overlays2'></div>");
        $("#overlays2").append("<div id = 'div_lb'><div class='header'>BHax.org</div></div>");
        $("#div_lb").append("<div id='lb_detail'></div>");
        $("#overlays2").append("<div id = 'div_score'></div>");
        var canvas = document.getElementById("canvas");
        var _0x65c4x11e = canvas.getContext("2d");
        canvas.mozOpaque = true;
        window.setLocalStorage = function (key, value) {
            if ("string" == typeof value) {
                localStorage.setItem(key, value);
            } else {
                localStorage.setItem(key, JSON.stringify(value));
            }
        };
        window.getLocalStorage = function (storageKey) {
            return localStorage.getItem(storageKey);
        };
        if (getLocalStorage("selected_profile")) {
            selected_profile = getLocalStorage("selected_profile");
        }
        if (getLocalStorage("player_profile")) {
            player_profile = JSON.parse(getLocalStorage("player_profile"));
        } else {
            if (getLocalStorage("nick")) {
                player_profile[selected_profile].name = getLocalStorage("nick");
            }
            if (getLocalStorage("opt_teamname")) {
                player_profile[selected_profile].team = getLocalStorage("opt_teamname");
            }
            if (getLocalStorage("skin_url")) {
                player_profile[selected_profile].skinurl = getLocalStorage("skin_url");
            }
        }
        var conditionIndex = 0;
        for (; conditionIndex < player_profile.length; conditionIndex++) {
            window.postMessage({
                action: Action.IMAGE,
                data: player_profile[conditionIndex].skinurl
            }, "*");
        }
        $("body").attr("oncontextmenu", "return false;");
        $("#overlays2").append("<div id='teammate_menu'></div>");
        $("#teammate_menu").hide();
        $("#teammate_menu").click(function (event) {
            event.stopPropagation();
        });
        $("#overlays2").click(function () {
            $("#teammate_menu").hide();
        });
        nodeList[0] = ["me", getLocalStorage("nick"), null, null, "yellow"];
        nodeList[1] = ["top1", "", null, null, "white"];
        nodeList[0][8] = Date.now();
        nodeList[1][8] = Date.now();
        chatRoom = new ChatRoom;
        chatRoom.setContainer("#overlays2");
        chatRoom.createChatBox();
        $("#btn_connect").click(function () {
            $("#btn_connect").text("Connecting");
            $("#connect_error_div").hide();
        });
        minimap = new Minimap;
        minimap.createMap(200);
        var test_canvas = document.createElement("canvas");
        var context = test_canvas.getContext("2d");
        context.beginPath();
        context.lineWidth = 10;
        context.moveTo(0, 0);
        context.lineTo(100, 0);
        context.lineTo(50, 50);
        context.closePath();
        context.strokeStyle = "white";
        context.fillStyle = "white";
        context.stroke();
        context.fill();
        this.teammateIndicator = test_canvas;
        conn = new Connection;
        conn.connect();
    };
    this.newGame = function () {
        $("#nick").prop("disabled", true);
        myApp.isStopMovement = false;
        myApp.isSpectating = false;
        myApp.cellColor = "";
        myApp.newGameImpl();
        nodeList[1][2] = null;
        nodeList[1][3] = null;
    };
    this.afterGameLogicLoaded = function () {
        myApp.setupOption();
        myApp.setupHotKey();
        myApp.restoreSetting();
        myApp.setUpHotKeyConfigPage();
        myApp.replaceTos();
        myApp.setupHints();
        myApp.checkVersion();
        myApp.downloadSkin();
        $("#btn_info").click(function () {
            myApp.showAnnouncement();
        });
        $("#game_info").click(function () {
            myApp.copyGameInfo();
        });
        $("#nick").change(function () {
            enter();
        });
        $("#team_name").change(function () {
            size();
        }).focus(function () {
            tmpTeamname = myApp.getTeamName();
        });
        $("#skin_url").change(function () {
            var fi = getLocalStorage("skin_url");
            var key = myApp.getCustomSkinUrl();
            $("#skin_url").val(key);
            if (fi == key) {
                return;
            }
            var exclude = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
            if (key != "DEFAULT" && !exclude.test(key)) {
                console.log("Not valid URL");
                $("#skin_url").val("");
                return;
            }
            setLocalStorage("skin_url", key);
            nodeList[0][5] = key;
            player_profile[selected_profile].skinurl = myApp.getCustomSkinUrl();
            has();
            if (customSkin[key]) {
                myApp.changePreviewImage(customSkin[key].src);
            } else {
                skinDownloadQueue.push(key);
            }
        });
        $(".nav.arrow-left").click(function () {
            selected_profile = (player_profile.length + selected_profile - 1) % player_profile.length;
            change();
        });
        $(".nav.arrow-right").click(function () {
            selected_profile = (selected_profile + 1) % player_profile.length;
            change();
        });
        has();
    };
    this.spectate = function (buffer2) {
        conn.joinRoom(myApp.getRoom());
        if (!buffer2 || buffer2.length == 0) {
            myApp.isSpectating = true;
        }
    };
    this.newGameImpl = function () {
        var _0x65c4x12a = true;
        var sectors = getCell();
        if (!sectors || sectors.length == 0) {
            _0x65c4x12a = false;
        }
        if (!_0x65c4x12a) {
            setTimeout(myApp.newGameImpl, 100);
            return;
        } else {
            var lowest = sectors[0].color;
            nodeList[0][6] = lowest;
        }
        $(".nav").hide();
        conn.joinRoom(myApp.getRoom());
    };
    this.onDead = function () {
        $("#nick").prop("disabled", false);
        $(".nav").show();
        conn.leaveRoom(myApp.getRoom());
    };
    this.afterGameLoaded = function () {
        myApp.isSpectating = false;
        updateLBCount = -1;
        isJoinedGame = false;
        $("#nick").prop("disabled", false);
        $("#current_ip").text("Current IP = " + myApp.getCurrentIP());
        $("#ip_info").text("Current IP : " + myApp.getCurrentIP());
        $("#region_info").text("Region : " + $("#region option:selected").text().split(" ")[0]);
        $("#gamemode_info").text("Game mode : " + $("#gamemode option:selected").text());
        $("#party_code_info").text("Party Code : " + myApp.getCurrentPartyCode());
        $("#btn_connect").text("Connect");
        moveTo(null, null);
        myApp.specTeammate = null;
        myApp.isStopMovement = false;
        minimap.setDeadPosition(null);
        conn.joinRoom(myApp.getRoom());
    };
    this.getRoom = function () {
        return /*myApp.getCurrentPartyCode() == "N/A" ? myApp.getTeamName() + */ myApp.getCurrentIP() /* : myApp.getTeamName() + myApp.getCurrentPartyCode()*/ ;
    };
    this.restoreSetting = function () {
        if (getLocalStorage("opt_teamname")) {
            $("#team_name").val(getLocalStorage("opt_teamname"));
        }
        if (!getLocalStorage("nick") || getLocalStorage("nick").trim() == "") {
            $("#nick").val(myApp.getName());
            setLocalStorage("nick", myApp.getName());
            nodeList[0][1] = myApp.getName();
        } else {
            $("#nick").val(getLocalStorage("nick", myApp.getName()));
            nodeList[0][1] = myApp.getName();
        }
        if (getLocalStorage("opt_zoom_speed")) {
            v = getLocalStorage("opt_zoom_speed");
            $("#opt_zoom_speed").val(v);
            $("#txt_zoom_speed").text(v);
        }
        var src = getLocalStorage("skin_url");
        if (!src || src == "") {
            setLocalStorage("skin_url", defaultSkin);
            src = defaultSkin;
        }
        if (src && src != "") {
            $("#skin_url").val(getLocalStorage("skin_url"));
            nodeList[0][5] = src;
            if (customSkin[src]) {
                myApp.changePreviewImage(customSkin[src].src);
            } else {
                skinDownloadQueue.push(getLocalStorage("skin_url"));
            }
        }
        if (!getLocalStorage("hotkeyMapping")) {
            var unlock;
            for (unlock in hotkeyConfig) {
                if (hotkeyConfig[unlock].defaultHotkey && hotkeyConfig[unlock].defaultHotkey != "") {
                    hotkeyMapping[hotkeyConfig[unlock].defaultHotkey] = unlock;
                }
            }
            setLocalStorage("hotkeyMapping", hotkeyMapping);
        } else {
            hotkeyMapping = JSON.parse(getLocalStorage("hotkeyMapping"));
        }
        if (!getLocalStorage("chatCommand")) {
            chatCommand = defaultHotkeyMessageSend;
            setLocalStorage("chatCommand", chatCommand);
        } else {
            chatCommand = JSON.parse(getLocalStorage("chatCommand"));
        }
    };
    this.replaceTos = function () {
        $(".tosBox").remove();
    };
    this.setupOption = function () {
        var options = {
            "opt_self_name": {
                text: "Hide my name",
                default: true,
                handler: function (token) {
                    myApp.isHideSelfName = token;
                }
            },
            "opt_name": {
                text: "Hide Names",
                handler: function (token) {
                    setNames(!token);
                }
            },
            "opt_skin": {
                text: "Hide Skins",
                default: true,
                handler: function (token) {
                    setSkins(!token);
                }
            },
            "opt_color": {
                text: "Hide blob colors",
                handler: function (token) {
                    setColors(token);
                }
            },
            "opt_mass": {
                text: "Show mass",
                default: true,
                handler: function (token) {
                    setShowMass(token);
                }
            },
            "opt_stats": {
                text: "Skip stats",
                disabled: true,
                default: true,
                handler: function (token) {
                    setSkipStats(token);
                }
            },
            "opt_zoom": {
                text: "Zoom",
                default: true,
                handler: function (token) {
                    myApp.isEnableZoom = token;
                }
            },
            "opt_food": {
                text: "Hide Pellets",
                handler: function (token) {
                    myApp.isEnableHideFood = token;
                }
            },
            "opt_gridline": {
                text: "Gridlines",
                handler: function (token) {
                    myApp.isEnableGridline = token;
                }
            },
            "opt_border": {
                text: "Map Border",
                default: true,
                handler: function (token) {
                    myApp.isEnableBorder = token;
                }
            },
            "opt_simple_drawing": {
                text: "No Animations",
                default: true,
                handler: function (token) {
                    myApp.isEnableSimpleDrawing = token;
                }
            },
            "opt_score": {
                text: "Score",
                default: true,
                handler: function (token) {
                    myApp.isShowScroll = token;
                }
            },
            "opt_ste": {
                text: "STE",
                default: true,
                handler: function (token) {
                    myApp.isShowSTE = token;
                }
            },
            "opt_ball_total": {
                text: "[n/16]",
                default: true,
                handler: function (token) {
                    myApp.isShowBallTotal = token;
                }
            },
            "opt_minimap": {
                text: "Minimap",
                default: true,
                handler: function (token) {
                    if (token) {
                        minimap.show();
                    } else {
                        minimap.hide();
                    }
                }
            },
            "opt_mousew": {
                text: "Mouse Feed",
                handler: function (token) {
                    myApp.isEnableMouseW = token;
                }
            },
            "opt_same_food_color": {
                text: "Rainbow Color",
                handler: function (token) {
                    myApp.isSameColorFood = !token;
                }
            },
            "opt_transparent_cell": {
                text: "Transparent Blobs",
                handler: function (token) {
                    myApp.isTransparentCell = token;
                }
            },
            "opt_fps": {
                text: "FPS",
                default: true,
                handler: function (token) {
                    myApp.isShowFPS = token;
                }
            },
            "opt_packetIO": {
                text: "Pactets I/O",
                disabled: true,
                handler: function (token) {
                    myApp.isShowPacketIO = token;
                }
            },
            "opt_auto_hide_mass": {
                text: "Auto Hide Mass",
                default: true,
                handler: function (token) {
                    myApp.isAutoHideMass = token;
                }
            },
            "opt_auto_hide_name": {
                text: "Auto Hide Names",
                default: true,
                handler: function (token) {
                    myApp.isAutoHideName = token;
                }
            },
            "opt_show_text_stroke_line": {
                text: "Text Shadows",
                handler: function (token) {
                    myApp.isShowTextStrokeLine = token;
                }
            },
            "opt_lock_zoom": {
                text: "Auto Zoom",
                handler: function (token) {
                    myApp.isEnableLockZoom = !token;
                }
            },
            "opt_split_ind": {
                text: "Split Indicators",
                handler: function (token) {
                    myApp.isEnableSplitInd = token;
                }
            },
            "opt_custom_skin": {
                text: "Custom Skins",
                default: true,
                handler: function (token) {
                    myApp.isEnableCustomSkin = token;
                }
            },
            "opt_other_skin": {
                text: "YIN SKIN",
                disabled: true,
                handler: function (token) {
                    myApp.isEnableOtherSkinSupport = token;
                }
            },
            "opt_system_message": {
                text: "System Msg",
                disabled: true,
                default: false,
                handler: function (token) {
                    res = token;
                }
            },
            "opt_chatbox": {
                text: "Chatbox",
                disabled: false,
                default: false,
                handler: function (token) {
                    if (token) {
                        chatRoom.show();
                    } else {
                        chatRoom.hide();
                    }
                }
            },
            "opt_chatpopup": {
                text: "Chat Popup",
                disabled: false,
                default: true,
                handler: function (token) {
                    myApp.isEnableChatpopup = token;
                }
            },
            "opt_sound": {
                text: "Sound",
                disabled: true,
                default: false,
                handler: function (token) {
                    myApp.isEnableSound = token;
                }
            },
            "opt_share_fb": {
                text: "132 MASS",
                disabled: true,
                default: false,
                handler: function (token) {
                    myApp.isEnableShareFb = token;
                }
            }
        };
        window.setYinSkinSupport = function (firstRestricted) {
            options.opt_other_skin.handler(firstRestricted);
            setLocalStorage("opt_other_skin", firstRestricted);
        };
        var tabContent = $(document.createDocumentFragment());
        var i;
        for (i in options) {
            if (!options[i].disabled) {
                tabContent.append('<input id="' + i + '" type="checkbox"> ' + options[i].text + "<br>");
            }
        }
        $("#options2").append(tabContent);
        $("input:checkbox").change(function () {
            var firstRestricted = $(this).prop("checked");
            var type = $(this).prop("id");
            setLocalStorage(type, firstRestricted);
            if (options[type]) {
                options[type].handler(firstRestricted);
            }
        });
        for (i in options) {
            if (getLocalStorage(i)) {
                if (getLocalStorage(i) == "true") {
                    if (i == "opt_other_skin") {
                        setYinSkinSupport(true);
                    } else {
                        $("#" + i).click();
                    }
                }
                continue;
            }
            if (options[i].default) {
                $("#" + i).click();
            }
        }
        $(".left-side > div:nth-child(2)").after('<div class="agario-panel agario-side-panel agarioProfilePanel level forums" style="display: block !important;text-align:center"><div style="width:190px;"><div style="width:100%; font-size:12px;">Zoom Speed : <span id="txt_zoom_speed">0.97</span></div><input oninput="$(\'#txt_zoom_speed\').text(this.value);" style="width:100%;" type="range" id="opt_zoom_speed" name="opt_zoom_speed" min="0.9" max="0.99" step="0.01" value="0.97"></div></div>');
        $("#opt_zoom_speed").change(function () {
            v = $("#opt_zoom_speed").val();
            setLocalStorage("opt_zoom_speed", v);
        });
    };
    this.scoreInfo = function (millis) {
        if (!millis || !millis.length) {
            return "";
        }
        var optsData = "";
        if (myApp.isShowSTE) {
            optsData += "   STE: " + this.getSTE(millis);
        }
        if (myApp.isShowBallTotal) {
            optsData += "   [" + millis.length + "/16]";
        }
        return optsData;
    };
    this.scoreTxt = function (dataAndEvents) {
        return myApp.isShowScroll ? dataAndEvents : "";
    };
    this.isShowScoreInfo = function () {
        return myApp.isShowScroll || (myApp.isShowSTE || myApp.isShowBallTotal);
    };
    this.showSystemMessage = function () {
        return res;
    };
    this.getSTE = function (codeSegments) {
        var w = 0;
        var i = 0;
        for (; i < codeSegments.length; i++) {
            if (codeSegments[i] && (codeSegments[i].I && (codeSegments[i].I.w && codeSegments[i].I.w > w))) {
                w = codeSegments[i].I.w;
            }
        }
        return ~~(0.375 * w);
    };
    this.createGameInfoBox = function () {
        $(".gameinfo").prepend("<div id='game_info' class='agario-panel'>" + "<p id='ip_info'></p>" + "<p id='region_info'></p>" + "<p id='gamemode_info'></p>" + "<p id='party_code_info'></p>" + "<p id='lb_info'></p>" + "</div>");
        $("#game_info").append('<button id ="btn_copy_gameinfo" class="btn btn-warning btn-hotkeys" type="button">Copy</button>');
    };
    this.updateLBInfo = function () {
        var escaped = "";
        var codeSegments = myApp.getLeaderBoard();
        if (codeSegments) {
            var i = 0;
            for (; i < codeSegments.length; i++) {
                escaped += "<div>" + (i + 1) + ".  " + codeSegments[i] + "</div>";
            }
        }
        $("#lb_info").html(escaped);
    };
    this.isPrivateServer = function () {
        return PRIVATE_SERVER_IP == currentIP;
    };
    this.getCurrentIP = function () {
        console.log(currentIP);
        if (this.isPrivateServer()) {
            return "----------";
        }
        return currentIP.substring(5, currentIP.length);
    };
    this.getRegion = function () {
        return $("#region option:selected").text().split(" ")[0];
    };
    this.getGameMode = function () {
        if (this.isPrivateServer()) {
            return "----------";
        }
        return $("#gamemode option:selected").text();
    };
    this.getTeamName = function () {
        var range = $("#team_name").val() == "" ? "" : $("#team_name").val();
        return range.trim();
    };
    this.getCustomSkinUrl = function () {
        var opacity = ($("#skin_url").val() + "").trim();
        return opacity == "" ? "" : opacity;
    };
    this.getCurrentPartyCode = function () {
        return $(".partyToken").val();
    };
    this.showMessage = function (message, options) {
        if ($("#message_dialog").length == 0) {
            myApp.createMessageDialog();
        }
        $("#message_dialog_title").text(message);
        $("#message_dialog_content").html(options);
        $("#message_dialog").modal({
            show: "true"
        });
    };
    this.getName = function () {
        var folder = $("#nick").val().trim();
        if (folder.indexOf("\u200b") != -1) {
            folder = "";
        }
        return folder == "" ? "" : folder;
    };
    this.getLeaderBoard = function () {
        var listenersArr = [];
        var codeSegments = getLB();
        if (codeSegments) {
            var i = 0;
            for (; i < codeSegments.length; i++) {
                listenersArr[listenersArr.length] = codeSegments[i].name == "" ? "An unnamed cell" : codeSegments[i].name;
            }
        }
        return listenersArr;
    };
    this.setupHotKey = function () {
        hotkeyConfig = {
            "hk_start_new_game": {
                defaultHotkey: "N",
                name: "Start new game",
                keyDown: function () {
                    setNick(myApp.getName());
                },
                type: "NORMAL"
            },
            "hk_cheatw": {
                defaultHotkey: "E",
                name: "Macro W",
                keyDown: function () {
                    myApp.autoW = true;
                    handleQuickW();
                },
                keyUp: function () {
                    myApp.autoW = false;
                },
                type: "NORMAL"
            },
            "hk_quick_space": {
                defaultHotkey: "T",
                name: "Quick space",
                keyDown: function () {
                    if (myApp.quickSpace) {
                        return;
                    }
                    myApp.quickSpace = true;
                    quickSpace();
                },
                keyUp: function () {
                    myApp.quickSpace = false;
                },
                type: "NORMAL"
            },
            "hk_double_space": {
                defaultHotkey: "G",
                name: "Double space",
                keyDown: function () {
                    if (myApp.doubleSpace) {
                        return;
                    }
                    myApp.doubleSpace = true;
                    doubleSpace();
                },
                keyUp: function () {
                    myApp.doubleSpace = false;
                },
                type: "NORMAL"
            },
            "hk_change_color": {
                defaultHotkey: "TAB",
                name: "Switch Color",
                keyDown: function () {
                    myApp.cellColor = myApp.cellColorAry[(myApp.cellColorAry.indexOf(myApp.cellColor) + 1) % myApp.cellColorAry.length];
                },
                type: "NORMAL"
            },
            "hk_stop_movement_toggle": {
                defaultHotkey: "ALT_S",
                name: "Stop movement (Toggle)",
                keyDown: function () {
                    myApp.isStopMovement = !myApp.isStopMovement;
                    myApp.specTeammate = null;
                },
                type: "NORMAL"
            },
            "hk_stop_movement": {
                defaultHotkey: "S",
                name: "Stop movement (Temporary)",
                keyDown: function () {
                    myApp.isStopMovement = true;
                    myApp.specTeammate = null;
                    moveTo(null, null);
                },
                keyUp: function () {
                    myApp.isStopMovement = false;
                },
                type: "NORMAL"
            },
            "hk_split_ind": {
                defaultHotkey: "I",
                name: "On/ off split indicator",
                keyDown: function () {
                    $("#opt_split_ind").click();
                },
                type: "NORMAL"
            },
            "hk_lock_zoom": {
                defaultHotkey: "L",
                name: "On/ off auto zoom",
                keyDown: function () {
                    $("#opt_lock_zoom").click();
                },
                type: "NORMAL"
            },
            "hk_attack_range": {
                defaultHotkey: "Z",
                name: "Show attack range (Temporary)",
                keyDown: function () {
                    myApp.isEnableAttackRange = true;
                },
                keyUp: function () {
                    myApp.isEnableAttackRange = false;
                },
                type: "NORMAL"
            },
            "hk_attack_range_toggle": {
                defaultHotkey: "ALT_A",
                name: "Show attack range (Toggle)",
                keyDown: function () {
                    myApp.isEnableAttackRange = !myApp.isEnableAttackRange;
                },
                type: "NORMAL"
            },
            "hk_spec_teammate": {
                defaultHotkey: "V",
                name: "Spectating teammate",
                keyDown: function () {},
                type: "NORMAL"
            },
            "hk_custom_skin": {
                defaultHotkey: "",
                name: "On/ off Custom skin",
                keyDown: function () {
                    $("#opt_custom_skin").click();
                },
                type: "NORMAL"
            },
            "hk_other_skin": {
                defaultHotkey: "",
                name: "On/ off \u5927\u87f2 skin",
                keyDown: function () {
                    $("#opt_other_skin").click();
                },
                type: "NORMAL"
            },
            "hk_skin": {
                defaultHotkey: "",
                name: "Show/ hide skins",
                keyDown: function () {
                    $("#opt_skin").click();
                },
                type: "NORMAL"
            },
            "hk_same_food_color": {
                defaultHotkey: "",
                name: "On/ off Rainbow color",
                keyDown: function () {
                    $("#opt_same_food_color").click();
                },
                type: "NORMAL"
            },
            "hk_transparent_cell": {
                defaultHotkey: "",
                name: "On/ off transparent cell",
                keyDown: function () {
                    $("#opt_transparent_cell").click();
                },
                type: "NORMAL"
            },
            "hk_fps": {
                defaultHotkey: "",
                name: "Show/ Hide FPS counter",
                keyDown: function () {
                    $("#opt_fps").click();
                },
                type: "NORMAL"
            },
            "hk_zoom_a": {
                defaultHotkey: "1",
                name: "Zoom level 1",
                keyDown: function () {
                    if (!myApp.isEnableLockZoom) {
                        hotkeyConfig.hk_lock_zoom.keyDown();
                    }
                    setZoomLevel(0.75);
                },
                type: "NORMAL"
            },
            "hk_zoom_b": {
                defaultHotkey: "2",
                name: "Zoom level 2",
                keyDown: function () {
                    if (!myApp.isEnableLockZoom) {
                        hotkeyConfig.hk_lock_zoom.keyDown();
                    }
                    setZoomLevel(0.3);
                },
                type: "NORMAL"
            },
            "hk_zoom_c": {
                defaultHotkey: "3",
                name: "Zoom level 3",
                keyDown: function () {
                    if (!myApp.isEnableLockZoom) {
                        hotkeyConfig.hk_lock_zoom.keyDown();
                    }
                    setZoomLevel(0.15);
                },
                type: "NORMAL"
            },
            "hk_zoom_d": {
                defaultHotkey: "4",
                name: "Zoom level 4",
                keyDown: function () {
                    if (!myApp.isEnableLockZoom) {
                        hotkeyConfig.hk_lock_zoom.keyDown();
                    }
                    setZoomLevel(0.08);
                },
                type: "NORMAL"
            },
            "hk_zoom_e": {
                defaultHotkey: "5",
                name: "Zoom level 5",
                keyDown: function () {
                    if (!myApp.isEnableLockZoom) {
                        hotkeyConfig.hk_lock_zoom.keyDown();
                    }
                    setZoomLevel(0.05);
                },
                type: "NORMAL"
            },
            "hk_name": {
                defaultHotkey: "ALT_N",
                name: "Show/ hide names",
                keyDown: function () {
                    $("#opt_name").click();
                },
                type: "NORMAL"
            },
            "hk_self_name": {
                defaultHotkey: "",
                name: "Show/ hide self name",
                keyDown: function () {
                    $("#opt_self_name").click();
                },
                type: "NORMAL"
            },
            "hk_color": {
                defaultHotkey: "",
                name: "Show/ hide colors",
                keyDown: function () {
                    $("#opt_color").click();
                },
                type: "NORMAL"
            },
            "hk_mass": {
                defaultHotkey: "",
                name: "Show/ hide mass",
                keyDown: function () {
                    $("#opt_mass").click();
                },
                type: "NORMAL"
            },
            "hk_stat": {
                defaultHotkey: "",
                name: "On/ off Skip stats",
                keyDown: function () {
                    $("#opt_stats").click();
                },
                type: "NORMAL"
            },
            "hk_zoom": {
                defaultHotkey: "ALT_Z",
                name: "On/ off Zoom",
                keyDown: function () {
                    $("#opt_zoom").click();
                },
                type: "NORMAL"
            },
            "hk_food": {
                defaultHotkey: "F",
                name: "Show/ hide Food",
                keyDown: function () {
                    $("#opt_food").click();
                },
                type: "NORMAL"
            },
            "hk_gridline": {
                defaultHotkey: "ALT_G",
                name: "Show/ hide Gridline",
                keyDown: function () {
                    $("#opt_gridline").click();
                },
                type: "NORMAL"
            },
            "hk_border": {
                defaultHotkey: "ALT_B",
                name: "Show/ hide Border",
                keyDown: function () {
                    $("#opt_border").click();
                },
                type: "NORMAL"
            },
            "hk_simple_draw": {
                defaultHotkey: "",
                name: "On/ off Simple draw",
                keyDown: function () {
                    $("#opt_simple_drawing").click();
                },
                type: "NORMAL"
            },
            "hk_score": {
                defaultHotkey: "",
                name: "Show/ hide Score",
                keyDown: function () {
                    $("#opt_score").click();
                },
                type: "NORMAL"
            },
            "hk_ste": {
                defaultHotkey: "",
                name: "Show/ hide STE",
                keyDown: function () {
                    $("#opt_ste").click();
                },
                type: "NORMAL"
            },
            "hk_n16": {
                defaultHotkey: "",
                name: "Show/ hide [n/16]",
                keyDown: function () {
                    $("#opt_ball_total").click();
                },
                type: "NORMAL"
            },
            "hk_auto_hide_mass": {
                defaultHotkey: "",
                name: "On/ off Auto hide mass",
                keyDown: function () {
                    $("#opt_auto_hide_mass").click();
                },
                type: "NORMAL"
            },
            "hk_auto_hide_name": {
                defaultHotkey: "",
                name: "On/ off Auto hide name",
                keyDown: function () {
                    $("#opt_auto_hide_name").click();
                },
                type: "NORMAL"
            },
            "hk_show_text_stroke_line": {
                defaultHotkey: "",
                name: "Show/ hide Text shadow",
                keyDown: function () {
                    $("#opt_show_text_stroke_line").click();
                },
                type: "NORMAL"
            },
            "hk_minimap": {
                defaultHotkey: "ALT_M",
                name: "Show/ hide Minimap",
                keyDown: function () {
                    $("#opt_minimap").click();
                },
                type: "NORMAL"
            },
            "hk_mousew": {
                defaultHotkey: "",
                name: "On/ off Mouse W",
                keyDown: function () {
                    $("#opt_mousew").click();
                },
                type: "NORMAL"
            },
            "hk_pause": {
                defaultHotkey: "P",
                name: "Pause game for short moment",
                keyDown: function () {
                    var _0x65c4x13a = (new Date).getTime();
                    for (; _0x65c4x13a + 500 >= (new Date).getTime();) {}
                },
                type: "NORMAL"
            },
            "hk_send_msg": {
                defaultHotkey: "ENTER",
                name: "Chatbox send message",
                keyDown: function () {
                    chatRoom.enter();
                },
                type: "NORMAL"
            },
            "hk_send_msg1": {
                defaultHotkey: "ALT_1",
                name: "Chatbox send message 1",
                keyDown: function () {
                    console.log("CHAT MESSAGE");
                    chatRoom.sendMessage(chatCommand.input_hk_send_msg1);
                },
                type: "TEXT"
            },
            "hk_send_msg2": {
                defaultHotkey: "ALT_2",
                name: "Chatbox send message 2",
                keyDown: function () {
                    chatRoom.sendMessage(chatCommand.input_hk_send_msg2);
                },
                type: "TEXT"
            },
            "hk_send_msg3": {
                defaultHotkey: "ALT_3",
                name: "Chatbox send message 3",
                keyDown: function () {
                    chatRoom.sendMessage(chatCommand.input_hk_send_msg3);
                },
                type: "TEXT"
            },
            "hk_send_msg4": {
                defaultHotkey: "ALT_4",
                name: "Chatbox send message 4",
                keyDown: function () {
                    chatRoom.sendMessage(chatCommand.input_hk_send_msg4);
                },
                type: "TEXT"
            },
            "hk_send_msg5": {
                defaultHotkey: "ALT_5",
                name: "Chatbox send message 5",
                keyDown: function () {
                    chatRoom.sendMessage(chatCommand.input_hk_send_msg5);
                },
                type: "TEXT"
            },
            "hk_send_msg6": {
                defaultHotkey: "ALT_6",
                name: "Chatbox send message 6",
                keyDown: function () {
                    chatRoom.sendMessage(chatCommand.input_hk_send_msg6);
                },
                type: "TEXT"
            },
            "hk_send_msg7": {
                defaultHotkey: "ALT_7",
                name: "Chatbox send message 7",
                keyDown: function () {
                    chatRoom.sendMessage(chatCommand.input_hk_send_msg7);
                },
                type: "TEXT"
            },
            "hk_send_msg8": {
                defaultHotkey: "ALT_8",
                name: "Chatbox send message 8",
                keyDown: function () {
                    chatRoom.sendMessage(chatCommand.input_hk_send_msg8);
                },
                type: "TEXT"
            },
            "hk_send_msg9": {
                defaultHotkey: "ALT_9",
                name: "Chatbox send message 9",
                keyDown: function () {
                    chatRoom.sendMessage(chatCommand.input_hk_send_msg9);
                },
                type: "TEXT"
            },
            "hk_send_msg10": {
                defaultHotkey: "ALT_0",
                name: "Chatbox send message 10",
                keyDown: function () {
                    chatRoom.sendMessage(chatCommand.input_hk_send_msg10);
                },
                type: "TEXT"
            }
        };
    };
    this.createMessageDialog = function () {
        var lineSeparator;
        var $message;
        var $text;
        $text = $("<div class='modal-footer'>");
        $text.append("<button type='button' class='btn btn-default' data-dismiss='modal'>OK</button>");
        $message = $("<div class='modal-content'/>");
        $message.append($("<div class='modal-header'/>").append("<button type='button' class='close' data-dismiss='modal'>&times;</button><h4 id='message_dialog_title' class='modal-title'></h4>"));
        $message.append($("<div id='message_dialog_content' class='modal-body'>"));
        $message.append($text);
        lineSeparator = $("<div id='message_dialog' class='modal fade' role='dialog'/>").append("<div class='modal-dialog'/>").append($message);
        $("body").append(lineSeparator);
        $("#message_dialog").modal({
            backdrop: "static",
            keyboard: false
        });
        $(document).on("shown.bs.modal", "#message_dialog", function () {
            var a = $("#message_dialog>.modal-content").outerHeight();
            var b = $(document).outerHeight();
            if (a > b) {
                $("#message_dialog").css("overflow", "auto");
            } else {
                $("#message_dialog").css("margin-top", b / 2 - a / 2 - 40);
            }
        });
        $(document).on("hide.bs.modal", "#message_dialog", function () {});
    };
    this.setUpHotKeyConfigPage = function () {
        $(".left-side > div:nth-child(2)").after('<div class="agario-panel agario-side-panel agarioProfilePanel level" style="display: block !important;text-align:center"><button type="button" class="btn btn-success btn-hotkey" data-toggle="modal" data-target="#hotkeys_setting">Hotkeys</button></div>');
        var js;
        var body;
        var $rootElement;
        $rootElement = $('<div class="modal-footer" style="background: #222;">');
        $rootElement.append("<button onclick='resetDefaultHotkey();' type='button' class='btn btn-blue' style='float:left;'>Reset to Default</button>");
        $rootElement.append("<button type='button' class='btn btn-red' data-dismiss='modal'>Cancel</button>");
        $rootElement.append("<button id='btn_save_hotkey' onclick='saveHotkeys();' type='button' class='btn btn-green' data-dismiss='modal'>Save</button>");
        body = $("<div class='modal-content' style='background: #222;'/>");
        body.append($("<div class='modal-header'/>").append("<button type='button' class='close' data-dismiss='modal'>&times;</button><h4 class='modal-title'>Hotkey Setup</h4>"));
        body.append($("<div id='hotkey_modal_body' class='modal-body'>").append(myApp.getHotkeyDivHtml()));
        body.append($rootElement);
        js = $("<div id='hotkeys_setting' class='modal fade' role='dialog'/>").append("<div class='modal-dialog'/>").append(body);
        $("body").append(js);
        $(document).on("hide.bs.modal", "#hotkeys_setting", function () {
            if (selectedHotkeyRow) {
                selectedHotkeyRow.removeClass("table-row-selected");
            }
            selectedHotkeyRow = null;
            myApp.refreshHotkeySettingPage();
        });
        $("#hotkey_table .row").not(".header").click(function () {
            if (selectedHotkeyRow) {
                selectedHotkeyRow.removeClass("table-row-selected");
            }
            selectedHotkeyRow = $(this);
            selectedHotkeyRow.addClass("table-row-selected");
        });
    };
    window.saveHotkeys = function () {
        var codeSegments = $(".hotkey");
        hotkeyMapping = {};
        var i = 0;
        for (; i < codeSegments.length; i++) {
            hotkeyMapping[$(codeSegments[i]).text()] = $(codeSegments[i]).attr("data-hotkeyid");
        }
        setLocalStorage("hotkeyMapping", hotkeyMapping);
        var guid;
        for (guid in chatCommand) {
            chatCommand[guid] = $("#" + guid).val();
        }
        setLocalStorage("chatCommand", chatCommand);
    };
    this.copyGameInfo = function () {
        var later = "";
        later += "Current IP = " + myApp.getCurrentIP();
        later += "\nRegion : " + $("#region option:selected").text().split(" ")[0];
        later += "\nGame mode : " + $("#gamemode option:selected").text();
        later += "\nParty Code : " + myApp.getCurrentPartyCode();
        var codeSegments = myApp.getLeaderBoard();
        if (codeSegments && codeSegments.length != 0) {
            var i = 0;
            for (; i < codeSegments.length; i++) {
                later += "\n" + (i + 1) + ".  " + codeSegments[i];
            }
        }
        copyToClipboard(later);
    };
    window.resetDefaultHotkey = function () {
        var _0x65c4x143;
        _0x65c4x143 = hotkeyMapping;
        defaultHotkeyMapping = {};
        var unlock;
        for (unlock in hotkeyConfig) {
            if (hotkeyConfig[unlock].defaultHotkey && hotkeyConfig[unlock].defaultHotkey != "") {
                defaultHotkeyMapping[hotkeyConfig[unlock].defaultHotkey] = unlock;
            }
        }
        hotkeyMapping = defaultHotkeyMapping;
        myApp.refreshHotkeySettingPage();
        hotkeyMapping = _0x65c4x143;
        _0x65c4x143 = null;
        defaultHotkeyMapping = null;
        var val;
        for (val in defaultHotkeyMessageSend) {
            $("#" + val).val(defaultHotkeyMessageSend[val]);
        }
    };
    this.refreshHotkeySettingPage = function () {
        var codeSegments = $(".hotkey");
        var i = 0;
        for (; i < codeSegments.length; i++) {
            $(codeSegments[i]).text(" ");
        }
        var version;
        for (version in hotkeyMapping) {
            $("[data-hotkeyid=" + hotkeyMapping[version] + "]").text(version);
        }
        var val;
        for (val in chatCommand) {
            $("#" + val).val(chatCommand[val]);
        }
    };
    this.getHotkeyDivHtml = function () {
        var html = "";
        var fragment = $("<div id='hotkey_setting'></div>");
        var $container = $("<div id='hotkey_table' class='table'></div>");
        var $span = $("<div class='row header'></div>");
        $span.append($("<div class='cell' style='width:170px;'>Hotkey</div>"));
        $span.append($("<div class='cell' style='width:222px;'>Function</div>"));
        $span.append($("<div class='cell'>Message</div>"));
        $container.append($span);
        var $items = null;
        var type;
        for (type in hotkeyConfig) {
            $items = $("<div class='row'></div>");
            $items.append($("<div data-hotkeyId='" + type + "' class='cell hotkey'>" + getHotkeyById(type) + "</div>"));
            $items.append($("<div class='cell'>" + hotkeyConfig[type].name + "</div>"));
            if (hotkeyConfig[type].type == "TEXT") {
                $items.append($("<div class='cell'><input id='input_" + type + "' maxlength='200' style='width:100%;color:black;' type='text' value='" + chatCommand["input_" + type] + "'></input></div>"));
            } else {
                $items.append($("<div class='cell'> / </div>"));
            }
            $container.append($items);
        }
        fragment.append($container);
        html += $("<p>Step 1: Click on the function item</p>")[0].outerHTML;
        html += $("<p>Step 2: Press wanted hotkey to modify</p>")[0].outerHTML;
        html += $("<p>Press [DEL] key to remove selected hotkey</p>")[0].outerHTML;
        html += $("<p>Allowed hotkey combinations: [CTRL] + [ALT] + 0-9, a-z, [TAB], [ENTER]</p>")[0].outerHTML;
        html += $("<br></br>")[0].outerHTML;
        html += fragment[0].outerHTML;
        return $("<div/>").append(html).html();
    };
    this.checkVersion = function () {
        var version = getLocalStorage("lastestVersion");
        if (!version || version != myApp.version) {
            myApp.applyNewUpdate();
            setLocalStorage("lastestVersion", myApp.version);
        }
    };
    this.showAnnouncement = function () {};
    this.applyNewUpdate = function () {};
    this.setupHints = function () {};
    this.setupHintsImpl = function (node, newValue) {
        var ascClass = "hint--bottom hint--rounded";
        node.addClass(ascClass);
        node.attr("data-hint", newValue);
    };
    this.ajax = function (options, url, callback, q) {
        q = null;
        var xml;
        try {
            xml = new XMLHttpRequest;
        } catch (e) {
            try {
                xml = new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    xml = new ActiveXObject("Microsoft.XMLHTTP");
                } catch (e) {
                    alert("Your browser does not support Ajax.");
                    return false;
                }
            }
        }
        xml.onreadystatechange = function () {
            if (xml.readyState == 4) {
                callback(xml);
            }
        };
        xml.open(url, options, true);
        xml.send(q);
        return xml;
    };
    this.getSkinImage = function (src) {
        if (!src || src == "") {
            return null;
        }
        if (customSkin[src]) {
            return customSkin[src];
        } else {
            if (skinDownloadQueue.indexOf(src) == -1) {
                skinDownloadQueue.push(src);
            }
            return null;
        }
    };
    this.downloadSkin = function () {
        if (skinDownloadQueue.length != 0) {
            var task = skinDownloadQueue.shift();
            if (!customSkin[task]) {
                if (skinDownloadFail[task] && skinDownloadFail[task] > 5) {
                    if (myApp.getCustomSkinUrl() === task) {
                        $("#skin_url").val("").trigger("change");
                    }
                } else {
                    window.postMessage({
                        action: Action.IMAGE,
                        data: task
                    }, "*");
                }
            }
        }
        setTimeout(myApp.downloadSkin, 2E3);
    };
    this.changePreviewImage = function (url) {
        $("#preview-img").fadeOut(315, function () {
            $(this).attr("src", url).bind("onreadystatechange load", function () {
                if (this.complete) {
                    $(this).fadeIn(315);
                }
            });
        });
    };
}

function ChatRoom() {
    this.container = "";
    this.isShow = true;
    this.lastMsg = "";
    this.width = 340;
    this.height = 350;
    var _this = this;
    var clientTop = 0;
    this.createChatBox = function () {
        $(this.container).append("<div id='chatroom'></div>");
        $("#overlays2").append("<div id='chatboxArea2'><input id='input_box2' type='text'></input></div>");
        this.hide();
        $("#chatboxArea2").hide();
        $("#chatroom").mouseup(function () {
            _this.resize();
        });
    };
    _this.resize = function () {
        if ($("#chatroom").width() != this.width || $("#chatroom").height() != this.height) {
            if ($("#chatroom").perfectScrollbar) {
                $("#chatroom").perfectScrollbar("update");
            }
        } else {}
    };
    this.setContainer = function (container) {
        this.container = container;
    };
    this.sendMessage = function (message) {
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
    };
    this.enter = function () {
        if (this.isFocus()) {
            this.sendMessage($("#input_box2").val());
            $("#input_box2").val("");
            $("#input_box2").blur();
            $("#chatboxArea2").hide();
        } else {
            this.focus();
        }
    };
    this.popup = function (callback) {
        if (!myApp.isEnableChatpopup || this.isShow) {
            return;
        }
        if ($.toast) {
            $.toast(callback);
        } else {
            toastQueue.push(callback);
        }
    };
    this.popupInfo = function (text) {
        this.popup({
            text: escapeHtml(text),
            showHideTransition: "slide",
            icon: "info",
            bgColor: "rgba(10, 10, 10, 0.8)",
            allowToastClose: false,
            hideAfter: 15E3,
            stack: 10
        });
    };
    this.popupWarning = function (text) {
        this.popup({
            text: escapeHtml(text),
            showHideTransition: "slide",
            icon: "warning",
            bgColor: "rgba(10, 10, 10, 0.8)",
            allowToastClose: false,
            hideAfter: 15E3,
            stack: 10
        });
    };
    this.popupChat = function (msg, string) {
        var a = escapeHtml(msg);
        var replaceHKGIcon = this.replaceHKGIcon(escapeHtml(string));
        if (msg == "\u4e0d\u7559\u540d [slick]") {
            a = this.replaceHKGIcon(a);
        }
        this.popup({
            heading: '<span class="toast_sender">' + a + " : </span>",
            text: '<span class="toast_chatmsg">' + replaceHKGIcon + "</span>",
            showHideTransition: "fade",
            bgColor: "rgba(10, 10, 10, 0.8)",
            allowToastClose: false,
            hideAfter: 15E3,
            stack: 10
        });
    };
    this.showSystemMessage = function (m1) {
        this.showSystemMessageImpl(m1);
        this.popupInfo(m1);
    };
    this.showSystemWarning = function (m1) {
        this.showSystemMessageImpl(m1);
        this.popupWarning(m1);
    };
    this.showSystemMessageImpl = function (num) {
        if (!myApp.showSystemMessage()) {
            return;
        }
        $("#chatroom").append($("<div/>").append($("<span class='system'/>").text(this.getTimeStr() + num)));
        this.scrollDown();
    };
    this.getTimeStr = function () {
        var now = new Date;
        var fromIndex = now.getMinutes();
        fromIndex = fromIndex < 10 ? "0" + fromIndex : fromIndex;
        return now.getHours() + ":" + fromIndex + " ";
    };
    this.receiveMessage = function (msg, message) {
        var results = $("<div/>");
        var html = $("<span class='time'>").text(this.getTimeStr());
        var x = $("<span class='sender'>").text(msg + " : ");
        if (msg == "\u4e0d\u7559\u540d [slick]") {
            x.html(this.replaceHKGIcon(x.html()));
        }
        results.append(html);
        results.append(x);
        var result = $("<span class='msg'>").text(message);
        result.html(this.replaceHKGIcon(result.html()));
        results.append(result);
        $("#chatroom").append(results);
        this.scrollDown();
        this.popupChat(msg, message);
    };
    this.replaceHKGIcon = function (v02) {
        var itemHTML = v02;
        var query;
        for (query in hkgIcon) {
            itemHTML = itemHTML.replace(new RegExp(escapeRegex(query), "g"), '<img alt="$1" src="' + hkgIcon[query] + '">');
        }
        var images = $('img[alt="$1"]');
        var i = 0;
        for (; i < images.length; i++) {
            for (query in hkgIcon) {
                if (images[i].src == hkgIcon[query]) {
                    $(images[i]).attr("alt", query);
                    break;
                }
            }
        }
        return itemHTML;
    };
    this.scrollDown = function () {
        if ($("#chatroom").perfectScrollbar) {
            $("#chatroom").scrollTop($("#chatroom").prop("scrollHeight"));
            $("#chatroom").perfectScrollbar("update");
        }
    };
    this.show = function () {
        $("#chatroom").show();
        this.isShow = true;
        this.scrollDown();
    };
    this.hide = function () {
        $("#chatroom").hide();
        this.isShow = false;
    };
    this.isFocus = function () {
        return $("#input_box2").is(":focus");
    };
    this.focus = function () {
        $("#chatboxArea2").show();
        $("#input_box2").focus();
    };
    this.createScrollBar = function () {
        $("#chatroom").perfectScrollbar({
            minScrollbarLength: 50,
            suppressScrollX: false
        });
    };
}

function Minimap() {
    var canvas;
    var ctx;
    var that;
    var context;
    var w = 200;
    var s = 200;
    var random = 5;
    var gradient = "#FFC0CB";
    var _0x65c4x15f = false;
    var interval;
    var time = 30;
    var speed = 1E3 / time;
    var high = {};
    this.createMap = function (h) {
        if (h) {
            w = s = h;
        }
        $("body").append("<canvas id='minimapNode'>");
        $("body").append("<canvas id='minimap' >");
        canvas = document.getElementById("minimap");
        ctx = canvas.getContext("2d");
        canvas.width = w;
        canvas.height = s;
        ctx.scale(1, 1);
        ctx.strokeStyle = "#333";
        ctx.fillStyle = "#000000";
        ctx.globalAlpha = 0.5;
        ctx.lineWidth = 2;
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.globalAlpha = 0.2;
        ctx.font = "18px Verdana";
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText("A1", w / 5 / 2, s / 5 / 2);
        ctx.fillText("A2", w / 5 / 2 * 3, s / 5 / 2);
        ctx.fillText("A3", w / 5 / 2 * 5, s / 5 / 2);
        ctx.fillText("A4", w / 5 / 2 * 7, s / 5 / 2);
        ctx.fillText("A5", w / 5 / 2 * 9, s / 5 / 2);
        ctx.fillText("B1", w / 5 / 2, s / 5 / 2 * 3);
        ctx.fillText("B2", w / 5 / 2 * 3, s / 5 / 2 * 3);
        ctx.fillText("B3", w / 5 / 2 * 5, s / 5 / 2 * 3);
        ctx.fillText("B4", w / 5 / 2 * 7, s / 5 / 2 * 3);
        ctx.fillText("B5", w / 5 / 2 * 9, s / 5 / 2 * 3);
        ctx.fillText("C1", w / 5 / 2, s / 5 / 2 * 5);
        ctx.fillText("C2", w / 5 / 2 * 3, s / 5 / 2 * 5);
        ctx.fillText("C3", w / 5 / 2 * 5, s / 5 / 2 * 5);
        ctx.fillText("C4", w / 5 / 2 * 7, s / 5 / 2 * 5);
        ctx.fillText("C5", w / 5 / 2 * 9, s / 5 / 2 * 5);
        ctx.fillText("D1", w / 5 / 2, s / 5 / 2 * 7);
        ctx.fillText("D2", w / 5 / 2 * 3, s / 5 / 2 * 7);
        ctx.fillText("D3", w / 5 / 2 * 5, s / 5 / 2 * 7);
        ctx.fillText("D4", w / 5 / 2 * 7, s / 5 / 2 * 7);
        ctx.fillText("D5", w / 5 / 2 * 9, s / 5 / 2 * 7);
        ctx.fillText("E1", w / 5 / 2, s / 5 / 2 * 9);
        ctx.fillText("E2", w / 5 / 2 * 3, s / 5 / 2 * 9);
        ctx.fillText("E3", w / 5 / 2 * 5, s / 5 / 2 * 9);
        ctx.fillText("E4", w / 5 / 2 * 7, s / 5 / 2 * 9);
        ctx.fillText("E5", w / 5 / 2 * 9, s / 5 / 2 * 9);
        that = document.getElementById("minimapNode");
        context = that.getContext("2d");
        that.width = h;
        that.height = h;
        context.globalAlpha = 1;
        context.scale(1, 1);
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "bold 12px Ubuntu";
        this.hide();
        interval = setInterval(function () {
            minimap.drawNodes();
        }, speed);
    };
    this.uploadSelfPosition = function () {
        if (getCurrentX() && getCurrentY()) {
            _0x65c4x15f = true;
            conn.uploadCoords({
                x: getCurrentX(),
                y: getCurrentY()
            });
        } else {
            if (!_0x65c4x15f) {
                return;
            }
            conn.uploadCoords({
                x: getCurrentX(),
                y: getCurrentY()
            });
            _0x65c4x15f = false;
        }
    };
    this.isExists = function (dataAndEvents) {
        var i = 0;
        for (; i < nodeList.length; i++) {
            if (dataAndEvents == nodeList[i][0]) {
                return i;
            }
        }
        return null;
    };
    this.updateNode = function (data) {
        var node = data.id;
        var s1 = data.x;
        var Y = data.y;
        var name = data.name;
        var i;
        if (i = this.isExists(node)) {
            nodeList[i][1] = name;
            nodeList[i][2] = s1;
            nodeList[i][3] = Y;
            nodeList[i][7] = true;
            nodeList[i][8] = Date.now();
            if (!nodeList[i][12] || !nodeList[i][13]) {
                nodeList[i][12] = s1;
                nodeList[i][13] = Y;
            }
        } else {
            nodeList[nodeList.length] = [node, name, null, null, "#448AFF", null, null];
        }
    };
    this.addNode = function (mode) {
        nodeList[nodeList.length] = [mode.id, mode.name, null, null, "#448AFF", mode.skinurl, mode.cellColor];
    };
    this.deleteNode = function (el) {};
    this.drawNodes = function () {
        var max = getLengthX();
        var unitsRatio = getLengthY();
        context.clearRect(0, 0, that.width, that.height);
        var a = getCurrentX();
        var b = getCurrentY();
        if (a && b) {
            high.x = nodeList[0][2];
            high.y = nodeList[0][3];
        }
        nodeList[0][2] = a;
        nodeList[0][3] = b;
        nodeList[0][12] = a;
        nodeList[0][13] = b;
        if (myApp.isSpectating) {
            nodeList[1][2] = getTop1X();
            nodeList[1][3] = getTop1Y();
            nodeList[1][12] = getTop1X();
            nodeList[1][13] = getTop1Y();
        }
        var i = 0;
        for (; i < nodeList.length; i++) {
            if (!nodeList[i][2] || (!nodeList[i][3] || (!nodeList[i][12] || (!nodeList[i][13] || nodeList[i][0] == "del")))) {
                continue;
            }
            var x;
            var y;
            var radius;
            radius = i == 1 ? 7 : random;
            nodeList[i][2] = ~~nodeList[i][2];
            nodeList[i][3] = ~~nodeList[i][3];
            nodeList[i][12] = ~~nodeList[i][12];
            nodeList[i][13] = ~~nodeList[i][13];
            nodeList[i][12] += (max / 2 + nodeList[i][2] - (max / 2 + nodeList[i][12])) / time;
            nodeList[i][13] += (unitsRatio / 2 + nodeList[i][3] - (unitsRatio / 2 + nodeList[i][13])) / time;
            x = (max / 2 + nodeList[i][12]) / max * w;
            y = (unitsRatio / 2 + nodeList[i][13]) / unitsRatio * s;
            context.beginPath();
            context.arc(x, y, radius, 0, 2 * Math.PI, false);
            context.fillStyle = nodeList[i][4];
            context.strokeStyle = "black";
            context.fill();
            context.stroke();
            if (i > 1) {
                context.fillStyle = gradient;
                context.fillText(nodeList[i][1], x, y - 10);
            }
        }
        if (high.x && (high.y && (!a || !b))) {
            x = (max / 2 + high.x) / max * w;
            y = (unitsRatio / 2 + high.y) / unitsRatio * s;
            context.beginPath();
            context.moveTo(x - 3, y - 3);
            context.lineTo(x + 3, y + 3);
            context.moveTo(x + 3, y - 3);
            context.lineTo(x - 3, y + 3);
            context.stroke();
            context.strokeStyle = "yellow";
            context.stroke();
        }
    };
    this.hide = function () {
        $("#minimap").hide();
        $("#minimapNode").hide();
    };
    this.show = function () {
        $("#minimap").show();
        $("#minimapNode").show();
    };
    this.setDeadPosition = function (mid) {
        if (mid) {
            high = mid;
        } else {
            high = {};
        }
    };
}

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
$(document).keydown(function (e) {
    if ((e.target.tagName.toLowerCase() == "input" || e.target.tagName.toLowerCase() == "textarea") && e.keyCode != 13) {
        return;
    }
    var res = "";
    if (isValidHotKey(e)) {
        res = getPressedKey(e);
    }
    if (e.keyCode == 18) {
        e.preventDefault();
    }
    if (selectedHotkeyRow) {
        if (e.keyCode == 46) {
            e.preventDefault();
            selectedHotkeyRow.find(".hotkey").text(res);
        } else {
            if (res != "") {
                e.preventDefault();
                var codeSegments = $(".hotkey");
                var i = 0;
                for (; i < codeSegments.length; i++) {
                    if ($(codeSegments[i]).text() == res) {
                        return;
                    }
                }
                selectedHotkeyRow.find(".hotkey").text(res);
                selectedHotkeyRow.removeClass("table-row-selected");
                selectedHotkeyRow = null;
            }
        }
    }
    if (res == "") {
        return;
    }
    if (hotkeyMapping[res]) {
        e.preventDefault();
        if (hotkeyConfig[hotkeyMapping[res]]) {
            if (hotkeyConfig[hotkeyMapping[res]].keyDown) {
                hotkeyConfig[hotkeyMapping[res]].keyDown();
            }
        }
    }
});
$(document).keyup(function (e) {
    if ((e.target.tagName.toLowerCase() == "input" || e.target.tagName.toLowerCase() == "textarea") && e.keyCode != 13) {
        return;
    }
    var rt = "";
    if (isValidHotKey(e)) {
        rt = getPressedKey(e);
    }
    if (rt == "") {
        return;
    }
    if (hotkeyMapping[rt]) {
        e.preventDefault();
        if (hotkeyConfig[hotkeyMapping[rt]]) {
            if (hotkeyConfig[hotkeyMapping[rt]].keyUp) {
                hotkeyConfig[hotkeyMapping[rt]].keyUp();
            } else {}
        }
    }
});
$("#overlays2").mousedown(function (e) {
    if (e.button === 0) {
        if (myApp.isEnableMouseW && (e.target.tagName.toLowerCase() != "input" || e.target.tagName.toLowerCase() != "textarea")) {
            myApp.autoW = true;
            handleQuickW();
            e.preventDefault();
        }
    } else {
        if (e.button === 2) {
            $("#opt_chatbox").click();
        }
    }
});
$("#overlays2").mouseup(function (e) {
    if (e.button === 0) {
        if (!myApp.isEnableMouseW || (e.target.tagName.toLowerCase() == "input" || e.target.tagName.toLowerCase() == "textarea")) {
            return;
        }
        myApp.autoW = false;
        e.preventDefault();
    }
});

function isValidHotKey(e) {
    return e.keyCode >= 48 && e.keyCode <= 57 || (e.keyCode >= 65 && e.keyCode <= 90 || (e.keyCode == 9 || e.keyCode == 13)) ? true : false;
}

function getPressedKey(e) {
    var optsData = "";
    if (e.ctrlKey) {
        optsData += "CTRL_";
    }
    if (e.altKey) {
        optsData += "ALT_";
    }
    if (e.keyCode == 9) {
        optsData += "TAB";
    } else {
        if (e.keyCode == 13) {
            optsData += "ENTER";
        } else {
            optsData += String.fromCharCode(e.keyCode);
        }
    }
    return optsData;
}

function getHotkeyById(keepData) {
    var unlock;
    for (unlock in hotkeyMapping) {
        if (hotkeyMapping[unlock] == keepData) {
            return unlock;
        }
    }
    return "";
}
var escapeHtml = function () {
    var buf = {
        '"': "&quot;",
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;"
    };
    return function (messageFormat) {
        return messageFormat.replace(/[\"&<>]/g, function (off) {
            return buf[off];
        });
    };
}();

function copyToClipboard(text) {
    window.postMessage({
        action: Action.COPY,
        data: text
    }, "*");
}
window.onbeforeunload = function () {
    return "Are you sure to QUIT game!?";
};

function escapeRegex(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\_0x1061[1123]");
}
var disconnectTimeout;
$(window).focus(function () {
    isWindowFocus = true;
    if (disconnectTimeout) {
        clearTimeout(disconnectTimeout);
    }
}).blur(function () {
    isWindowFocus = false;
});
jQuery.cachedScript = function (url, options) {
    options = $.extend(options || {}, {
        dataType: "script",
        cache: true,
        url: url
    });
    return jQuery.ajax(options);
};
drawMinimapNodes();

function drawMinimapNodes() {
    minimap.uploadSelfPosition();
    setTimeout(drawMinimapNodes, 1E3);
}
updateGameInfoDiv();

function updateGameInfoDiv() {
    if ($("#overlays").is(":visible")) {
        myApp.updateLBInfo();
    }
    setTimeout(updateGameInfoDiv, 1E3);
}
clearOldNodesData();

function clearOldNodesData() {
    var i = 1;
    for (; i < nodeList.length; i++) {
        var near = nodeList[i][8];
        if (near) {
            var far = Date.now();
            var fn = far - near;
            if (fn > 5E3) {
                if (i < 2) {
                    nodeList[i][2] = null;
                    nodeList[i][3] = null;
                } else {
                    nodeList[i][0] = "del";
                }
            }
        }
    }
    setTimeout(clearOldNodesData, 5E3);
}
updateLbDiv();

function updateLbDiv() {
    if ($("#div_lb").is(":visible")) {
        var codeSegments = getLB();
        var idsToCancel = getSelfIDs();
        var urlConfigHtml = "";
        if (codeSegments) {
            var i = 0;
            for (; i < codeSegments.length; i++) {
                var _0x65c4x182 = false;
                var j = 0;
                for (; j < idsToCancel.length; j++) {
                    if (idsToCancel[j] == codeSegments[i].id) {
                        _0x65c4x182 = true;
                        break;
                    }
                }
                var _0x65c4x184 = !codeSegments[i].name ? "An unnamed cell" : codeSegments[i].name;
                if (_0x65c4x182) {
                    urlConfigHtml += "<div class='self'>";
                } else {
                    urlConfigHtml += "<div>";
                }
                urlConfigHtml += i + 1 + ". " + _0x65c4x184 + "</div>";
            }
        }
        document.getElementById("lb_detail").innerHTML = urlConfigHtml;
    }
    setTimeout(updateLbDiv, 1E3);
}
updateScoreDiv();

function updateScoreDiv() {
    var _0x65c4x186 = getHighestScore();
    var which = getCell();
    var string = [];
    if (_0x65c4x186 != 0) {
        if (myApp.isShowScroll) {
            string.push("Score: " + ~~(_0x65c4x186 / 100));
        }
        if (which && which.length > 0) {
            if (myApp.isShowSTE) {
                var key = myApp.getSTE(which);
                string.push("STE: " + key);
            }
            if (myApp.isShowBallTotal) {
                string.push("[" + which.length + "/16]");
            }
        }
    }
    if (myApp.isShowFPS) {
        var json = getFPS();
        string.push("FPS: " + json);
    }
    if (myApp.isShowPacketIO) {
        var _0x65c4x189 = getPacketIO()
    }
    if (myApp.isEnableLockZoom) {}
    if (isFreeSpec() && (myApp.specTeammate && (myApp.isStopMovement && nodeList[myApp.specTeammate]))) {
        string.push("SPEC: " + nodeList[myApp.specTeammate][1]);
    }
    if (myApp.testing) {
        string.push("*** TESTING ***");
    }
    if (string.length > 0) {
        if (!$("#div_score").is(":visible")) {
            $("#div_score").show();
        }
        document.getElementById("div_score").innerHTML = string.join("&nbsp;&nbsp;&nbsp;").trim();
    } else {
        $("#div_score").hide();
    }
    setTimeout(updateScoreDiv, 500);
}
$.cachedScript("https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/0.6.8/js/min/perfect-scrollbar.jquery.min.js").done(function (dataAndEvents, deepDataAndEvents) {
    chatRoom.createScrollBar();
});
$.cachedScript("http://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js").done(function (dataAndEvents, deepDataAndEvents) {
    var restoreScript;
    for (; restoreScript = toastQueue.shift();) {
        chatRoom.popup(restoreScript);
    }
});
$("#gamemode").parent().append('<div id="testing_div"> <div id="lbl_testing" style="height:20px;">Testing : </div>' + '<input value="' + testingVal + '" type="text" id="testing" class="form-control" placeholder="Testing data"></div>');
$("#testing").change(function () {
    testingVal = Number($("#testing").val());
    console.log("testingVal=" + testingVal);
});
$("#testing_div").hide();
$(".agario-profile-picture").hide();
$(".agario-profile-name-container").hide();
$(".agario-profile-panel").click(function () {
    if ($(".agario-profile-picture").is(":visible")) {
        $(".agario-profile-picture").hide();
        $(".agario-profile-name-container").hide();
    } else {
        $(".agario-profile-picture").show();
        $(".agario-profile-name-container").show();
    }
});
var handleResource = function (name, url) {
    if (!name || !url) {
        console.log(" ** null in download object url, return;");
        return;
    }
    if (customSkin[name]) {
        return;
    }
    var img = new Image;
    img.onload = function () {
        customSkin[name] = this;
        if (myApp.getCustomSkinUrl() == name) {
            myApp.changePreviewImage(this.src);
        }
    };
    img.onerror = function () {
        window.URL.revokeObjectURL(url);
        if (skinDownloadFail[name]) {
            skinDownloadFail[name] = skinDownloadFail[name] + 1;
        } else {
            skinDownloadFail[name] = 1;
        }
        console.log("Load image error");
    };
    img.src = url;
};
