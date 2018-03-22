# CSE4186
## 20180322 6th assignment

---

### How to run it locally

1. Clone this repository:
```
$ git clone https://github.com/llb1026/Simple-Node.js-App.git
$ cd Simple-Node.js-App
```

2. Set up
```
$ npm install
```

3. Run
```
$ node app.js
```

then open http://localhost:3000/

**(Temporary!)** http://54.162.161.140:3000/

---

### How to use it

* If you want to create new dump data, go to *localhost:3000/*, fill in the form and submit it.

* You can also create new dump data with query string in url, such as *localhost:3000/update?api_key=**blahblah**&field1=**00000***.

* Go and check the most recent *N* data via *localhost:3000/get?count=**N***. Put some numbers of data you want to check.

* If you just want to see all dump data, go to *localhost:3000/get*.

---

### Description of the project directories (TL;DR)

* **app.js** : this is the very basic file to execute this project. 'app.js' is the typical(almost like criterial) filename when you make an express application, so I followed the rules.

* **views/** : In order to make this web application under MVC pattern, I separated view files from the root directory. This directory contains 2 ejs files. (If you're not familiar with embedded javascript, go to http://ejs.co/).

* **routes/** : There's one js file in this directory which functions as controller. I just put the controller part source codes there without considering MVC pattern actually... But it works well though..

* **node_modules/** : The biggest directory but you don't even have to care for now. There's no chance to open this directory and change some files in it. NPM will take care of it.

* **data.txt** : All records of dump data.