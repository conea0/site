import { css } from '../../../styled-system/css';
import { md, sm } from '@/styles';

const styles = {
	gradient: css({
		backgroundColor: 'hsla(0, 0%, 100%, 1)',
		backgroundImage: `
		radial-gradient(at 67% 24%, hsla(172, 100%, 50%, 0.18) 0px, transparent 50%),
		radial-gradient(at 31% 78%, hsla(289, 75%, 68%, 0.45) 0px, transparent 50%),
		radial-gradient(at 72% 59%, hsla(240, 100%, 70%, 0.49) 0px, transparent 50%),
		radial-gradient(at 43% 44%, hsla(193, 100%, 50%, 0.55) 0px, transparent 50%)
	  `,
		textAlign: 'center',
		padding: '20px',
		marginTop: '80px',
		height: 'calc(100vh - 80px)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		[md]: {
			marginTop: 0,
			height: '100vh',
		},
	}),

	wrapper: css({
		transform: 'translateY(5%)',
		[md]: {
			transform: 'translateY(0)',
		},
	}),

	header: css({
		textAlign: 'center',
		alignItems: 'center',
		opacity: 0.7,
		[md]: {
			opacity: 1,
		},
	}),

	cp: css({
		maxWidth: '790px',
		textAlign: 'center',
		margin: 'auto',
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'end',
		[md]: {
			margin: '15% auto 0 auto',
		},
	}),

	h1: css({
		fontSize: '4rem',
		fontWeight: 700,
		width: '100%',
		[md]: {
			fontSize: '3rem',
			lineHeight: 1.3,
		},
		[sm]: {
			fontSize: '2.5rem',
		},
	}),

	h2: css({
		fontSize: '2rem',
		fontWeight: 500,
		marginTop: '5px',
		[md]: {
			fontSize: '1.5rem',
		},
		[sm]: {
			fontSize: '1.2rem',
		},
	}),

	description: css({
		fontSize: '1.3rem',
		fontWeight: 500,
		marginTop: '40px',
		width: '100%',
		[md]: {
			fontSize: '1rem',
			width: '100%',
			padding: '0 20px',
		},
	}),

	button: css({
		marginTop: '50px',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		[md]: {
			marginTop: '40px',
			flexDirection: 'column',
			alignItems: 'center',
		},
	}),
};

export default styles;
