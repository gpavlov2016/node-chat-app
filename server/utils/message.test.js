const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message')

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Guy';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps?q=15,19'
    var msg = generateLocationMessage(from, latitude, longitude);
    expect(msg.from).toBe(from);
    expect(msg.url).toBe(url);
    expect(typeof msg.createdAt).toBe('number');
  });
});
