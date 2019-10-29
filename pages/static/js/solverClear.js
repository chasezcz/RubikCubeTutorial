var cubeplaybackspeed = 3e3,
playingBackTheSolution = 0,
osszlepesszam = 0,
i = 0,
loadingPercent = 1,
aktstep = 0,
elozorot = 0,
megprobalKirakniEnnyiLepesben = 20,
facingFront = 3,
facingUp = 1,
error = "ok",
cubex = -22,
cubey = -38,
cubez = 0,
lastClickedFiled = 0,
scrambler = 0,
document["addEventListener"]("keydown", keyDownTextField, !1);
function keyDownTextField(e) {
    1 == scrambler && 1 == listenToKeyboardRotations && (70 == e["keyCode"] && (updateA(),
    ff(),
    updateCube()),
    82 == e["keyCode"] && (updateA(),
    rr(),
    updateCube()),
    85 == e["keyCode"] && (updateA(),
    uu(),
    updateCube()),
    66 == e["keyCode"] && (updateA(),
    bb(),
    updateCube()),
    76 == e["keyCode"] && (updateA(),
    ll(),
    updateCube()),
    68 == e["keyCode"] && (updateA(),
    dd(),
    updateCube()),
    37 == e["keyCode"] && turnLeft(),
    39 == e["keyCode"] && turnRight())
}
function initVariables() {
    var e = "<table><tbody>";
    for (i = 0; 40 >= i; i++)
        mess[i] = $("#langMessage" + i)["html"](),
        e = e + "<tr><td>" + i + " &nbsp;&nbsp;&nbsp;</td><td>" + mess[i] + "</td></tr>";
    if (e += "</tbody></table>",
    $("#hiddenLanguageBits")["html"](e),
    setLanguagePack(),
    0 != $("#scrambler")["length"])
        a[0] = 0,
        scrambler = 1,
        window["setInterval"](function() {
            refreshSolveLink()
        }, 300);
    else if (urlkocka = getUrlVars()["cube"],
    void 0 == urlkocka) {
        urlkocka = "0111111111222222222333333333444444444555555555666666666";
        var x = mess[15] + "<br />" + "<a href="/" + mess[0] + "">" + mess[11] + "</a>";
        warning(mess[22], x)
    } else {
        for ($(".selectlanguage a")["each"](function() {
            $(this)["attr"]("href", $(this)["attr"]("href") + "solution.php?cube=" + urlkocka)
        }),
        a = urlkocka["split"](""),
        i = 1; 54 >= i; i++)
            orig[i] = a[i];
        center[0] = 0,
        center[1] = a[5],
        center[2] = a[14],
        center[3] = a[23],
        center[4] = a[32],
        center[5] = a[41],
        center[6] = a[50],
        loadingPercentage(),
        updateCube();
        var c = 0;
        for (i = 1; 54 >= i; i++)
            c = a[i],
            c == center[1] && (a[i] = 1),
            c == center[2] && (a[i] = 2),
            c == center[3] && (a[i] = 3),
            c == center[4] && (a[i] = 4),
            c == center[5] && (a[i] = 5),
            c == center[6] && (a[i] = 6);
        worker["postMessage"]({
            type: "generateTables"
        }),
        kociembaFieldsTransform()
    }
}
function loadingPercentage() {
    setTimeout(function() {
        loadingPercent++,
        99 > loadingPercent && loadingPercentage();
        $("#loadingBar")["width"](loadingPercent + "%"),
        $("#loadingBar")["html"](loadingPercent + "%")
    }, Math["floor"](30 * Math["random"]()) + 10 * loadingPercent)
}
function rekurzivSolutionPlayback() {
    aktstep < osszlepesszam ? eddigkiir(aktstep + 1) : ($("#currentRot")["removeClass"](),
    $("#playButton")["removeClass"]("playBack"));
    setTimeout(function() {
        1 == playingBackTheSolution && rekurzivSolutionPlayback()
    }, Math["round"](cubeplaybackspeed))
}
function eddigkiir(e) {
    0 == playingBackTheSolution && $("#playButton")["removeClass"]("playBack"),
    aktstep = e;
    var x = "orient";
    for (1 == step[e] && (x = "U"),
    2 == step[e] && (x = "U'"),
    3 == step[e] && (x = "L"),
    4 == step[e] && (x = "L'"),
    5 == step[e] && (x = "F"),
    6 == step[e] && (x = "F'"),
    7 == step[e] && (x = "R"),
    8 == step[e] && (x = "R'"),
    9 == step[e] && (x = "B"),
    10 == step[e] && (x = "B'"),
    11 == step[e] && (x = "D"),
    12 == step[e] && (x = "D'"),
    13 == step[e] && (x = "U2"),
    14 == step[e] && (x = "L2"),
    15 == step[e] && (x = "F2"),
    16 == step[e] && (x = "R2"),
    17 == step[e] && (x = "B2"),
    18 == step[e] && (x = "D2"),
    document["getElementById"]("rotacioSzoveg")["innerHTML"] = e + ".<span>" + x + "</span>",
    0 == e && (document["getElementById"]("rotacioSzoveg")["innerHTML"] = "&nbsp;"),
    12 < step[e] ? 0 < e && $("#vigyazzKetszer")["show"]() : $("#vigyazzKetszer")["hide"](),
    ($("#algoritmusHanyadik" + elozorot)["removeClass"]("active"),
    $("#algoritmusHanyadik" + e)["addClass"]("active"),
    elozorot = e,
    step[0] = 0,
    i = 1); 54 >= i; i++)
        kics[i] = orig[i];
    for (ij = 0; ij <= e; ij++)
        1 == step[ij] && kicsiuu(),
        2 == step[ij] && kicsiui(),
        3 == step[ij] && kicsill(),
        4 == step[ij] && kicsili(),
        5 == step[ij] && kicsiff(),
        6 == step[ij] && kicsifi(),
        7 == step[ij] && kicsirr(),
        8 == step[ij] && kicsiri(),
        9 == step[ij] && kicsibb(),
        10 == step[ij] && kicsibi(),
        11 == step[ij] && kicsidd(),
        12 == step[ij] && kicsidi(),
        13 == step[ij] && (kicsiuu(),
        kicsiuu()),
        14 == step[ij] && (kicsill(),
        kicsill()),
        15 == step[ij] && (kicsiff(),
        kicsiff()),
        16 == step[ij] && (kicsirr(),
        kicsirr()),
        17 == step[ij] && (kicsibb(),
        kicsibb()),
        18 == step[ij] && (kicsidd(),
        kicsidd());
    for (i = 1; 54 >= i; i++)
        a[i] = kics[i];
    if ($("#currentRot")["removeClass"](),
    $("#currentRot")["addClass"]("thisRotIs" + step[e]),
    1 == playingBackTheSolution)
        setTimeout(function() {
            for (updateCube(),
            i = 1; 54 >= i; i++)
                a[i] = orig[i]
        }, Math["round"](cubeplaybackspeed / 5)),
        setTimeout(function() {
            1 == playingBackTheSolution && ($("#currentRot")["removeClass"](),
            $("#vigyazzKetszer")["hide"]())
        }, Math["round"](4 * cubeplaybackspeed / 5));
    else
        for (updateCube(),
        i = 1; 54 >= i; i++)
            a[i] = orig[i]
}
function kiirarrayt() {
    setTimeout(function() {
        document["getElementById"]("wrapSidebarItems")["offsetHeight"] ? $("#sidebarStuff")["fadeOut"](500) : ($("body")["addClass"]("bw"),
        document["getElementById"]("wrapSidebarItems")["innerHTML"] = "<div class="greenWarning"><h4>" + mess[30] + "</h4><div id="wrapHowTo"><div id="howTo"><div id="frame1"><p id="paragraph1">" + mess[27] + " AdBlock</p><a class="redOctagon" id="handab" href="https://disableadblock.com/" target="_blank" rel="nofollow"><div class="octagonOuter"><div class="octagonInner"></div><div class="stopHand"><div class="pinkyF"></div><div class="ringF"></div><div class="middleF"></div><div class="indexF"></div><div class="thumbF"></div><div class="palmF"></div></div></div></a><div class="abDropdown"><span>AdBlock</span><ul><li class="highlightedLi">Don't run on this domain</li></ul></div><div class="mouseCursor"><div class="mouse1"></div><div class="mouse2"></div><div class="mouse3"></div><div class="mouse4"></div></div><p id="paragraph2"><a href="https://disableadblock.com/" target="_blank" rel="nofollow">Disable AdBlock.com</a></p></div></div></div><p>" + mess[39] + "</p></div>")
    }, 3e3),
    document["getElementById"]("segedvaltozo")["innerHTML"] = "<div class='hanysztep'>" + stp + " " + mess[7] + ":</div> <span id='algoritmusHanyadik0' onclick='playingBackTheSolution = 0;eddigkiir(0);'> &raquo; </span>",
    osszlepesszam = stp;
    var e = "A";
    for (i = 1; i <= stp; i++)
        -1 == (document["domain"] + "")["indexOf"]("e-so") && 16 > step[i] && ++step[i],
        1 == step[i] && (e = "U"),
        2 == step[i] && (e = "U&#39;"),
        3 == step[i] && (e = "L"),
        4 == step[i] && (e = "L&#39;"),
        5 == step[i] && (e = "F"),
        6 == step[i] && (e = "F&#39;"),
        7 == step[i] && (e = "R"),
        8 == step[i] && (e = "R&#39;"),
        9 == step[i] && (e = "B"),
        10 == step[i] && (e = "B&#39;"),
        11 == step[i] && (e = "D"),
        12 == step[i] && (e = "D&#39;"),
        13 == step[i] && (e = "U2"),
        14 == step[i] && (e = "L2"),
        15 == step[i] && (e = "F2"),
        16 == step[i] && (e = "R2"),
        17 == step[i] && (e = "B2"),
        18 == step[i] && (e = "D2"),
        document["getElementById"]("segedvaltozo")["innerHTML"] = document["getElementById"]("segedvaltozo")["innerHTML"] + " <span id='algoritmusHanyadik" + i + "' onclick='playingBackTheSolution = 0;eddigkiir(" + i + ");'>" + e + "</span>";
    kiirStepByStep()
}
function kiirStepByStep() {
    for (var e, x = 1; 54 >= x; x++)
        sbs[x] = orig[x];
    kiirSbs(0, 0, mess[37]);
    for (var c = 1; c <= osszlepesszam; c++)
        1 == step[c] && (e = "U"),
        2 == step[c] && (e = "U&#39;"),
        3 == step[c] && (e = "L"),
        4 == step[c] && (e = "L&#39;"),
        5 == step[c] && (e = "F"),
        6 == step[c] && (e = "F&#39;"),
        7 == step[c] && (e = "R"),
        8 == step[c] && (e = "R&#39;"),
        9 == step[c] && (e = "B"),
        10 == step[c] && (e = "B&#39;"),
        11 == step[c] && (e = "D"),
        12 == step[c] && (e = "D&#39;"),
        13 == step[c] && (e = "U2"),
        14 == step[c] && (e = "L2"),
        15 == step[c] && (e = "F2"),
        16 == step[c] && (e = "R2"),
        17 == step[c] && (e = "B2"),
        18 == step[c] && (e = "D2"),
        kiirSbs(c, step[c], e),
        1 == step[c] && sbsuu(),
        2 == step[c] && sbsui(),
        3 == step[c] && sbsll(),
        4 == step[c] && sbsli(),
        5 == step[c] && sbsff(),
        6 == step[c] && sbsfi(),
        7 == step[c] && sbsrr(),
        8 == step[c] && sbsri(),
        9 == step[c] && sbsbb(),
        10 == step[c] && sbsbi(),
        11 == step[c] && sbsdd(),
        12 == step[c] && sbsdi(),
        13 == step[c] && (sbsuu(),
        sbsuu()),
        14 == step[c] && (sbsll(),
        sbsll()),
        15 == step[c] && (sbsff(),
        sbsff()),
        16 == step[c] && (sbsrr(),
        sbsrr()),
        17 == step[c] && (sbsbb(),
        sbsbb()),
        18 == step[c] && (sbsdd(),
        sbsdd());
    kiirSbs(0, 0, mess[38])
}
function setLanguagePack() {
    $("#clearCube")["html"](mess[19] + "<span></span>"),
    $("#resetCube")["html"](mess[20] + "<span></span>"),
    $("#scrambleCube")["html"](mess[21] + "<span></span>"),
    $("#solveCube")["html"](mess[16] + "<span></span>"),
    $("#scrambleAlg")["attr"]("placeholder", mess[21] + " (F R2 U')"),
    $("#callToLikeShare")["html"](mess[23]),
    $("#floatingTutorialAlert")["html"]("<span>&swarr;</span>" + mess[25]),
    $("a#floatingTutorialAlert, a#tutorialLink")["attr"]("href", mess[24]),
    $("a#floatingTutorialAlert, a#tutorialLink")["attr"]("title", mess[25]),
    $("#mess28")["html"](mess[28]),
    $("#mess29")["html"](mess[29]),
    0 < mess[0]["length"] && ($("a#mess11")["attr"]("href", "/" + mess[0] + "/"),
    $("a#mess11")["html"]("<span></span>" + mess[11]))
}
function kiirSbs(e, x, c) {
    var t, o, r = "<div class="sbsStep"><div class="sbsLabel"><span class="sbsLabelID" + e + "">" + e + ": </span>" + c + "</div><div class="sbsKocka">";
    for (t = 1; 9 >= t; t++)
        r = r + "<div class="topFace field" + t + " color" + sbs[t] + "">" + t + "</div>";
    for (t = 19; 27 >= t; t++)
        r = r + "<div class="frontFace field" + t + " color" + sbs[t] + "">" + t + "</div>";
    for (t = 28; 36 >= t; t++)
        r = r + "<div class="rightFace field" + t + " color" + sbs[t] + "">" + t + "</div>";
    r += "</div>",
    o = "&nbsp;",
    12 < x && (o = "2x");
    r = r + "<div class="sbsRotArr sbsRot" + x + "">" + o + "</div></div>",
    document["getElementById"]("stepByStep")["innerHTML"] = document["getElementById"]("stepByStep")["innerHTML"] + r
}
function kociembaFieldsTransform() {
    var e = ""
      , c = []
      , t = []
      , o = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 37, 38, 39, 40, 41, 42, 43, 44, 45, 19, 20, 21, 22, 23, 24, 25, 26, 27, 10, 11, 12, 13, 14, 15, 16, 17, 18, 46, 47, 48, 49, 50, 51, 52, 53, 54, 28, 29, 30, 31, 32, 33, 34, 35, 36];
    for (kind = 1; 54 >= kind; kind++)
        c[kind] = 0,
        1 == a[kind] && (c[kind] = "U"),
        2 == a[kind] && (c[kind] = "L"),
        3 == a[kind] && (c[kind] = "F"),
        4 == a[kind] && (c[kind] = "R"),
        5 == a[kind] && (c[kind] = "B"),
        6 == a[kind] && (c[kind] = "D");
    for (kind = 1; 54 >= kind; kind++)
        t[o[kind]] = c[kind];
    for (kind = 1; 54 >= kind; kind++)
        e += c[kind];
    for (e = "",
    kind = 1; 54 >= kind; kind++)
        e += t[kind];
    $("#cube")["val"](e)
}
function warning(e, x) {
    document["getElementById"]("hiba")["innerHTML"] = "<h2>" + e + "</h2>",
    document["getElementById"]("hiba")["innerHTML"] += x,
    $("#hibaUzenet")["fadeIn"](300),
    $("#pleasewait")["hide"]()
}
function getUrlVars() {
    var e = {}
      , x = window["location"]["href"]["replace"](/[?&]+([^=&]+)=([^&]*)/gi, function(c, t, o) {
        e[t] = o
    });
    return e
}
$(document)["ready"](function() {
    $("a.scrollLink")["click"](function(e) {
        e["preventDefault"](),
        $("html, body")["animate"]({
            scrollTop: $($(this)["attr"]("href"))["offset"]()["top"] - 20
        }, 500)
    }),
    $("#scrambleAlg")["focusin"](function() {
        listenToKeyboardRotations = 0
    }),
    $("#scrambleAlg")["focusout"](function() {
        listenToKeyboardRotations = 1
    }),
    initVariables(),
    $("#languageToggle")["click"](function() {
        $(".selectlanguage")["fadeToggle"](220)
    }),
    $("#solveCube")["click"](function() {
        error != "ok" && ($("#hiba")["html"](error),
        $("#hibaUzenet")["fadeIn"](300))
    }),
    $("#speedSlider")["change"](function() {
        cubeplaybackspeed = $("#speedSlider")["val"](),
        $("#currentSpeedDisplay")["show"](),
        setTimeout(function() {
            $("#currentSpeedDisplay")["stop"]()["fadeOut"](300)
        }, 1e3),
        1e3 <= cubeplaybackspeed ? $("#currentSpeedDisplay")["html"](Math["round"](10 * (cubeplaybackspeed / 1e3)) / 10 + " s/rot") : $("#currentSpeedDisplay")["html"](Math["round"](10 * (1e3 / cubeplaybackspeed)) / 10 + " rot/s")
    }),
    $("#wrapPaletta a")["click"](function() {
        $("#wrapPaletta")["removeClass"](),
        activeColor = $(this)["attr"]("data-color"),
        $("#wrapPaletta")["addClass"]("color" + activeColor),
        $("#wrapCube > div > div > div")["removeClass"](),
        $("#wrapCube > div > div > div")["addClass"]("color" + activeColor)
    }),
    $("#scrambler #wrapCube > div > div")["on"]("click", function() {
        var e = $(this)["attr"]("data-field");
        if (lastClickedFiled == e && (activeColor = 0,
        $("#wrapPaletta")["removeClass"](),
        $("#wrapPaletta")["addClass"]("color" + activeColor)),
        0 < activeColor)
            $(this)["removeClass"](),
            $(this)["addClass"]("color" + activeColor);
        else {
            $("#wrapCube > div > div > div")["removeClass"]();
            var x = $(this)["attr"]("class")
              , c = x["substr"](x["length"] - 1);
            c = +c + 1,
            6 < c && (c = 1),
            $(this)["removeClass"](),
            $(this)["addClass"]("color" + c)
        }
        lastClickedFiled = e
    }),
    $("#cubeRotations a")["mouseover"](function() {
        var x = "#" + $(this)["attr"]("data-arrow");
        $(x)["addClass"]("visible")
    }),
    $("#cubeRotations a")["mouseleave"](function() {
        var x = "#" + $(this)["attr"]("data-arrow");
        $(x)["removeClass"]("visible")
    }),
    $("#clearCube")["click"](function() {
        $("#wrapCube > div > div")["each"](function() {
            $(this)["removeClass"](),
            $(this)["addClass"]("color0")
        })
    }),
    $("#resetCube")["click"](function() {
        resetCube()
    }),
    $("#transparency")["click"](function() {
        $("#wrapCube")["toggleClass"]("transparent"),
        $("#transparency")["toggleClass"]("active")
    }),
    $("#floatingBacks")["click"](function() {
        $("#scrambler")["removeClass"](),
        $("#scrambler")["addClass"]("cubeOrient13"),
        facingFront = 3,
        facingUp = 1,
        $("#floatingBacks")["toggleClass"]("active"),
        cubex = -22,
        cubey = -38,
        cubez = 0,
        rotCube(cubex, cubey, cubez),
        setTimeout(function() {
            $("#wrapCube")["toggleClass"]("floatingBacks")
        }, 200)
    }),
    $("#tothreeDView")["click"](function() {
        activeView = 1,
        $("#scrambler")["addClass"]("cubeOrient13"),
        facingFront = 3,
        facingUp = 1,
        rotCube(cubex, cubey, cubez),
        $("#switchView a")["removeClass"](),
        $(this)["addClass"]("active"),
        $("#wrapCube")["removeClass"](),
        $("#transparency")["removeClass"](),
        $("#floatingBacks")["removeClass"](),
        setTimeout(function() {
            $("#wrapCube")["addClass"]("threeDView")
        }, 400),
        setTimeout(function() {
            $("#wrapCubeSettings")["fadeIn"](300)
        }, 1e3)
    }),
    $("#toflatView")["click"](function() {
        activeView = 2,
        cubex = -22,
        cubey = -38,
        cubez = 0,
        rotCube(0, 0, 0),
        $("#switchView a")["removeClass"](),
        $(this)["addClass"]("active"),
        $("#wrapCube")["removeClass"](),
        $("#transparency")["removeClass"](),
        $("#floatingBacks")["removeClass"](),
        setTimeout(function() {
            $("#wrapCube")["addClass"]("flatView")
        }, 400),
        $("#scrambler")["removeClass"](),
        $("#wrapCubeSettings")["hide"](0)
    }),
    $("#tokociembaView")["click"](function() {
        cubex = -22,
        cubey = -38,
        cubez = 0,
        rotCube(0, 0, 0),
        $("#wrapCube")["css"]({
            transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0) translateY(0) translateZ(0)"
        }),
        $("#switchView a")["removeClass"](),
        $(this)["addClass"]("active"),
        $("#wrapCube")["removeClass"](),
        $("#transparency")["removeClass"](),
        $("#floatingBacks")["removeClass"](),
        1 == activeView ? setTimeout(function() {
            $("#wrapCube")["addClass"]("kociembaView")
        }, 400) : $("#wrapCube")["addClass"]("kociembaView");
        activeView = 3,
        $("#scrambler")["removeClass"](),
        $("#wrapCubeSettings")["fadeOut"](300)
    }),
    $("#turnLeft")["click"](function() {
        turnLeft()
    }),
    $("#turnRight")["click"](function() {
        turnRight()
    }),
    $("#turnUp")["click"](function() {
        flipCube()
    }),
    $("#rotateF")["click"](function() {
        updateA(),
        ff(),
        updateCube()
    }),
    $("#rotateR")["click"](function() {
        updateA(),
        rr(),
        updateCube()
    }),
    $("#rotateU")["click"](function() {
        updateA(),
        uu(),
        updateCube()
    }),
    $("#rotateB")["click"](function() {
        updateA(),
        bb(),
        updateCube()
    }),
    $("#rotateL")["click"](function() {
        updateA(),
        ll(),
        updateCube()
    }),
    $("#rotateD")["click"](function() {
        updateA(),
        dd(),
        updateCube()
    }),
    $("#rotateFi")["click"](function() {
        updateA(),
        fi(),
        updateCube()
    }),
    $("#rotateRi")["click"](function() {
        updateA(),
        ri(),
        updateCube()
    }),
    $("#rotateUi")["click"](function() {
        updateA(),
        ui(),
        updateCube()
    }),
    $("#rotateBi")["click"](function() {
        updateA(),
        bi(),
        updateCube()
    }),
    $("#rotateLi")["click"](function() {
        updateA(),
        li(),
        updateCube()
    }),
    $("#rotateDi")["click"](function() {
        updateA(),
        di(),
        updateCube()
    }),
    $("#scrambleCube")["click"](function() {
        resetCube(),
        updateA(),
        jumbleCube(),
        setTimeout(function() {
            jumbleCube(),
            updateCube()
        }, 300),
        setTimeout(function() {
            jumbleCube(),
            updateCube()
        }, 600),
        setTimeout(function() {
            jumbleCube(),
            updateCube()
        }, 900),
        updateCube()
    }),
    $("#closeHibauzenet")["click"](function() {
        $("#hibaUzenet")["fadeOut"](200)
    }),
    $("#prevButton")["click"](function() {
        playingBackTheSolution = 0,
        $("#playButton")["removeClass"]("playBack"),
        0 < aktstep && eddigkiir(aktstep - 1)
    }),
    $("#pauseButton")["click"](function() {
        playingBackTheSolution = 0,
        $("#playButton")["removeClass"]("playBack")
    }),
    $("#playButton")["click"](function() {
        playingBackTheSolution = 1,
        $("#playButton")["addClass"]("playBack"),
        rekurzivSolutionPlayback()
    }),
    $("#stopButton")["click"](function() {
        playingBackTheSolution = 0,
        $("#playButton")["removeClass"]("playBack"),
        aktstep = 0,
        eddigkiir(0)
    }),
    $("#nextButton")["click"](function() {
        playingBackTheSolution = 0,
        $("#playButton")["removeClass"]("playBack"),
        aktstep < osszlepesszam && eddigkiir(aktstep + 1)
    }),
    $("#submitScrambleAlg")["click"](function() {
        doInputScramble(800)
    }),
    $("#executeScrambleAlg")["click"](function() {
        doInputScramble(0)
    }),
    $("#scrambleAlg")["keyup"](function(e) {
        13 === e["which"] && doInputScramble(800)
    })
});
function refreshSolveLink() {
    updateA(),
    error = "ok";
    var e = 1;
    for (d = 1; 9 >= d; d++)
        (1 != a[d] || 2 != a[d + 9] || 3 != a[d + 18] || 4 != a[d + 27] || 5 != a[d + 36] || 6 != a[d + 45]) && (e = 0);
    1 == e && (error = mess[15]);
    var x = 0
      , c = 0
      , t = 0
      , o = 0
      , r = 0
      , l = 0;
    for (d = 1; 54 >= d; d++)
        1 == a[d] && x++,
        2 == a[d] && c++,
        3 == a[d] && t++,
        4 == a[d] && o++,
        5 == a[d] && r++,
        6 == a[d] && l++;
    (9 != x || 9 != c || 9 != t || 9 != o || 9 != r || 9 != l) && (error = mess[1] + ":<br /> ",
    9 != x && (error += mess[31] + "(" + x + ") &nbsp; "),
    9 != c && (error += mess[32] + "(" + c + ") &nbsp; "),
    9 != t && (error += mess[33] + "(" + t + ") &nbsp; "),
    9 != o && (error += mess[34] + "(" + o + ") &nbsp; "),
    9 != r && (error += mess[35] + "(" + r + ") &nbsp; "),
    9 != l && (error += mess[36] + "(" + l + ") &nbsp; "));
    for (x = 0,
    c = 0,
    t = 0,
    o = 0,
    r = 0,
    l = 0,
    d = 1; 9 >= d; d++)
        1 == a[9 * d - 4] && x++,
        2 == a[9 * d - 4] && c++,
        3 == a[9 * d - 4] && t++,
        4 == a[9 * d - 4] && o++,
        5 == a[9 * d - 4] && r++,
        6 == a[9 * d - 4] && l++;
    1 != x * c * t * o * r * l && (error = mess[18] + ".<br />",
    1 < x && (error += mess[31] + " - " + x + "<br /> "),
    2 < c && (error += mess[32] + " - " + c + "<br /> "),
    3 < t && (error += mess[33] + " - " + t + "<br /> "),
    4 < o && (error += mess[34] + " - " + o + "<br /> "),
    5 < r && (error += mess[35] + " - " + r + "<br /> "),
    6 < l && (error += mess[36] + " - " + l + "<br /> "));
    var e = 0;
    for (d = 1; 54 >= d; d++)
        0 == a[d] && e++;
    1 <= e && (error = mess[26] + " (" + e + ").");
    var _ = window["location"]["href"]["replace"]("#", "") + "solution.php?cube=0";
    if (error == "ok") {
        for (var d = 1; 55 > d; d++)
            _ += a[d];
        $("#solveCube")["attr"]("target", "_blank")
    } else
        _ = "#",
        $("#solveCube")["attr"]("target", "_self");
    $("#solveCube")["attr"]("href", _)
}
function jumbleCube() {
    for (i = 0; 200 > i; i++) {
        var e = Math["floor"](12 * Math["random"]());
        0 == e && (bor(),
        uu());
        1 == e && (fd(),
        ui());
        2 == e && ff();
        3 == e && fi();
        4 == e && dd();
        5 == e && di();
        6 == e && (bor(),
        bb());
        7 == e && (fd(),
        bi());
        8 == e && rr();
        9 == e && ri();
        10 == e && ll();
        11 == e && li()
    }
}
function turnRight() {
    rotal("cubey", 90),
    6 == facingUp ? (facingFront++,
    5 < facingFront && (facingFront = 2)) : (facingFront--,
    2 > facingFront && (facingFront = 5));
    $("#scrambler")["removeClass"](),
    $("#scrambler")["addClass"]("cubeOrient" + facingUp + facingFront)
}
function turnLeft() {
    rotal("cubey", -90),
    1 == facingUp ? (facingFront++,
    5 < facingFront && (facingFront = 2)) : (facingFront--,
    2 > facingFront && (facingFront = 5));
    $("#scrambler")["removeClass"](),
    $("#scrambler")["addClass"]("cubeOrient" + facingUp + facingFront)
}
function flipCube() {
    1 == facingUp ? rotal("cubez", -180) : rotal("cubez", 180);
    2 == facingFront ? facingFront = 4 : 3 == facingFront ? facingFront = 3 : 4 == facingFront ? facingFront = 2 : 5 == facingFront && (facingFront = 5);
    facingUp = 1 == facingUp ? 6 : 1;
    $("#scrambler")["removeClass"](),
    $("#scrambler")["addClass"]("cubeOrient" + facingUp + facingFront)
}
function resetCube() {
    $("#wrapCube > div#face1 > div")["each"](function() {
        $(this)["removeClass"](),
        $(this)["addClass"]("color1")
    }),
    $("#wrapCube > div#face2 > div")["each"](function() {
        $(this)["removeClass"](),
        $(this)["addClass"]("color2")
    }),
    $("#wrapCube > div#face3 > div")["each"](function() {
        $(this)["removeClass"](),
        $(this)["addClass"]("color3")
    }),
    $("#wrapCube > div#face4 > div")["each"](function() {
        $(this)["removeClass"](),
        $(this)["addClass"]("color4")
    }),
    $("#wrapCube > div#face5 > div")["each"](function() {
        $(this)["removeClass"](),
        $(this)["addClass"]("color5")
    }),
    $("#wrapCube > div#face6 > div")["each"](function() {
        $(this)["removeClass"](),
        $(this)["addClass"]("color6")
    })
}
function rotCube(e, x, c) {
    segs = "rotateX(" + e + "deg) rotateY(" + x + "deg) rotateZ(" + c + "deg) translateX(0) translateY(0) translateZ(0)",
    $("#wrapCube")["css"]({
        transform: segs
    })
}
function rotal(e, x) {
    window[e] += x,
    rotCube(cubex, cubey, cubez)
}
var turn = []
  , type = []
  , inputerror = 0;
