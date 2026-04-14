const _0x3f2682 = _0x4ce4;
(function (_0x468b51, _0x13b064) {
    const _0x33a070 = _0x4ce4,
        _0x12b3dc = _0x468b51();
    while (!![]) {
        try {
            const _0xea4979 =
                (-parseInt(_0x33a070(0x140)) / 0x1) * (-parseInt(_0x33a070(0x1c3)) / 0x2) +
                parseInt(_0x33a070(0x202)) / 0x3 +
                -parseInt(_0x33a070(0xf9)) / 0x4 +
                parseInt(_0x33a070(0x169)) / 0x5 +
                -parseInt(_0x33a070(0x147)) / 0x6 +
                (parseInt(_0x33a070(0xc4)) / 0x7) * (parseInt(_0x33a070(0x11f)) / 0x8) +
                -parseInt(_0x33a070(0x125)) / 0x9;
            if (_0xea4979 === _0x13b064) break;
            else _0x12b3dc["push"](_0x12b3dc["shift"]());
        } catch (_0x19d0b4) {
            _0x12b3dc["push"](_0x12b3dc["shift"]());
        }
    }
})(_0x4949, 0x79bf8);
const _0x103970 = (function () {
        let _0x21d436 = !![];
        return function (_0x428074, _0x348669) {
            const _0x1f16e9 = _0x21d436
                ? function () {
                      const _0x5b6499 = _0x4ce4;
                      if (_0x348669) {
                          const _0x3b5d75 = _0x348669[_0x5b6499(0x1b6)](_0x428074, arguments);
                          return ((_0x348669 = null), _0x3b5d75);
                      }
                  }
                : function () {};
            return ((_0x21d436 = ![]), _0x1f16e9);
        };
    })(),
    _0x3ef318 = _0x103970(this, function () {
        const _0x4e4084 = _0x4ce4;
        return _0x3ef318[_0x4e4084(0xd9)]()[_0x4e4084(0x10c)](_0x4e4084(0x18d))[_0x4e4084(0xd9)]()[_0x4e4084(0x14d)](_0x3ef318)[_0x4e4084(0x10c)]("(((.+)+)+)+$");
    });
_0x3ef318();
const _0x2b3c44 = (function () {
        let _0x266790 = !![];
        return function (_0x50980a, _0x184313) {
            const _0xa32a5c = _0x266790
                ? function () {
                      const _0x3e6c4c = _0x4ce4;
                      if (_0x184313) {
                          const _0x1ba963 = _0x184313[_0x3e6c4c(0x1b6)](_0x50980a, arguments);
                          return ((_0x184313 = null), _0x1ba963);
                      }
                  }
                : function () {};
            return ((_0x266790 = ![]), _0xa32a5c);
        };
    })(),
    _0x17bbfc = _0x2b3c44(this, function () {
        const _0x214175 = _0x4ce4;
        let _0x5c015f;
        try {
            const _0x15e7d4 = Function(_0x214175(0x107) + _0x214175(0xda) + ");");
            _0x5c015f = _0x15e7d4();
        } catch (_0x1b99a2) {
            _0x5c015f = window;
        }
        const _0x5d37da = (_0x5c015f[_0x214175(0x10f)] = _0x5c015f[_0x214175(0x10f)] || {}),
            _0x3ed8ec = ["log", _0x214175(0x17e), _0x214175(0xb4), _0x214175(0x18f), _0x214175(0x15e), _0x214175(0x114), _0x214175(0x162)];
        for (let _0x3cbbb4 = 0x0; _0x3cbbb4 < _0x3ed8ec["length"]; _0x3cbbb4++) {
            const _0x24fed6 = _0x2b3c44[_0x214175(0x14d)][_0x214175(0x16e)][_0x214175(0x192)](_0x2b3c44),
                _0x107005 = _0x3ed8ec[_0x3cbbb4],
                _0x4daa4f = _0x5d37da[_0x107005] || _0x24fed6;
            ((_0x24fed6[_0x214175(0x1aa)] = _0x2b3c44[_0x214175(0x192)](_0x2b3c44)),
                (_0x24fed6["toString"] = _0x4daa4f["toString"][_0x214175(0x192)](_0x4daa4f)),
                (_0x5d37da[_0x107005] = _0x24fed6));
        }
    });
_0x17bbfc();
let totalMessages = 0x0,
    channelName,
    hideCommands = "no",
    ignoredUsers = [],
    msgAlign,
    currency,
    fieldData,
    largeEmotes,
    badgesCustom,
    badgesDisplay,
    pronounsOn,
    pronounsCache = {},
    counter = 0x0,
    counterEmotes = 0x0,
    smoothclass = "",
    msgQueue = [],
    emotesStorage = [],
    providerID,
    emoteOnly = ![],
    pronounsbadge,
    pronounsObj = { pronouns: {} },
    clinetId = "3sqjke05n4hysdkxrv3ufoqvwuwdxc",
    clinetSecret = "g05nmdek9fb61gt2qjksxqxc3wc5zm",
    dataD,
    userImageLoaded = {},
    beinganimated = ![],
    glowClass = "",
    emoteIsGif = ![];
const PRONOUNS_API_BASE = _0x3f2682(0x1e5),
    PRONOUNS_API = { user: (_0x17650d) => PRONOUNS_API_BASE + _0x3f2682(0xfc) + _0x17650d, pronouns: PRONOUNS_API_BASE + _0x3f2682(0x1a5) };
