function getStock(TickerSymbol){
  var baseurl = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="
  baseurl = baseurl + TickerSymbol + "&interval=5min&apikey=OC2YSAWC8NISWCQN"
  const url = baseurl
  const request = require("request");
      var options = {
        url : url,
        method: "GET",
        json: true

      }
      request(options, function(error,response,body){

        let stockDailyDataList = (Object.values(response.body)[1])
        let stockRecentData = (Object.values(stockDailyDataList)[0])
        console.log(Object.values(stockRecentData)[3])
      })
    return TickerSymbol
}


getStock("IBM")
//https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=


const https = require("https")
const options = {
  hostname: "https://www.alphavantage.co"
  port: 457
  path: getStock("IBM") +  "&interval=5min&apikey=OC2YSAWC8NISWCQN"
  method: "GET"
  json: true
}

const req = https.request(options, res -> {
  console.log(`statusCode: ${res.statusCode}`)
  res.on('data')
    porcess.stdout.write(d)
  })
})

  req.on('error', error => {
    console.error(error)
  })

req.end
}
