import { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const [room, setRoom] = useState();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/room/${room}`);
  };

  return (
    <div className="outer-box">
        <div class="inner-box">
            <header class="signup-header">
                <h1>VideoVox</h1>
                <p>Where Clear Conversations Begin</p>
            </header>
            <main class="signup-body">
                <form onSubmit={submitHandler}>
                    <p>
                        <label for="room">Room Code</label>
                        <input value={room} type="text" id="room" onChange={ e => setRoom(e.target.value)} placeholder="Enter Room code" required />
                    </p>
                    <p>
                        <input type="submit" id="submit" value="Submit" />
                    </p>
                </form>
            </main>
        </div>
        <div class="circle c1"></div>
        <div class="circle c2"></div>
    </div>
  );
}

export default Homepage;