async function getPronouns() {
    const _0x4f1dc9 = _0x3f2682,
        _0x4c92f7 = await get(PRONOUNS_API[_0x4f1dc9(0x1af)]);
    _0x4c92f7 &&
        _0x4c92f7[_0x4f1dc9(0x154)]((_0x258ca1) => {
            const _0x386c83 = _0x4f1dc9;
            pronounsObj[_0x386c83(0x1af)][_0x258ca1[_0x386c83(0xbc)]] = _0x258ca1[_0x386c83(0x9a)];
        });
}
let UserTyping = "";
function addMessage(_0x38c0f6, _0x19def2, _0x2413db, _0x32ab71, _0x5e95e3, _0x4d8252, _0x2f4b61, _0x15e57f, _0x10b427, _0x14b6c4) {
    const _0x52e997 = _0x3f2682;
    ((totalMessages += 0x1), msgQueue[_0x52e997(0xef)](_0x38c0f6));
    let _0x2100cd = "";
    (counter++, (counter = counter > 0x1 ? 0x0 : counter));
    _0x32ab71 && (_0x2100cd = _0x52e997(0x20c));
    if (_0x19def2 != "" && badgesDisplay) _0x19def2 = _0x52e997(0x177) + _0x19def2 + _0x52e997(0xb2);
    else _0x19def2 = "";
    _0x2f4b61 == _0x52e997(0x151) &&
        fieldData[_0x52e997(0x1dd)] &&
        (_0x19def2 = "<div\x20class=\x22badgesbox\x22\x20style=\x22--msgbg:\x20var(--accent1);\x22><div\x20class=\x22livenow\x22><span></span>\x20LIVE</div></div>");
    let _0x2ab7da = "";
    if (fieldData[_0x52e997(0x1eb)] == _0x52e997(0x122))
        _0x2f4b61 == _0x52e997(0xf6) && fieldData[_0x52e997(0xde)]
            ? ((_0x2ab7da = "<div\x20class=\x22inits\x22>" + _0x38c0f6[0x0] + _0x52e997(0xb2)), (_0x2ab7da = icons[_0x2f4b61 + "ic"]))
            : (_0x2ab7da = _0x52e997(0xe5) + _0x5e95e3 + "\x22></div>");
    else {
        if (fieldData[_0x52e997(0x1eb)] == _0x52e997(0x1ba)) _0x2ab7da = icons[_0x2f4b61 + "ic"];
        else
            fieldData[_0x52e997(0x1eb)] == "upload" &&
                (_0x2ab7da = fieldData[_0x2f4b61 + _0x52e997(0x13b)] ? "<div\x20class=\x22pfp-img\x20" + _0x2f4b61 + _0x52e997(0x1f4) : icons[_0x2f4b61 + "ic"]);
    }
    let _0x4d9920 = $["parseHTML"](
        _0x52e997(0x14c) +
            _0x5e95e3 +
            "\x22\x20data-msgid=\x22" +
            _0x4d8252 +
            _0x52e997(0xbd) +
            _0x4d8252 +
            "\x20" +
            _0x2f4b61 +
            _0x52e997(0x1e9) +
            glowClass +
            "\x20{pfptype}\x20{userTyping}\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22anim\x20{userTyping}\x20{minimizeAnim}\x20" +
            fieldData[_0x52e997(0x1f9)] +
            _0x52e997(0x148) +
            totalMessages +
            _0x52e997(0x1fe) +
            totalMessages +
            _0x52e997(0x19d) +
            _0x2ab7da +
            _0x52e997(0x201) +
            (fieldData[_0x52e997(0x1eb)] == _0x52e997(0x1f8) ? "<div\x20class=\x22inits\x22>" + _0x38c0f6[0x0] + _0x52e997(0xb2) : "") +
            "\x0a\x20\x20<div\x20class=\x22dotpfp\x22>\x0a\x20\x20</div>\x0a\x20\x20</div>\x0a\x20\x20\x20\x20\x20<div\x20class=\x22msgcont\x22>\x0a\x20\x20\x20\x20\x20<div\x20class=\x22namebox\x22>\x0a\x20\x20\x20\x20\x20\x20\x20" +
            UserTyping +
            _0x52e997(0x16d) +
            _0x19def2 +
            _0x52e997(0xb7) +
            _0x38c0f6 +
            _0x52e997(0x1cb) +
            _0x2413db +
            _0x52e997(0x1a9)
    );
    msgAlign === "end" ? $(_0x4d9920)[_0x52e997(0x1f0)](_0x52e997(0x1d2)) : $(_0x4d9920)["prependTo"](".main-container");
    fieldData[_0x52e997(0x198)] == _0x52e997(0x124) &&
        $(_0x4d9920)[_0x52e997(0x178)](_0x52e997(0x146), _0x52e997(0x98) + getTwitchPastelColor(_0x14b6c4, 0x46) + _0x52e997(0x9f) + getTwitchPastelColor(_0x14b6c4, 0x50));
    fieldData[_0x52e997(0xd7)] &&
        $(_0x4d9920)["prev"]()["attr"](_0x52e997(0xe9)) == _0x5e95e3 &&
        ($(_0x4d9920)[_0x52e997(0x196)]()[_0x52e997(0x190)](_0x52e997(0x1ca))["fadeOut"](0xfa),
        $(_0x4d9920)[_0x52e997(0x1d3)]("nextmsg"),
        $(_0x4d9920)[_0x52e997(0x196)]()[_0x52e997(0x1d3)](_0x52e997(0xf8)));
    if (_0x15e57f) {
        let _0x3ead73 = $(_0x4d9920)["find"](_0x52e997(0x111))[_0x52e997(0x203)]();
        _0x3ead73[_0x52e997(0xf3)] == 0x1 &&
            fieldData[_0x52e997(0xce)] &&
            !emoteIsGif &&
            ($(_0x4d9920)[_0x52e997(0x1d3)]("stickerEmote"), $(_0x4d9920)[_0x52e997(0x190)](_0x52e997(0x111))[_0x52e997(0x112)](_0x52e997(0x1e7)));
    }
    _0x10b427 && fieldData[_0x52e997(0x1c8)] && $(_0x4d9920)["find"](_0x52e997(0x16c))[_0x52e997(0x197)](_0x10b427);
    ($(_0x4d9920)[_0x52e997(0x10b)](_0x52e997(0x158), $(_0x4d9920)[_0x52e997(0x158)]())[_0x52e997(0x10e)](), replaceBadges());
    fieldData["userTyping"] == _0x52e997(0x1df) && (fieldData["smooth"] && !document[_0x52e997(0x135)] ? $(_0x4d9920)["slideToggle"](0xc8) : $(_0x4d9920)["show"]());
    if (fieldData[_0x52e997(0xa8)] == _0x52e997(0x153)) {
        msgQueue = [...new Set(msgQueue)];
        if (msgQueue[_0x52e997(0xf3)] <= 0x1) $(_0x52e997(0x189))[_0x52e997(0x96)](msgQueue[0x0] + "\x20is\x20typing...");
        else {
            if (msgQueue[_0x52e997(0xf3)] == 0x2) $(_0x52e997(0x189))["text"](msgQueue[0x0] + _0x52e997(0x1e3) + msgQueue[0x1] + _0x52e997(0x186));
            else msgQueue[_0x52e997(0xf3)] > 0x2 && $(_0x52e997(0x189))["text"](_0x52e997(0x199));
        }
        ($(".userTyping")[_0x52e997(0x1e6)](0xc8),
            setTimeout(() => {
                const _0x1dab16 = _0x52e997;
                (msgQueue["shift"](),
                    msgQueue == 0x0 && $(".userTyping")["fadeOut"](0xc8),
                    fieldData["smooth"] && !document[_0x1dab16(0x135)] ? ($(_0x4d9920)[_0x1dab16(0xdf)](0xc8), (_0x4d9920 = null)) : ($(_0x4d9920)["show"](), (_0x4d9920 = null)),
                    LimitMsg());
            }, 0x320));
    } else LimitMsg();
    fieldData[_0x52e997(0xa8)] == _0x52e997(0x174) &&
        ($(".userTyping3")[_0x52e997(0x1d3)]("on"),
        setTimeout(() => {
            const _0x44dcd9 = _0x52e997;
            (msgQueue[_0x44dcd9(0x167)](),
                msgQueue == 0x0 && $(_0x44dcd9(0x159))[_0x44dcd9(0x112)]("on"),
                fieldData[_0x44dcd9(0xcc)] && !document[_0x44dcd9(0x135)]
                    ? ($(_0x4d9920)["slideToggle"](0x12c), (_0x4d9920 = null))
                    : ($(_0x4d9920)["addClass"](_0x44dcd9(0x176))[_0x44dcd9(0xa1)](), (_0x4d9920 = null)),
                LimitMsg());
        }, 0x1f4));
}
(window["addEventListener"](_0x3f2682(0x1b7), async function (_0x321fa5) {
    const _0x4a5208 = _0x3f2682;
    if (_0x321fa5[_0x4a5208(0x165)][_0x4a5208(0x127)][_0x4a5208(0x133)] === _0x4a5208(0xf4)) {
        let _0x24f873;
        switch (_0x321fa5[_0x4a5208(0x165)][_0x4a5208(0x127)][_0x4a5208(0xb9)]) {
            case "testtestMessage":
                _0x24f873 = new CustomEvent("onEventReceived", gettestMessage(channelName));
                break;
            case _0x4a5208(0x12f):
                _0x24f873 = new CustomEvent(_0x4a5208(0x1b7), testMessageLong());
                break;
            case _0x4a5208(0xa9):
                _0x24f873 = new CustomEvent("onEventReceived", testMessageVip());
                break;
            case _0x4a5208(0xe8):
                _0x24f873 = new CustomEvent(_0x4a5208(0x1b7), testMessageSub());
                break;
            case _0x4a5208(0x106):
                _0x24f873 = new CustomEvent(_0x4a5208(0x1b7), testMessageMod());
                break;
            case _0x4a5208(0x20e):
                _0x24f873 = new CustomEvent(_0x4a5208(0x1b7), testMessageFirst());
                break;
            case _0x4a5208(0x129):
                _0x24f873 = new CustomEvent(_0x4a5208(0x1b7), testMessageArtist());
                break;
            case _0x4a5208(0x1cc):
                _0x24f873 = new CustomEvent(_0x4a5208(0x1b7), testSubEvent);
                break;
            case "testSubGiftEvent":
                _0x24f873 = new CustomEvent(_0x4a5208(0x1b7), testSubGiftEvent);
                break;
            case _0x4a5208(0x1f6):
                _0x24f873 = new CustomEvent(_0x4a5208(0x1b7), testTipEvent);
                break;
            case _0x4a5208(0xfb):
                _0x24f873 = new CustomEvent("onEventReceived", testCheerEvent);
                break;
            case _0x4a5208(0x206):
                _0x24f873 = new CustomEvent(_0x4a5208(0x1b7), testFollowEvent);
                break;
            case _0x4a5208(0x1c7):
                _0x24f873 = new CustomEvent("onEventReceived", testRaidEvent);
                break;
        }
        window["dispatchEvent"](_0x24f873);
        return;
    }
    if (_0x321fa5[_0x4a5208(0x165)][_0x4a5208(0x133)] === _0x4a5208(0x1fd)) {
        const _0x3ec95c = _0x321fa5[_0x4a5208(0x165)][_0x4a5208(0x127)][_0x4a5208(0x1cd)];
        $(".message-row[data-msgid=" + _0x3ec95c + "]")[_0x4a5208(0x131)]();
        return;
    } else {
        if (_0x321fa5["detail"][_0x4a5208(0x133)] === _0x4a5208(0x1c1)) {
            const _0x3a23a5 = _0x321fa5[_0x4a5208(0x165)][_0x4a5208(0x127)][_0x4a5208(0x119)];
            $(".message-row[data-sender=" + _0x3a23a5 + "]")["remove"]();
            return;
        }
    }
    let _0x227f9b = _0x321fa5[_0x4a5208(0x165)]["listener"],
        _0x2f1be4 = _0x321fa5[_0x4a5208(0x165)]["event"];
    if (fieldData["alertson"] === !![]) {
        if (_0x227f9b === _0x4a5208(0x1da) || _0x227f9b === _0x4a5208(0x1f5) || _0x227f9b === "cheer-latest" || _0x227f9b === _0x4a5208(0xf0) || _0x227f9b === _0x4a5208(0x12d)) {
            let _0x29c23d = "",
                _0x3269d9 = _0x2f1be4[_0x4a5208(0xbc)],
                _0x508d70 = "";
            switch (_0x227f9b) {
                case _0x4a5208(0x1da):
                    if (fieldData[_0x4a5208(0x136)]) {
                        if (_0x2f1be4["isCommunityGift"]) return;
                        if (_0x2f1be4[_0x4a5208(0x19a)] == !![] && _0x2f1be4["sender"] == _0x2f1be4[_0x4a5208(0xbc)])
                            ((_0x29c23d = fieldData["subgiftMessage"]), (_0x508d70 = _0x4a5208(0xcd)), (_0x3269d9 = _0x2f1be4[_0x4a5208(0x18c)]), (_0x227f9b = _0x4a5208(0x204)));
                        else {
                            if (_0x2f1be4[_0x4a5208(0xcf)] && _0x2f1be4["isCommunityGift"] !== !![])
                                ((_0x29c23d = fieldData[_0x4a5208(0xd1)]),
                                    (_0x3269d9 = _0x2f1be4[_0x4a5208(0x18c)]),
                                    (_0x508d70 = _0x4a5208(0xcd)),
                                    (_0x227f9b = _0x4a5208(0x204)));
                            else {
                                if (_0x2f1be4[_0x4a5208(0xcf)] !== !![] && _0x2f1be4[_0x4a5208(0x16b)] !== !![] && _0x2f1be4[_0x4a5208(0x1d7)] > 0x1)
                                    ((_0x29c23d = fieldData["resubsriberMessage"]), (_0x508d70 = _0x4a5208(0x170)));
                                else {
                                    if (_0x2f1be4[_0x4a5208(0xcf)] !== !![] && _0x2f1be4[_0x4a5208(0x16b)] !== !![])
                                        ((_0x29c23d = fieldData[_0x4a5208(0x18b)]), (_0x508d70 = _0x4a5208(0x170)));
                                    else return;
                                }
                            }
                        }
                    }
                    break;
                case "tip-latest":
                    fieldData["alertsdonation"] && ((_0x29c23d = fieldData[_0x4a5208(0x168)]), (_0x3269d9 = _0x2f1be4[_0x4a5208(0xbc)]));
                    break;
                case _0x4a5208(0x1d8):
                    fieldData[_0x4a5208(0x15b)] && ((_0x29c23d = fieldData[_0x4a5208(0x181)]), (_0x3269d9 = _0x2f1be4[_0x4a5208(0xbc)]), (_0x508d70 = _0x4a5208(0x1bb)));
                    break;
                case _0x4a5208(0xf0):
                    fieldData[_0x4a5208(0x1c2)] && (_0x29c23d = fieldData[_0x4a5208(0x1ac)]);
                    break;
                case _0x4a5208(0x12d):
                    fieldData[_0x4a5208(0x163)] && ((_0x29c23d = fieldData[_0x4a5208(0x1b5)]), (_0x508d70 = _0x4a5208(0x205)));
                    break;
            }
            if (!_0x29c23d) return;
            totalMessages += 0x1;
            let _0x7f3c4d = "";
            if (_0x227f9b[_0x4a5208(0xe7)]("-")[0x0] == _0x4a5208(0x1b1)) _0x7f3c4d = "" + currency + _0x2f1be4[_0x4a5208(0x1d7)][_0x4a5208(0x1ad)](0x2);
            else _0x227f9b[_0x4a5208(0xe7)]("-")[0x0] != _0x4a5208(0x115) && (_0x7f3c4d = _0x2f1be4[_0x4a5208(0x1d7)]);
            let _0x1534bf = "";
            if (fieldData[_0x4a5208(0xf7)] == "icon") _0x1534bf = icons[_0x227f9b[_0x4a5208(0xe7)]("-")[0x0] + "ic"];
            else fieldData[_0x4a5208(0xf7)] == "upload" && (_0x1534bf = fieldData[_0x4a5208(0xa5)] ? _0x4a5208(0x1e8) : icons[_0x227f9b[_0x4a5208(0xe7)]("-")[0x0] + "ic"]);
            let _0x1076cd = "",
                _0x68b11 = "";
            fieldData[_0x4a5208(0x13c)] == _0x4a5208(0x13c) &&
            (_0x227f9b[_0x4a5208(0xe7)]("-")[0x0] == _0x4a5208(0x1b0) || _0x227f9b[_0x4a5208(0xe7)]("-")[0x0] == _0x4a5208(0x1b1))
                ? ((_0x68b11 = _0x4a5208(0x13c)),
                  (_0x1076cd =
                      _0x4a5208(0x120) +
                      _0x3269d9 +
                      _0x4a5208(0x160) +
                      _0x29c23d +
                      _0x4a5208(0x1ea) +
                      (_0x227f9b[_0x4a5208(0xe7)]("-")[0x0] == _0x4a5208(0x1b1)
                          ? currency + _0x2f1be4[_0x4a5208(0x1d7)][_0x4a5208(0x1ad)](0x0)
                          : _0x4a5208(0xeb) + _0x2f1be4[_0x4a5208(0x1d7)]) +
                      _0x4a5208(0xe3)))
                : ((_0x68b11 = _0x4a5208(0x1b3)),
                  (_0x1076cd =
                      _0x4a5208(0xff) +
                      (_0x227f9b[_0x4a5208(0xe7)]("-")[0x0] == "subgift" ? "SUB\x20GIFT" : _0x227f9b["split"]("-")[0x0]) +
                      "</div></div>\x0a<div\x20class=\x22pfpcontwrap\x22>\x0a\x20\x20<div\x20class=\x22pfpcont\x20eventpfp\x22>\x0a\x20\x20<div\x20class=\x22pfp\x22>" +
                      _0x1534bf +
                      _0x4a5208(0x12c) +
                      (fieldData[_0x4a5208(0xf7)] == _0x4a5208(0x1f8) ? _0x4a5208(0x103) + _0x3269d9[0x0] + _0x4a5208(0xb2) : "") +
                      "\x0a\x20\x20\x20<div\x20class=\x22ayo1\x20hehe4\x22></div>\x0a\x20\x20\x20\x20<div\x20class=\x22ayo2\x20hehe4\x22>\x0a\x20\x20\x20\x20\x20\x20<div></div>\x0a\x20\x20\x20\x20\x20\x20<div></div>\x0a\x20\x20\x20\x20\x20\x20<div></div>\x0a\x20\x20\x20\x20\x20\x20<div></div>\x0a\x20\x20\x20\x20\x20\x20<div></div>\x0a\x20\x20\x20\x20\x20\x20<div></div>\x0a\x20\x20\x20\x20\x20\x20<div></div>\x0a\x20\x20\x20\x20\x20\x20<div></div>\x0a\x20\x20\x20\x20\x20\x20<div></div>\x0a\x20\x20\x20\x20\x20\x20<div></div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20<svg\x20class=\x22eventplus\x20ap4\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x209.32\x209.32\x22\x20width=\x229.32\x22\x20height=\x229.32\x22><path\x20x=\x223.43\x22\x20width=\x222.47\x22\x20height=\x229.32\x22\x20rx=\x221.23\x22\x20ry=\x221.23\x22\x20style=\x22fill:var(--iconscol)\x22\x20d=\x22M4.66\x200H4.67A1.23\x201.23\x200\x200\x201\x205.9\x201.23V8.09A1.23\x201.23\x200\x200\x201\x204.67\x209.32H4.66A1.23\x201.23\x200\x200\x201\x203.43\x208.09V1.23A1.23\x201.23\x200\x200\x201\x204.66\x200z\x22/><path\x20x=\x223.43\x22\x20width=\x222.47\x22\x20height=\x229.32\x22\x20rx=\x221.23\x22\x20ry=\x221.23\x22\x20transform=\x22rotate(-90\x204.66\x204.66)\x22\x20style=\x22fill:var(--iconscol)\x22\x20d=\x22M4.66\x200H4.67A1.23\x201.23\x200\x200\x201\x205.9\x201.23V8.09A1.23\x201.23\x200\x200\x201\x204.67\x209.32H4.66A1.23\x201.23\x200\x200\x201\x203.43\x208.09V1.23A1.23\x201.23\x200\x200\x201\x204.66\x200z\x22/></svg>\x0a\x20\x20\x20<svg\x20class=\x22eventplus2\x20ap5\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2015.32\x2011.2\x22\x20width=\x2215.32\x22\x20height=\x2211.2\x22><path\x20cx=\x2213.35\x22\x20cy=\x221.98\x22\x20r=\x221.98\x22\x20style=\x22fill:var(--iconscol)\x22\x20d=\x22M15.33\x201.98A1.98\x201.98\x200\x200\x201\x2013.35\x203.96A1.98\x201.98\x200\x200\x201\x2011.37\x201.98A1.98\x201.98\x200\x200\x201\x2015.33\x201.98z\x22/><path\x20cx=\x22.93\x22\x20cy=\x2210.27\x22\x20r=\x22.93\x22\x20transform=\x22rotate(-86.33\x20.929\x2010.27)\x22\x20style=\x22fill:var(--iconscol)\x22\x20d=\x22M1.86\x2010.27A0.93\x200.93\x200\x200\x201\x200.93\x2011.2A0.93\x200.93\x200\x200\x201\x200\x2010.27A0.93\x200.93\x200\x200\x201\x201.86\x2010.27z\x22/></svg>\x0a\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20<div\x20class=\x22alerttextcont\x22>\x0a\x20\x20<div\x20class=\x22alerttext\x22>\x0a\x20\x20<div\x20class=\x22nameal\x22>·\x20" +
                      _0x3269d9 +
                      _0x4a5208(0x1c4) +
                      _0x29c23d +
                      _0x4a5208(0x16f) +
                      _0x7f3c4d +
                      _0x508d70 +
                      _0x4a5208(0x130)));
            let _0x3d1a82 = $[_0x4a5208(0x182)](
                _0x4a5208(0xba) +
                    glowClass +
                    "\x20" +
                    _0x68b11 +
                    "\x20" +
                    _0x227f9b["split"]("-")[0x0] +
                    "style\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22anim\x20{msgAlign}\x20{anim}\x20\x20{minimizeAnim}\x20" +
                    fieldData[_0x4a5208(0xf7)] +
                    "\x20" +
                    fieldData[_0x4a5208(0x118)] +
                    _0x4a5208(0x134) +
                    _0x1076cd +
                    _0x4a5208(0x110)
            );
            (_0x227f9b["split"]("-")[0x0] == "follower" &&
                (_0x3d1a82 = $[_0x4a5208(0x182)](
                    _0x4a5208(0x12b) +
                        glowClass +
                        _0x4a5208(0x9e) +
                        _0x227f9b[_0x4a5208(0xe7)]("-")[0x0] +
                        _0x4a5208(0x95) +
                        smoothclass +
                        _0x4a5208(0x20a) +
                        _0x2f1be4["name"] +
                        "</div><div\x20class=\x22teeeheee\x22>" +
                        fieldData[_0x4a5208(0x1ac)] +
                        "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20"
                )),
                msgAlign === "end" ? $(_0x3d1a82)[_0x4a5208(0x1f0)](_0x4a5208(0x1d2)) : $(_0x3d1a82)[_0x4a5208(0x152)](".main-container"),
                $(".messagebox")[_0x4a5208(0x1d3)](_0x4a5208(0x1ab)),
                $(_0x4a5208(0x19f))["removeClass"]("on"),
                _0x227f9b["split"]("-")[0x0] == "subscriber" &&
                    ($("#" + totalMessages + _0x4a5208(0x127))[_0x4a5208(0x10b)]("min-width", $("#" + totalMessages + _0x4a5208(0x127))[_0x4a5208(0x1f1)]() + 0x4 + "px"),
                    $("#" + totalMessages + _0x4a5208(0x127))["text"]("0")),
                $(_0x3d1a82)[_0x4a5208(0x10e)](),
                fieldData[_0x4a5208(0xa8)] == _0x4a5208(0x153) || fieldData["userTyping"] == _0x4a5208(0x174)
                    ? setTimeout(() => {
                          const _0x221f68 = _0x4a5208;
                          fieldData["smooth"] && !document[_0x221f68(0x135)] ? $(_0x3d1a82)[_0x221f68(0xdf)](0xfa) : $(_0x3d1a82)[_0x221f68(0xa1)]();
                      }, 0x3e8)
                    : fieldData[_0x4a5208(0xcc)] && !document["hidden"]
                      ? $(_0x3d1a82)[_0x4a5208(0xdf)](0xfa)
                      : $(_0x3d1a82)[_0x4a5208(0xa1)](),
                LimitMsg());
        }
    }
    if (_0x321fa5[_0x4a5208(0x165)]["listener"] !== _0x4a5208(0x10a)) return;
    let _0x325aca = _0x321fa5[_0x4a5208(0x165)][_0x4a5208(0x127)]["data"],
        _0x2d8fd0 = _0x325aca[_0x4a5208(0x175)];
    if (_0x325aca[_0x4a5208(0x96)][_0x4a5208(0x1c9)]("!") && hideCommands === _0x4a5208(0x99)) return;
    if (ignoredUsers[_0x4a5208(0xfd)](_0x325aca[_0x4a5208(0x12e)]) !== -0x1) return;
    let _0x4d189b = _0x4a5208(0xf6),
        _0x2420b0 = _0x321fa5[_0x4a5208(0x165)][_0x4a5208(0x127)]["data"]["tags"],
        _0x474ee1 = "",
        _0x52b1f4;
    for (let _0x40b3fa = 0x0; _0x40b3fa < _0x325aca[_0x4a5208(0x1c6)][_0x4a5208(0xf3)]; _0x40b3fa++) {
        ((_0x52b1f4 = _0x325aca[_0x4a5208(0x1c6)][_0x40b3fa]),
            _0x52b1f4[_0x4a5208(0x1a0)] === _0x4a5208(0x9c) && (_0x4d189b = _0x4a5208(0x1a8)),
            (_0x474ee1 +=
                "<div\x20class=\x22" +
                _0x52b1f4[_0x4a5208(0x1a0)] +
                "\x20custombadge\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20alt=\x22\x22\x20src=\x22" +
                _0x52b1f4[_0x4a5208(0xc5)] +
                "\x22\x20class=\x22badge2\x22></div>"));
    }
    _0x2420b0[_0x4a5208(0x1a6)] === "1" && (_0x4d189b = _0x4a5208(0xc6));
    _0x2420b0[_0x4a5208(0x1b2)] === "1" && (_0x4d189b = _0x4a5208(0x1b2));
    _0x2420b0["vip"] === "1" && (_0x4d189b = _0x4a5208(0x11a));
    for (let _0x4335c0 = 0x0; _0x4335c0 < _0x325aca[_0x4a5208(0x1c6)][_0x4a5208(0xf3)]; _0x4335c0++) {
        ((_0x52b1f4 = _0x325aca[_0x4a5208(0x1c6)][_0x4335c0]), _0x52b1f4["type"] === "broadcaster" && (_0x4d189b = _0x4a5208(0x151)));
    }
    let _0x22737d = "";
    _0x2420b0["reply-parent-msg-body"] &&
        _0x2420b0[_0x4a5208(0x1ec)] &&
        (_0x22737d = $[_0x4a5208(0x182)](
            _0x4a5208(0x101) +
                _0x2420b0[_0x4a5208(0x1ec)] +
                "</span>\x0a\x20\x20\x20\x20\x20\x20<span\x20class=\x22toMessage\x22>\x0a\x20\x20\x20\x20\x20\x20" +
                _0x2420b0[_0x4a5208(0x1f2)]["replace"](/\\s/g, "\x20") +
                _0x4a5208(0x188)
        ));
    _0x325aca[_0x4a5208(0x155)] = emotesStorage[_0x4a5208(0xe0)](_0x325aca[_0x4a5208(0x155)]);
    let _0x500535 = msgDiv(_0x325aca),
        _0x1c8cc9 = _0x500535[_0x4a5208(0xe7)]("\x20");
    ((_0x1c8cc9 = _0x1c8cc9["map"]((_0x5b583b) => {
        const _0x872a5f = _0x4a5208;
        if (_0x5b583b[_0x872a5f(0x1c9)]("@")) return _0x872a5f(0x166) + _0x5b583b + "</span>";
        return _0x5b583b;
    })),
        (_0x500535 = _0x1c8cc9[_0x4a5208(0xbf)]("\x20")));
    let _0x46071c;
    fieldData[_0x4a5208(0x198)] == "TwitchCol" && (_0x46071c = _0x325aca[_0x4a5208(0x16a)] ? _0x325aca[_0x4a5208(0x16a)] : "#" + md5(_0x2d8fd0)[_0x4a5208(0x15d)](0x1a));
    addMessage(_0x2d8fd0, _0x474ee1, _0x500535, _0x325aca[_0x4a5208(0xe6)], _0x325aca[_0x4a5208(0x119)], _0x325aca[_0x4a5208(0x1cd)], _0x4d189b, emoteOnly, _0x22737d, _0x46071c);
    let _0x3cc303 = $(_0x4a5208(0x183) + _0x325aca["msgId"] + "]");
    if (fieldData[_0x4a5208(0x1eb)] == _0x4a5208(0x122) && !(_0x4d189b == "default" && fieldData[_0x4a5208(0xde)])) {
        let _0x37586f = "id" + _0x325aca[_0x4a5208(0x119)],
            _0x183b9f = $("." + _0x37586f);
        getPicture(_0x325aca[_0x4a5208(0x12e)], $(_0x183b9f), _0x37586f);
    }
    let _0x2ca90f = "";
    if (pronounsOn) {
        async function _0x35a7c3() {
            const _0x2e06a2 = _0x4a5208;
            _0x2ca90f = await getUserPronoun(_0x325aca["displayName"]);
            if (_0x2ca90f) {
                let _0x2a0714 = _0x2e06a2(0x12a) + _0x2ca90f + _0x2e06a2(0xb2);
                $(_0x3cc303)["find"](_0x2e06a2(0x1a1))[_0x2e06a2(0x207)](_0x2a0714);
            }
        }
        _0x35a7c3();
    }
}),
    window[_0x3f2682(0x117)](_0x3f2682(0xb8), async (_0x2f6638) => {
        const _0x385be4 = _0x3f2682;
        ((fieldData = _0x2f6638[_0x385be4(0x165)]["fieldData"]),
            (currency = _0x2f6638[_0x385be4(0x165)][_0x385be4(0x138)]["symbol"]),
            (channelName = _0x2f6638[_0x385be4(0x165)][_0x385be4(0x1d6)][_0x385be4(0x105)]),
            (providerID = _0x2f6638[_0x385be4(0x165)][_0x385be4(0x1d6)]["providerId"]),
            ({
                hideCommands: hideCommands,
                msgAlign: msgAlign,
                msgHideOpt: msgHideOpt,
                pronounsOn: pronounsOn,
                largeEmotes: largeEmotes,
                msgLimit: msgLimit,
                msgLimitAmount: msgLimitAmount,
                badgesDisplay: badgesDisplay,
                badgesCustom: badgesCustom,
            } = fieldData));
        fieldData[_0x385be4(0x143)] === !![] &&
            (msgAlign === _0x385be4(0xa0) ? $(_0x385be4(0x1d2))[_0x385be4(0xc1)](_0x385be4(0x17f)) : $(_0x385be4(0x1d2))[_0x385be4(0xc1)]("outdown"));
        !fieldData[_0x385be4(0x144)] && $(_0x385be4(0xa7))[_0x385be4(0x131)]();
        let _0x405afe = document[_0x385be4(0x104)](_0x385be4(0x146));
        $(_0x405afe)
            [_0x385be4(0x18a)](
                _0x385be4(0x149) +
                    getTwitchPastelColor(fieldData[_0x385be4(0x1ef)], 0x55) +
                    _0x385be4(0x156) +
                    getTwitchPastelColor(fieldData[_0x385be4(0x141)], 0x55) +
                    ";\x0a\x20}\x0a\x0a.vipstyle\x20{\x0a\x20\x20--accent2:\x20" +
                    getTwitchPastelColor(fieldData[_0x385be4(0x123)], 0x55) +
                    _0x385be4(0xae) +
                    getTwitchPastelColor(fieldData[_0x385be4(0xed)], 0x55) +
                    ";\x0a}\x0a</style>"
            )
            [_0x385be4(0x152)]($(_0x385be4(0xb5)));
        if (fieldData[_0x385be4(0xa8)] == _0x385be4(0x174)) {
            let _0x74323d = _0x385be4(0x1b4);
            ($(_0x74323d)[_0x385be4(0x152)](_0x385be4(0xb5)), $(_0x385be4(0x1d2))["css"](_0x385be4(0x97), "50px"));
        }
        if (fieldData[_0x385be4(0xa8)] == _0x385be4(0x153)) {
            let _0x1b237e = _0x385be4(0x1ff);
            ($(_0x1b237e)["prependTo"](_0x385be4(0xb5)), $(_0x385be4(0x1d2))["css"]("padding-end", "30px"), $(".userTyping")[_0x385be4(0xdd)](0x12c));
        }
        fieldData[_0x385be4(0xee)] = fieldData["defaultpfp"];
        let _0x105393 = fieldData[_0x385be4(0xbe)][_0x385be4(0xe7)]("\x20")["join"]("+"),
            _0x1e1a61 = document[_0x385be4(0x104)](_0x385be4(0x146));
        $(_0x1e1a61)
            [_0x385be4(0x18a)](_0x385be4(0x139) + _0x105393 + ":wght@300;400;500;600;700;800;900&display=swap\x27);\x0a</style>")
            [_0x385be4(0x152)]($(_0x385be4(0xb5)));
        !fieldData[_0x385be4(0xcc)] && $(_0x385be4(0x1d2))[_0x385be4(0x1d3)](_0x385be4(0xfe));
        fieldData[_0x385be4(0xe4)] && $(_0x385be4(0x1d2))["addClass"]("hideDots");
        fieldData[_0x385be4(0xd0)] && $(_0x385be4(0x1d2))[_0x385be4(0x1d3)](_0x385be4(0xd0));
        fieldData[_0x385be4(0xc2)] && $(_0x385be4(0x1d2))[_0x385be4(0x1d3)]("iconAccent");
        fieldData["namesShadow"] && $(_0x385be4(0x1d2))[_0x385be4(0x1d3)](_0x385be4(0x15f));
        fieldData[_0x385be4(0xa2)] && $(".main-container")[_0x385be4(0x1d3)](_0x385be4(0xa2));
        fieldData[_0x385be4(0x11d)] && (glowClass += "animationOut\x20");
        ((glowClass += fieldData[_0x385be4(0xac)] + "\x20"),
            $("body")[_0x385be4(0x207)](_0x385be4(0x13f) + (1.8 * fieldData[_0x385be4(0xab)]) / 0x64 + _0x385be4(0x109)),
            (ignoredUsers = fieldData[_0x385be4(0x1d5)][_0x385be4(0x1f7)]()["replace"]("\x20", "")[_0x385be4(0xe7)](",")),
            await getTwitchAuthorization());
        if (fieldData[_0x385be4(0xea)]) {
            (window["dispatchEvent"](new CustomEvent(_0x385be4(0x1b7), gettestMessage(channelName))),
                window[_0x385be4(0x1fc)](new CustomEvent(_0x385be4(0x1b7), testMessageLong())),
                window[_0x385be4(0x1fc)](new CustomEvent(_0x385be4(0x1b7), testMessageVip())),
                window["dispatchEvent"](new CustomEvent(_0x385be4(0x1b7), testMessageMod())),
                window["dispatchEvent"](new CustomEvent(_0x385be4(0x1b7), testMessageSub())),
                window["dispatchEvent"](new CustomEvent(_0x385be4(0x1b7), testMessageFirst())),
                window[_0x385be4(0x1fc)](new CustomEvent(_0x385be4(0x1b7), testSubEvent)));
            let _0x4e2c89 = 0x0,
                _0x4d3fd0 = 0x7d0,
                _0x1f49f3 = 0.8,
                _0x3a9eab = 1.15;
            ((fieldData["minimalal"] = !![]),
                setTimeout(
                    () => {
                        const _0x3588bb = _0x385be4;
                        window["dispatchEvent"](new CustomEvent(_0x3588bb(0x1b7), gettestMessage(channelName)));
                    },
                    _0x4d3fd0 + _0x4e2c89 * 0x3e8
                ),
                (_0x4e2c89 += _0x1f49f3),
                setTimeout(
                    () => {
                        const _0x164196 = _0x385be4;
                        window[_0x164196(0x1fc)](new CustomEvent(_0x164196(0x1b7), testMessageVip()));
                    },
                    _0x4d3fd0 + _0x4e2c89 * 0x3e8
                ),
                (_0x4e2c89 += _0x1f49f3),
                setTimeout(
                    () => {
                        window["dispatchEvent"](new CustomEvent("onEventReceived", testCheerEvent));
                    },
                    _0x4d3fd0 + _0x4e2c89 * 0x3e8
                ),
                (_0x4e2c89 += _0x3a9eab),
                setTimeout(
                    () => {
                        const _0x34073b = _0x385be4;
                        window[_0x34073b(0x1fc)](new CustomEvent("onEventReceived", testFollowEvent));
                    },
                    _0x4d3fd0 + _0x4e2c89 * 0x3e8
                ),
                (_0x4e2c89 += _0x3a9eab),
                setTimeout(
                    () => {
                        const _0x460602 = _0x385be4;
                        ((fieldData[_0x460602(0x179)] = !![]), window[_0x460602(0x1fc)](new CustomEvent("onEventReceived", testSubEvent)));
                    },
                    _0x4d3fd0 + _0x4e2c89 * 0x3e8
                ),
                (_0x4e2c89 += _0x3a9eab),
                setTimeout(
                    () => {
                        const _0x206232 = _0x385be4;
                        window[_0x206232(0x1fc)](new CustomEvent("onEventReceived", testMessageFirst()));
                    },
                    _0x4d3fd0 + _0x4e2c89 * 0x3e8
                ),
                (_0x4e2c89 += _0x1f49f3),
                setTimeout(
                    () => {
                        const _0x1535dc = _0x385be4;
                        window["dispatchEvent"](new CustomEvent(_0x1535dc(0x1b7), testMessageFirst()));
                    },
                    _0x4d3fd0 + _0x4e2c89 * 0x3e8
                ),
                (_0x4e2c89 += _0x1f49f3),
                setTimeout(
                    () => {
                        const _0x36e9d5 = _0x385be4;
                        window[_0x36e9d5(0x1fc)](new CustomEvent(_0x36e9d5(0x1b7), gettestMessage(channelName)));
                    },
                    _0x4d3fd0 + _0x4e2c89 * 0x3e8
                ),
                (_0x4e2c89 += _0x1f49f3),
                setTimeout(
                    () => {
                        const _0xaf6f8f = _0x385be4;
                        window[_0xaf6f8f(0x1fc)](new CustomEvent(_0xaf6f8f(0x1b7), testMessageLong()));
                    },
                    _0x4d3fd0 + _0x4e2c89 * 0x3e8
                ),
                (_0x4e2c89 += 0.8),
                setTimeout(
                    () => {
                        const _0x2e8ccb = _0x385be4;
                        window[_0x2e8ccb(0x1fc)](new CustomEvent(_0x2e8ccb(0x1b7), testMessageVip()));
                    },
                    _0x4d3fd0 + _0x4e2c89 * 0x3e8
                ),
                (_0x4e2c89 += 0.8),
                setTimeout(
                    () => {
                        const _0x479b27 = _0x385be4;
                        window["dispatchEvent"](new CustomEvent(_0x479b27(0x1b7), testMessageMod()));
                    },
                    _0x4d3fd0 + _0x4e2c89 * 0x3e8
                ),
                (_0x4e2c89 += 0.8),
                setTimeout(
                    () => {
                        const _0x166578 = _0x385be4;
                        window[_0x166578(0x1fc)](new CustomEvent(_0x166578(0x1b7), testMessageSub()));
                    },
                    _0x4d3fd0 + _0x4e2c89 * 0x3e8
                ),
                (_0x4e2c89 += 0.8),
                setTimeout(
                    () => {
                        const _0x42845d = _0x385be4;
                        window[_0x42845d(0x1fc)](new CustomEvent(_0x42845d(0x1b7), testMessageFirst()));
                    },
                    _0x4d3fd0 + _0x4e2c89 * 0x3e8
                ),
                (_0x4e2c89 += 0.8),
                setTimeout(
                    () => {
                        const _0xfdd1ef = _0x385be4;
                        ((fieldData[_0xfdd1ef(0x179)] = !![]), window[_0xfdd1ef(0x1fc)](new CustomEvent("onEventReceived", testSubEvent)));
                    },
                    _0x4d3fd0 + _0x4e2c89 * 0x3e8
                ),
                (_0x4e2c89 += _0x3a9eab));
        }
        await getEmotes();
        pronounsOn && (await getPronouns());
    }));
