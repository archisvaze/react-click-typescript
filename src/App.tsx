import React, { useState, useEffect } from 'react';
import Card from './components/Card';



const data = [
  {
    id: 1,
    thumbnail: "https://i.ytimg.com/vi/1BTxxJr8awQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCV48Fi5hGLroKkDkbmTpG7suqOwA",
    title: "What does the speed of light look like on earth?",
    channel: "Airplane Mode",
    views: "5M",
    ago: "2 weeks"
  },
  {
    id: 2,
    thumbnail: "https://i.ytimg.com/an_webp/UehilhnMt5Y/mqdefault_6s.webp?du=3000&sqp=CNTXopsG&rs=AOn4CLDcPU95Oamqg0XSz0napiirzw8iaQ",
    title: "Eagles - Hotel California",
    channel: "ALL MIXED",
    views: "20M",
    ago: "7 months"
  },
]


function App() {

  const [name, setname] = useState("")
  const [votes, setvotes] = useState([])

  useEffect(() => {
    fetch("https://community-clicks.onrender.com")
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }, [])


  const vote = async (id: any) => {
    console.log(id);
    const reqOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name: name.length > 1 ? name : undefined })
    }
    await fetch("https://community-clicks.onrender.com", reqOptions)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }


  const getVotes = async () => {
    await fetch("https://community-clicks.onrender.com/votes")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setvotes(data);
      })
  }




  return (
    <div className="App">

      <header>
        <h1>Community Voting Link</h1>
      </header>

      <main>

        <div className="input-container">
          <input onChange={(e) => {
            setname(e.target.value)
          }} type="text" placeholder='Enter your name' />
        </div>
        <div className="cards-container">
          {data.map((item: any) => {
            return (
              <Card key={item.id} item={item} vote={vote} />
            )
          })}
        </div>

        <button onClick={() => {
          getVotes();
        }} className="vote-btn">Get Votes</button>
      </main>

      <div className="table">
        <div className="table-headers">
          <h4>Name</h4>
          <h4>IP Address</h4>
          <h4>Voted for</h4>
        </div>

        <div className="votes-container">
          {votes.map((obj: any) => {
            return (
              <div className="vote">
                <p>{obj.name}</p>
                <p>{obj.ip}</p>
                <p>#{obj.id}</p>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  );
}

export default App;
