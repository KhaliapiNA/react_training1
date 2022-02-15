
import {renderEntireTree} from "./render";
let state= {
    profilePage: {
    posts: [
        {id: 1, message: 'I am so ate', likesCount: 33},
        {id: 2, message: 'Leave place for dessert', likesCount: 23},
        {id: 3, message: 'It\'s not fair', likesCount: 13}
    ],
    newPostText: 'serenity-post'},
    messagesPage:{
    dialogsData: [
        {id: 'minako', name: 'Minako'/* src: 'https://i.pinimg.com/564x/02/26/3e/02263ec54bc522ece56ef0f893079567--sailor-venus-sailor-moon.jpg'*/},
        {id: 'rei', name: 'Rei' /*src: 'https://i.pinimg.com/236x/91/e7/6d/91e76d0922418adacbd15a26e2d86fff.jpg'*/},
        {id: 'ami', name: 'Ami'/* src: 'https://i.pinimg.com/736x/cd/51/e1/cd51e13e2d517f691935129e8ffe88a9.jpg'*/},
        {id: 'makoto', name: 'Makoto'},
        {id: 'michiru', name: 'Michiru' /*src: 'https://static.wikia.nocookie.net/sailormoonfanon/images/5/5f/Michiru-SOL.png/revision/latest?cb=20190324085751'*/}
    ],
    messagesData: [
        {id: 1, message: 'A new department store has opened in the city'},
        {id: 2, message: 'Can we go?'},
        {id: 3, message: 'Sure'}
    ]}
};

export let addPost = function(){
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
state.profilePage.posts.push(newPost);
renderEntireTree(state);
}
export let updateNewPostText = function(newText){

    state.profilePage.newPostText(newText);
    renderEntireTree(state);
}
export default state;