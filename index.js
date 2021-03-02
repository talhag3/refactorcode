const axios = require('axios')
const request = require('request')
const options = {
    url: 'https://api.github.com/users/talhag3',
    method: 'get',
    headers: {
        'User-Agent': 'request'
    }
}


/**
 * Issue Replacing request for old callback code 
 * this is just a small part of code 
 */
const __getdata = function (creds, logger, done) {
    // NEW 
    axios(options).then(res => {
        /*
        SOME PROCESSING
        */
        done(null, res.data)
    }).catch(err => {
        done(err, null)
    })

    // OLD REMOVED
    // request(options, function (error, response, body) {
        /*
        SOME PROCESSING
        */
    //    done(null,data)
    // });
}

const __getdataold = function (creds, logger, done) {
    
    // OLD REMOVED
    request(options, function (error, response, body) {
        //console.log(body)
        done(null,body)
    });
}

exports.fetch = (done) => {
    __getdata(creds='',logger='',function(err,data){
        /*
        SOME PROCESSING
        */
        done(err=null,data)
    })
}

exports.fetchold = (done) => {
    __getdataold(creds='',logger='',function(err,data){
        /*
        SOME PROCESSING
        */
        return done(err=null,data)
    })
}