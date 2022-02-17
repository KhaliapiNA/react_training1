import React from 'react';
import s from './ContentProfile.module.css';
import Description from "./Description/Description";
import MyPosts from "./MyPost/MyPosts";



const ContentProfile = function (props) {

    return (
        <div>
            <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b308264-dd6e-449d-b589-1d067d8184f5/d30efj7-1be94a19-acbb-493b-bafc-62c58378a190.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViMzA4MjY0LWRkNmUtNDQ5ZC1iNTg5LTFkMDY3ZDgxODRmNVwvZDMwZWZqNy0xYmU5NGExOS1hY2JiLTQ5M2ItYmFmYy02MmM1ODM3OGExOTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I25b1K8Is7MahRI_5qEfyeXl6jy-fEQAKLx3ys34v8E' className={s.img1} />

            <Description /><br/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost} />


        </div>);
}

export default ContentProfile;