const expect = require('expect');

const { generateMessage } = require('./message');

describe('generateMessage', () => {

    it('should create correct message object', () => {
        const from = "Ivan";
        const text = "It's a test";
        const message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    })
});