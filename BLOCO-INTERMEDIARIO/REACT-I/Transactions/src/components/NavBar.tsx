import { Avatar } from './styleds/Avatar';
import { Header } from './styleds/Header';
import { Link } from 'react-router-dom';
// import logo from "../assets/logo.webp";
import { Button } from './styleds/Button';
import { useContext } from 'react';
import { ThemeContext } from '../config/contexts/ThemeContext';
import darkMode from '/public/icons/dark.png';
import lightMode from '/public/icons/light.png';
import logo from '/public/icons/logo.png';

export function NavBar() {
	const { toggleTheme, theme } = useContext(ThemeContext);

	return (
		<Header>
			<Link to='/'>
				<Avatar
					src={logo}
					alt='Logo'
					size='sm'
				/>
			</Link>

			<Button
				onClick={toggleTheme}
				size='small'>
				{theme === 'light' ? (
					<img
						style={{ width: '20px' }}
						src={darkMode}
						alt={darkMode}
					/>
				) : (
					<img
						style={{ width: '20px' }}
						src={lightMode}
						alt={lightMode}
					/>
				)}
			</Button>
		</Header>
	);
}
