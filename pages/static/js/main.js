var state = [],
    initState = [2, 5, 8, 1, 4, 7, 0, 3, 6, 11, 14, 17, 10, 13, 16, 9, 12, 15, 20, 23, 26, 19, 22, 25, 18, 21, 24, 29, 32, 35, 28, 31, 34, 27, 30, 33, 42, 39, 36, 43, 40, 37, 44, 41, 38, 47, 50, 53, 46, 49, 52, 45, 48, 51],
    stateToFE = [2, 5, 8, 1, 4, 7, 0, 3, 6, 11, 14, 17, 10, 13, 16, 9, 12, 15, 20, 23, 26, 19, 22, 25, 18, 21, 24, 29, 32, 35, 28, 31, 34, 27, 30, 33, 42, 39, 36, 43, 40, 37, 44, 41, 38, 47, 50, 53, 46, 49, 52, 45, 48, 51],
    FEToState = [6, 3, 0, 7, 4, 1, 8, 5, 2, 15, 12, 9, 16, 13, 10, 17, 14, 11, 24, 21, 18, 25, 22, 19, 26, 23, 20, 33, 30, 27, 34, 31, 28, 35, 32, 29, 38, 41, 44, 37, 40, 43, 36, 39, 42, 51, 48, 45, 52, 49, 46, 53, 50, 47],
    legalMoves = ["U_-1", "U_1", "D_-1", "D_1", "L_-1", "L_1", "R_-1", "R_1", "B_-1", "B_1", "F_-1", "F_1"],
    rotateIdxs_old = {
        "B_-1": [38, 41, 44, 44, 43, 42, 42, 39, 36, 36, 37, 38, 18, 19, 20, 2, 5, 8, 35, 34, 33, 15, 12, 9],
        "B_1": [42, 39, 36, 36, 37, 38, 38, 41, 44, 44, 43, 42, 35, 34, 33, 15, 12, 9, 18, 19, 20, 2, 5, 8],
        "D_-1": [11, 14, 17, 17, 16, 15, 15, 12, 9, 9, 10, 11, 45, 48, 51, 18, 21, 24, 36, 39, 42, 27, 30, 33],
        "D_1": [15, 12, 9, 9, 10, 11, 11, 14, 17, 17, 16, 15, 36, 39, 42, 27, 30, 33, 45, 48, 51, 18, 21, 24],
        "F_-1": [47, 50, 53, 53, 52, 51, 51, 48, 45, 45, 46, 47, 29, 28, 27, 0, 3, 6, 24, 25, 26, 17, 14, 11],
        "F_1": [51, 48, 45, 45, 46, 47, 47, 50, 53, 53, 52, 51, 24, 25, 26, 17, 14, 11, 29, 28, 27, 0, 3, 6],
        "L_-1": [20, 23, 26, 26, 25, 24, 24, 21, 18, 18, 19, 20, 45, 46, 47, 0, 1, 2, 44, 43, 42, 9, 10, 11],
        "L_1": [24, 21, 18, 18, 19, 20, 20, 23, 26, 26, 25, 24, 44, 43, 42, 9, 10, 11, 45, 46, 47, 0, 1, 2],
        "R_-1": [29, 32, 35, 35, 34, 33, 33, 30, 27, 27, 28, 29, 38, 37, 36, 6, 7, 8, 51, 52, 53, 15, 16, 17],
        "R_1": [33, 30, 27, 27, 28, 29, 29, 32, 35, 35, 34, 33, 51, 52, 53, 15, 16, 17, 38, 37, 36, 6, 7, 8],
        "U_-1": [2, 5, 8, 8, 7, 6, 6, 3, 0, 0, 1, 2, 38, 41, 44, 20, 23, 26, 47, 50, 53, 29, 32, 35],
        "U_1": [6, 3, 0, 0, 1, 2, 2, 5, 8, 8, 7, 6, 47, 50, 53, 29, 32, 35, 38, 41, 44, 20, 23, 26]
    },
    rotateIdxs_new = {
        "B_-1": [36, 37, 38, 38, 41, 44, 44, 43, 42, 42, 39, 36, 2, 5, 8, 35, 34, 33, 15, 12, 9, 18, 19, 20],
        "B_1": [36, 37, 38, 38, 41, 44, 44, 43, 42, 42, 39, 36, 2, 5, 8, 35, 34, 33, 15, 12, 9, 18, 19, 20],
        "D_-1": [9, 10, 11, 11, 14, 17, 17, 16, 15, 15, 12, 9, 18, 21, 24, 36, 39, 42, 27, 30, 33, 45, 48, 51],
        "D_1": [9, 10, 11, 11, 14, 17, 17, 16, 15, 15, 12, 9, 18, 21, 24, 36, 39, 42, 27, 30, 33, 45, 48, 51],
        "F_-1": [45, 46, 47, 47, 50, 53, 53, 52, 51, 51, 48, 45, 0, 3, 6, 24, 25, 26, 17, 14, 11, 29, 28, 27],
        "F_1": [45, 46, 47, 47, 50, 53, 53, 52, 51, 51, 48, 45, 0, 3, 6, 24, 25, 26, 17, 14, 11, 29, 28, 27],
        "L_-1": [18, 19, 20, 20, 23, 26, 26, 25, 24, 24, 21, 18, 0, 1, 2, 44, 43, 42, 9, 10, 11, 45, 46, 47],
        "L_1": [18, 19, 20, 20, 23, 26, 26, 25, 24, 24, 21, 18, 0, 1, 2, 44, 43, 42, 9, 10, 11, 45, 46, 47],
        "R_-1": [27, 28, 29, 29, 32, 35, 35, 34, 33, 33, 30, 27, 6, 7, 8, 51, 52, 53, 15, 16, 17, 38, 37, 36],
        "R_1": [27, 28, 29, 29, 32, 35, 35, 34, 33, 33, 30, 27, 6, 7, 8, 51, 52, 53, 15, 16, 17, 38, 37, 36],
        "U_-1": [0, 1, 2, 2, 5, 8, 8, 7, 6, 6, 3, 0, 20, 23, 26, 47, 50, 53, 29, 32, 35, 38, 41, 44],
        "U_1": [0, 1, 2, 2, 5, 8, 8, 7, 6, 6, 3, 0, 20, 23, 26, 47, 50, 53, 29, 32, 35, 38, 41, 44]
    },
    solveStartState = [],
    solveMoves = [],
    solveMoves_rev = [],
    solveIdx = null,
    solution_text = null,
    faceNames = ["top", "bottom", "left", "right", "back", "front"],
    colorMap = {
        0: "#ffffff",
        1: "#ffff1a",
        4: "#0000ff",
        5: "#33cc33",
        2: "#ff8000",
        3: "#e60000"
    },
    lastMouseX = 0,
    lastMouseY = 0,
    rotX = -30,
    rotY = -30,
    moves = [],
    date1 = new Date();

