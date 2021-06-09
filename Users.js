const users = [];

const addUser = (id) =>{
    const user = id;
    users.push(user);

    return {user};
}

const removeUser = (id) =>{
    const index = users.findIndex((user) => user.id === id);

    if(index!==-1)
    {
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => users.find((user) => users.id===id);

module.exports = {addUser, removeUser, getUser};