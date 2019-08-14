var responses = [
    'Expect to hear from our corporate lending offices shortly at .',
    ' We are looping in Stella for this cash purchase to expedite the process for you!',
    ' Melissa from our wealth management team is also available at melissa@homeloanwizard.net to assist you in any way necessary.',]
var data = [
    {price:'8000000', down:'0', result:responses[0]},
    {price:'100000', down:'100000', result:responses[0]+responses[1]},
    {price:'2000000', down:'300000', result:responses[0]+responses[2]},
    {price:'600000', down:'600000', result:responses[0]+responses[1]+responses[2]}
]
var page
module.exports = {
    before: browser => page = browser.page.homeLoanPage(),
    beforeEach: function() {page.navigate()},
    after: function() {page.end()},

    'Test Stella/Melissa messages': function() {
        data.forEach(data => {
            page.testInputs(data)
                .navigate()
        })
    }
}