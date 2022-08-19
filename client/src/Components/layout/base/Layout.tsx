import React from 'react';
import style from './Layout.module.css'

type Props = {
	children: React.ReactNode;
};

const Layout = (props: Props) => {
	return (
		<div className={style.layout}>
			{props.children}
		</div>)
};

export default Layout
