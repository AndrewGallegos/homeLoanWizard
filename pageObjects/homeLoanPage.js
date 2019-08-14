var commands = {
    multClick: function(selector, num) {
        for (let i=0; i < num; i++) {
            this.click(selector)
        }
        return this
    },

    testInputs: function (data) {
            this
            .setValue('@priceField', data.price)
            .setValue('@downField', data.down)
        this.multClick('@firstBtn', 2)
        switch(data.bankrupt) {
            case('both'): {
                this.click('@bothBtn')
                break
            }
            case('bankrupt'): {
                this.click('@bankruptBtn')
                break
            }
            case('foreclosure'): {
                this.click('@foreclosureBtn')
                break
            }
            default: {
                this.click('@noBtn')
            }
        }
        this.multClick('@firstBtn', 3)
        if (data.result) {
            this.expect.element('@message').text.to.equal(data.result)
        }else{
            this.getText('@message', function(result){
                console.log('Message reads: ' + result.value)
            })
        }

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
        },
        //bankruptcy/foreclosure buttons
        noBtn: '[value="Has never been in bankruptcy"]',
        bankruptBtn: '[value="Has had bankruptcy before"]',
        foreclosureBtn: '[value="Has had a foreclosure before"]',
        bothBtn: '[value="Has had both a foreclosure and a bankruptcy"]'
    }
}