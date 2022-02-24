const userResponseMock = {
    firstName: "David",
    email: "david@gmail.com",
};
const getAllUsers = () => ['david', 'jean-luc','aimene','rida'];
const createUser = () => {
    const res = {firstname: 'david', email: 'david@gmail.com'};
    return res;
}; 
module.exports = { userResponseMock, getAllUsers, createUser };