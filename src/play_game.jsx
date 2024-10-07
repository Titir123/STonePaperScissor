import React, { useState } from 'react'
import img1 from '../src/Images/png-transparent-rock-paper-scissors-computer-icons-scissors-game-white-face-thumbnail.png'
import img2 from '../src/Images/paper.jpeg'
import img3 from '../src/Images/png-transparent-hand-rock-paper-scissors-computer-icons-hand-angle-text-photography-thumbnail.png'
import img4 from '../src/Images/istockphoto-1269211670-612x612.jpg'

export default function Play_game() {

const [myscore, setMyscore] = useState(0)
const [machinescore, setMachinescore] = useState(0)
const [round, setRound] = useState(0)
const images = [img1, img2, img3]

const restart = () => {
        setRound(0)
        setMyscore(0)
        setMachinescore(0)   
}

const handleClick = (i) =>{

    
    let machine = Math.floor(Math.random() * 3) + 1
    console.log(machine);
    

    if( i === 0)
    {
        if (machine === 1)
        {
            setMyscore(myscore + 1)
            setMachinescore(machinescore + 1)

        }
        else if(machine === 2)
        {
            setMachinescore(machinescore + 1)
        }
        else
        setMyscore(myscore + 1)
    }
    if ( i === 1){
        if(machine === 3)
            setMachinescore(machinescore + 1)
        else if(machine === 1)
        {
            setMyscore(myscore + 1)
        }
        else
        {
            setMyscore(myscore + 1)
            setMachinescore(machinescore + 1) 
        }

    }
    if(i === 2){
        if( machine === 1)
            setMachinescore(machinescore + 1)
        else if(machine=== 2){
            setMyscore(myscore + 1)
        }
        else
        {
            setMyscore(myscore + 1)
            setMachinescore(machinescore + 1)  
        }
    }
     setRound(round + 1)   
 }  

 return (
    <>
    {
  round < 10 ? 
    <>
      <div style={{
        backgroundColor: "black", 
        color: "white", 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        padding: "20px"
      }}>

        {/* Instructions Section */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {/* <h2>ROCK PAPER SCISSOR</h2> */}
        <img style={{width:"100px", height:"100px", borderRadius:"50%"}} src={img4} alt="" />
          <h2>Game Instructions</h2>
          <p style={{ maxWidth: "600px", fontSize: "16px" }}>
            This is a simple game of <span style={{color:"Red"}}>rock-paper-scissor</span> where you need to click on one of the images below. 
            Images denotes rock, paper and scissor. Rock breaks scissors. scissors cut paper and paper hides rock.
            You and the machine will be competing to get the highest score. 
            You have 10 rounds to win the game! The player with the highest score at the end wins.
            
          </p>
        </div>

        {/* Chances Left */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h3>Number of Chances Left: <span style={{ fontWeight: "bold", color: "#FFD700" }}>{10 - round}</span></h3>
        </div>

        {/* Images Section */}
        <div style={{
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          gap: "20px"
        }}>
          {images.map((item, index) => (
            <img 
              key={index}
              style={{
                width: "80px", 
                height: "80px", 
                cursor: "pointer", 
                border: "2px solid #ddd", 
                borderRadius: "8px", 
                boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)", 
                transition: "transform 0.2s"
              }} 
              src={item} 
              alt={`item-${index}`} 
              onClick={() => handleClick(index)}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} 
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          ))}
        </div>

        {/* Scores */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h3 style={{ color: "#4CAF50" }}>My Score: <span style={{ fontWeight: "bold" }}>{myscore}</span></h3>
          <h3 style={{ color: "#f44336" }}>Machine Score: <span style={{ fontWeight: "bold" }}>{machinescore}</span></h3>
        </div>
      </div>
    </>
    : 
    <>
      <div style={{
        backgroundColor: "black", 
        color: "white", 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        padding: "20px"
      }}>
        <h3 style={{
          textAlign: "center", 
          color: "#fff", 
          fontSize: "24px", 
          margin: "20px 0"
        }}>Game Over</h3>

        <h3 style={{
          textAlign: "center", 
          color: myscore > machinescore ? "#4CAF50" : "#f44336", 
          fontSize: "20px", 
          fontWeight: "bold"
        }}>
          {myscore > machinescore ? "You Won" : "Computer Won"}
        </h3>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button 
            onClick={restart} 
            style={{
              padding: "10px 20px", 
              backgroundColor: "#2196F3", 
              color: "white", 
              border: "none", 
              borderRadius: "5px", 
              cursor: "pointer", 
              fontSize: "16px"
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1976D2"} 
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#2196F3"}
          >
            Start Over
          </button>
        </div>
      </div>
    </>
}

   
    </>
  )
}
