import React from 'react'
import Data from "../data/data.json"

import "../css/todo.css"
// const style = {
//     card: {
//         background: "grey"
//     }
// }

function todo() {
    return (
        <div>
            {Data.map((items) => {
                return (
                    <div style={{
                        display: "flex",
                        background: "grey",
                        margin: "15px",
                        padding: "25px"
                    }}>
                        <img src={items.image} alt="_Blank" className='images' />
                        <div style={{
                            marginLeft: "10px"
                        }}>
                            <h1>{items.username}</h1>
                            <h3>{items.follower}</h3>
                        </div>
                </div>
                )
            })}

    </div>
  )
}

export default todo