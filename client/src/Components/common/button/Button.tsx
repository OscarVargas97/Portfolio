import React from 'react';
import style from './Button.module.css'
type Props = {
	children: React.ReactNode;
};
const Button = (props: Props) => {
	return (
		<div>
			<button className={style.color}>{props.children}</button>
		</div>)
};

export default Button