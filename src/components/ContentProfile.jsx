import React from 'react';
import './ContentProfile.css';
const ContentProfile = function () {
    return (
        <div className="content">
            <div>
                <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b308264-dd6e-449d-b589-1d067d8184f5/d30efj7-1be94a19-acbb-493b-bafc-62c58378a190.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViMzA4MjY0LWRkNmUtNDQ5ZC1iNTg5LTFkMDY3ZDgxODRmNVwvZDMwZWZqNy0xYmU5NGExOS1hY2JiLTQ5M2ItYmFmYy02MmM1ODM3OGExOTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.I25b1K8Is7MahRI_5qEfyeXl6jy-fEQAKLx3ys34v8E' className='img1' />
            </div>
            <div>
                <img src="https://i.pinimg.com/564x/f9/80/74/f9807403594036b63f0879415458b7d6.jpg" className="icon" />
                description
              </div>
            <div>My post</div>
            <div>new post</div>
            <div className='item'>
                <div className='item'>post1</div>
                <div className='item'>post2</div>
                <div className='item'>post3</div>
                <div className='item'>post4</div>
            </div>
        </div>);
}

export default ContentProfile;