function doInputScramble(e) {
    inputerror = 0;
    var x = $("#scrambleAlg")["val"]()
      , c = "";
    turn = x["split"](" "),
    $("#inputScrambleError")["html"]("");
    for (var t = 0; t < turn["length"]; t++)
        if (type[t] = 0,
        -1 != turn[t]["indexOf"]("’") && (type[t] = 1),
        -1 != turn[t]["indexOf"]("'") && (type[t] = 1),
        turn[t] == turn[t]["toLowerCase"]() && (type[t] = 1),
        -1 != turn[t]["indexOf"]("2") && (type[t] = 2),
        (turn[t] = turn[t]["toUpperCase"](),
        -1 != turn[t]["indexOf"]("U")))
            turn[t] = 1;
        else if (-1 != turn[t]["indexOf"]("L"))
            turn[t] = 3;
        else if (-1 != turn[t]["indexOf"]("F"))
            turn[t] = 5;
        else if (-1 != turn[t]["indexOf"]("R"))
            turn[t] = 7;
        else if (-1 != turn[t]["indexOf"]("B"))
            turn[t] = 9;
        else if (-1 != turn[t]["indexOf"]("D"))
            turn[t] = 11;
        else if (-1 != turn[t]["indexOf"]("M"))
            turn[t] = 13;
        else if (-1 != turn[t]["indexOf"]("E"))
            turn[t] = 15;
        else if (-1 != turn[t]["indexOf"]("S"))
            turn[t] = 17;
        else if (-1 != turn[t]["indexOf"]("X"))
            turn[t] = 19;
        else if (-1 != turn[t]["indexOf"]("Y"))
            turn[t] = 21;
        else if (-1 != turn[t]["indexOf"]("Z"))
            turn[t] = 23;
        else {
            inputerror = 1,
            $("#inputScrambleError")["html"]("Error in position " + (t + 1) + ": " + turn[t]);
            break
        }
    if (0 == inputerror) {
        for (t = 0; t < turn["length"]; t++)
            c += "<span id="compiledAlg" + t + "">",
            1 == turn[t] && (c += "U"),
            3 == turn[t] && (c += "L"),
            5 == turn[t] && (c += "F"),
            7 == turn[t] && (c += "R"),
            9 == turn[t] && (c += "B"),
            11 == turn[t] && (c += "D"),
            13 == turn[t] && (c += "M"),
            15 == turn[t] && (c += "E"),
            17 == turn[t] && (c += "S"),
            19 == turn[t] && (c += "X"),
            21 == turn[t] && (c += "Y"),
            23 == turn[t] && (c += "Z"),
            1 == type[t] && (c += "'"),
            2 == type[t] && (c += "2"),
            c += "</span>";
        $("#compiledScramble")["html"](c),
        $("#scrambleAlg, #submitScrambleAlg, #executeScrambleAlg")["hide"](),
        executeInputScramble(0, e)
    }
    1 > x["length"] && $("#inputScrambleError")["html"]("Add a scramble algorithm")
}
function executeInputScramble(e, x) {
    updateA(),
    $("#compiledScramble span")["removeClass"]("active"),
    $("#compiledAlg" + e)["addClass"]("active");
    var c = 0;
    turn["length"] > e ? (c = turn[e],
    1 == type[e] && c++,
    1 == c && uu(),
    2 == c && ui(),
    3 == c && ll(),
    4 == c && li(),
    5 == c && ff(),
    6 == c && fi(),
    7 == c && rr(),
    8 == c && ri(),
    9 == c && bb(),
    10 == c && bi(),
    11 == c && dd(),
    12 == c && di(),
    13 == c && (li(),
    rr(),
    bor()),
    14 == c && (ll(),
    ri(),
    bor(),
    bor(),
    bor()),
    15 == c && (uu(),
    di(),
    fd(),
    fd(),
    fd()),
    16 == c && (ui(),
    dd(),
    fd()),
    17 == c && (fi(),
    bb(),
    fd(),
    bor(),
    fd(),
    fd(),
    fd()),
    18 == c && (ff(),
    bi(),
    bor(),
    fd(),
    fd(),
    fd(),
    bor(),
    fd(),
    fd()),
    19 == c && (bor(),
    bor(),
    bor()),
    20 == c && bor(),
    21 == c && fd(),
    22 == c && (fd(),
    fd(),
    fd()),
    23 == c && (fd(),
    bor(),
    fd(),
    fd(),
    fd()),
    24 == c && (fd(),
    fd(),
    fd(),
    bor(),
    fd()),
    setTimeout(function() {
        updateCube()
    }, x / 2),
    2 == type[e] ? type[e] = 0 : e++,
    setTimeout(function() {
        executeInputScramble(e, x)
    }, x)) : ($("#compiledScramble")["html"](""),
    $("#scrambleAlg, #submitScrambleAlg, #executeScrambleAlg")["show"]());
    updateCube()
}
function updateA() {
    for (i = 1; 55 > i; i++)
        a[i] = $("#sticker" + i)["attr"]("class")["charAt"](5)
}
function updateCube() {
    for (i = 1; 55 > i; i++)
        $("#sticker" + i)["removeClass"](),
        $("#sticker" + i)["addClass"]("color" + a[i])
}
function bor() {
    s[1] = a[1],
    s[2] = a[4],
    s[3] = a[7],
    a[1] = a[45],
    a[4] = a[42],
    a[7] = a[39],
    a[45] = a[46],
    a[42] = a[49],
    a[39] = a[52],
    a[46] = a[19],
    a[49] = a[22],
    a[52] = a[25],
    a[19] = s[1],
    a[22] = s[2],
    a[25] = s[3],
    s[1] = a[2],
    s[2] = a[5],
    s[3] = a[8],
    a[2] = a[44],
    a[5] = a[41],
    a[8] = a[38],
    a[44] = a[47],
    a[41] = a[50],
    a[38] = a[53],
    a[47] = a[20],
    a[50] = a[23],
    a[53] = a[26],
    a[20] = s[1],
    a[23] = s[2],
    a[26] = s[3],
    s[1] = a[3],
    s[2] = a[6],
    s[3] = a[9],
    a[3] = a[43],
    a[6] = a[40],
    a[9] = a[37],
    a[43] = a[48],
    a[40] = a[51],
    a[37] = a[54],
    a[48] = a[21],
    a[51] = a[24],
    a[54] = a[27],
    a[21] = s[1],
    a[24] = s[2],
    a[27] = s[3],
    s[1] = a[10],
    s[2] = a[11],
    a[10] = a[16],
    a[11] = a[13],
    a[16] = a[18],
    a[13] = a[17],
    a[18] = a[12],
    a[17] = a[15],
    a[12] = s[1],
    a[15] = s[2],
    s[1] = a[28],
    s[2] = a[29],
    a[28] = a[30],
    a[29] = a[33],
    a[30] = a[36],
    a[33] = a[35],
    a[36] = a[34],
    a[35] = a[31],
    a[34] = s[1],
    a[31] = s[2]
}
function rot() {
    s[1] = a[25],
    s[2] = a[26],
    s[3] = a[27],
    a[25] = a[16],
    a[26] = a[17],
    a[27] = a[18],
    a[16] = a[43],
    a[17] = a[44],
    a[18] = a[45],
    a[43] = a[34],
    a[44] = a[35],
    a[45] = a[36],
    a[34] = s[1],
    a[35] = s[2],
    a[36] = s[3],
    s[1] = a[46],
    s[2] = a[47],
    a[46] = a[52],
    a[47] = a[49],
    a[52] = a[54],
    a[49] = a[53],
    a[54] = a[48],
    a[53] = a[51],
    a[48] = s[1],
    a[51] = s[2]
}
function roti() {
    s[1] = a[25],
    s[2] = a[26],
    s[3] = a[27],
    a[25] = a[34],
    a[26] = a[35],
    a[27] = a[36],
    a[34] = a[43],
    a[35] = a[44],
    a[36] = a[45],
    a[43] = a[16],
    a[44] = a[17],
    a[45] = a[18],
    a[16] = s[1],
    a[17] = s[2],
    a[18] = s[3],
    s[1] = a[46],
    s[2] = a[47],
    a[46] = a[48],
    a[47] = a[51],
    a[48] = a[54],
    a[51] = a[53],
    a[54] = a[52],
    a[53] = a[49],
    a[52] = s[1],
    a[49] = s[2]
}
function fd() {
    s[1] = a[19],
    s[2] = a[20],
    s[3] = a[21],
    a[19] = a[28],
    a[20] = a[29],
    a[21] = a[30],
    a[28] = a[37],
    a[29] = a[38],
    a[30] = a[39],
    a[37] = a[10],
    a[38] = a[11],
    a[39] = a[12],
    a[10] = s[1],
    a[11] = s[2],
    a[12] = s[3],
    s[1] = a[22],
    s[2] = a[23],
    s[3] = a[24],
    a[22] = a[31],
    a[23] = a[32],
    a[24] = a[33],
    a[31] = a[40],
    a[32] = a[41],
    a[33] = a[42],
    a[40] = a[13],
    a[41] = a[14],
    a[42] = a[15],
    a[13] = s[1],
    a[14] = s[2],
    a[15] = s[3],
    s[1] = a[25],
    s[2] = a[26],
    s[3] = a[27],
    a[25] = a[34],
    a[26] = a[35],
    a[27] = a[36],
    a[34] = a[43],
    a[35] = a[44],
    a[36] = a[45],
    a[43] = a[16],
    a[44] = a[17],
    a[45] = a[18],
    a[16] = s[1],
    a[17] = s[2],
    a[18] = s[3],
    s[1] = a[1],
    s[2] = a[2],
    a[1] = a[7],
    a[2] = a[4],
    a[7] = a[9],
    a[4] = a[8],
    a[9] = a[3],
    a[8] = a[6],
    a[3] = s[1],
    a[6] = s[2],
    s[1] = a[46],
    s[2] = a[47],
    a[46] = a[48],
    a[47] = a[51],
    a[48] = a[54],
    a[51] = a[53],
    a[54] = a[52],
    a[53] = a[49],
    a[52] = s[1],
    a[49] = s[2]
}
function uu() {
    bor(),
    bor(),
    rot(),
    bor(),
    bor()
}
function ui() {
    bor(),
    bor(),
    roti(),
    bor(),
    bor()
}
function ff() {
    bor(),
    rot(),
    bor(),
    bor(),
    bor()
}
function fi() {
    bor(),
    roti(),
    bor(),
    bor(),
    bor()
}
function rr() {
    fd(),
    bor(),
    rot(),
    bor(),
    bor(),
    bor(),
    fd(),
    fd(),
    fd()
}
function ri() {
    fd(),
    bor(),
    roti(),
    bor(),
    bor(),
    bor(),
    fd(),
    fd(),
    fd()
}
function ll() {
    fd(),
    fd(),
    fd(),
    bor(),
    rot(),
    bor(),
    bor(),
    bor(),
    fd()
}
function li() {
    fd(),
    fd(),
    fd(),
    bor(),
    roti(),
    bor(),
    bor(),
    bor(),
    fd()
}
function dd() {
    rot()
}
function di() {
    roti()
}
function bb() {
    bor(),
    bor(),
    bor(),
    rot(),
    bor()
}
function bi() {
    bor(),
    bor(),
    bor(),
    roti(),
    bor()
}
function kicsibor() {
    s[1] = kics[1],
    s[2] = kics[4],
    s[3] = kics[7],
    kics[1] = kics[45],
    kics[4] = kics[42],
    kics[7] = kics[39],
    kics[45] = kics[46],
    kics[42] = kics[49],
    kics[39] = kics[52],
    kics[46] = kics[19],
    kics[49] = kics[22],
    kics[52] = kics[25],
    kics[19] = s[1],
    kics[22] = s[2],
    kics[25] = s[3],
    s[1] = kics[2],
    s[2] = kics[5],
    s[3] = kics[8],
    kics[2] = kics[44],
    kics[5] = kics[41],
    kics[8] = kics[38],
    kics[44] = kics[47],
    kics[41] = kics[50],
    kics[38] = kics[53],
    kics[47] = kics[20],
    kics[50] = kics[23],
    kics[53] = kics[26],
    kics[20] = s[1],
    kics[23] = s[2],
    kics[26] = s[3],
    s[1] = kics[3],
    s[2] = kics[6],
    s[3] = kics[9],
    kics[3] = kics[43],
    kics[6] = kics[40],
    kics[9] = kics[37],
    kics[43] = kics[48],
    kics[40] = kics[51],
    kics[37] = kics[54],
    kics[48] = kics[21],
    kics[51] = kics[24],
    kics[54] = kics[27],
    kics[21] = s[1],
    kics[24] = s[2],
    kics[27] = s[3],
    s[1] = kics[10],
    s[2] = kics[11],
    kics[10] = kics[16],
    kics[11] = kics[13],
    kics[16] = kics[18],
    kics[13] = kics[17],
    kics[18] = kics[12],
    kics[17] = kics[15],
    kics[12] = s[1],
    kics[15] = s[2],
    s[1] = kics[28],
    s[2] = kics[29],
    kics[28] = kics[30],
    kics[29] = kics[33],
    kics[30] = kics[36],
    kics[33] = kics[35],
    kics[36] = kics[34],
    kics[35] = kics[31],
    kics[34] = s[1],
    kics[31] = s[2]
}
function kicsirot() {
    s[1] = kics[25],
    s[2] = kics[26],
    s[3] = kics[27],
    kics[25] = kics[16],
    kics[26] = kics[17],
    kics[27] = kics[18],
    kics[16] = kics[43],
    kics[17] = kics[44],
    kics[18] = kics[45],
    kics[43] = kics[34],
    kics[44] = kics[35],
    kics[45] = kics[36],
    kics[34] = s[1],
    kics[35] = s[2],
    kics[36] = s[3],
    s[1] = kics[46],
    s[2] = kics[47],
    kics[46] = kics[52],
    kics[47] = kics[49],
    kics[52] = kics[54],
    kics[49] = kics[53],
    kics[54] = kics[48],
    kics[53] = kics[51],
    kics[48] = s[1],
    kics[51] = s[2]
}
function kicsiroti() {
    s[1] = kics[25],
    s[2] = kics[26],
    s[3] = kics[27],
    kics[25] = kics[34],
    kics[26] = kics[35],
    kics[27] = kics[36],
    kics[34] = kics[43],
    kics[35] = kics[44],
    kics[36] = kics[45],
    kics[43] = kics[16],
    kics[44] = kics[17],
    kics[45] = kics[18],
    kics[16] = s[1],
    kics[17] = s[2],
    kics[18] = s[3],
    s[1] = kics[46],
    s[2] = kics[47],
    kics[46] = kics[48],
    kics[47] = kics[51],
    kics[48] = kics[54],
    kics[51] = kics[53],
    kics[54] = kics[52],
    kics[53] = kics[49],
    kics[52] = s[1],
    kics[49] = s[2]
}
function kicsifd() {
    s[1] = kics[19],
    s[2] = kics[20],
    s[3] = kics[21],
    kics[19] = kics[28],
    kics[20] = kics[29],
    kics[21] = kics[30],
    kics[28] = kics[37],
    kics[29] = kics[38],
    kics[30] = kics[39],
    kics[37] = kics[10],
    kics[38] = kics[11],
    kics[39] = kics[12],
    kics[10] = s[1],
    kics[11] = s[2],
    kics[12] = s[3],
    s[1] = kics[22],
    s[2] = kics[23],
    s[3] = kics[24],
    kics[22] = kics[31],
    kics[23] = kics[32],
    kics[24] = kics[33],
    kics[31] = kics[40],
    kics[32] = kics[41],
    kics[33] = kics[42],
    kics[40] = kics[13],
    kics[41] = kics[14],
    kics[42] = kics[15],
    kics[13] = s[1],
    kics[14] = s[2],
    kics[15] = s[3],
    s[1] = kics[25],
    s[2] = kics[26],
    s[3] = kics[27],
    kics[25] = kics[34],
    kics[26] = kics[35],
    kics[27] = kics[36],
    kics[34] = kics[43],
    kics[35] = kics[44],
    kics[36] = kics[45],
    kics[43] = kics[16],
    kics[44] = kics[17],
    kics[45] = kics[18],
    kics[16] = s[1],
    kics[17] = s[2],
    kics[18] = s[3],
    s[1] = kics[1],
    s[2] = kics[2],
    kics[1] = kics[7],
    kics[2] = kics[4],
    kics[7] = kics[9],
    kics[4] = kics[8],
    kics[9] = kics[3],
    kics[8] = kics[6],
    kics[3] = s[1],
    kics[6] = s[2],
    s[1] = kics[46],
    s[2] = kics[47],
    kics[46] = kics[48],
    kics[47] = kics[51],
    kics[48] = kics[54],
    kics[51] = kics[53],
    kics[54] = kics[52],
    kics[53] = kics[49],
    kics[52] = s[1],
    kics[49] = s[2]
}
function kicsiuu() {
    kicsibor(),
    kicsibor(),
    kicsirot(),
    kicsibor(),
    kicsibor()
}
function kicsiui() {
    kicsibor(),
    kicsibor(),
    kicsiroti(),
    kicsibor(),
    kicsibor()
}
function kicsiff() {
    kicsibor(),
    kicsirot(),
    kicsibor(),
    kicsibor(),
    kicsibor()
}
function kicsifi() {
    kicsibor(),
    kicsiroti(),
    kicsibor(),
    kicsibor(),
    kicsibor()
}
function kicsirr() {
    kicsifd(),
    kicsibor(),
    kicsirot(),
    kicsibor(),
    kicsibor(),
    kicsibor(),
    kicsifd(),
    kicsifd(),
    kicsifd()
}
function kicsiri() {
    kicsifd(),
    kicsibor(),
    kicsiroti(),
    kicsibor(),
    kicsibor(),
    kicsibor(),
    kicsifd(),
    kicsifd(),
    kicsifd()
}
function kicsill() {
    kicsifd(),
    kicsifd(),
    kicsifd(),
    kicsibor(),
    kicsirot(),
    kicsibor(),
    kicsibor(),
    kicsibor(),
    kicsifd()
}
function kicsili() {
    kicsifd(),
    kicsifd(),
    kicsifd(),
    kicsibor(),
    kicsiroti(),
    kicsibor(),
    kicsibor(),
    kicsibor(),
    kicsifd()
}
function kicsidd() {
    kicsirot()
}
function kicsidi() {
    kicsiroti()
}
function kicsibb() {
    kicsibor(),
    kicsibor(),
    kicsibor(),
    kicsirot(),
    kicsibor(),
    stp++,
    step[stp] = 9
}
function kicsibi() {
    kicsibor(),
    kicsibor(),
    kicsibor(),
    kicsiroti(),
    kicsibor(),
    stp++,
    step[stp] = 10
}
function sbsbor() {
    s[1] = sbs[1],
    s[2] = sbs[4],
    s[3] = sbs[7],
    sbs[1] = sbs[45],
    sbs[4] = sbs[42],
    sbs[7] = sbs[39],
    sbs[45] = sbs[46],
    sbs[42] = sbs[49],
    sbs[39] = sbs[52],
    sbs[46] = sbs[19],
    sbs[49] = sbs[22],
    sbs[52] = sbs[25],
    sbs[19] = s[1],
    sbs[22] = s[2],
    sbs[25] = s[3],
    s[1] = sbs[2],
    s[2] = sbs[5],
    s[3] = sbs[8],
    sbs[2] = sbs[44],
    sbs[5] = sbs[41],
    sbs[8] = sbs[38],
    sbs[44] = sbs[47],
    sbs[41] = sbs[50],
    sbs[38] = sbs[53],
    sbs[47] = sbs[20],
    sbs[50] = sbs[23],
    sbs[53] = sbs[26],
    sbs[20] = s[1],
    sbs[23] = s[2],
    sbs[26] = s[3],
    s[1] = sbs[3],
    s[2] = sbs[6],
    s[3] = sbs[9],
    sbs[3] = sbs[43],
    sbs[6] = sbs[40],
    sbs[9] = sbs[37],
    sbs[43] = sbs[48],
    sbs[40] = sbs[51],
    sbs[37] = sbs[54],
    sbs[48] = sbs[21],
    sbs[51] = sbs[24],
    sbs[54] = sbs[27],
    sbs[21] = s[1],
    sbs[24] = s[2],
    sbs[27] = s[3],
    s[1] = sbs[10],
    s[2] = sbs[11],
    sbs[10] = sbs[16],
    sbs[11] = sbs[13],
    sbs[16] = sbs[18],
    sbs[13] = sbs[17],
    sbs[18] = sbs[12],
    sbs[17] = sbs[15],
    sbs[12] = s[1],
    sbs[15] = s[2],
    s[1] = sbs[28],
    s[2] = sbs[29],
    sbs[28] = sbs[30],
    sbs[29] = sbs[33],
    sbs[30] = sbs[36],
    sbs[33] = sbs[35],
    sbs[36] = sbs[34],
    sbs[35] = sbs[31],
    sbs[34] = s[1],
    sbs[31] = s[2]
}
function sbsrot() {
    s[1] = sbs[25],
    s[2] = sbs[26],
    s[3] = sbs[27],
    sbs[25] = sbs[16],
    sbs[26] = sbs[17],
    sbs[27] = sbs[18],
    sbs[16] = sbs[43],
    sbs[17] = sbs[44],
    sbs[18] = sbs[45],
    sbs[43] = sbs[34],
    sbs[44] = sbs[35],
    sbs[45] = sbs[36],
    sbs[34] = s[1],
    sbs[35] = s[2],
    sbs[36] = s[3],
    s[1] = sbs[46],
    s[2] = sbs[47],
    sbs[46] = sbs[52],
    sbs[47] = sbs[49],
    sbs[52] = sbs[54],
    sbs[49] = sbs[53],
    sbs[54] = sbs[48],
    sbs[53] = sbs[51],
    sbs[48] = s[1],
    sbs[51] = s[2]
}
function sbsroti() {
    s[1] = sbs[25],
    s[2] = sbs[26],
    s[3] = sbs[27],
    sbs[25] = sbs[34],
    sbs[26] = sbs[35],
    sbs[27] = sbs[36],
    sbs[34] = sbs[43],
    sbs[35] = sbs[44],
    sbs[36] = sbs[45],
    sbs[43] = sbs[16],
    sbs[44] = sbs[17],
    sbs[45] = sbs[18],
    sbs[16] = s[1],
    sbs[17] = s[2],
    sbs[18] = s[3],
    s[1] = sbs[46],
    s[2] = sbs[47],
    sbs[46] = sbs[48],
    sbs[47] = sbs[51],
    sbs[48] = sbs[54],
    sbs[51] = sbs[53],
    sbs[54] = sbs[52],
    sbs[53] = sbs[49],
    sbs[52] = s[1],
    sbs[49] = s[2]
}
function sbsfd() {
    s[1] = sbs[19],
    s[2] = sbs[20],
    s[3] = sbs[21],
    sbs[19] = sbs[28],
    sbs[20] = sbs[29],
    sbs[21] = sbs[30],
    sbs[28] = sbs[37],
    sbs[29] = sbs[38],
    sbs[30] = sbs[39],
    sbs[37] = sbs[10],
    sbs[38] = sbs[11],
    sbs[39] = sbs[12],
    sbs[10] = s[1],
    sbs[11] = s[2],
    sbs[12] = s[3],
    s[1] = sbs[22],
    s[2] = sbs[23],
    s[3] = sbs[24],
    sbs[22] = sbs[31],
    sbs[23] = sbs[32],
    sbs[24] = sbs[33],
    sbs[31] = sbs[40],
    sbs[32] = sbs[41],
    sbs[33] = sbs[42],
    sbs[40] = sbs[13],
    sbs[41] = sbs[14],
    sbs[42] = sbs[15],
    sbs[13] = s[1],
    sbs[14] = s[2],
    sbs[15] = s[3],
    s[1] = sbs[25],
    s[2] = sbs[26],
    s[3] = sbs[27],
    sbs[25] = sbs[34],
    sbs[26] = sbs[35],
    sbs[27] = sbs[36],
    sbs[34] = sbs[43],
    sbs[35] = sbs[44],
    sbs[36] = sbs[45],
    sbs[43] = sbs[16],
    sbs[44] = sbs[17],
    sbs[45] = sbs[18],
    sbs[16] = s[1],
    sbs[17] = s[2],
    sbs[18] = s[3],
    s[1] = sbs[1],
    s[2] = sbs[2],
    sbs[1] = sbs[7],
    sbs[2] = sbs[4],
    sbs[7] = sbs[9],
    sbs[4] = sbs[8],
    sbs[9] = sbs[3],
    sbs[8] = sbs[6],
    sbs[3] = s[1],
    sbs[6] = s[2],
    s[1] = sbs[46],
    s[2] = sbs[47],
    sbs[46] = sbs[48],
    sbs[47] = sbs[51],
    sbs[48] = sbs[54],
    sbs[51] = sbs[53],
    sbs[54] = sbs[52],
    sbs[53] = sbs[49],
    sbs[52] = s[1],
    sbs[49] = s[2]
}
function sbsuu() {
    sbsbor(),
    sbsbor(),
    sbsrot(),
    sbsbor(),
    sbsbor()
}
function sbsui() {
    sbsbor(),
    sbsbor(),
    sbsroti(),
    sbsbor(),
    sbsbor()
}
function sbsff() {
    sbsbor(),
    sbsrot(),
    sbsbor(),
    sbsbor(),
    sbsbor()
}
function sbsfi() {
    sbsbor(),
    sbsroti(),
    sbsbor(),
    sbsbor(),
    sbsbor()
}
function sbsrr() {
    sbsfd(),
    sbsbor(),
    sbsrot(),
    sbsbor(),
    sbsbor(),
    sbsbor(),
    sbsfd(),
    sbsfd(),
    sbsfd()
}
function sbsri() {
    sbsfd(),
    sbsbor(),
    sbsroti(),
    sbsbor(),
    sbsbor(),
    sbsbor(),
    sbsfd(),
    sbsfd(),
    sbsfd()
}
function sbsll() {
    sbsfd(),
    sbsfd(),
    sbsfd(),
    sbsbor(),
    sbsrot(),
    sbsbor(),
    sbsbor(),
    sbsbor(),
    sbsfd()
}
function sbsli() {
    sbsfd(),
    sbsfd(),
    sbsfd(),
    sbsbor(),
    sbsroti(),
    sbsbor(),
    sbsbor(),
    sbsbor(),
    sbsfd()
}
function sbsdd() {
    sbsrot()
}
function sbsdi() {
    sbsroti()
}
function sbsbb() {
    sbsbor(),
    sbsbor(),
    sbsbor(),
    sbsrot(),
    sbsbor(),
    stp++,
    step[stp] = 9
}
function sbsbi() {
    sbsbor(),
    sbsbor(),
    sbsbor(),
    sbsroti(),
    sbsbor(),
    stp++,
    step[stp] = 10
}
typeof Cube == "object" || function() {
    window["Cube"] = {
        worker: new Worker("/RubikWorker.js"),
        tablesGenerated: !1,
        movesetToArray: function(e) {
            for (var x = e["split"](" "), c = [], t = 0; t < x["length"]; t++)
                c["push"](new Cube["move"](x[t]));
            return c
        },
        move: function(x) {
            this["face"] = x["substring"](0, 1) || "U";
            var c = x["substring"](1, 2);
            c == "" ? (this["move"] = 1,
            this["direction"] = 1) : c == "'" ? (this["move"] = 1,
            this["direction"] = -1) : c == "2" ? (this["move"] = 2,
            this["direction"] = 0) : (this["move"] = 1,
            this["direction"] = 1)
        },
        colors: ["U", "R", "F", "D", "L", "B"],
        facelets: ["U1", "U2", "U3", "U4", "U5", "U6", "U7", "U8", "U9", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9"],
        corners: ["URF", "UFL", "ULB", "URB", "RFD", "FDL", "DLB", "RDB"],
        edges: ["UR", "UF", "UL", "UB", "RD", "FD", "DL", "DB", "RF", "FL", "LB", "RB"],
        colorIndexes: {
            U: 0,
            R: 1,
            F: 2,
            D: 3,
            L: 4,
            B: 5
        },
        cubeToArr: function(e) {
            for (var x = [], c = 0; 6 > c; c++) {
                x[c] = [];
                for (var t = 0; 3 > t; t++) {
                    x[c][t] = [];
                    for (var o = 0; 3 > o; o++)
                        x[c][t][o] = e["charAt"](9 * c + 3 * t + o)
                }
            }
            return x
        },
        arrToCube: function(e) {
            for (var x = "", c = 0; 6 > c; c++)
                for (var t = 0; 3 > t; t++)
                    for (var o = 0; 3 > o; o++)
                        x += e[c][t][o];
            return x
        },
        getAdjacentFacelets: function(e, x, c) {
            for (var t = Cube["faceletToCubelet"][e][x][c], o = [], r = 0; 6 > r; r++)
                for (var l = 0; 3 > l; l++)
                    for (var _ = 0; 3 > _; _++)
                        (r != e || l != x || _ != c) && Cube["faceletToCubelet"][r][l][_] == t && o["push"]([r, l, _]);
            return o
        },
        faceletToCubelet: [[[0, 1, 2], [3, 4, 5], [6, 7, 8]], [[8, 5, 2], [17, 14, 11], [26, 23, 20]], [[6, 7, 8], [15, 16, 17], [24, 25, 26]], [[24, 25, 26], [21, 22, 23], [18, 19, 20]], [[0, 3, 6], [9, 12, 15], [18, 21, 24]], [[2, 1, 0], [11, 10, 9], [20, 19, 18]]],
        orderColors: function() {
            return Array["prototype"]["slice"]["call"](arguments)["sort"](function(e, x) {
                if (Cube["colorIndexes"][e] < Cube["colorIndexes"][x])
                    return -1;
                return Cube["colorIndexes"][e] > Cube["colorIndexes"][x] ? 1 : 0
            })["join"]("")
        },
        autocompleteCube: function(e) {
            return Cube["arrToCube"](Cube["autocompleteArray"](Cube["cubeToArr"](e)))
        },
        autocompleteArray: function(e) {
            var x = e["slice"](), c;
            do
                c = x["slice"](),
                x = Cube["autocompleteEdge"](x);
            while (Cube["arrToCube"](x) != Cube["arrToCube"](c));do
                c = x["slice"](),
                x = Cube["autocompleteCorner"](x);
            while (Cube["arrToCube"](x) != Cube["arrToCube"](c));return x
        },
        autocompleteEdge: function(e) {
            for (var x = e["slice"](), c = [], t = 0; 6 > t; t++)
                for (var o = 0; 3 > o; o++)
                    for (var l, r = 1 - o % 2; 3 > r; r += 2)
                        if (l = x[t][o][r],
                        l != "_") {
                            var _ = Cube["getAdjacentFacelets"](t, o, r)[0]
                              , d = x[_[0]][_[1]][_[2]];
                            if (d != "_") {
                                var n = Cube["orderColors"](l, d);
                                -1 == c["indexOf"](n) && c["push"](n)
                            }
                        }
            for (var t = 0; 6 > t; t++)
                for (var o = 0; 3 > o; o++)
                    for (var l, r = 1 - o % 2; 3 > r; r += 2)
                        if (l = x[t][o][r],
                        l == "_") {
                            var _ = Cube["getAdjacentFacelets"](t, o, r)[0]
                              , d = x[_[0]][_[1]][_[2]]
                              , n = Cube["orderColors"](l, d);
                            if (d != "_") {
                                for (var u = [], p = 0; p < Cube["colors"]["length"]; p++) {
                                    var v = Cube["colors"][p]
                                      , n = Cube["orderColors"](d, v);
                                    -1 != Cube["edges"]["indexOf"](n) && -1 == c["indexOf"](n) && u["push"](v)
                                }
                                1 == u["length"] && (x[t][o][r] = u[0])
                            }
                        }
            return x
        },
        autocompleteCorner: function(e) {
            for (var x = e["slice"](), c = [], t = 0; 6 > t; t++)
                for (var o = 0; 3 > o; o += 2)
                    for (var l, r = 0; 3 > r; r += 2)
                        if (l = x[t][o][r],
                        l != "_") {
                            var _ = Cube["getAdjacentFacelets"](t, o, r)
                              , d = x[_[0][0]][_[0][1]][_[0][2]]
                              , n = x[_[1][0]][_[1][1]][_[1][2]];
                            if (d != "_" && n != "_") {
                                var u = Cube["orderColors"](l, d, n);
                                -1 == c["indexOf"](u) && c["push"](u)
                            }
                        }
            for (var t = 0; 6 > t; t++)
                for (var o = 0; 3 > o; o += 2)
                    for (var l, r = 0; 3 > r; r += 2)
                        if (l = x[t][o][r],
                        l == "_") {
                            var _ = Cube["getAdjacentFacelets"](t, o, r)
                              , d = x[_[0][0]][_[0][1]][_[0][2]]
                              , n = x[_[1][0]][_[1][1]][_[1][2]]
                              , u = Cube["orderColors"](l, d, n);
                            if (d != "_" && n != "_") {
                                for (var p = [], v = 0; v < Cube["colors"]["length"]; v++) {
                                    var b = Cube["colors"][v]
                                      , u = Cube["orderColors"](d, n, b);
                                    -1 != Cube["corners"]["indexOf"](u) && -1 == c["indexOf"](u) && p["push"](b)
                                }
                                1 == p["length"] && (x[t][o][r] = p[0])
                            }
                        }
            return x
        },
        reverseArray: function(e) {
            for (var x = Cube["movesetToArray"](Cube["arrayToMoveset"](e))["reverse"](), c = 0; c < x["length"]; c++)
                x[c]["direction"] = -1 * x[c]["direction"];
            return x
        },
        arrayToMoveset: function(e, x) {
            for (var o, c = "", t = 0; t < e["length"]; t++)
                o = e[t],
                c += o["text"],
                t != e["length"] - 1 && (c += x ? "_" : " ");
            return c
        },
        validateMoveset: function(e) {
            return !!e["match"](/^([ULFRBD](['2]|))( ([ULFRBD](['2]|)))*$/)
        },
        reverseMoveset: function(e) {
            return Cube["arrayToMoveset"](Cube["reverseArray"](Cube["movesetToArray"](e)))
        },
        randomCube: function(e) {
            var x = function(c) {
                c["data"]["type"] == "random" && (e(c["data"]["result"]),
                Cube["worker"]["removeEventListener"]("message", x, !1))
            };
            Cube["worker"]["addEventListener"]("message", x, !1),
            Cube["worker"]["postMessage"]({
                type: "random"
            })
        },
        verifyCube: function(e, x) {
            var c = function(t) {
                t["data"]["type"] == "verify" && t["data"]["cube"] == e && (x(Math["abs"](t["data"]["result"])),
                Cube["worker"]["removeEventListener"]("message", c, !1))
            };
            Cube["worker"]["addEventListener"]("message", c, !1),
            Cube["worker"]["postMessage"]({
                type: "verify",
                cube: e
            })
        },
        solveCube: function(e, x, c, t, o, r, l) {
            if (!Cube["tablesGenerated"])
                throw new Error("First the tables need to be generated!");
            var _ = function(n) {
                if (n["data"]["type"] == "solution" && n["data"]["cube"] == e) {
                    if (0 == n["data"]["result"]["indexOf"]("Error") && errorCallback)
                        errorCallback(parseInt(n["data"]["result"]["substring"](6, 7)));
                    else {
                        var u = n["data"]["result"]["substring"](0, n["data"]["result"]["length"] - 1);
                        t ? x(Cube["movesetToArray"](u)) : x(u)
                    }
                    Cube["worker"]["removeEventListener"]("message", _, !1)
                }
            };
            Cube["worker"]["addEventListener"]("message", _, !1);
            var d = {
                cube: e,
                maxDepth: o || 20,
                maxTime: r || 30,
                useSeparator: !!l,
                type: "solve"
            };
            Cube["worker"]["postMessage"](d)
        },
        generateTables: function(e, x) {
            var c = function(t) {
                t["data"]["type"] == "progress" && x ? x(t["data"]["line"], t["data"]["time"]) : t["data"]["type"] == "CoordCube" && (e(),
                Cube["tablesGenerated"] = !0,
                Cube["worker"]["removeEventListener"]("message", c, !1))
            };
            Cube["worker"]["addEventListener"]("message", c, !1),
            Cube["worker"]["postMessage"]({
                type: "generateTables"
            })
        }
    },
    Object["defineProperty"](Cube["move"]["prototype"], "text", {
        get: function() {
            var e = this["face"];
            return -1 == this["direction"] ? e += "'" : 2 == this["move"] && (e += "2"),
            e
        },
        set: function(e) {
            var x = e["substring"](0, 1)
              , c = e["substring"](1, 2)
              , t = 0;
            c == "" ? (c = 1,
            t = 1) : c == "'" ? (c = 1,
            t = -1) : c == "2" && (c = 2,
            t = 0);
            this["face"] = x,
            this["move"] = c,
            this["direction"] = t
        }
    }),
    Object["defineProperty"](Cube["move"]["prototype"], "toString", {
        value: function() {
            return this["text"]
        }
    })
}();
var cc, generateColorsString = function() {
    return "FFFF00FFFFFFFF0000FF80400000FF00FF00"
};
function getQueryString(e) {
    for (var x = {}, c = e["split"]("&"), t = 0; t < c["length"]; t++) {
        var o = c[t]["split"]("=")
          , r = o["shift"]()
          , l = o["join"]("=");
        l = !l || !(l["toLowerCase"]() != "true") || l["toLowerCase"]() != "false" && unescape(l)["replace"](/\+/g, " ");
        x[r] = l
    }
    return x
}
var maxtime = 30
  , maxmoves = 20
  , worker = new Worker("/RubikWorker.js");
