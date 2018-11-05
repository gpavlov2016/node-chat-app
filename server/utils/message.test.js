const expect = require('expect');

var {generateMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Guy';
    var text = 'Test text';
    var msg = generateMessage(from, text);
    expect(msg.from).toBe(from);
    expect(msg.text).toBe(text);
    expect(typeof msg.createdAt).toBe('number');

  })
});
