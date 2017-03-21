var request = require('superagent')

class Iss {
  constructor(){
    this.url = 'https://api.wheretheiss.at/v1/satellites/25544'
  }

  stationDetails(callback){
    request.get(this.url)
      .then( (res) => {
        callback(res.body)
      })
  }
}

var api = new Iss()

api.stationDetails( (res) => {
  console.log(res)
})
