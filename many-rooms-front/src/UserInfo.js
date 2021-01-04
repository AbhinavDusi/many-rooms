import PartyBox from './Screens/Boxes/PartyBox'; 
import FriendBox from './Screens/Boxes/FriendBox'; 

let userInfo = {}; 

export const getUserInfo = url => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                const username = result[0][0].display_name;
                const userID = result[0][0].user_id;
                const previousParties = result[1].map(room => 
                    <PartyBox
                        key = {room.id}
                        id = {room.id}
                        title = {room.title}
                        host = {room.host}
                        hostID = {room.host_id}
                        posts = {room.posts}
                        attendees = {room.attendees}
                        tags = {room.tags}
                    />
                ); 
                const archivedParties = result[2].map(room => 
                    <PartyBox
                        key = {room.id}
                        id = {room.id}
                        title = {room.title}
                        host = {room.host}
                        hostID = {room.host_id}
                        posts = {room.posts}
                        attendees = {room.attendees}
                        tags = {room.tags}
                    />
                ); 
                const friends = result[3].map(friend => 
                    <FriendBox
                        key = {friend.user_id}
                        username = {friend.display_name}
                        id = {friend.user_id}
                    />
                ); 
                userInfo = {
                    username,
                    userID,
                    previousParties,
                    archivedParties,
                    friends
                }
            }).then(() => {
                resolve(userInfo);
            });
    }); 
}

export const getUserID = () => {
    return document.cookie
        .split('; ')
        .map(cookie => cookie.split('='))
        .find(cookie => cookie[0] === 'username')[1];
}