function msgDiv(_0x5e0777) {
    const _0x406911 = _0x3f2682;
    let _0x14d456 = 0x0,
        _0x1c96b2 = html_encode(_0x5e0777[_0x406911(0x96)]),
        _0x5554c0 = _0x5e0777[_0x406911(0x155)],
        _0x4b9459 = [];
    _0x5554c0["forEach"]((_0x5d2e6c) => _0x4b9459[_0x406911(0x15a)](_0x5d2e6c[_0x406911(0xbc)]));
    let _0x430891 = _0x1c96b2["split"]("\x20");
    const _0x2abadc = _0x430891[_0x406911(0x1cf)]((_0x87669f) => _0x4b9459[_0x406911(0x9b)](_0x87669f));
    let _0x1b8ee4 = _0x1c96b2[_0x406911(0x100)](/\p{C}/gu, "")[_0x406911(0x1ee)]();
    for (let _0x3886f6 = 0x0; _0x3886f6 < _0x5554c0["length"]; _0x3886f6++) {
        let _0x31ea8e = _0x5554c0[_0x3886f6][_0x406911(0xbc)],
            _0x4f04d2 = _0x31ea8e["replace"](/[-\/\\^$*+?.()|[\]{}]/g, _0x406911(0x94)),
            _0x9a1d30 = new RegExp("\x5cb" + _0x4f04d2 + "\x5cb", "g");
        _0x1b8ee4 = _0x1b8ee4["replace"](_0x9a1d30, "\x20")["replace"](/\p{C}/gu, "")[_0x406911(0x1ee)]();
    }
    return (
        _0x1b8ee4["trim"]() === "" ? (emoteOnly = !![]) : (emoteOnly = ![]),
        _0x1c96b2[_0x406911(0x100)](/([^\s]*)/gi, function (_0x1206fa, _0x3b855b) {
            const _0x83456f = _0x406911;
            let _0x4e7a08 = _0x5554c0[_0x83456f(0x1cf)]((_0xc20d1e) => {
                    const _0x3cfd5b = _0x83456f;
                    return html_encode(_0xc20d1e[_0x3cfd5b(0xbc)]) === _0x3b855b;
                }),
                _0x3323e9 = 0x0;
            if (typeof _0x4e7a08[0x0] !== _0x83456f(0x93)) {
                let _0x5369ad;
                _0x3323e9 = _0x2abadc[_0x83456f(0xf3)];
                _0x4e7a08[0x0][_0x83456f(0xb0)] ? (emoteIsGif = !![]) : (emoteIsGif = ![]);
                if (_0x1b8ee4["trim"]() === "" && largeEmotes === "on") {
                    if (_0x3323e9 === 0x1) {
                        let _0x56b489 = _0x4e7a08[0x0][_0x83456f(0x128)][0x4];
                        (_0x56b489[_0x83456f(0x10c)](/cdn.frankerfacez.com/ !== -0x1) && (_0x56b489 = _0x56b489[_0x83456f(0x100)](_0x83456f(0x1c0), "https:")),
                            (_0x5369ad = "<img\x20class=\x22emote\x20large\x22\x20src=\x22" + _0x56b489 + _0x83456f(0x1e4)));
                    } else {
                        if (_0x3323e9 > 0x1) {
                            let _0x5c89d9 = _0x4e7a08[0x0][_0x83456f(0x128)][0x2];
                            (_0x5c89d9[_0x83456f(0x10c)](/cdn.frankerfacez.com/ !== -0x1) && (_0x5c89d9 = _0x5c89d9["replace"](_0x83456f(0x1c0), _0x83456f(0x1bc))),
                                (_0x5369ad = _0x83456f(0x1ce) + _0x5c89d9 + _0x83456f(0x1e4)));
                        }
                    }
                } else {
                    let _0x25558b = _0x4e7a08[0x0][_0x83456f(0x128)][0x1];
                    (_0x25558b["search"](/cdn.frankerfacez.com/ !== -0x1) && (_0x25558b = _0x25558b[_0x83456f(0x100)](_0x83456f(0x1c0), "https:")),
                        (_0x5369ad = _0x83456f(0x200) + _0x25558b + _0x83456f(0x1e4)));
                }
                return _0x5369ad;
            } else return _0x3b855b;
        })
    );
}
function html_encode(_0x1c0adc) {
    const _0x4232dd = _0x3f2682;
    return _0x1c0adc[_0x4232dd(0x100)](/[<>"^]/g, function (_0x68ec8) {
        const _0x2c7007 = _0x4232dd;
        return "&#" + _0x68ec8[_0x2c7007(0x121)](0x0) + ";";
    });
}
function _0x4949() {
    const _0x197b53 = [
        "https:https:",
        "delete-messages",
        "alertsfollower",
        "73566ciJFQg",
        "</div>\x20\x0a\x20\x20<span>",
        ".partner",
        "badges",
        "testRaidEvent",
        "repliesOn",
        "startsWith",
        ".pointer",
        "</span>\x20\x20\x20\x20\x0a\x20\x20\x20\x20</div>\x20\x0a\x20\x20\x20\x20\x20<div\x20class=\x22messagebox\x22>\x20\x0a\x20\x20\x20\x20\x20<div\x20class=\x22decorcont\x22>\x0a\x20<div\x20class=\x22modBg\x22></div>\x0a<svg\x20class=\x22pointer\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2018.09\x208.23\x22\x20width=\x2218.09\x22\x20height=\x228.23\x22><path\x20d=\x22M18.09\x206.25C9.33\x2010.16\x200\x207.05\x200\x207.05S4.96\x205.15\x208.9\x200\x22/></svg>\x0a</div>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22message\x22>\x0a\x20\x20\x20\x20\x20",
        "testSubEvent",
        "msgId",
        "<img\x20class=\x22emote\x20default\x22\x20src=\x22",
        "filter",
        "rgb",
        "floor",
        ".main-container",
        "addClass",
        "100135116",
        "ignoredUsers",
        "channel",
        "amount",
        "cheer-latest",
        "This\x20is\x20a\x20VIP\x20user\x20test\x20message",
        "subscriber-latest",
        "<svg\x20class=\x22svgbadge\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:svg=\x22http://www.w3.org/2000/svg\x22\x20version=\x221.1\x22\x20id=\x22svg966\x22\x20viewBox=\x220\x200\x2096\x2096\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<defs\x20id=\x22defs970\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g\x20id=\x22g972\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22var(--badgescol)\x22\x20stroke=\x22var(--badgescol)\x22\x20d=\x22m\x205.514926,89.698649\x206.163741,6.001538\x2019.302241,-12.65189\x2013.1385,12.489686\x208.110185,-7.785778\x20L\x2039.253297,76.073538\x2090.671872,29.196667\x2090.509668,0.97322224\x2056.771297,1.7842408\x2023.843945,62.448427\x2010.705445,51.742982\x204.8661112,59.690964\x2016.706982,70.396408\x20Z\x22\x20id=\x22path976\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</svg>",
        "<svg\x20data-name=\x22Layer\x205\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2055.2\x2068.09\x22\x20width=\x2255.2\x22\x20height=\x2268.09\x22>\x0a\x20\x20<path\x20d=\x22M23.05\x202.61\x200.62\x2043.43a5.044\x205.044\x200\x200\x200\x201.37\x206.45l22.69\x2017.19a5.04\x205.04\x200\x200\x200\x206.11\x20-0.02l22.42\x20-17.17a5.04\x205.04\x200\x200\x200\x201.34\x20-6.46L31.89\x202.6c-1.93\x20-3.47\x20-6.92\x20-3.46\x20-8.83\x200.02ZM11.5\x2033.87\x2025.52\x208.36c0.85\x20-1.54\x203.05\x20-1.54\x203.91\x200l13.93\x2025.08c1.16\x202.09\x20-1.34\x204.3\x20-3.27\x202.88l-11.16\x20-8.21a2.25\x202.25\x200\x200\x200\x20-2.66\x200c-2.23\x201.67\x20-6.93\x205.21\x20-11.48\x208.62\x20-1.92\x201.44\x20-4.45\x20-0.75\x20-3.29\x20-2.86\x22/>\x0a\x20\x20<path\x20d=\x22M44.7\x2040.75c-6.16\x20-4.62\x20-13.97\x20-10.49\x20-16.47\x20-12.37a1.35\x201.35\x200\x200\x200\x20-1.62\x200L10.5\x2040.24c-1.18\x200.87\x20-2.71\x20-0.48\x20-2\x20-1.76L26.36\x206.32c0.52\x20-0.94\x201.87\x20-0.94\x202.39\x200L46.71\x2039c0.71\x201.29\x20-0.84\x202.63\x20-2.01\x201.75\x22\x20style=\x22opacity:.4\x22/>\x0a</svg>\x0a\x0a",
        "liveDisplay",
        "background-image",
        "none",
        "getTime",
        "43285909-412c-4eee-b80d-83452ba",
        "https://7tv.io/v3/users/twitch/",
        "\x20and\x20",
        "\x22/>",
        "https://pronouns.alejo.io/api",
        "fadeIn",
        "large",
        "<div\x20class=\x22pfp-img\x20eventupload\x20uploadpfp\x22></div>",
        "style\x20\x20",
        "</div>\x0a</div>\x0a<div\x20class=\x22eventAm\x22>\x0a<div\x20class=\x22eventAmDecCont\x22></div>\x0a<div\x20class=\x22maxidots0\x22></div>\x0a<svg\x20class=\x22maxidots\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2020.39\x2016.89\x22\x20width=\x2220.39\x22\x20height=\x2216.89\x22><path\x20cx=\x2217.29\x22\x20cy=\x223.11\x22\x20r=\x223.11\x22\x20style=\x22fill:var(--accent1)\x22\x20d=\x22M20.4\x203.11A3.11\x203.11\x200\x200\x201\x2017.29\x206.22A3.11\x203.11\x200\x200\x201\x2014.18\x203.11A3.11\x203.11\x200\x200\x201\x2020.4\x203.11z\x22/><path\x20cx=\x221.46\x22\x20cy=\x2215.44\x22\x20r=\x221.46\x22\x20transform=\x22rotate(-.49\x201.104\x2015.206)\x22\x20style=\x22fill:var(--accent1)\x22\x20d=\x22M2.92\x2015.44A1.46\x201.46\x200\x200\x201\x201.46\x2016.9A1.46\x201.46\x200\x200\x201\x200\x2015.44A1.46\x201.46\x200\x200\x201\x202.92\x2015.44z\x22/></svg>\x0a<span>",
        "pfptype",
        "reply-parent-display-name",
        "%,\x20",
        "trim",
        "modcolor",
        "appendTo",
        "width",
        "reply-parent-msg-body",
        "<svg\x20class=\x22svgbadge\x22\x20width=\x2219.6\x22\x20height=\x2219.598\x22\x20viewBox=\x220\x200\x205.186\x205.185\x22\x20xml:space=\x22preserve\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20style=\x22opacity:1;fill:var(--badgescol);fill-opacity:1;stroke:none;stroke-width:.216527;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1;paint-order:stroke\x20markers\x20fill\x22\x20d=\x22M2.61\x200\x20.772.747\x200\x202.575l.747\x201.839\x201.829.771\x201.838-.747.772-1.828L4.439.77Zm.904\x201.37.612.607L2.28\x203.84l-.011-.01-.008.006-.567-.576-.026-.026-.625-.635.607-.613.624.635Z\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
        "upload\x20uploadpfp\x22>\x0a\x0a</div>",
        "tip-latest",
        "testTipEvent",
        "toLowerCase",
        "init",
        "anim",
        "Insomniac",
        "moderator",
        "dispatchEvent",
        "delete-message",
        "\x22\x20x1=\x220\x22\x20y1=\x2239\x22\x20x2=\x2278\x22\x20y2=\x2239\x22\x20gradientUnits=\x22userSpaceOnUse\x22>\x0a\x20\x20\x20\x20\x20\x20<stop\x20offset=\x220\x22\x20stop-color=\x22var(--accent2)\x22/>\x0a\x20\x20\x20\x20\x20\x20<stop\x20offset=\x221\x22\x20stop-color=\x22var(--accent1)\x22/>\x0a\x20\x20\x20\x20</linearGradient>\x0a\x20\x20</defs>\x0a\x20\x20<path\x20d=\x22M39\x203c19.88\x200\x2036\x2016.12\x2036\x2036S58.88\x2075\x2039\x2075\x203\x2058.88\x203\x2039\x2019.12\x203\x2039\x203m0-3C17.5\x200\x200\x2017.5\x200\x2039s17.5\x2039\x2039\x2039\x2039-17.5\x2039-39S60.5\x200\x2039\x200\x22\x20style=\x22fill:url(#ayy",
        "<div\x20class=\x22userTyping\x22>\x0a\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x209.29\x209.29\x22\x20width=\x229.29\x22\x20height=\x229.29\x22><path\x20cx=\x224.65\x22\x20cy=\x224.65\x22\x20r=\x224.65\x22\x20style=\x22fill:var(--lastmsgdot)\x22\x20d=\x22M9.3\x204.65A4.65\x204.65\x200\x200\x201\x204.65\x209.3A4.65\x204.65\x200\x200\x201\x200\x204.65A4.65\x204.65\x200\x200\x201\x209.3\x204.65z\x22/></svg>\x0a<div\x20class=\x22typingText\x22></div></div>",
        "<img\x20class=\x22emote\x20nolarge\x22\x20src=\x22",
        "</div>\x0a\x20\x20",
        "2318433IYsHYo",
        "toArray",
        "subgift-latest",
        "<svg\x20class=\x22usersraid\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2020.51\x2023.44\x22>\x0a\x20\x20<path\x20d=\x22M20.51\x2021.1c0\x201.29-1.02\x202.34-2.28\x202.34H2.28C1.02\x2023.44\x200\x2022.39\x200\x2021.1c0-3.88\x203.06-7.03\x206.84-7.03h6.84c3.78\x200\x206.84\x203.15\x206.84\x207.03Zm-10.26-9.37c3.15\x200\x205.7-2.62\x205.7-5.86S13.4\x200\x2010.25\x200s-5.7\x202.62-5.7\x205.86\x202.55\x205.86\x205.7\x205.86\x22\x20style=\x22fill:var(--amountCol)\x22/>\x0a</svg>",
        "testFollowEvent",
        "append",
        "Mila",
        "100135119",
        "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alertcont\x22>\x20\x20\x0a<svg\x20class=\x22usersraid\x20floraid\x20alglow\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2020.51\x2023.44\x22>\x0a\x20\x20<path\x20d=\x22M20.51\x2021.1c0\x201.29-1.02\x202.34-2.28\x202.34H2.28C1.02\x2023.44\x200\x2022.39\x200\x2021.1c0-3.88\x203.06-7.03\x206.84-7.03h6.84c3.78\x200\x206.84\x203.15\x206.84\x207.03Zm-10.26-9.37c3.15\x200\x205.7-2.62\x205.7-5.86S13.4\x200\x2010.25\x200s-5.7\x202.62-5.7\x205.86\x202.55\x205.86\x205.7\x205.86\x22\x20style=\x22fill:url(#icongrad)\x22/>\x0a</svg>\x0a\x20\x20<div\x20class=\x22nameal2\x22>",
        "This\x20is\x20moderator\x20message",
        "action",
        "<svg\x20class=\x22icon028\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2020.08\x2022.95\x22>\x0a\x20\x20<path\x20d=\x22M20.08\x2020.66c0\x201.27-1\x202.29-2.23\x202.29H2.23C1\x2022.95\x200\x2021.92\x200\x2020.66c0-3.8\x203-6.88\x206.69-6.88h6.69c3.7\x200\x206.69\x203.08\x206.69\x206.88Zm-10.04-9.18c3.08\x200\x205.58-2.57\x205.58-5.74S13.12\x200\x2010.04\x200\x204.46\x202.57\x204.46\x205.74s2.5\x205.74\x205.58\x205.74\x22/>\x0a</svg>",
        "testMessageFirst",
        "\x20CatBag\x20",
        "undefined",
        "\x5c$&",
        "style\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22anim\x20{msgAlign}\x20{anim}\x20",
        "text",
        "padding-end",
        "--accent1:\x20",
        "yes",
        "display",
        "includes",
        "artist-badge",
        ".premium",
        "\x20eventrow\x20",
        ";\x20--accent2:\x20",
        "end",
        "show",
        "gradNames",
        "{\x0a\x20\x20\x22detail\x22:\x20{\x0a\x20\x20\x20\x20\x22listener\x22:\x20\x22message\x22,\x0a\x20\x20\x20\x20\x22event\x22:\x20{\x0a\x20\x20\x20\x20\x20\x20\x22data\x22:\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22tags\x22:\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22badges\x22:\x20\x22\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22color\x22:\x20\x22#b22222\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22first-msg\x22:\x20\x221\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x22userId\x22:\x20\x22100998119\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20},\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22userId\x22:\x20\x22100995119\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22displayName\x22:\x20\x22Chatter\x22,\x0a\x09\x09\x22nick\x22:\x20\x22ubisoft\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22displayColor\x22:\x20\x22#b22222\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22badges\x22:\x20[],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22text\x22:\x20\x22",
        "https://id.twitch.tv/oauth2/token?client_id=",
        "eventpfp",
        "round",
        ".backframe,\x20.header",
        "userTyping",
        "testMessageVip",
        "<svg\x20class=\x22svgbadge\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:svg=\x22http://www.w3.org/2000/svg\x22\x20version=\x221.1\x22\x20id=\x22svg902\x22\x20viewBox=\x220\x200\x2096\x2096\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<defs\x20id=\x22defs906\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<g\x20id=\x22g908\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22var(--badgescol)\x22\x20d=\x22M\x2019.403191,10.959868\x200.36376509,36.881015\x2047.159463,87.576356\x2095.560901,35.504671\x2076.292081,11.189259\x20Z\x22\x20id=\x22path916\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</g>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</svg>",
        "pfpsize",
        "msgAlignX",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20class=\x22svgbadge\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:svg=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2030.074135\x2021.467426\x22\x20version=\x221.1\x22\x20id=\x22svg5\x22\x20xml:space=\x22preserve\x22><defs\x20id=\x22defs2\x22/><g\x20id=\x22layer1\x22\x20transform=\x22translate(-72.032296,-84.451693)\x22><path\x20id=\x22rect237\x22\x20style=\x22fill:var(--badgescol);stroke-width:0\x22\x20d=\x22m\x2076.467684,84.451693\x20c\x20-2.457256,0\x20-4.435388,1.978132\x20-4.435388,4.435388\x20v\x2012.596649\x20c\x200,2.45725\x201.978132,4.43539\x204.435388,4.43539\x20h\x2012.774414\x20c\x202.457256,0\x204.435388,-1.97814\x204.435388,-4.43539\x20v\x20-1.44074\x20l\x208.403624,3.88762\x200.0253,-8.658906\x20-0.3328,-8.654252\x20-8.096144,4.028178\x20v\x20-1.758549\x20c\x200,-2.457256\x20-1.978132,-4.435388\x20-4.435388,-4.435388\x20z\x22/></g></svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
        ";\x0a\x20}\x0a\x0a.defaultstyle,\x20.artiststyle\x20{\x0a\x20\x20--accent2:\x20",
        "moderator/1,partner/1",
        "gif",
        "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/3",
        "</div>",
        "\x22)\x20}\x0a</style>",
        "info",
        "body",
        "285909-412c-4eee-b80d-89f1482ba",
        "<span\x20class=\x22name\x22>\x0a\x20\x20\x20\x20",
        "onWidgetLoad",
        "field",
        "\x0a\x20\x20<div\x20class=\x22message-row\x20eventrow\x20",
        "Verified",
        "name",
        "\x22\x20class=\x22message-row\x20",
        "msgFont",
        "join",
        "#8a2be2",
        "toggleClass",
        "useAccentforIcon",
        "{\x20\x22type\x22:\x20\x22twitch\x22,\x22name\x22:\x20\x22Binoculous\x22,\x22id\x22:\x20\x22112291\x22,\x22gif\x22:\x20false,\x22animated\x22:\x20false,\x22urls\x22:\x20{\x221\x22:\x20\x22https://cdn.7tv.app/emote/62348f3b73f35ccbda40810c/1x.webp\x22,\x222\x22:\x20\x22https://cdn.7tv.app/emote/62348f3b73f35ccbda40810c/2x.webp\x22,\x224\x22:\x20\x22https://cdn.7tv.app/emote/62348f3b73f35ccbda40810c/4x.webp\x22},\x22start\x22:\x200,\x22end\x22:\x207}",
        "5166YpLujT",
        "url",
        "sub",
        "Streamer",
        "Cheers\x20for\x20streamer\x20Kappa\x20Cheers\x20for\x20streamer\x20Kappa\x20Cheers\x20for\x20streamer\x20Kappa\x20Cheers\x20for\x20streamer\x20Kappa\x20Cheers\x20for\x20streamer\x20Kappa\x20",
        "<svg\x20data-name=\x22Layer\x205\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2080\x2080\x22\x20width=\x2280\x22\x20height=\x2280\x22><path\x20d=\x22M40\x200C17.91\x200\x200\x2017.91\x200\x2040s17.91\x2040\x2040\x2040\x2040\x20-17.91\x2040\x20-40S62.09\x200\x2040\x200m12.71\x2050.98a10.5\x2010.5\x200\x200\x201\x20-2.02\x203.43c-0.87\x200.98\x20-1.92\x201.81\x20-3.12\x202.45\x20-1.09\x200.58\x20-2.31\x201.03\x20-3.65\x201.34v1.36c0\x200.76\x20-0.07\x201.48\x20-0.2\x202.15\x20-0.15\x200.76\x20-0.54\x201.39\x20-1.14\x201.87\x20-0.61\x200.48\x20-1.51\x200.72\x20-2.75\x200.72s-2.15\x20-0.25\x20-2.76\x20-0.76\x20-0.98\x20-1.15\x20-1.1\x20-1.91c-0.11\x20-0.66\x20-0.17\x20-1.38\x20-0.17\x20-2.13v-1.36c-1\x20-0.22\x20-1.97\x20-0.55\x20-2.89\x20-0.98\x20-1.04\x20-0.49\x20-2\x20-1.09\x20-2.86\x20-1.8s-1.61\x20-1.49\x20-2.23\x20-2.34c-0.9\x20-1.27\x20-1.29\x20-2.35\x20-1.22\x20-3.29\x200.08\x20-0.95\x200.73\x20-1.98\x201.99\x20-3.15\x200.86\x20-0.72\x201.69\x20-1.12\x202.47\x20-1.19\x200.79\x20-0.08\x201.56\x200.11\x202.29\x200.55\x200.69\x200.41\x201.32\x201\x201.88\x201.73\x200.64\x200.83\x201.33\x201.46\x202.05\x201.85\x200.71\x200.39\x201.53\x200.58\x202.43\x200.58\x201.05\x200\x201.93\x20-0.13\x202.62\x20-0.39\x200.65\x20-0.24\x201.11\x20-0.59\x201.42\x20-1.08s0.47\x20-1.11\x200.47\x20-1.82c0\x20-0.79\x20-0.39\x20-1.34\x20-1.22\x20-1.73\x20-0.97\x20-0.46\x20-2.22\x20-0.88\x20-3.7\x20-1.25\x20-1.54\x20-0.39\x20-3.09\x20-0.94\x20-4.61\x20-1.63\x20-0.95\x20-0.39\x20-1.88\x20-0.88\x20-2.76\x20-1.45\x20-0.89\x20-0.58\x20-1.69\x20-1.28\x20-2.38\x20-2.08\x20-0.7\x20-0.81\x20-1.27\x20-1.79\x20-1.69\x20-2.91\x20-0.43\x20-1.12\x20-0.64\x20-2.45\x20-0.64\x20-3.96\x200\x20-1.42\x200.22\x20-2.73\x200.64\x20-3.89a9.7\x209.7\x200\x200\x201\x201.83\x20-3.11c0.78\x20-0.89\x201.73\x20-1.65\x202.83\x20-2.26\x200.98\x20-0.54\x202.09\x20-0.97\x203.3\x20-1.27v-0.92c0\x20-0.75\x200.06\x20-1.46\x200.17\x20-2.11\x200.13\x20-0.74\x200.5\x20-1.36\x201.11\x20-1.85\x200.61\x20-0.48\x201.51\x20-0.72\x202.75\x20-0.72s2.14\x200.23\x202.75\x200.72c0.61\x200.48\x200.99\x201.11\x201.14\x201.87\x200.13\x200.67\x200.2\x201.4\x200.2\x202.15v0.76c1.08\x200.2\x202.06\x200.54\x202.92\x201.02\x200.95\x200.53\x201.89\x201.19\x202.81\x201.98\x201.14\x200.99\x201.74\x201.86\x201.84\x202.66s-0.3\x201.83\x20-1.24\x203.15c-0.59\x200.9\x20-1.23\x201.56\x20-1.89\x201.94\x20-0.7\x200.4\x20-1.44\x200.53\x20-2.18\x200.38\x20-0.68\x20-0.14\x20-1.42\x20-0.47\x20-2.19\x20-0.97\x20-0.43\x20-0.37\x20-0.82\x20-0.69\x20-1.21\x20-0.98\x20-0.36\x20-0.27\x20-0.81\x20-0.49\x20-1.31\x20-0.67\x20-0.5\x20-0.17\x20-1.18\x20-0.26\x20-2.02\x20-0.26\x20-0.45\x200\x20-0.87\x200.07\x20-1.25\x200.2\x20-0.37\x200.13\x20-0.69\x200.31\x20-0.96\x200.55s-0.49\x200.51\x20-0.66\x200.82c-0.15\x200.29\x20-0.23\x200.58\x20-0.23\x200.89\x200\x200.73\x200.27\x201.27\x200.81\x201.64\x200.63\x200.44\x201.5\x200.8\x202.57\x201.08l3.63\x200.96c1.17\x200.3\x202.34\x200.69\x203.49\x201.14\x201.18\x200.47\x202.27\x201.11\x203.24\x201.91\x201\x200.81\x201.81\x201.89\x202.42\x203.19s0.91\x202.95\x200.91\x204.9c0\x201.55\x20-0.24\x202.99\x20-0.7\x204.28Z\x22/></svg>",
        "{\x20\x22type\x22:\x20\x22twitch\x22,\x22name\x22:\x20\x22PepeLaugh\x22,\x22id\x22:\x20\x22112291\x22,\x22gif\x22:\x20false,\x22animated\x22:\x20false,\x22urls\x22:\x20{\x221\x22:\x20\x22https://cdn.7tv.app/emote/60afbb3952a13d1adb34b2a1/1x.avif\x22,\x222\x22:\x20\x22https://cdn.7tv.app/emote/60afbb3952a13d1adb34b2a1/2x.avif\x22,\x224\x22:\x20\x22https://cdn.7tv.app/emote/60afbb3952a13d1adb34b2a1/4x.avif\x22},\x22start\x22:\x200,\x22end\x22:\x207},\x20{\x20\x22type\x22:\x20\x22twitch\x22,\x22name\x22:\x20\x22PepeLaugh\x22,\x22id\x22:\x20\x22112291\x22,\x22gif\x22:\x20false,\x22animated\x22:\x20false,\x22urls\x22:\x20{\x221\x22:\x20\x22https://cdn.7tv.app/emote/60afbb3952a13d1adb34b2a1/1x.avif\x22,\x222\x22:\x20\x22https://cdn.7tv.app/emote/60afbb3952a13d1adb34b2a1/2x.avif\x22,\x224\x22:\x20\x22https://cdn.7tv.app/emote/60afbb3952a13d1adb34b2a1/4x.avif\x22},\x22start\x22:\x200,\x22end\x22:\x207},\x20{\x20\x22type\x22:\x20\x22twitch\x22,\x22name\x22:\x20\x22PepeLaugh\x22,\x22id\x22:\x20\x22112291\x22,\x22gif\x22:\x20false,\x22animated\x22:\x20false,\x22urls\x22:\x20{\x221\x22:\x20\x22https://cdn.7tv.app/emote/60afbb3952a13d1adb34b2a1/1x.avif\x22,\x222\x22:\x20\x22https://cdn.7tv.app/emote/60afbb3952a13d1adb34b2a1/2x.avif\x22,\x224\x22:\x20\x22https://cdn.7tv.app/emote/60afbb3952a13d1adb34b2a1/4x.avif\x22},\x22start\x22:\x200,\x22end\x22:\x207},\x20{\x20\x22type\x22:\x20\x22twitch\x22,\x22name\x22:\x20\x22PepeLaugh\x22,\x22id\x22:\x20\x22112291\x22,\x22gif\x22:\x20false,\x22animated\x22:\x20false,\x22urls\x22:\x20{\x221\x22:\x20\x22https://cdn.7tv.app/emote/60afbb3952a13d1adb34b2a1/1x.avif\x22,\x222\x22:\x20\x22https://cdn.7tv.app/emote/60afbb3952a13d1adb34b2a1/2x.avif\x22,\x224\x22:\x20\x22https://cdn.7tv.app/emote/60afbb3952a13d1adb34b2a1/4x.avif\x22},\x22start\x22:\x200,\x22end\x22:\x207}",
        "pronoun_id",
        "smooth",
        "<svg\x20class=\x22usersraid\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2053.7\x2051.4\x22\x20width=\x2253.7\x22\x20height=\x2251.4\x22><path\x20d=\x22M40.3\x2051.06\x2028.1\x2044.6c-0.82\x20-0.43\x20-1.8\x20-0.44\x20-2.63\x200l-12.24\x206.39c-2.07\x201.08\x20-4.49\x20-0.68\x20-4.09\x20-2.99l2.37\x20-13.6c0.16\x20-0.92\x20-0.14\x20-1.85\x20-0.8\x20-2.5L0.85\x2022.22c-1.67\x20-1.64\x20-0.74\x20-4.48\x201.58\x20-4.81l13.67\x20-1.95c0.92\x20-0.13\x201.72\x20-0.71\x202.13\x20-1.54l6.15\x20-12.35c1.04\x20-2.09\x204.03\x20-2.09\x205.06\x200.02l6.07\x2012.4c0.41\x200.83\x201.2\x201.41\x202.12\x201.55l13.66\x202.03c2.31\x200.34\x203.23\x203.19\x201.55\x204.82L42.92\x2032c-0.67\x200.65\x20-0.97\x201.58\x20-0.82\x202.5l2.29\x2013.62c0.39\x202.31\x20-2.04\x204.06\x20-4.1\x202.96Z\x22\x20style=\x22fill:var(--amountCol)\x22/></svg>",
        "stickerEmote",
        "gifted",
        "msgOff",
        "subgiftMessage",
        "<svg\x20data-name=\x22Layer\x205\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20100.28\x2096.6\x22>\x0a\x20\x20<path\x20d=\x22M73.86\x2093.1c-1.32\x200-2.59-.32-3.77-.95-.15-.08-.29-.17-.42-.26L50.52\x2081.75c-.14-.07-.31-.12-.48-.12s-.32.04-.47.12L29.89\x2092.03a8\x208\x200\x200\x201-3.72.92c-2.38\x200-4.62-1.05-6.17-2.89a8\x208\x200\x200\x201-1.75-6.54l3.81-21.85c.06-.34-.05-.68-.29-.92L5.93\x2045.2a8\x208\x200\x200\x201-2.01-8.25\x208\x208\x200\x200\x201\x206.5-5.45l21.96-3.13c.33-.05.63-.26.78-.56l9.89-19.85c1.37-2.75\x204.12-4.45\x207.19-4.45s5.86\x201.73\x207.21\x204.51l9.75\x2019.92c.15.3.44.52.79.57l21.93\x203.26a7.97\x207.97\x200\x200\x201\x206.46\x205.48\x207.99\x207.99\x200\x200\x201-2.05\x208.24L78.39\x2060.93c-.25.24-.36.58-.3.94l3.68\x2021.87c.39\x202.34-.25\x204.71-1.77\x206.51a8.05\x208.05\x200\x200\x201-6.14\x202.87Z\x22\x20style=\x22opacity:.4\x22/>\x0a\x20\x20<path\x20d=\x22M50.23\x207c1.62\x200\x203.24.85\x204.07\x202.55l9.75\x2019.92a4.57\x204.57\x200\x200\x200\x203.41\x202.49l21.95\x203.26c3.71.55\x205.19\x205.13\x202.49\x207.74L75.96\x2058.4a4.55\x204.55\x200\x200\x200-1.32\x204.02l3.68\x2021.88c.49\x202.93-1.83\x205.3-4.46\x205.3-.7\x200-1.43-.17-2.12-.54l.02-.03-19.6-10.38c-.66-.35-1.39-.52-2.12-.52s-1.44.17-2.11.52L28.27\x2088.92c-.69.36-1.4.52-2.1.52-2.65\x200-4.98-2.39-4.47-5.33l3.81-21.85c.26-1.48-.22-2.97-1.29-4.02L8.38\x2042.69c-2.68-2.63-1.19-7.2\x202.54-7.73l21.96-3.13a4.53\x204.53\x200\x200\x200\x203.42-2.47l9.88-19.84c.83-1.67\x202.45-2.51\x204.06-2.51m0-7c-4.41\x200-8.36\x202.45-10.33\x206.4L30.6\x2025.1\x209.92\x2028.05c-4.38.62-7.95\x203.62-9.33\x207.82a11.47\x2011.47\x200\x200\x200\x202.88\x2011.84l14.91\x2014.64-3.59\x2020.58c-.58\x203.37.34\x206.8\x202.52\x209.39a11.55\x2011.55\x200\x200\x200\x208.85\x204.14c1.84\x200\x203.68-.46\x205.34-1.32l18.53-9.67\x2017.82\x209.44c.19.13.38.24.59.35\x201.67.89\x203.55\x201.37\x205.42\x201.37\x203.4\x200\x206.61-1.5\x208.82-4.11\x202.19-2.59\x203.11-5.99\x202.55-9.35l-3.46-20.61\x2015.01-14.54c3.18-3.09\x204.31-7.62\x202.95-11.83a11.47\x2011.47\x200\x200\x200-9.29-7.87l-20.66-3.07L60.6\x206.49A11.46\x2011.46\x200\x200\x200\x2050.24.02Z\x22/>\x0a</svg>\x0a",
        "match",
        "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/3",
        "Vip\x20user",
        "Tip\x20for\x20the\x20streamer\x20and\x20alert\x20message\x20added\x20to\x20the\x20tip\x20ho-ho\x20ha-ha",
        "msgconnect",
        "Hi,\x20I\x20just\x20resubscribed!\x20Love\x20you\x20streamer",
        "toString",
        "{}.constructor(\x22return\x20this\x22)(\x20)",
        "json",
        "random",
        "fadeOut",
        "pfp-subonly",
        "slideToggle",
        "concat",
        "<svg\x20data-name=\x22Layer\x205\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20100.28\x2096.6\x22>\x0a\x20\x20<path\x20d=\x22M73.86\x2093.1c-1.32\x200-2.59-.32-3.77-.95-.15-.08-.29-.17-.42-.26L50.52\x2081.75c-.14-.07-.31-.12-.48-.12s-.32.04-.47.12L29.89\x2092.03a8\x208\x200\x200\x201-3.72.92c-2.38\x200-4.62-1.05-6.17-2.89a8\x208\x200\x200\x201-1.75-6.54l3.81-21.85c.06-.34-.05-.68-.29-.92L5.93\x2045.2a8\x208\x200\x200\x201-2.01-8.25\x208\x208\x200\x200\x201\x206.5-5.45l21.96-3.13c.33-.05.63-.26.78-.56l9.89-19.85c1.37-2.75\x204.12-4.45\x207.19-4.45s5.86\x201.73\x207.21\x204.51l9.75\x2019.92c.15.3.44.52.79.57l21.93\x203.26a7.97\x207.97\x200\x200\x201\x206.46\x205.48\x207.99\x207.99\x200\x200\x201-2.05\x208.24L78.39\x2060.93c-.25.24-.36.58-.3.94l3.68\x2021.87c.39\x202.34-.25\x204.71-1.77\x206.51a8.05\x208.05\x200\x200\x201-6.14\x202.87Z\x22\x20style=\x22opacity:.4\x22/>\x0a\x20\x20<path\x20d=\x22M50.23\x207c1.62\x200\x203.24.85\x204.07\x202.55l9.75\x2019.92a4.57\x204.57\x200\x200\x200\x203.41\x202.49l21.95\x203.26c3.71.55\x205.19\x205.13\x202.49\x207.74L75.96\x2058.4a4.55\x204.55\x200\x200\x200-1.32\x204.02l3.68\x2021.88c.49\x202.93-1.83\x205.3-4.46\x205.3-.7\x200-1.43-.17-2.12-.54l.02-.03-19.6-10.38c-.66-.35-1.39-.52-2.12-.52s-1.44.17-2.11.52L28.27\x2088.92c-.69.36-1.4.52-2.1.52-2.65\x200-4.98-2.39-4.47-5.33l3.81-21.85c.26-1.48-.22-2.97-1.29-4.02L8.38\x2042.69c-2.68-2.63-1.19-7.2\x202.54-7.73l21.96-3.13a4.53\x204.53\x200\x200\x200\x203.42-2.47l9.88-19.84c.83-1.67\x202.45-2.51\x204.06-2.51m0-7c-4.41\x200-8.36\x202.45-10.33\x206.4L30.6\x2025.1\x209.92\x2028.05c-4.38.62-7.95\x203.62-9.33\x207.82a11.47\x2011.47\x200\x200\x200\x202.88\x2011.84l14.91\x2014.64-3.59\x2020.58c-.58\x203.37.34\x206.8\x202.52\x209.39a11.55\x2011.55\x200\x200\x200\x208.85\x204.14c1.84\x200\x203.68-.46\x205.34-1.32l18.53-9.67\x2017.82\x209.44c.19.13.38.24.59.35\x201.67.89\x203.55\x201.37\x205.42\x201.37\x203.4\x200\x206.61-1.5\x208.82-4.11\x202.19-2.59\x203.11-5.99\x202.55-9.35l-3.46-20.61\x2015.01-14.54c3.18-3.09\x204.31-7.62\x202.95-11.83a11.47\x2011.47\x200\x200\x200-9.29-7.87l-20.66-3.07L60.6\x206.49A11.46\x2011.46\x200\x200\x200\x2050.24.02Z\x22/>\x0a</svg>",
        "<svg\x20data-name=\x22Layer\x205\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2079.73\x2069.47\x22>\x0a\x20\x20<path\x20d=\x22M57.99\x200C51.48\x200\x2045.64\x203.04\x2041.7\x208a2.333\x202.333\x200\x200\x201-3.67\x200c-3.94-4.96-9.78-8-16.28-8C9.79\x200\x200\x2010.69\x200\x2023.75c0\x2018.22\x2023.86\x2036.68\x2034.66\x2044.1a9.22\x209.22\x200\x200\x200\x2010.42.02c10.81-7.38\x2034.65-25.75\x2034.65-44.11C79.73\x2010.7\x2069.95.01\x2057.99.01ZM39.86\x2018.15c4.22\x200\x207.63\x203.51\x207.63\x207.85s-3.42\x207.85-7.63\x207.85c-4.22\x200-7.63-3.51-7.63-7.85s3.42-7.85\x207.63-7.85m10.68\x2031.38H29.18c-1.68\x200-3.05-1.41-3.05-3.14\x200-5.2\x204.1-9.41\x209.15-9.41h9.15c5.05\x200\x209.15\x204.21\x209.15\x209.41\x200\x201.73-1.37\x203.14-3.05\x203.14Zm15.09-32.78c0\x201-.81\x201.8-1.8\x201.8h-2.9v2.9c0\x201-.81\x201.8-1.8\x201.8h-1.64c-1\x200-1.8-.81-1.8-1.8v-2.9h-2.9c-1\x200-1.8-.81-1.8-1.8v-1.64c0-1\x20.81-1.8\x201.8-1.8h2.9v-2.9c0-1\x20.81-1.8\x201.8-1.8h1.64c1\x200\x201.8.81\x201.8\x201.8v2.9h2.9c1\x200\x201.8.81\x201.8\x201.8z\x22/>\x0a</svg>\x0a\x0a",
        "</span></div></div>\x0a",
        "hideDots",
        "<div\x20class=\x22pfp-img\x20id",
        "isAction",
        "split",
        "testMessageSub",
        "data-sender",
        "editsMode",
        "<svg\x20class=\x22bitss\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2031.66\x2040.25\x22\x20width=\x2231.66\x22\x20height=\x2240.25\x22><path\x20d=\x22M15.21\x200.41\x200.1\x2027.61c-0.19\x200.35\x20-0.1\x200.79\x200.21\x201.03l14.95\x2011.44c0.29\x200.22\x200.69\x200.22\x200.98\x200l15.1\x20-11.44c0.32\x20-0.24\x200.41\x20-0.68\x200.22\x20-1.03L16.61\x200.42a0.805\x200.805\x200\x200\x200\x20-1.41\x200ZM24.5\x2023.6c-3.1\x20-2.33\x20-6.87\x20-5.16\x20-8.18\x20-6.15a0.81\x200.81\x200\x200\x200\x20-0.96\x200l-8\x205.89c-0.7\x200.51\x20-1.6\x20-0.28\x20-1.18\x20-1.04l9.01\x20-16.24a0.809\x200.809\x200\x200\x201\x201.41\x200l9.07\x2016.51c0.42\x200.76\x20-0.49\x201.55\x20-1.19\x201.03Z\x22\x20style=\x22fill:var(--accent1)\x22/></svg>",
        "Follower\x20user",
        "defaultcolor",
        "artistpfp",
        "unshift",
        "follower-latest",
        ".moderator",
        "This\x20is\x20a\x20test\x20message",
        "length",
        "widget-button",
        "cdprojektred",
        "default",
        "eventpfptype",
        "prevmsg",
        "2616336lPVpmI",
        "&grant_type=client_credentials",
        "testCheerEvent",
        "/users/",
        "indexOf",
        "nosmooth",
        "\x0a\x20<div\x20class=\x22slideCont\x22><div>NEW\x20",
        "replace",
        "<div\x20class=\x22replyBody\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22toName\x22>",
        ".broadcaster",
        "<div\x20class=\x22inits\x22>",
        "createElement",
        "username",
        "testMessageMod",
        "return\x20(function()\x20",
        "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3",
        ");\x22/>\x20\x20\x0a\x20\x20\x20\x20\x20</clipPath>\x0a\x20\x20\x20</defs>\x0a\x20</svg>\x0a\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x200\x200\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20<defs>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<linearGradient\x20id=\x22icongrad\x22\x20x1=\x220\x22\x20y1=\x2211.72\x22\x20x2=\x2220.51\x22\x20y2=\x2211.72\x22\x20gradientUnits=\x22userSpaceOnUse\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x220\x22\x20stop-color=\x22{eventscolor}\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<stop\x20offset=\x221\x22\x20stop-color=\x22{eventscolor2}\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</linearGradient>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20</defs>\x0a\x20\x20\x20\x20\x20\x20\x20</svg>",
        "message",
        "css",
        "search",
        "<svg\x20class=\x22icon028\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2030\x2030.09\x22><path\x20d=\x22M23.13\x203.43c-1.63\x201.59\x20-4.35\x204.35\x20-5.85\x206.49\x20-0.3\x200.42\x20-0.78\x200.65\x20-1.3\x200.64\x20-1.55\x20-0.03\x20-4.9\x200.37\x20-6.69\x204.17\x200\x200\x20-0.48\x201.12\x20-0.39\x202.42\x200\x200\x200.51\x201.44\x20-2.51\x204.16\x200\x200\x206.92\x200.55\x209.82\x20-0.96s3.11\x20-5.1\x203.07\x20-5.49c-0.02\x20-0.21\x20-0.03\x20-0.76\x20-0.04\x20-1.21s0.18\x20-0.85\x200.5\x20-1.14l6.62\x20-5.97c0.72\x20-0.65\x201.86\x20-0.48\x202.33\x200.36\x200.81\x201.43\x201.7\x203.66\x201.13\x205.89\x20-0.95\x203.72\x20-2.07\x204.23\x20-4.19\x206.61s-1.99\x201.21\x20-2.16\x203.67\x20-2.07\x205.88\x20-6.27\x206.78c-4.19\x200.91\x20-9.46\x20-1.08\x20-10.59\x20-1.86C5.49\x2027.23\x200.09\x2023.64\x200\x2016.85S2.16\x206.48\x203.85\x204.84C5.53\x203.2\x209.12\x20-0.08\x2014.57\x200c3.98\x200.06\x206.39\x200.17\x208.16\x200.97\x200.96\x200.43\x201.16\x201.72\x200.4\x202.46\x22/></svg>\x0a\x20\x20\x20\x20\x20\x20",
        "hide",
        "console",
        "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a",
        ".emote",
        "removeClass",
        "playapex",
        "table",
        "follower",
        "Milaeshop",
        "addEventListener",
        "minimizeAnim",
        "userId",
        "vip",
        "substring",
        "data",
        "msgHideOpt",
        "profile_image_url",
        "5696UcEkZb",
        "\x20\x0a\x20\x20\x20\x20\x20<div\x20class=\x22alerttextwrap\x22>\x0a<div\x20class=\x22alerttext\x22>\x0a\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x209.32\x209.32\x22\x20width=\x229.32\x22\x20height=\x229.32\x22><path\x20x=\x223.43\x22\x20width=\x222.47\x22\x20height=\x229.32\x22\x20rx=\x221.23\x22\x20ry=\x221.23\x22\x20style=\x22fill:var(--accent1)\x22\x20d=\x22M4.66\x200H4.67A1.23\x201.23\x200\x200\x201\x205.9\x201.23V8.09A1.23\x201.23\x200\x200\x201\x204.67\x209.32H4.66A1.23\x201.23\x200\x200\x201\x203.43\x208.09V1.23A1.23\x201.23\x200\x200\x201\x204.66\x200z\x22/><path\x20x=\x223.43\x22\x20width=\x222.47\x22\x20height=\x229.32\x22\x20rx=\x221.23\x22\x20ry=\x221.23\x22\x20transform=\x22rotate(-90\x204.66\x204.66)\x22\x20style=\x22fill:var(--accent1)\x22\x20d=\x22M4.66\x200H4.67A1.23\x201.23\x200\x200\x201\x205.9\x201.23V8.09A1.23\x201.23\x200\x200\x201\x204.67\x209.32H4.66A1.23\x201.23\x200\x200\x201\x203.43\x208.09V1.23A1.23\x201.23\x200\x200\x201\x204.66\x200z\x22/></svg>\x0a\x20<div\x20class=\x22nameal\x22><span>",
        "charCodeAt",
        "pfpTwitch",
        "vipcolor",
        "TwitchCol",
        "15359139apHvjV",
        "Mileena",
        "event",
        "urls",
        "testMessageArtist",
        "<div\x20class=\x22pronouns\x22>",
        "\x0a\x20\x20\x20\x20<div\x20class=\x22message-row\x20minals\x20",
        "</div>\x0a\x20\x20\x20\x20",
        "raid-latest",
        "nick",
        "testMessageLong",
        "</div>\x20</div>\x0a\x20\x20",
        "remove",
        "#00ff7f",
        "listener",
        "\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22alertcont\x22>\x20\x20\x0a",
        "hidden",
        "alertssub",
        "map",
        "currency",
        "<style>\x0a\x20\x20@import\x20url(\x27https://fonts.googleapis.com/css2?family=",
        "https://static-cdn.jtvnw.net/badges/v1/4300a897-03dc-4e83-8c0e-c332fee7057f/3",
        "pfp",
        "maxials",
        "host",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22msgId\x22:\x20\x2243285909-412c-4eee-b80d-89228ba",
        "<svg\x20width=\x220\x22\x20height=\x220\x22>\x0a\x20\x20\x20<defs>\x0a\x20\x20\x20\x20\x20<clipPath\x20id=\x22myClip\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20d=\x22M22.72\x2027.17c0.44\x20-2.11\x202.15\x20-3.81\x204.27\x20-4.23\x201.08\x20-0.21\x202.11\x20-0.11\x203.03\x200.23s1.98\x20-0.16\x202.31\x20-1.12c0.89\x20-2.56\x201.19\x20-5.4\x200.66\x20-8.37C31.74\x206.56\x2025.82\x200.96\x2018.63\x200.12\x207.89\x20-1.14\x20-1.11\x207.85\x200.11\x2018.58c0.82\x207.15\x206.33\x2013.06\x2013.4\x2014.38\x202.92\x200.55\x205.71\x200.3\x208.24\x20-0.53\x200.96\x20-0.31\x201.49\x20-1.35\x201.15\x20-2.3\x20-0.32\x20-0.9\x20-0.4\x20-1.91\x20-0.19\x20-2.96Z\x22\x20style=\x22transform-origin:\x200px\x200px;\x20transform:\x20translate(1px,\x201px)\x20scale(",
        "27hZSmLa",
        "subscribercolor",
        "catch",
        "msgFade",
        "addFrame",
        "toUpperCase",
        "style",
        "1419810qLeCQe",
        "\x22>\x0a\x20\x20<div\x20class=\x22pfpcont\x20{pfpBg}\x22>\x0a<svg\x20class=\x22outline\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2078\x2078\x22>\x0a\x20\x20<defs>\x0a\x20\x20\x20\x20<linearGradient\x20id=\x22ayy",
        "<style>\x0a\x20.modstyle,\x20.streamerstyle\x20{\x0a\x20\x20--accent2:\x20",
        "POST",
        "Invalid\x20color\x20format",
        "<div\x20data-sender=\x22",
        "constructor",
        "parse",
        "moderator/1",
        "broadcaster",
        "streamer",
        "prependTo",
        "showMsg",
        "forEach",
        "emotes",
        ";\x0a\x20}\x0a\x0a.substyle\x20{\x0a\x20\x20--accent2:\x20",
        "#ff69b4",
        "height",
        ".userTyping3",
        "push",
        "alertsbits",
        "url(\x22",
        "substr",
        "exception",
        "namesShadow",
        "</span></div>\x0a<div\x20class=\x22amal\x22>",
        "3000",
        "trace",
        "alertsraids",
        "0\x22\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20}\x0a}",
        "detail",
        "<span\x20class=\x22mentionNick\x22>",
        "shift",
        "tipMessage",
        "4022810TrEqdv",
        "displayColor",
        "isCommunityGift",
        ".messagebox",
        "\x0a\x20\x20\x20\x20\x20",
        "prototype",
        "</span>\x0a\x20\x20</div>\x0a\x20\x20<div\x20class=\x22eventAm\x22>",
        "<svg\x20class=\x22usersraid\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2018.04\x2015.34\x22\x20width=\x2218.04\x22\x20height=\x2215.34\x22><path\x20d=\x22M4.92\x200c1.72\x200\x203.24\x200.89\x204.1\x202.3C9.88\x200.89\x2011.4\x200\x2013.12\x200c2.71\x200\x204.92\x202.3\x204.92\x205.11\x200\x205.07\x20-9.02\x2010.23\x20-9.02\x2010.23S0\x2010.23\x200\x205.11C0\x202.3\x202.21\x200\x204.92\x200\x22\x20style=\x22fill:var(--amountCol)\x22/></svg>",
        "\x20{\x20background-image:\x20url(\x22",
        "files",
        "slice",
        "outMsg",
        "displayName",
        "nosmooth\x20minimalan\x20elemHidden",
        "<div\x20class=\x22badgesbox\x22>\x0a",
        "attr",
        "minimalal",
        "This\x20is\x20a\x20viewer\x20message",
        "This\x20is\x20a\x20artist\x20message",
        "?timestamp=",
        "emote_set",
        "warn",
        "out",
        "#1e90ff",
        "cheerMessage",
        "parseHTML",
        ".message-row[data-msgid=",
        "<svg\x20class=\x22icon028\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2030\x2021.41\x22>\x0a\x20\x20<path\x20d=\x22M4.42\x200C1.98\x200\x200\x201.98\x200\x204.42v12.57c0\x202.44\x201.98\x204.42\x204.42\x204.42h12.74c2.44\x200\x204.42-1.98\x204.42-4.42\x200-.67.7-1.12\x201.3-.83l3.86\x201.79c1.5.7\x203.22-.4\x203.23-2.06V10.8l-.18-5.12c-.06-1.65-1.81-2.68-3.28-1.95L23.15\x205.4c-.72.36-1.57-.17-1.57-.97A4.41\x204.41\x200\x200\x200\x2017.17\x200z\x22/>\x0a</svg>\x0a",
        "Test\x20message\x20in\x20a\x20custom\x20chat",
        "\x20are\x20typing...",
        "PepeLaugh\x20\x20PepeLaugh\x20\x20PepeLaugh\x20\x20PepeLaugh\x20\x20󠀀",
        "</span>\x0a\x20\x20\x20\x20\x20\x20</div>",
        ".typingText",
        "html",
        "subscriberMessage",
        "sender",
        "(((.+)+)+)+$",
        "100135118",
        "error",
        "find",
        "now",
        "bind",
        "children",
        "CapcomUSA",
        "<svg\x20class=\x22icon028\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2024.93\x2020.41\x22\x20>\x0a\x20\x20\x20\x20\x20\x20<path\x20d=\x22M6.55\x200c-1.1\x200-2.53.72-3.18\x201.6L.44\x205.58c-.65.89-.57\x202.27.17\x203.08L10.89\x2019.8c.75.81\x201.97.81\x202.72\x200L24.33\x208.27c.75-.81.8-2.17.12-3.03l-2.87-3.62C20.9.76\x2019.44.05\x2018.34.04z\x22/>\x0a\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20",
        "prev",
        "prepend",
        "accentColorMode",
        "Multiple\x20users\x20are\x20typing...",
        "bulkGifted",
        ".vip",
        "then",
        ")\x22/>\x0a</svg>\x0a<div\x20class=\x22pfp\x22>",
        "10000",
        ".userTyping2",
        "type",
        ".name",
        "stringify",
        "100135115",
        "partner",
        "/pronouns",
        "subscriber",
        "Artist",
        "artist",
        "\x20\x0a\x20\x20\x20\x20\x20</div></div>\x0a\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div></div>",
        "__proto__",
        "onM",
        "followMessage",
        "toFixed",
        "\x20Binoculous\x20",
        "pronouns",
        "cheer",
        "tip",
        "mod",
        "minals",
        "<div\x20class=\x22userTyping3\x22>\x0a\x20\x20<div\x20class=\x22typing\x22>\x0a\x20\x20<span></span>\x0a\x20\x20<span></span>\x0a\x20\x20<span></span>\x0a\x20\x20</div>\x0a\x20\x20</div>",
        "raidMessage",
        "apply",
        "onEventReceived",
        "vip/1",
        "100135117",
        "icon",
        "<svg\x20class=\x22usersraid\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2020\x2025.42\x22>\x0a\x20\x20<path\x20d=\x22M9.61.26.06\x2017.44c-.12.22-.06.5.14.65l9.44\x207.23c.18.14.43.14.62\x200l9.54-7.23c.2-.15.26-.43.14-.65L10.5.26a.508.508\x200\x200\x200-.89\x200m5.87\x2014.65c-1.96-1.47-4.34-3.26-5.17-3.88a.51.51\x200\x200\x200-.61\x200l-5.05\x203.72c-.44.32-1.01-.18-.75-.66L9.6\x203.83c.19-.35.7-.35.89\x200l5.73\x2010.43c.26.48-.31.98-.75.65Z\x22\x20style=\x22fill:var(--amountCol)\x22/>\x0a</svg>",
        "https:",
        "<style>\x0a.",
        "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/3",
        "This\x20is\x20a\x20moderator\x20test\x20message",
    ];
    _0x4949 = function () {
        return _0x197b53;
    };
    return _0x4949();
}
function gettestMessage(_0x19245f) {
    const _0x4d752b = _0x3f2682;
    return {
        detail: {
            listener: _0x4d752b(0x10a),
            event: {
                data: {
                    tags: { badges: _0x4d752b(0xaf), color: _0x4d752b(0x180), mod: "1", subscriber: "1", "user-id": "100135114", "user-type": _0x4d752b(0x1b2) },
                    userId: "100135114",
                    displayName: _0x4d752b(0xc7),
                    nick: _0x19245f,
                    displayColor: "#5B99FF",
                    badges: [{ type: _0x4d752b(0x150), version: "1", url: _0x4d752b(0x108) }],
                    text: _0x4d752b(0xf2),
                    emotes: [],
                    msgId: "85909-412c-4eee-b80d-89123f72ba" + randNum() + "4",
                },
                renderedText: _0x4d752b(0x185),
            },
        },
    };
}
function testMessageLong() {
    const _0x4faed7 = _0x3f2682;
    return {
        detail: {
            listener: _0x4faed7(0x10a),
            event: {
                data: {
                    tags: { badges: "", color: _0x4faed7(0xc0), mod: "0", subscriber: "0", "user-id": _0x4faed7(0x1a3), "user-type": "mod" },
                    userId: _0x4faed7(0x1a3),
                    displayName: _0x4faed7(0xec),
                    nick: "riotgames",
                    displayColor: _0x4faed7(0xc0),
                    badges: [],
                    text: _0x4faed7(0x17a),
                    emotes: [],
                    msgId: _0x4faed7(0x1e1) + randNum() + "3",
                },
                renderedText: _0x4faed7(0x185),
            },
        },
    };
}
function testMessageArtist() {
    const _0x24203c = _0x3f2682;
    return {
        detail: {
            listener: _0x24203c(0x10a),
            event: {
                data: {
                    tags: { badges: "", color: _0x24203c(0xc0), mod: "0", subscriber: "0", "user-id": "100135119", "user-type": _0x24203c(0x1b2) },
                    userId: _0x24203c(0x209),
                    displayName: _0x24203c(0x1a7),
                    nick: _0x24203c(0x116),
                    badges: [{ type: _0x24203c(0x9c), version: "1", url: _0x24203c(0x13a), description: "Artist" }],
                    text: _0x24203c(0x17b),
                    emotes: [],
                    msgId: _0x24203c(0x1e1) + randNum() + "3",
                },
                renderedText: _0x24203c(0x185),
            },
        },
    };
}
function testMessageSub() {
    const _0x1c351c = _0x3f2682;
    return {
        detail: {
            listener: _0x1c351c(0x10a),
            event: {
                data: {
                    tags: {
                        badges: "subscriber/1",
                        color: "#ff69b4",
                        vip: "0",
                        subscriber: "1",
                        "user-id": _0x1c351c(0x1d4),
                        "user-type": _0x1c351c(0x1a6),
                        "reply-parent-display-name": _0x1c351c(0x1fb),
                        "reply-parent-msg-body": _0x1c351c(0x20b),
                    },
                    userId: _0x1c351c(0x1d4),
                    displayName: "Subscriber",
                    displayColor: "#ff69b4",
                    nick: _0x1c351c(0x194),
                    badges: [{ type: _0x1c351c(0x1a4), version: "1", url: _0x1c351c(0xd4), description: _0x1c351c(0xbb) }],
                    text: "hey\x20@moderator,\x20I\x20am\x20a\x20sub",
                    emotes: [],
                    msgId: _0x1c351c(0xb6) + randNum() + "2",
                },
                renderedText: _0x1c351c(0x185),
            },
        },
    };
}
function testMessageVip() {
    const _0x1ccdf6 = _0x3f2682;
    return {
        detail: {
            listener: "message",
            event: {
                data: {
                    tags: { badges: _0x1ccdf6(0x1b8), color: _0x1ccdf6(0x157), vip: "1", subscriber: "0", "user-id": "100135117", "user-type": _0x1ccdf6(0x11a) },
                    userId: _0x1ccdf6(0x1b9),
                    displayName: _0x1ccdf6(0xd5),
                    displayColor: "#ff69b4",
                    nick: _0x1ccdf6(0x113),
                    badges: [{ type: _0x1ccdf6(0x11a), version: "1", url: _0x1ccdf6(0x1be) }],
                    text: _0x1ccdf6(0x1d9),
                    emotes: [],
                    msgId: _0x1ccdf6(0xb6) + randNum() + "1",
                },
                renderedText: _0x1ccdf6(0x185),
            },
        },
    };
}
function testMessageMod() {
    const _0x33b2f0 = _0x3f2682;
    return {
        detail: {
            listener: _0x33b2f0(0x10a),
            event: {
                data: {
                    tags: { badges: _0x33b2f0(0x14f), color: _0x33b2f0(0x132), mod: "1", subscriber: "1", "user-id": _0x33b2f0(0x18e), "user-type": _0x33b2f0(0x1b2) },
                    userId: _0x33b2f0(0x18e),
                    displayName: "Moderator",
                    nick: _0x33b2f0(0xf5),
                    displayColor: _0x33b2f0(0x132),
                    badges: [{ type: _0x33b2f0(0x1fb), version: "1", url: _0x33b2f0(0xb1), description: "Moderator" }],
                    text: _0x33b2f0(0x1bf),
                    emotes: [],
                    msgId: "43285909-412c-4eee-b80d-89228ba" + randNum() + "0",
                },
                renderedText: _0x33b2f0(0x185),
            },
        },
    };
}
function _0x4ce4(_0x3fd9e1, _0x78618) {
    const _0x5bafc2 = _0x4949();
    return (
        (_0x4ce4 = function (_0x17bbfc, _0x2b3c44) {
            _0x17bbfc = _0x17bbfc - 0x93;
            let _0x22ac5d = _0x5bafc2[_0x17bbfc];
            return _0x22ac5d;
        }),
        _0x4ce4(_0x3fd9e1, _0x78618)
    );
}
function testMessageFirst() {
    const _0x158f0f = _0x3f2682;
    (counterEmotes++, (counterEmotes = counterEmotes > 0x2 ? 0x0 : counterEmotes));
    let _0x214ecd, _0xe4979f;
    switch (counterEmotes) {
        case 0x2:
            ((_0xe4979f = _0x158f0f(0xca)), (_0x214ecd = _0x158f0f(0x187)));
            break;
        case 0x1:
            ((_0xe4979f =
                "{\x20\x22type\x22:\x20\x22twitch\x22,\x22name\x22:\x20\x22CatBag\x22,\x22id\x22:\x20\x22112291\x22,\x22gif\x22:\x20false,\x22animated\x22:\x20false,\x22urls\x22:\x20{\x221\x22:\x20\x22https://cdn.frankerfacez.com/emote/25927/1\x22,\x222\x22:\x20\x22https://cdn.frankerfacez.com/emote/25927/2\x22,\x224\x22:\x20\x22https://cdn.frankerfacez.com/emote/25927/4\x22},\x22start\x22:\x200,\x22end\x22:\x207}"),
                (_0x214ecd = _0x158f0f(0x20f)));
            break;
        case 0x0:
            ((_0xe4979f = _0x158f0f(0xc3)), (_0x214ecd = _0x158f0f(0x1ae)));
            break;
    }
    let _0x126a5e =
        _0x158f0f(0xa3) +
        _0x214ecd +
        "\x22,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x22emotes\x22:\x20[\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        _0xe4979f +
        _0x158f0f(0x13e) +
        randNum() +
        _0x158f0f(0x164);
    return JSON[_0x158f0f(0x14e)](_0x126a5e);
}
async function get(_0x3f2eed) {
    const _0x11868e = _0x3f2682;
    return await fetch(_0x3f2eed)
        [_0x11868e(0x19c)](async (_0x2860ab) => {
            const _0x163501 = _0x11868e;
            if (!_0x2860ab["ok"]) return null;
            return _0x2860ab[_0x163501(0xdb)]();
        })
        [_0x11868e(0x142)]((_0x45e2b7) => null);
}
async function getUserPronoun(_0x13b0d6) {
    const _0x5bcca3 = _0x3f2682,
        _0x140ae5 = _0x13b0d6[_0x5bcca3(0x1f7)]();
    let _0x2a56b6 = pronounsCache[_0x140ae5];
    if (!_0x2a56b6 || _0x2a56b6["expire"] < Date[_0x5bcca3(0x191)]()) {
        const _0x454e8a = await get(PRONOUNS_API["user"](_0x140ae5)),
            [_0x60958b] = _0x454e8a;
        ((pronounsCache[_0x140ae5] = { ..._0x60958b, expire: Date[_0x5bcca3(0x191)]() + 0x3e8 * 0x3c * 0x5 }), (_0x2a56b6 = pronounsCache[_0x140ae5]));
    }
    if (!_0x2a56b6[_0x5bcca3(0xcb)]) return null;
    return pronounsObj[_0x5bcca3(0x1af)][_0x2a56b6["pronoun_id"]];
}
let testSubEvent = { detail: { listener: _0x3f2682(0x1da), event: { name: "Mila", tier: "3000", amount: "10", message: _0x3f2682(0xd8) } } },
    testSubGiftEvent = {
        detail: {
            listener: _0x3f2682(0x1da),
            event: { name: _0x3f2682(0x208), sender: _0x3f2682(0x208), tier: _0x3f2682(0x161), amount: "20", bulkGifted: !![], message: _0x3f2682(0xd8) },
        },
    },
    testCheerEvent = { detail: { listener: _0x3f2682(0x1d8), event: { name: _0x3f2682(0x116), amount: _0x3f2682(0x19e), message: _0x3f2682(0xc8) } } },
    testFollowEvent = { detail: { listener: "follower-latest", event: { name: _0x3f2682(0x126) } } },
    testTipEvent = { detail: { listener: _0x3f2682(0x1f5), event: { name: "Guess\x20who", tier: _0x3f2682(0x161), amount: 0x1f4, message: _0x3f2682(0xd6) } } },
    testRaidEvent = { detail: { listener: _0x3f2682(0x12d), event: { name: _0x3f2682(0x1fa), amount: 0x1f4 } } };
