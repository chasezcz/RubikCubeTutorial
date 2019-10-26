from django.shortcuts import render
from RubikCubeTutorial.core.solver import solve
import cPickle as pickle


def getMainView(request):
    context = dict()

    # here we figure out the cube' state.
    # data = pickle.load(open("/home/chengze/Downloads/states.pkl"))
    # state = data['states'][0]

    # context['state'] = state
    # context['solution'] = solve(state)
    return render(request, 'index.html', context)


# def getTestView(request):
#     return render(request, 'myweb.html')