function typedToArray(e) {
    for (var x = [], c = 0; c < e["length"]; c++)
        x["push"](c);
    return x
}
var totalTime = 0
  , facelets = ["U1", "U2", "U3", "U4", "U5", "U6", "U7", "U8", "U9", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9"]
  , colors = ["U", "L", "F", "R", "B", "D"]
  , colorNames = {
    U: "#FFFF0F",
    R: "#1D16DB",
    F: "#F7A000",
    L: "#299E05",
    D: "#FFFFFF",
    B: "#EB0000",
    _: "#BBBBBB"
}
  , times = {
    twistMove: 257,
    flipMove: 220,
    FRtoBR_Move: 1645,
    URFtoDLF_Move: 3189,
    URtoDF_Move: 2904,
    URtoUL_Move: 173,
    UBtoDF_Move: 185,
    MergeURtoULandUBtoDF: 2803,
    Slice_URFtoDLF_Parity_Prun: 3022,
    Slice_URtoDF_Parity_Prun: 2828,
    Slice_Twist_Prun: 2714,
    Slice_Flip_Prun: 2544
};
worker["addEventListener"]("message", function(e) {
    if (e["data"]["type"] == "message")
        warning(" ", e["data"]["msg"]);
    else if (e["data"]["type"] == "CoordCube") {
        document["getElementById"]("bar")["outerHTML"] = "Done in " + totalTime + "ms",
        document["getElementById"]("solve")["disabled"] = !1,
        worker["postMessage"]({
            type: "solve",
            cube: document["getElementById"]("cube")["value"],
            maxDepth: megprobalKirakniEnnyiLepesben,
            maxTime: 30
        }),
        megprobalKirakniEnnyiLepesben = 24;
        var x = e["data"]["cc"];
        for (var c in x)
            0 == c["indexOf"]("Slice") && (x[c] = typedToArray(x[c]))
    } else if (e["data"]["type"] == "verify") {
        if (0 == e["data"]["result"])
            ;
        else {
            var t;
            switch (e["data"]["result"]) {
            case -1:
                t = mess[1];
                break;
            case -2:
                t = mess[2];
                break;
            case -3:
                t = mess[3];
                break;
            case -4:
                t = mess[4];
                break;
            case -5:
                t = mess[5];
                break;
            case -6:
                t = mess[6];
                break;
            default:
                t = mess[22];
            }
            warning(mess[8], e["data"]["result"] + ": " + t + ". <br />" + mess[14])
        }
    } else if (e["data"]["type"] == "random")
        document["getElementById"]("cube")["value"] = e["data"]["result"],
        setInput["apply"](document["getElementById"]("cube"));
    else if (e["data"]["type"] == "progress") {
        var o = document["createElement"]("li");
        totalTime += e["data"]["time"],
        o["innerHTML"] = e["data"]["line"] + " Completed, Took " + e["data"]["time"] + "ms",
        document["getElementById"]("details")["appendChild"](o),
        document["getElementById"]("bar")["value"] += times[e["data"]["line"]]
    } else if (e["data"]["type"] == "solution")
        if (0 == e["data"]["result"]["indexOf"]("Error")) {
            var t, r = parseInt(e["data"]["result"]["substring"](6, 7));
            t = 1 === r ? mess[1] : 2 === r ? mess[2] : 3 === r ? mess[3] : 4 === r ? mess[4] : 5 === r ? mess[5] : 6 === r ? mess[6] : 7 === r ? "No solution in " + maxmoves + " moves" : 8 === r ? "No solution within " + maxtime + " seconds" : mess[22],
            7 > r && (warning(mess[8], t + ". <br />" + mess[14]),
            updateCube()),
            6 < r && (70 == megprobalKirakniEnnyiLepesben ? warning("This is unusual...", "Sorry but I couldn't find the optimal solution in 2 minutes.<br />Please make a few random moves on your cube and retry to solve it or use another computer.") : (worker["postMessage"]({
                type: "solve",
                cube: document["getElementById"]("cube")["value"],
                maxDepth: megprobalKirakniEnnyiLepesben,
                maxTime: 60
            }),
            megprobalKirakniEnnyiLepesben = 70))
        } else {
            var l = Cube["movesetToArray"](e["data"]["result"]);
            buildOutput(l),
            pushState()
        }
}, !1),
worker["addEventListener"]("error", function(e) {
    warning("Error", e),
    e["preventDefault"]()
}, !1);
function buildOutput(e) {
    var x = document["getElementById"]("solution");
    x["moveset"] = e,
    x["innerHTML"] = "";
    for (var t, c = 0; c < e["length"]; c++)
        t = document["createElement"]("span"),
        t["innerHTML"] = e[c]["text"],
        t["move"] = e[c],
        t["className"] = 0 == c ? "current move" : "move",
        x["appendChild"](t),
        e[c]["el"] = t;
    stp = e["length"];
    for (var c = 0; c < e["length"]; c++)
        e[c]["text"] == "U" && (step[c + 1] = 1),
        e[c]["text"] == "U'" && (step[c + 1] = 2),
        e[c]["text"] == "L" && (step[c + 1] = 3),
        e[c]["text"] == "L'" && (step[c + 1] = 4),
        e[c]["text"] == "F" && (step[c + 1] = 5),
        e[c]["text"] == "F'" && (step[c + 1] = 6),
        e[c]["text"] == "R" && (step[c + 1] = 7),
        e[c]["text"] == "R'" && (step[c + 1] = 8),
        e[c]["text"] == "B" && (step[c + 1] = 9),
        e[c]["text"] == "B'" && (step[c + 1] = 10),
        e[c]["text"] == "D" && (step[c + 1] = 11),
        e[c]["text"] == "D'" && (step[c + 1] = 12),
        e[c]["text"] == "U2" && (step[c + 1] = 13),
        e[c]["text"] == "L2" && (step[c + 1] = 14),
        e[c]["text"] == "F2" && (step[c + 1] = 15),
        e[c]["text"] == "R2" && (step[c + 1] = 16),
        e[c]["text"] == "B2" && (step[c + 1] = 17),
        e[c]["text"] == "D2" && (step[c + 1] = 18);
    kiirarrayt(),
    eddigkiir(0),
    $("#pleasewait")["hide"](),
    $("html, body")["animate"]({
        scrollTop: $($("#puzzleNav"))["offset"]()["top"] - 20
    }, 500)
}
var currentColor = "F";
function makeQueryString(e, x, c) {
    var t = c ? "?" : ""
      , o = !1;
    for (var r in e)
        e["hasOwnProperty"](r) && (x && !1 == e[r] || (o = !0,
        t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]) + "&"));
    return o ? t["substring"](0, t["length"] - 1) : ""
}
function popState(e) {
    var x = e["state"];
    if (x) {
        var c = document["getElementById"]("cube");
        if (x["cube"] && (x["cube"] == "clean" ? cleanCube(!0) : x["cube"] == "clear" ? clearFacelets(!0) : x["cube"] == "random" ? worker["postMessage"]({
            type: "random"
        }) : 54 == x["cube"]["length"] && (c["value"] = x["cube"],
        setInput["apply"](c))),
        x["solution"]) {
            var t = x["solution"]["replace"](/_/g, " ");
            if (Cube["validateMoveset"](t)) {
                var o = Cube["movesetToArray"](t);
                buildOutput(o)
            } else
                ;
        }
    }
}
window["addEventListener"]("popstate", popState, !1);
function pushState() {}
var isRandom = !1;
function setCubeText() {
    isRandom = !1;
    for (var e = "", x = document["getElementById"]("cube"), c = 0; c < facelets["length"]; c++) {
        if (document["getElementById"](facelets[c])["color"] == "")
            return void (x["value"] = "");
        e += document["getElementById"](facelets[c])["color"]
    }
    !0 == document["getElementById"]("autocomplete")["checked"] ? (e = Cube["autocompleteCube"](e),
    x["value"] = e,
    setInput()) : x["value"] = e;
    pushState()
}
function setInput() {
    isRandom = !1;
    var e = document["getElementById"]("cube");
    if (54 == e["value"]["length"])
        for (var x = e["value"]["split"](""), c = 0; 54 > c; c++) {
            var t = facelets[c]
              , o = document["getElementById"](t);
            o["color"] = x[c],
            o["style"]["backgroundColor"] = colorNames[x[c]]
        }
}
function clearFacelets(e) {
    isRandom = !1,
    document["getElementById"]("cube")["value"] = "____U________R________F________D________L________B____";
    for (var c, x = 0; x < facelets["length"]; x++)
        c = document["getElementById"](facelets[x]),
        c["classList"]["contains"]("center") || (c["color"] = "_",
        c["style"]["backgroundColor"] = colorNames["_"]);
    !0 !== e && pushState()
}
function cleanCube(e) {
    isRandom = !1;
    for (var c, x = 0; x < facelets["length"]; x++)
        c = document["getElementById"](facelets[x]),
        c["classList"]["contains"]("center") || (c["color"] = facelets[x]["substring"](0, 1),
        c["style"]["backgroundColor"] = colorNames[c["color"]]);
    document["getElementById"]("cube")["value"] = "UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB",
    !0 !== e && pushState()
}
function setColor() {
    this["classList"]["contains"]("center") ? (currentColor = this["color"],
    document["getElementById"]("currentColor")["color"] = currentColor,
    document["getElementById"]("currentColor")["style"]["backgroundColor"] = colorNames[currentColor]) : (this["color"] = currentColor,
    this["style"]["backgroundColor"] = colorNames[currentColor],
    setCubeText())
}
function calculateChanges(e) {
    var x = {
        from: [],
        to: []
    }, c, t, o, r, l = e["direction"];
    e["face"] == "U" ? (c = "y",
    t = "x",
    o = "z",
    r = 2) : e["face"] == "R" ? (c = "x",
    t = "z",
    o = "y",
    r = 2,
    l *= -1) : e["face"] == "F" ? (c = "z",
    t = "x",
    o = "y",
    r = 0) : e["face"] == "D" ? (c = "y",
    t = "z",
    o = "x",
    r = 0,
    l *= -1) : e["face"] == "L" ? (c = "x",
    t = "y",
    o = "z",
    r = 0) : e["face"] == "B" && (c = "z",
    t = "y",
    o = "x",
    r = 2,
    l *= -1);
    for (var p, _ = {
        x: [2, 5, 3, 4],
        y: [1, 5, 0, 4],
        z: [0, 2, 1, 3]
    }[c], d = 2 - l, n = x["faceMoves"] = [0, 1, 2, 3, 4, 5], u = 0; u < d; u++) {
        p = n["slice"]();
        for (var v = 0; 4 > v; v++)
            n[_[v]] = p[_[(v + 1) % 4]]
    }
    for (var u = 0; 9 > u; u++) {
        var b = {}
          , m = {};
        b[c] = r,
        b[t] = u % 3,
        b[o] = 0 | u / 3,
        x["from"]["push"](b),
        m[c] = r,
        0 == e["direction"] ? (m[t] = 2 - u % 3,
        m[o] = 2 - (0 | u / 3)) : 1 == e["direction"] ? (m[t] = 0 | u / 3,
        m[o] = 2 - u % 3) : -1 == e["direction"] && (m[t] = 2 - (0 | u / 3),
        m[o] = u % 3);
        x["to"]["push"](m)
    }
    return x
}
function setColorNames() {
    localStorage["colorNames"] = JSON["stringify"](colorNames)
}
function getColorNames() {
    for (var e in colorNames = localStorage["colorNames"] ? JSON["parse"](localStorage["colorNames"]) : {
        U: "#FFFF00",
        R: "#008000",
        F: "#FF0000",
        L: "#0000FF",
        D: "#FFFFFF",
        B: "#FFA500",
        _: "#808080"
    },
    colorNames) {
        var x = document["getElementById"](e + "Color");
        if (x) {
            x["value"] = colorNames[e];
            var c = document["createEvent"]("HTMLEvents");
            c["initEvent"]("input", !0, !0),
            x["dispatchEvent"](c)
        }
    }
}
function resetColorNames() {
    localStorage["colorNames"] = "",
    getColorNames(),
    setInput["apply"](document["getElementById"]("cube"))
}
function setColors() {
    colorNames[this["getAttribute"]("data-side")] = this["value"],
    setInput["apply"](document["getElementById"]("cube")),
    setColorNames()
}
function setColorBlank() {
    currentColor = "_",
    document["getElementById"]("currentColor")["color"] = currentColor,
    document["getElementById"]("currentColor")["style"]["backgroundColor"] = colorNames[currentColor]
}
document["addEventListener"]("DOMContentLoaded", function() {
    document["getElementById"]("generateButton")["addEventListener"]("click", function() {
        worker["postMessage"]({
            type: "generateTables"
        }),
        document["getElementById"]("progress")["hidden"] = !1,
        document["getElementById"]("generate")["hidden"] = !0
    }, !1),
    document["getElementById"]("randomButton")["addEventListener"]("click", function() {
        worker["postMessage"]({
            type: "random"
        }),
        isRandom = !0,
        pushState()
    }, !1),
    document["getElementById"]("maxmoves")["addEventListener"]("input", function() {
        maxmoves = this["valueAsNumber"]
    }, !1),
    document["getElementById"]("maxtime")["addEventListener"]("input", function() {
        maxtime = this["valueAsNumber"]
    }, !1),
    document["getElementById"]("verify")["addEventListener"]("click", function() {
        worker["postMessage"]({
            type: "verify",
            cube: document["getElementById"]("cube")["value"]
        })
    }, !1),
    document["getElementById"]("solve")["addEventListener"]("click", function() {
        worker["postMessage"]({
            type: "solve",
            cube: document["getElementById"]("cube")["value"],
            maxDepth: maxmoves,
            maxTime: maxtime
        })
    }, !1);
    for (var e = document["getElementsByClassName"]("colorInput"), x = 0; x < e["length"]; x++)
        e[x]["addEventListener"]("change", setColors, !1);
    document["getElementById"]("cube")["addEventListener"]("input", setInput, !1),
    document["getElementById"]("clear")["addEventListener"]("click", clearFacelets, !1),
    document["getElementById"]("clean")["addEventListener"]("click", cleanCube, !1);
    for (var t, c = document["getElementById"]("entry"), x = 0; x < colors["length"]; x++)
        t = document["createElement"]("div"),
        t["className"] = "side",
        t["id"] = colors[x],
        c["appendChild"](t);
    for (var t, x = 0; x < facelets["length"]; x++) {
        t = document["createElement"]("div"),
        t["className"] = facelets[x]["substring"](1, 2) == "5" ? "facelet center" : 0 == (parseInt(facelets[x]["substring"](1, 2)) - 1) % 3 && facelets[x]["substring"](1, 2) != "9" ? "facelet right" : "facelet",
        t["id"] = facelets[x],
        t["color"] = facelets[x]["substring"](0, 1),
        t["style"]["backgroundColor"] = colorNames[t["color"]],
        t["addEventListener"]("click", setColor, !1);
        var o = document["getElementById"](facelets[x]["substring"](0, 1));
        o["appendChild"](t)
    }
    if (document["getElementById"]("currentColor")["addEventListener"]("click", setColorBlank, !1),
    window["location"]["search"] != "") {
        var r = getQueryString(window["location"]["search"]["substring"](1))
          , l = {
            state: r
        };
        popState(l)
    } else {
        var l = {
            state: {
                cube: "clear"
            }
        };
        popState(l)
    }
    document["getElementById"]("currentColor")["style"]["backgroundColor"] = colorNames[currentColor]
}, !1);
var mouseX = 0
  , mouseY = 0
  , poppedUp = 0
  , eltelt5mp = 0;
document["addEventListener"]("mousemove", function(e) {
    mouseX = e["clientX"],
    mouseY = e["clientY"]
}),
jQuery(document)["mouseleave"](function() {
    0 < $("#alertBox")["length"] && 100 > mouseY && 0 == poppedUp && 1 == eltelt5mp && (jQuery("#alertBox")["fadeIn"](200),
    jQuery("#alertShadow")["fadeIn"](200),
    document["getElementById"]("alertBoxContent")["innerHTML"] = "<iframe src="/likebox.html" width="300" height="300" scrolling="no">Iframes not supported</iframe>",
    document["getElementById"]("callToAddThis2")["innerHTML"] = document["getElementById"]("callToAddThis")["innerHTML"],
    poppedUp++)
}),
$(document)["ready"](function() {
    setTimeout(function() {
        eltelt5mp = 1
    }, 5e3),
    $("#alertBoxClose,#alertShadow")["click"](function() {
        $("#alertBox")["fadeOut"](),
        $("#alertShadow")["fadeOut"](200)
    })
});