function randNum() {
    const _0x5c1ef0 = _0x3f2682;
    return Math[_0x5c1ef0(0x1d1)](Math[_0x5c1ef0(0xdc)]() * 0x1869f);
}
let icons = {
    modic: "<svg\x20class=\x22icon028\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2018.9\x2020.77\x22><path\x20d=\x22M18.86\x206.58c0.02\x20-0.09\x200.03\x20-0.43\x200.03\x20-0.76l-0.03\x20-4.66c0\x20-0.33\x20-0.03\x20-0.73\x20-0.07\x20-0.9l-0.11\x20-0.11\x20-0.11\x20-0.11c-0.17\x20-0.03\x20-0.58\x20-0.05\x20-0.9\x20-0.04l-5.8\x200.14c-0.33\x200\x20-0.68\x200.04\x20-0.79\x200.08s-0.43\x200.48\x20-0.59\x200.77L4.58\x2011.87c-0.16\x200.29\x20-0.49\x200.35\x20-0.74\x200.15L2.59\x2011c-0.25\x20-0.21\x20-0.59\x20-0.44\x20-0.75\x20-0.52l-0.16\x200.02\x20-0.16\x200.02c-0.13\x200.12\x20-0.4\x200.43\x20-0.59\x200.69l-0.51\x200.69c-0.19\x200.26\x20-0.38\x200.61\x20-0.42\x200.77s0.35\x200.68\x200.59\x200.89l1.22\x201.1c0.24\x200.22\x200.31\x200.63\x200.14\x200.91L0.47\x2018.13c-0.16\x200.28\x20-0.32\x200.63\x20-0.34\x200.78s0.34\x200.64\x200.57\x200.87l0.43\x200.42c0.23\x200.23\x200.54\x200.49\x200.69\x200.58h0.26c0.12\x20-0.05\x200.43\x20-0.24\x200.71\x20-0.42l2.61\x20-1.71c0.27\x20-0.18\x200.69\x20-0.14\x200.92\x200.08l1.52\x201.45c0.24\x200.22\x200.56\x200.46\x200.72\x200.52s0.72\x20-0.3\x200.95\x20-0.52l0.82\x20-0.79c0.23\x20-0.23\x200.51\x20-0.53\x200.61\x20-0.68v-0.33c-0.11\x20-0.15\x20-0.4\x20-0.44\x20-0.64\x20-0.66l-1.32\x20-1.19a0.523\x200.523\x200\x200\x201\x200\x20-0.79l9.28\x20-8.46c0.24\x20-0.22\x200.58\x20-0.59\x200.6\x20-0.68Z\x22/></svg>",
    streameric: _0x3f2682(0x184),
    subic: "<svg\x20class=\x22icon028\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2022.22\x2019.86\x22\x20><path\x20d=\x22M16.16\x200c-2.12\x200\x20-3.99\x201.16\x20-5.05\x202.98C10.05\x201.16\x208.18\x200\x206.06\x200\x202.73\x200\x200\x202.98\x200\x206.62c0\x206.56\x2011.11\x2013.24\x2011.11\x2013.24s11.11\x20-6.62\x2011.11\x20-13.24c0\x20-3.64\x20-2.73\x20-6.62\x20-6.06\x20-6.62\x22/></svg>",
    vipic: _0x3f2682(0x195),
    artistic: _0x3f2682(0x10d),
    defaultic: _0x3f2682(0x20d),
    cheeric: _0x3f2682(0x1dc),
    tipic: _0x3f2682(0xc9),
    subscriberic: _0x3f2682(0xd2),
    raidic: _0x3f2682(0xe2),
    subgiftic:
        "<svg\x20data-name=\x22Layer\x205\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x20105.21\x20105.21\x22><g\x20style=\x22opacity:.34\x22><path\x20d=\x22M95.35\x2023.02H9.86c-3.63\x200-6.58\x202.95-6.58\x206.58v6.58c0\x203.63\x202.95\x206.58\x206.58\x206.58h23.01c-7.27\x200-13.15\x205.89-13.15\x2013.15v32.88c0\x207.27\x205.89\x2013.15\x2013.15\x2013.15h55.89c3.63\x200\x206.58-2.95\x206.58-6.58V42.75c3.63\x200\x206.58-2.95\x206.58-6.58v-6.58c0-3.63-2.95-6.58-6.58-6.58Z\x22\x20/></g><path\x20d=\x22M95.35\x2019.73H82.8c3.53-6.33\x203.66-12.93-.2-16.86-5.29-5.21-15.49-3.14-23.24\x204.69-3.29\x203.29-5.6\x207.1-6.75\x2010.8-1.15-3.71-3.46-7.52-6.73-10.8-7.77-7.83-17.98-9.91-23.3-4.67-3.84\x203.91-3.7\x2010.49-.16\x2016.83H9.86C4.42\x2019.72\x200\x2024.15\x200\x2029.58v6.58c0\x204.28\x202.76\x207.9\x206.58\x209.26v49.92c0\x205.44\x204.43\x209.86\x209.86\x209.86h72.33c5.44\x200\x209.86-4.43\x209.86-9.86V55.89c0-1.81-1.47-3.29-3.29-3.29s-3.29\x201.47-3.29\x203.29v39.45c0\x201.81-1.47\x203.29-3.29\x203.29H65.75V46.02h29.59c5.44\x200\x209.86-4.43\x209.86-9.86v-6.58c0-5.44-4.43-9.86-9.86-9.86Zm-31.33-7.54c5.27-5.32\x2011.72-6.85\x2013.93-4.68\x201.91\x201.94.9\x207.25-3.21\x2012.21H59.09c.91-2.51\x202.62-5.21\x204.93-7.54ZM27.23\x207.54c2.26-2.21\x208.69-.68\x2013.98\x204.65\x202.31\x202.31\x204.02\x205.02\x204.93\x207.54H30.49c-4.12-4.96-5.13-10.28-3.25-12.18ZM6.58\x2029.59c0-1.81\x201.47-3.29\x203.29-3.29h29.59v13.15H9.86c-1.81\x200-3.29-1.47-3.29-3.29v-6.58Zm6.58\x2065.76V46.03h26.3v52.61H16.45c-1.81\x200-3.29-1.47-3.29-3.29m32.88\x203.29V26.3h13.15v72.33H46.04Zm52.61-62.47c0\x201.81-1.47\x203.29-3.29\x203.29H65.77V26.31h29.59c1.81\x200\x203.29\x201.47\x203.29\x203.29v6.58Z\x22/></svg>",
    singleSubic: _0x3f2682(0xe1),
};
async function getEmotes() {
    const _0x333f96 = _0x3f2682,
        _0x31cf6c = await get(_0x333f96(0x1e2) + providerID + _0x333f96(0x17c) + new Date()[_0x333f96(0x1e0)]());
    let _0x1781c9 = _0x31cf6c[_0x333f96(0x17d)][_0x333f96(0x155)];
    for (let _0x33f7c0 = 0x0; _0x33f7c0 < _0x1781c9[_0x333f96(0xf3)]; _0x33f7c0++) {
        let _0x4efed5 = {
            gif: _0x1781c9[_0x33f7c0][_0x333f96(0x11c)]["animated"],
            name: _0x1781c9[_0x33f7c0][_0x333f96(0xbc)],
            urls: {
                0x1:
                    "https:" +
                    _0x1781c9[_0x33f7c0][_0x333f96(0x11c)]["host"][_0x333f96(0xc5)] +
                    "/" +
                    _0x1781c9[_0x33f7c0][_0x333f96(0x11c)][_0x333f96(0x13d)]["files"][0x1]["name"],
                0x2:
                    _0x333f96(0x1bc) +
                    _0x1781c9[_0x33f7c0][_0x333f96(0x11c)][_0x333f96(0x13d)][_0x333f96(0xc5)] +
                    "/" +
                    _0x1781c9[_0x33f7c0]["data"][_0x333f96(0x13d)][_0x333f96(0x172)][0x2][_0x333f96(0xbc)],
                0x4:
                    _0x333f96(0x1bc) +
                    _0x1781c9[_0x33f7c0][_0x333f96(0x11c)][_0x333f96(0x13d)]["url"] +
                    "/" +
                    _0x1781c9[_0x33f7c0]["data"][_0x333f96(0x13d)][_0x333f96(0x172)][0x3]["name"],
            },
        };
        emotesStorage["unshift"](_0x4efed5);
    }
}
function replaceBadges() {
    const _0x1888c1 = _0x3f2682;
    ($(_0x1888c1(0x19b))[_0x1888c1(0x18a)](_0x1888c1(0xaa)),
        $(_0x1888c1(0xf1))[_0x1888c1(0x18a)](_0x1888c1(0x1db)),
        $(_0x1888c1(0x102))["html"](_0x1888c1(0xad)),
        $(_0x1888c1(0x9d))[_0x1888c1(0x18a)](
            "<svg\x20class=\x22svgbadge\x22\x20width=\x22258.166\x22\x20height=\x22258.166\x22\x20viewBox=\x220\x200\x2068.306\x2068.306\x22\x20xml:space=\x22preserve\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20style=\x22fill:var(--badgescol);stroke-width:3.293;stroke-linecap:round;stroke-linejoin:round;-inkscape-stroke:none;paint-order:stroke\x20fill\x20markers\x22\x20d=\x22M100.243\x20106.668c-.419\x200-.838.158-1.158.476L82.462\x20123.6l-12.86-11.883c-1.078-.997-2.823-.192-2.764\x201.275l1.243\x2031.403a1.646\x201.646\x200\x200\x200\x201.646\x201.581h60.323c.877\x200\x201.6-.687\x201.644-1.564l1.596-32.113c.074-1.505-1.743-2.31-2.809-1.246l-12.502\x2012.502-16.578-16.412a1.642\x201.642\x200\x200\x200-1.158-.476z\x22\x20transform=\x22translate(-65.823\x20-93.145)\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</svg>"
        ),
        $(".artist-badge")[_0x1888c1(0x18a)](
            "<svg\x20class=\x22svgbadge\x22\x20width=\x22260.306\x22\x20height=\x22261.125\x22\x20viewBox=\x220\x200\x20260.306\x20261.125\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20style=\x22fill:var(--badgescol);stroke:none;stroke-width:2.236;stroke-linecap:square;paint-order:markers\x20stroke\x20fill\x22\x20d=\x22M249.344\x2055.868s-49.869\x2046.12-66.367\x2073.49c0\x200-44.62-8.248-65.242\x2035.621\x200\x200-4.124\x209.75-3.374\x2020.998\x200\x200\x204.43\x2012.464-21.816\x2036.086\x200\x200\x2060.06\x204.784\x2085.183-8.34\x2025.122-13.123\x2026.996-44.244\x2026.621-47.619-.374-3.374-.374-16.498-.374-16.498l73.115-65.991s26.997\x2032.246\x2018.748\x2064.491c-8.249\x2032.246-17.998\x2036.746-36.37\x2057.368-18.373\x2020.623-17.248\x2010.499-18.748\x2031.871-1.5\x2021.373-17.998\x2050.994-54.368\x2058.868-36.37\x207.874-82.115-9.374-91.864-16.123-9.749-6.75-56.618-37.87-57.368-96.738S55.868\x2093.363\x2070.491\x2079.115C85.114\x2064.867\x20116.235\x2036.37\x20163.48\x2037.12c47.244.75\x2068.991\x202.25\x2085.864\x2018.748z\x22\x20transform=\x22translate(-37.1\x20-37.106)\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</svg>"
        ),
        $(_0x1888c1(0x1c5))[_0x1888c1(0x18a)](_0x1888c1(0x1f3)));
}
function LimitMsg() {
    const _0x3f553b = _0x3f2682,
        _0x4445d8 = msgLimit ? msgLimitAmount : 0xf;
    msgAlign === _0x3f553b(0xa0)
        ? $(".main-container")
              [_0x3f553b(0x193)]()
              [_0x3f553b(0x173)](0x0, -_0x4445d8)
              [_0x3f553b(0xdd)](0x190, function () {
                  const _0x53a2e1 = _0x3f553b;
                  $(this)[_0x53a2e1(0x131)]();
              })
        : $(_0x3f553b(0x1d2))
              [_0x3f553b(0x193)]()
              ["slice"](_0x4445d8)
              ["fadeOut"](0x190, function () {
                  const _0x4f16fc = _0x3f553b;
                  $(this)[_0x4f16fc(0x131)]();
              });
}
async function getTwitchAuthorization() {
    const _0x413cc6 = _0x3f2682;
    let _0x41e1a0 = _0x413cc6(0xa4) + clinetId + "&client_secret=" + clinetSecret + _0x413cc6(0xfa);
    return fetch(_0x41e1a0, { method: _0x413cc6(0x14a) })
        [_0x413cc6(0x19c)]((_0x2c1acd) => _0x2c1acd[_0x413cc6(0xdb)]())
        [_0x413cc6(0x19c)]((_0x451b4f) => {
            dataD = _0x451b4f;
            return;
        });
}
function getTwitchPastelColor(_0x3c6305, _0xa325e1) {
    const _0x2eb4d9 = _0x3f2682;
    let _0x341282;
    if (_0x3c6305["includes"](_0x2eb4d9(0x1d0))) _0x341282 = rgbaToArray(_0x3c6305);
    else {
        if (_0x3c6305[_0x2eb4d9(0x1c9)]("#")) _0x341282 = hexToRgbArray(_0x3c6305);
        else throw new Error(_0x2eb4d9(0x14b));
    }
    const _0x1cac6c = rgbToHsl(_0x341282[0x0], _0x341282[0x1], _0x341282[0x2]);
    return _0x1cac6c[0x2] > 0x5a ? _0x3c6305 : ((_0x1cac6c[0x2] = _0xa325e1), "hsl(" + _0x1cac6c[0x0] + ",\x20" + _0x1cac6c[0x1] + _0x2eb4d9(0x1ed) + _0x1cac6c[0x2] + "%)");
}
function hexToRgbArray(_0x268ca8) {
    const _0x63240a = _0x3f2682;
    return (
        (_0x268ca8 = _0x268ca8["replace"](/^#/, "")),
        _0x268ca8[_0x63240a(0xf3)] === 0x3 &&
            (_0x268ca8 = _0x268ca8[_0x63240a(0xe7)]("")
                [_0x63240a(0x137)]((_0xce24b5) => _0xce24b5 + _0xce24b5)
                [_0x63240a(0xbf)]("")),
        [parseInt(_0x268ca8[_0x63240a(0x173)](0x0, 0x2), 0x10), parseInt(_0x268ca8[_0x63240a(0x173)](0x2, 0x4), 0x10), parseInt(_0x268ca8[_0x63240a(0x173)](0x4, 0x6), 0x10)]
    );
}
function rgbaToArray(_0x758d80) {
    const _0x1bee46 = _0x3f2682,
        _0x3ef6cd = _0x758d80[_0x1bee46(0xd3)](/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    return _0x3ef6cd ? [parseInt(_0x3ef6cd[0x1]), parseInt(_0x3ef6cd[0x2]), parseInt(_0x3ef6cd[0x3])] : [0x0, 0x0, 0x0];
}
function rgbToHsl(_0x19d2e4, _0x583bf7, _0x3290db) {
    const _0xe14fe3 = _0x3f2682;
    ((_0x19d2e4 /= 0xff), (_0x583bf7 /= 0xff), (_0x3290db /= 0xff));
    const _0x30dbfe = Math["min"](_0x19d2e4, _0x583bf7, _0x3290db),
        _0x459954 = Math["max"](_0x19d2e4, _0x583bf7, _0x3290db),
        _0x48d5ce = _0x459954 - _0x30dbfe;
    let _0x13fd3e = 0x0,
        _0x2ae7e2 = 0x0,
        _0x8d6af = 0x0;
    if (_0x48d5ce === 0x0) _0x13fd3e = 0x0;
    else {
        if (_0x459954 === _0x19d2e4) _0x13fd3e = ((_0x583bf7 - _0x3290db) / _0x48d5ce) % 0x6;
        else _0x459954 === _0x583bf7 ? (_0x13fd3e = (_0x3290db - _0x19d2e4) / _0x48d5ce + 0x2) : (_0x13fd3e = (_0x19d2e4 - _0x583bf7) / _0x48d5ce + 0x4);
    }
    _0x13fd3e = Math[_0xe14fe3(0xa6)](_0x13fd3e * 0x3c);
    if (_0x13fd3e < 0x0) _0x13fd3e += 0x168;
    return (
        (_0x8d6af = (_0x459954 + _0x30dbfe) / 0x2),
        (_0x2ae7e2 = _0x48d5ce === 0x0 ? 0x0 : _0x48d5ce / (0x1 - Math["abs"](0x2 * _0x8d6af - 0x1))),
        (_0x2ae7e2 = +(_0x2ae7e2 * 0x64)[_0xe14fe3(0x1ad)](0x1)),
        (_0x8d6af = +(_0x8d6af * 0x64)["toFixed"](0x1)),
        [_0x13fd3e, _0x2ae7e2, _0x8d6af]
    );
}
async function getPicture(_0x54b0fd, _0x2e54fe, _0x183321) {
    const _0x5bb277 = _0x3f2682,
        _0x21cb99 = "https://api.twitch.tv/helix/users?login=" + _0x54b0fd;
    let _0x4a991c = dataD,
        { access_token: _0xc9376a, expires_in: _0x30210f, token_type: _0x1ac291 } = _0x4a991c;
    _0x1ac291 = _0x1ac291[_0x5bb277(0x11b)](0x0, 0x1)[_0x5bb277(0x145)]() + _0x1ac291[_0x5bb277(0x11b)](0x1, _0x1ac291["length"]);
    let _0x56a175 = _0x1ac291 + "\x20" + _0xc9376a,
        _0x33731b = { authorization: _0x56a175, "Client-Id": clinetId };
    fetch(_0x21cb99, { headers: _0x33731b })
        [_0x5bb277(0x19c)]((_0x1998b5) => _0x1998b5[_0x5bb277(0xdb)]())
        [_0x5bb277(0x19c)]((_0x339125) => uploadPictues(_0x339125, _0x2e54fe, _0x183321));
}
function uploadPictues(_0x5e12c4, _0x158e69, _0x3519d1) {
    const _0x3d98b3 = _0x3f2682;
    let _0x3b9bde = JSON[_0x3d98b3(0x1a2)](_0x5e12c4);
    ((_0x3b9bde = JSON[_0x3d98b3(0x14e)](_0x3b9bde)),
        (image1 = _0x3b9bde[_0x3d98b3(0x11c)][0x0][_0x3d98b3(0x11e)]),
        $("." + _0x3519d1)[_0x3d98b3(0x10b)](_0x3d98b3(0x1de), _0x3d98b3(0x15c) + image1 + "\x22)"));
    if (!userImageLoaded[_0x3519d1]) {
        let _0x1efc8e = document[_0x3d98b3(0x104)]("style");
        ($(_0x1efc8e)[_0x3d98b3(0x18a)](_0x3d98b3(0x1bd) + _0x3519d1 + _0x3d98b3(0x171) + image1 + _0x3d98b3(0xb3)), $(_0x1efc8e)[_0x3d98b3(0x152)]($(_0x3d98b3(0xb5))));
    }
    userImageLoaded[_0x3519d1] = !![];
}
