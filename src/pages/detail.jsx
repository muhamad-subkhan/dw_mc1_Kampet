import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import Data  from "../data/data.json";


import "../css/todo.css"


function Detail() {
    const { id } = useParams()

    const [state, setState] = useState()
    
    useEffect(() => {
        setState(Data.filter((items) => items.id === parseInt(id)))
    }, [id])
    console.log("hasas", state);
    
  return (
      <div style={{
          background: "grey"
      }}>
          {state ? (
              <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems:"center"
              }}>
                  <img src={state[0].image} alt="_Blank"
                    className="images"
                      style={{
                        border: "7px solid red"
                    }}
                  />
                  <h1>@{state[0].username}</h1>
                  <div style={{
                      display: "flex"
                  }}>
                      <h4
                          style={{
                          marginRight: "25px"
                          }}>{state[0].follower}
                          <br />
                          <h3>Followers</h3>
                      </h4>
                      <h4>{state[0].following}
                          <br />
                          <h3>Following</h3>
                      </h4>
                  </div>

                  <Link to="/">Back</Link>
              </div>
              ) : (<></>)}
       
    </div>
  )
}

export default Detail