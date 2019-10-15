# RubikCubeTutorial

Based on DeepCubeA's deep learning technology, target to teach people who are interested in solving rubik's cube how to recover the six-sided 3x3 rubik's cube.

## 1. Base

Thanks to [DeepCubeA' code](https://codeocean.com/capsule/5723040/tree/v1)

## 2. Install

### 2.1 System requirements

- ubuntu

    1. `apt update && apt install -y --no-install-recommends\`

        `build-essential=12.4ubuntu1\`

        `libboost-all-dev=1.65.1.0ubuntu1\`

        `libboost-dev=1.65.1.0ubuntu1`

    2. `wget https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/Miniconda3-latest-Linux-x86_64.sh&&`

        `mv Miniconda3-latest-Linux-x86_64.sh miniconda-installer.sh && sh miniconda-installer.sh`

        then finish the process by the tips.

### 2.2 conda

create a vitual environment named `cube`

`conda create -n cube python==2.7.5 tensorflow-gpu==1.8.0 && conda clean --yes --all`

activate `cube`

`source activate cube`

### 2.3 pip

`pip update && pip install --upgrade dm-sonnet==1.10 matplotlib==2.2.3`

## 3. Deploy

- `source activate cube`
- `python manage.py runserver x.x.x.x:port`

Finish it!
