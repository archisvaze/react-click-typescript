import React from 'react'

function Card({ item, vote }: any) {
    return (
        <div className='card'>

            <img src={item.thumbnail} alt="" />

            <h4 className='title'>{item.title}</h4>
            <p className="channel">{item.channel}</p>

            <div className="stats-container">
                <p className="views">{item.views} views</p>
                <p className="ago">{item.ago} ago</p>
            </div>

            <button onClick={() => {
                vote(item.id)
            }} className="vote-btn">Vote</button>
        </div>
    )
}

export default Card