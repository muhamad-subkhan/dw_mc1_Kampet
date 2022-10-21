import React from 'react'
import Data from "../data/data.json"
import { Link } from "react-router-dom"

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
                    <Link to={`/detail/${items.id}`}
                    style={{
                        textDecoration: "none",
                        color: "black"
                    }}>
                    <div style={{
                        display: "flex",
                        background: "grey",
                        margin: "15px",
                        padding: "25px"
                    }}
                    >
                        <img src={items.image} alt="_Blank" className='images' />
                        <div style={{
                            marginLeft: "10px"
                        }}>
                            {/* <Link to="/Detail"> */}
                            <h1>{items.username}</h1>
                            {/* </Link> */}

                            <h3>{items.follower}</h3>
                        </div>
                        </div>
                        </Link>
                )
            })}

    </div>
  )
}

export default todo