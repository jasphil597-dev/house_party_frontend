import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Room from './components/Room/Room';
import SpotifyAuth from './components/SpotifyAuth/SpotifyAuth';
import theme from './theme';

function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Router>
					<Routes>
						<Route path='/' element={<Room />} />
						<Route path='/spotify-auth' element={<SpotifyAuth />} />
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