function reOrderArray(arr, indecies) {
    var temp = []
    for (var i = 0; i < indecies.length; i++) {
        var index = indecies[i]
        temp.push(arr[index])
    }
    return temp;
}

/*
	Rand int between min (inclusive) and max (exclusive)
*/
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function clearCube() {
    for (i = 0; i < faceNames.length; i++) {
        var myNode = document.getElementById(faceNames[i]);
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
    }
}

function setStickerColors(newState) {
    state = newState
    clearCube()

    idx = 0
    for (i = 0; i < faceNames.length; i++) {
        for (j = 0; j < 9; j++) {
            var iDiv = document.createElement('div');
            iDiv.className = 'sticker';
            iDiv.style["background-color"] = colorMap[Math.floor(newState[idx] / 9)]
            document.getElementById(faceNames[i]).appendChild(iDiv);
            idx = idx + 1
        }
    }
}

function buttonPressed(ev) {
    var face = ''
    var direction = '1'

    if (ev.shiftKey) {
        direction = '-1'
    }
    if (ev.which == 85 || ev.which == 117) {
        face = 'U'
    } else if (ev.which == 68 || ev.which == 100) {
        face = 'D'
    } else if (ev.which == 76 || ev.which == 108) {
        face = 'L'
    } else if (ev.which == 82 || ev.which == 114) {
        face = 'R'
    } else if (ev.which == 66 || ev.which == 98) {
        face = 'B'
    } else if (ev.which == 70 || ev.which == 102) {
        face = 'F'
    }
    if (face != '') {
        clearSoln();
        moves.push(face + "_" + direction);
        nextState();
    }
}


function enableScroll() {
    document.getElementById("first_state").disabled = false;
    document.getElementById("prev_state").disabled = false;
    document.getElementById("next_state").disabled = false;
    document.getElementById("last_state").disabled = false;
}

function disableScroll() {
    //so keyboard input can work without having to click away from disabled button
    document.getElementById("first_state").blur();
    document.getElementById("prev_state").blur();
    document.getElementById("next_state").blur();
    document.getElementById("last_state").blur();

    document.getElementById("first_state").disabled = true;
    document.getElementById("prev_state").disabled = true;
    document.getElementById("next_state").disabled = true;
    document.getElementById("last_state").disabled = true;
}

/*
	Clears solution as well as disables scroll
*/
function clearSoln() {
    solveIdx = 0;
    solveStartState = [];
    solveMoves = [];
    solveMoves_rev = [];
    solution_text = null;
    document.getElementById("solution_text").innerHTML = "Solution:";
    disableScroll();
}

function setSolnText(setColor = true) {
    solution_text_mod = JSON.parse(JSON.stringify(solution_text))
    if (solveIdx >= 0) {
        if (setColor == true) {
            solution_text_mod[solveIdx] = solution_text_mod[solveIdx].bold().fontcolor("blue")
        } else {
            solution_text_mod[solveIdx] = solution_text_mod[solveIdx]
        }
    }
    document.getElementById("solution_text").innerHTML = "Solution: " + solution_text_mod.join(" ");
}

