var commands = {
    /**
     * Tests explicitly the results based on housing and down payment prices.
     * @param {object} data {price: '', down: ''} - The price of the house and the down payment, both given as strings.
     */
    testInputs: function (data) {
        this
            .setValue('@priceField', data.price)
            .setValue('@downField', data.down)
        for (let i = 0; i < 6; i++) {
            this.click('@firstBtn')
        }
        this.expect.element('@message').text.to.equal(data.result)

        return this
    }
}

module.exports = {
    url: 'http://localhost:3000/#/wSix',
    commands: [commands],
    elements: {
        //buttons
        firstBtn: {
            selector: '//button[1]',
            locateStrategy: 'xpath'
        },
        //fields
        priceField: '[name=price]',
        downField: '[name=down]',
        //message
        message: {
            selector: '(//*[@class="vert-align"]//*)[3]',
            locateStrategy: 'xpath'
        }
    }
}