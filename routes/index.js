var xlsx = require('node-xlsx')
var router = require('koa-router')();
const fs = require('fs');

router.get('/', function *(next) {
  yield this.render('index', {
    title: 'Hello World Koa!'
  });
});

router.get('/foo', function *(next) {
  yield this.render('index', {
    title: 'Hello World foo!'
  });
});

router.get('/one', function *(next){
  this.type = 'application/json';
  const data = [
    ["致富账号",'变成','变成'],
    [1, 2, 3],
    [true, false, null, 'sheetjs'],
    ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'],
    ['baz', null, 'qux'],
  ];
  const sheetOptions = {'!cols': [{wch: 6}, {wch: 7}, {wch: 10}, {wch: 20}]};
  var buffer = xlsx.build([{name: 'mySheetName', data: data}], {sheetOptions}); // Returns a buffer
  const filePath = './file.xlsx';
  fs.writeFileSync(filePath, buffer, 'binary');
  yield this.body = {
    render: 'render',
    msg:200
  }
});


module.exports = router;
