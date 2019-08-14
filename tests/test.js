var responses = [
    'Expect to hear from our corporate lending offices shortly at .',
    ' We are looping in Stella for this cash purchase to expedite the process for you!',
    ' Melissa from our wealth management team is also available at melissa@homeloanwizard.net to assist you in any way necessary.',
    'We\'re sorry, but due to your answers we are unable to provide the services you require at this time.',
    ' If you would like financial counselling please contact us at financialconsulting@homeloanwizard.net.'
]
var data = [
    //valid responses
    {price:'8000000', down:'0', result:responses[0]}, //lending only
    {price:'100000', down:'100000', result:responses[0]+responses[1]}, //lending and stella
    {price:'2000000', down:'300000', result:responses[0]+responses[2]}, //lending and melissa
    {price:'600000', down:'600000', result:responses[0]+responses[1]+responses[2]}, //lending, stella, and melissa
    //invalid responses
    {price:'-1', down:'0'},
    {price:'0', down:'-1',},
    {price:'-1', down:'-1'},
    {price:'0', down:'0'},
    {price:'a', down:'a'},
    //bankruptcy
    {bankrupt: 'bankrupt', result:responses[3]},
    {bankrupt: 'foreclosure', result:responses[3]},
    {bankrupt: 'both', result:responses[3]+responses[4]}
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