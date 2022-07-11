import { FC, ReactNode } from 'react'
import clsx from 'clsx'

import styles from './Section.module.scss'

interface IProps {
	children: ReactNode
	className?: string
	id?: string
}

const Section: FC<IProps> = ({ children, className, id }) => {
	const classes = clsx(styles.section, className)

	return (
		<section id={id} className={classes}>
			{children}
		</section>
	)
}

export default Section
