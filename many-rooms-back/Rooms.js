const rooms = {}; 

newRoomMessage = (id, userID, username, msg) => {
    if (id in rooms) {
        rooms[id] = [{userID, username, msg, key: rooms[id].length }, ...rooms[id]]; 
    } else {
        rooms[id] = [{userID, username, msg, key: 0}]; 
    }
    return rooms[id].length;
}

getAllMessages = id => {
    if (id in rooms) {
        return rooms[id];
    }
    return []; 
}

module.exports = { newRoomMessage, getAllMessages };