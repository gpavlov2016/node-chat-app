const expect = require('expect');
const {Users} = require('./users');


describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Guy1',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Guy2',
      room: 'Node Course'
    }, {
      id: '3',
      name: 'Guy3',
      room: 'Node Course2'
    }]
  })

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Guy',
      room: 'Room1'
    }
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Guy1', 'Guy2']);
  });

  it('should return names for node course2', () => {
    var userList = users.getUserList('Node Course2');
    expect(userList).toEqual(['Guy3']);
  });

  it('should remove a user', () => {
    var userId = '1'
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '99'
    var user = users.removeUser(userId);

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);
    expect(user).toEqual({
      id: userId,
      name: 'Guy2',
      room: 'Node Course'
    });
  });

  it('should not find user', () => {
    var user = users.getUser('99');
    expect(user).toBe(undefined);
  });

});
