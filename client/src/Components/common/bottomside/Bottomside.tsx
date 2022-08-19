import React from 'react';
import style from './Bottomside.module.css'
type Props = {
	children: React.ReactNode; // 👈️ type children
};
const BottomSide = (props: Props) => {
	return (
		<div className={style.bot}>
			{props.children}
		</div>)
};

export default BottomSide