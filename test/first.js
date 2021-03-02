const rs = require('../index')
const chai = require('chai')
const { describe } = require('mocha')
const expect = chai.expect
var should = require('chai').should();

const nock = require('nock');

describe('practice test ' , function (){
    // It works fine 
    it("testing with request",function (done){
        nock('https://api.github.com')
        .get('/users/talhag3')
        .reply(200,{id:'talhag3'})

        rs.fetchold(function(err,data){
            data.should.have.property('id').equal('8talhag3')
            done()
        })

	})

    // There is issue 
    it("testing with axios",function (done){
        this.timeout(10000)
        nock('https://api.github.com')
        .get('/users/talhag3')
        .reply(200,{id:'talhag3'})

        rs.fetch(function(err,data){
            // OK with comment line below
            // data.should.have.property('id').equal('talhag3') 
            // issue
            data.should.have.property('id').equal('8talhag3')
            done()
        })
	})
})