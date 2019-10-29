from django.shortcuts import render
from django.http import HttpResponse
from RubikCubeTutorial.core.solver import solve
import cPickle as pickle
import numpy as np


def getMainView(request):
    return render(request, 'index.html')


def getCubeState(request, state):
    # context = dict()

    # # here we figure out the cube' state.
    # context['state'] = state
    # context['solution'] = solve(state)
    # return HttpResponse(context)
    return render(request, 'solver.html')
