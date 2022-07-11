import { Children, FC, ReactElement, cloneElement } from 'react'
import clsx from 'clsx'

import styles from './Button.module.scss'

export enum Types {
	primary = 'primary'
}

interface Props {
	type: Types
	children: JSX.Element
	className?: string
}

const Button: FC<Props> = ({ children, className, type, ...props }) => {
	const child = Children.only(children) as ReactElement
	const buttonClassName = clsx(styles.button, styles[type], className)

	return (
		<>
			{cloneElement(child, {
				className: buttonClassName,
				...props
			})}
		</>
	)
}

export default Button
