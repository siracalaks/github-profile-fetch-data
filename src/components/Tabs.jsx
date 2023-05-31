import React from 'react'

const Tabs = ({type, setType}) => {
  return (
    <>
         <button
          className={`${type === "repos" && "text-info"}`}
          onClick={() => setType("repos")}
        >
          Repositories
        </button>
        <button
          className={`${type === "received_events" && "text-info"}`}
          onClick={() => setType("received_events")}
        >
          Activity
        </button>
        <button
          className={`${type === "followers" && "text-info"}`}
          onClick={() => setType("followers")}
        >
          Followers
        </button>
    </>
  ) 
}

export default Tabs