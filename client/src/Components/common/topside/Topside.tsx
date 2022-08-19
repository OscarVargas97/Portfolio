import React from 'react';
import style from './Topside.module.css'
type Props = {
	children: React.ReactNode; // 👈️ type children
};
const TopSide = (props: Props) => {
	return (
		<div className={style.top}>
			{props.children}
		</div>)
};

export default TopSide