const users = []; 

userJoin = (id, username, room) => {
    const user = {id, username, room}; 
    users.push(user); 
    return user; 
}

userLeave = id => {
    const user = getCurrentUser(id); 
    const index = users.indexOf(user); 
    if (index > -1)
        users.splice(index, 1); 
}

getCurrentUser = id => {
    users.find(user => user.id === id); 
}

module.exports = { userJoin, userLeave, getCurrentUser }