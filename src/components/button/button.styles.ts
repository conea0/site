import { cva } from '../../../styled-system/css';

const buttonRecipe = cva({
	base: {
		alignItems: 'center',
		borderRadius: '10px',
		display: 'flex',
		justifyContent: 'center',
		cursor: 'pointer',
		margin: '10px',
		'& .img': {
			marginRight: '10px',
		},
	},
	variants: {
		size: {
			small: {
				height: '32px',
				width: '120px',
			},
			medium: {
				height: '40px',
				width: '180px',
			},
			large: {
				height: '48px',
				width: '210px',
			},
		},
		color: {
			white: {
				backgroundColor: '#fff',
				color: '#000',
				border: '#000 1px solid',
				'&:hover': {
					border: '#5c5c5c 1px solid',
					backgroundColor: '#f7f7f7',
				},
			},
			black: {
				backgroundColor: '#343434',
				color: '#fff',
				'&:hover': {
					border: '#f9f9f9 1px solid',
					opacity: 0.8,
				},
			},
		},
	},
});

export default buttonRecipe;
