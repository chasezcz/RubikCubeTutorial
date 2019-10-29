import os


def eachFile(filepath):
    fileNames = os.listdir(filepath)  # 获取当前路径下的文件名，返回List
    for file in fileNames:
        newDir = filepath + '/' + file  # 将文件命加入到当前文件路径后面
        # if os.path.isdir(newDir): # 如果是文件夹
        if os.path.isfile(newDir):  # 如果是文件
            if os.path.splitext(newDir)[1] == ".pyc":  # 判断是否是txt
                print("delete {}".format(newDir))
                os.remove(newDir)
        else:
            eachFile(newDir)  # 如果不是文件，递归这个文件夹的路径


if __name__ == '__main__':
    path = os.getcwd()
    eachFile(path)
