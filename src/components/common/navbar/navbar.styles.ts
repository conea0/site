import { css } from '../../../../styled-system/css';
import { md, xl } from '@/styles';

const styles = {
	navbar: css({
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '0 20px',
		height: '80px',
		backgroundColor: '#fff',
		color: '#5c5c5c',
		position: 'fixed',
		width: '100%',
		top: 0,
		zIndex: 999,
		borderBottom: '1px solid rgba(105, 105, 105, 0.2)',
	}),
	logo: css({
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
		'& p': {
			fontSize: '1.5rem',
			fontWeight: 600,
			color: '#000',
			marginLeft: '10px',
		}
	}),
	menu: css({
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '30%',
		marginRight: '10px',
		[xl]: {
			width: '40%',
		},
		[md]: {
			display: 'none',
		},
	}),
	menuItem: css({
		fontSize: '1rem',
		fontWeight: 500,
		marginLeft: '20px',
		cursor: 'pointer',
		transition: 'all 0.1s ease-in-out',
		'&:hover': {
			color: '#8b8b8b',
		},
	}),
};

export default styles;
