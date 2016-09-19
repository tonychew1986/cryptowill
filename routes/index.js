var express = require('express');
var router = express.Router();

var bitcoin = require('bitcoinjs-lib');

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', {
    title: 'Homepage'
  });
});

router.get('/create-will', function(req, res) {
  res.render('create-will', {
    title: 'Create Will'
  });
});


router.get('/will-instruction', function(req, res) {
  res.render('will-instruction', {
    title: 'Will Instruction'
  });
});

router.get('/will-setting', function(req, res) {
  var network = bitcoin.networks.testnet;
  var tempKey = bitcoin.ECPair.makeRandom({ network: network });
  var tempAddress = tempKey.getAddress();
  
  console.log("tempKey: "+tempKey);
  console.log("tempAddress: "+tempAddress);
    
  res.render('will-setting', {
    title: 'Will Setting',
    tempKey: tempKey,
    tempAddress: tempAddress
  });
});

router.get('/will-summary', function(req, res) {
  res.render('will-summary', {
    title: 'Will Summary'
  });
});

router.get('/will-confirmation', function(req, res) {
  res.render('will-confirmation', {
    title: 'Will Confirmation'
  });
});

//user send bitcoin to newly generated address
//create for >0 confirmation then ...
//newly generated address signs and create new transaction to final bitcoin address
router.post('/push-create-will', function(req, res) {
  var tempKey = req.body.tempKey;
  var tempAddress = req.body.tempAddress;
    
  var destAddress = "mqZzFDLHXJwQBT9MkBxoTsSvLLXuNQkPyK";

  console.log("tempKey: "+tempKey);
  console.log("tempAddress: "+tempAddress);
  
    //blockchain.t.faucet(alicesAddress, 2e4, function (err, unspentA) {
    //  if (err) return done(err)
    //
    //  blockchain.t.faucet(bobsAddress, 2e4, function (err, unspentB) {
    //    if (err) return done(err)
    //
    //    var tx = new bitcoin.TransactionBuilder(network)
    //    tx.addInput(unspentA.txId, unspentA.vout)
    //    tx.addInput(unspentB.txId, unspentB.vout)
    //    tx.addOutput('mrCDrCybB6J1vRfbwM5hemdJz73FwDBC8r', 1e4)
    //    tx.addOutput('2NByiBUaEXrhmqAsg7BbLpcQSAQs1EDwt5w', 1e4)
    //    tx.sign(0, alice)
    //    tx.sign(1, bob)
    //
    //    blockchain.t.transactions.propagate(tx.build().toHex(), done)
    //  })
    //})
});

router.get('/update-will', function(req, res) {
  res.render('update-will', {
    title: 'Update Will'
  });
});

router.get('/redeem-will', function(req, res) {
  res.render('redeem-will', {
    title: 'Redeem Will'
  });
});

router.get('/redeem-will-combine', function(req, res) {
  res.render('redeem-will-combine', {
    title: 'Redeem Will Combine'
  });
});

router.get('/redeem-will-content', function(req, res) {
  res.render('redeem-will-content', {
    title: 'Redeem Will Content'
  });
});

router.get('/how-it-works', function(req, res) {
  res.render('how-it-works', {
    title: 'How it works'
  });
});

router.get('/customer-support', function(req, res) {
  res.render('customer-support', {
    title: 'Customer Support'
  });
});

module.exports = router;
