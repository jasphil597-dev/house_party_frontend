import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import axios from 'axios';

function SpotifyAuth() {
	const [authUrl, setAuthUrl] = useState('');

	useEffect(() => {
		axios
			.get('http://localhost:8000/music/spotify-auth/')
			.then((response) => setAuthUrl(response.data.url))
			.catch((err) => console.error(err));
	}, []);

	return (
		<>
			<div>
				<h2>Spotify Authentication</h2>
				<p>Login with Spotify to enjoy the music!</p>
			</div>
			<div style={{ textAlign: 'center', padding: '50px' }}>
				<Typography variant='h4'>Spotify Authorization</Typography>
				{authUrl && (
					<Button variant='contained' color='secondary' href={authUrl}>
						Authorize Spotify
					</Button>
				)}
			</div>
		</>
	);
}

export default SpotifyAuth;
