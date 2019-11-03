from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from RubikCubeTutorial.core.solver import solve
import cPickle as pickle
import numpy as np


def getMainView(request):
    # return the main page
    return render(request, 'index.html')


def getSolvePage(request):
    # return the resolution page
    return render(request, 'solver.html')


def getCubeState(request, state):
    # solve the request of query specified cube.

    context = {
        "state": state,
        "solution": solve(state)
    }
    print(context)

    return JsonResponse(context)
