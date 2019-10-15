from django.shortcuts import render
# from RubikCubeTutorial.core.solver import *


def getMainView(request):
    context = dict()
    context['hello'] = 'Hello frome'
    context['a0'] = {
        'aef': 12,
        'wef': 213,
    }

    # here we figure out the cube' state.
    # return solve()

    return render(request, 'index.html', context)
