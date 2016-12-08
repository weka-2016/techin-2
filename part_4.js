var request = require('superagent')

// describe what's going on here, and what would be needed to make this work

request.get('http://www.nasa.gov/api/satellites/2', aThing)

// feedback :
- async callbacks take (err, data)  or (err, response)
