var router = require('koa-router')();

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
  yield this.body ={
    title:'render',
    msg: 20
  }
});


module.exports = router;
