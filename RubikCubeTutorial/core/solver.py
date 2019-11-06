import os
import gc

import cPickle as pickle
import numpy as np

from multiprocessing import Process, Queue

from RubikCubeTutorial import settings
from RubikCubeTutorial.core.cube_utils.cube_interactive_simple import Cube
from RubikCubeTutorial.core.ml_utils import search_utils, nnet_utils

environment = Cube(N=3, moveType="qtm")


def dataListener(dataQueue, resQueue, gpuNum=None):
    nnet = nnet_utils.loadNnet(
        settings.MODEL_LOC, settings.MODEL_NAME, settings.USE_GPU, environment,
        gpuNum=settings.GPU_NUMS)
    while True:
        data = dataQueue.get()
        nnetResult = nnet(data)
        resQueue.put(nnetResult)


dataQueues = []
resQueues = []
for num in range(settings.NUM_PARALLEL):
    dataQueues.append(Queue(1))
    resQueues.append(Queue(1))

    dataListenerProc = Process(target=dataListener, args=(
        dataQueues[num], resQueues[num], settings.GPU_NUMS[num],))
    dataListenerProc.daemon = True
    dataListenerProc.start()


def heuristicFn_nnet(x):
    # Write data
    parallelNums = range(min(settings.NUM_PARALLEL, x.shape[0]))

    splitIdxs = np.array_split(np.arange(x.shape[0]), len(parallelNums))
    for num in parallelNums:
        dataQueues[num].put(x[splitIdxs[num]])

    # Check until all data is obtaied
    results = [None]*len(parallelNums)
    for num in parallelNums:
        results[num] = resQueues[num].get()
    results = np.concatenate(results)

    return(results)


def reOrderArray(arr, indecies):
    temp = []
    for i in range(len(indecies)):
        index = indecies[i]
        temp.append(arr[index])
    return np.asarray(temp)


def validSoln(state, soln, Environment):
    solnState = state
    for move in soln:
        solnState = Environment.next_state(solnState, move)
    return(Environment.checkSolved(solnState))


def solve(stateStr):
    # convert state string to numpy array
    state = np.fromstring(stateStr[1:-1], sep=",", dtype=np.int64)
    # get bfs solver
    BestFS_solve = search_utils.BestFS_solve(
        [state], heuristicFn_nnet, environment, bfs=0)

    # start search
    isSolved, solveSteps, nodesGenerated_num = BestFS_solve.run(
        numParallel=settings.NNET_PARALLEL,
        depthPenalty=settings.DEPTH_PENALTY,
        verbose=settings.VERBOSE)

    # collect unuse memory
    BestFS_solve = []
    del BestFS_solve
    gc.collect()

    # get true solution and verify it
    soln = solveSteps[0]
    return soln
