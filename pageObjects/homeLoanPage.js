module.exports = {
    url: 'http://localhost:3000/#/wSix',
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