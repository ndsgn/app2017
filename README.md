# 2017 NDesign Curitiba

## Build setup

For the front end:

``` bash
cd front

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For the back end:

``` bash

# open another terminal window

# install virtual env
[sudo] pip install virtualenv

# set up virtual environment
[sudo] virtualenv env
source env/bin/activate

# install requirements
cd back
pip install -r requirements.txt

# start local server localhost:5000
python app.py

```