function enableInput() {
    document.getElementById("scramble").disabled = false;
    document.getElementById("solve").disabled = false;
    $(document).on("keypress", buttonPressed);
}

function disableInput() {
    document.getElementById("scramble").disabled = true;
    document.getElementById("solve").disabled = true;
    $(document).off("keypress", buttonPressed);
}

function nextState(moveTimeout = 0) {
    if (moves.length > 0) {
        disableInput();
        disableScroll();
        move = moves.shift() // get Move

        //convert to python representation
        state_rep = reOrderArray(state, FEToState)
        newState_rep = JSON.parse(JSON.stringify(state_rep))

        //swap stickers
        for (var i = 0; i < rotateIdxs_new[move].length; i++) {
            newState_rep[rotateIdxs_new[move][i]] = state_rep[rotateIdxs_old[move][i]]
        }

        // Change move highlight
        if (moveTimeout != 0) { //check if nextState is used for first_state click, prev_state,etc.
            solveIdx++
            setSolnText(setColor = true)
        }
        //convert back to HTML representation
        newState = reOrderArray(newState_rep, stateToFE)

        //set new state
        setStickerColors(newState)

        //Call again if there are more moves
        if (moves.length > 0) {
            setTimeout(function() {
                nextState(moveTimeout)
            }, moveTimeout);
        } else {
            enableInput();
            if (solveMoves.length > 0) {
                enableScroll();
                setSolnText();
            }
        }
    } else {
        enableInput();
        if (solveMoves.length > 0) {
            enableScroll();
            setSolnText();
        }
    }
}

function scrambleCube() {
    disableInput();
    clearSoln();

    numMoves = randInt(100, 200);
    for (var i = 0; i < numMoves; i++) {
        moves.push(legalMoves[randInt(0, legalMoves.length)]);
    }

    nextState(0);
}

function solveCube() {
    disableInput();
    clearSoln();
    document.getElementById("solution_text").innerHTML = "SOLVING..."
    feState = reOrderArray(state, FEToState);
    date1 = new Date();

    $.ajax({
        url: '/solve',
        data: {
            "state": JSON.stringify(feState)
        },
        type: 'POST',
        dataType: 'json',
        success: function(response) {
            solveStartState = JSON.parse(JSON.stringify(state))
            solveMoves = response["moves"];
            solveMoves_rev = response["moves_rev"];
            solution_text = response["solve_text"];
            solution_text.push("SOLVED!");
            setSolnText(true);

            moves = JSON.parse(JSON.stringify(solveMoves));
            var date2 = new Date();
            var seconds = ((date2.getTime() - date1.getTime()) / 1000);
            document.getElementById("consumeTime").textContent = "本次计算用了" + seconds + " s"
            setTimeout(function() {
                nextState(500);
            }, 500);
        },
        error: function(error) {
            console.log(error);
            document.getElementById("solution_text").innerHTML = "等等"
        },
    });
}

$(document).ready($(function() {
    disableInput();
    clearSoln();
    setStickerColors(initState);
    enableInput();

    //Initial orientation
    $("#cube").css("transform", "translateZ( -100px) rotateX( " + rotX + "deg) rotateY(" + rotY + "deg)");

    $('#scramble').click(function() {
        scrambleCube()
    });

    $('#solve').click(function() {
        solveCube()
    });

    $('#first_state').click(function() {
        if (solveIdx > 0) {
            moves = solveMoves_rev.slice(0, solveIdx).reverse();
            solveIdx = 0;
            nextState();
        }
    });

    $('#prev_state').click(function() {
        if (solveIdx > 0) {
            solveIdx = solveIdx - 1
            moves.push(solveMoves_rev[solveIdx])
            nextState()
        }
    });

    $('#next_state').click(function() {
        if (solveIdx < solveMoves.length) {
            moves.push(solveMoves[solveIdx])
            solveIdx = solveIdx + 1
            nextState()
        }
    });

    $('#last_state').click(function() {
        if (solveIdx < solveMoves.length) {
            moves = solveMoves.slice(solveIdx, solveMoves.length);
            solveIdx = solveMoves.length
            nextState();
        }
    });

    $('#cube_div').on("mousedown", function(ev) {
        lastMouseX = ev.clientX;
        lastMouseY = ev.clientY;
        $('#cube_div').on("mousemove", mouseMoved);
    });
    $('#cube_div').on("mouseup", function() {
        $('#cube_div').off("mousemove", mouseMoved);
    });
    $('#cube_div').on("mouseleave", function() {
        $('#cube_div').off("mousemove", mouseMoved);
    });

    console.log("ready!");
}));


function mouseMoved(ev) {
    var deltaX = ev.pageX - lastMouseX;
    var deltaY = ev.pageY - lastMouseY;

    lastMouseX = ev.pageX;
    lastMouseY = ev.pageY;

    rotY += deltaX * 0.2;
    rotX -= deltaY * 0.5;

    $("#cube").css("transform", "translateZ( -100px) rotateX( " + rotX + "deg) rotateY(" + rotY + "deg)");
}