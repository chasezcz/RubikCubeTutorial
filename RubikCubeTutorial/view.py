import numpy as np

from settings import STATES_LOC

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from RubikCubeTutorial.core.solver import solve, solve_demo


def getMainView(request):
    # return the main page
    return render(request, 'index.html')


@csrf_exempt
def solveState(request):
    # solve the request of figure cube
    state = request.POST.get('state')

    solution = solve(state)

    solve_text = [move[0]+("" if move[1] == 1 else "'") for move in solution]
    moves = [move[0]+("_1" if move[1] == 1 else "_-1") for move in solution]
    moves_rev = [move[0]+("_-1" if move[1] == 1 else "_1")
                 for move in solution]

    return JsonResponse({
        "moves": moves,
        "moves_rev": moves_rev,
        "solve_text": solve_text,
    })
