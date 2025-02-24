import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import axios from 'axios';

function Room() {
	const [roomCode, setRoomCode] = useState('');

	const createRoom = () => {
		axios
			.post('http://localhost:8000/music/create-room/')
			.then((response) => setRoomCode(response.data.code))
			.catch((err) => console.error(err));
	};

	return (
		<>
			<div>
				<h2>Welcome to the Room!</h2>
				<p>Here you can join a room</p>
			</div>
			<div style={{ textAlign: 'center', padding: '50px' }}>
				<Typography variant='h4' gutterBottom>
					Create a Party Room
				</Typography>
				<Button variant='contained' color='primary' onClick={createRoom}>
					Create Room
				</Button>
				{roomCode && (
					<Typography variant='h6'>Room Code: {roomCode}</Typography>
				)}
			</div>
		</>
	);
}

export default Room;
