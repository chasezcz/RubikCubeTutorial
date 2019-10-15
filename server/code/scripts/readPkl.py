import cPickle as pickle

data = pickle.load(
    open("./testData/cube3/states_nnetPar200_depthP0.1_bfs0_nnet_solved_socket"))


for solution in data['solutions']['nnet']:
    print solution
