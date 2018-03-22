var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res) {
    res.render('index', {title: '20131144 JIYUN LEE | Coursework #6', profile: undefined});
});

// url 쿼리스트링을 통해 덤프 데이터 입력
router.get('/update', function(req, res) {
    var api_key = req.param('api_key');
    var field1 = req.param('field1');
    var date = new Date().toISOString().replace(/T/, '_').replace(/\..+/, '');
    var body = date + ',' + api_key + ',' + field1 + '\n';

    filePath = 'data.txt';
    req.on('data', function(data) {
        body += (data + '\n');
    });

    req.on('end', function() {
        fs.appendFile(filePath, body, function() {
            res.end();
        });
    });
    res.redirect('/');
});

// 가장 최근의 n개의 덤프 데이터 화면에 출력
router.get('/get', function(req, res) {
    var tmp;
    var data = fs.readFileSync('./data.txt', 'utf8');
    var lines = data.split('\n');
    var total_line = lines.length-1;

    if (req.param('count')) {
        tmp = req.param('count');
        console.log(tmp);
    } else {
        tmp = total_line;
    }

    function get_line(filename, line_no, callback) {
        var data = fs.readFileSync(filename, 'utf8');
        var lines = data.split('\n');
        if (+line_no > lines.length) {
            throw new Error('Out of range');
        }
        callback(null, lines[+line_no]);
    }

    var result = [];

    for (var x=1; x<=tmp; x++) {
        get_line('./data.txt', total_line-x, function(err, line) {
            result[x] = line;
            console.log('The line: ' + line);
            console.log('lines[' + x + ']');
        });
    }

    res.render('get', {title: '20131144 JIYUN LEE | DUMP DATAS', profile: undefined, value: tmp, result: result});
});

// 일정시간마다 랜덤으로 덤프 데이터 생성
setInterval(function() {
    var random_string = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 6);
    var random_number = (Math.random() * (30.00 - 15.00) + 15.00).toFixed(2);
    var date = new Date().toISOString().replace(/T/, '_').replace(/\..+/, '');
    var body = date + ',' + random_string + ',' + random_number + '\n';

    fs.appendFile('data.txt', body, function (err) {
        if (err) throw err;
        console.log(body)
    });
}, 10 * 1000);

module.exports = router;