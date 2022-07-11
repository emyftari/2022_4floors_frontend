import { FC, ReactNode } from 'react'
import clsx from 'clsx'

import styles from './Container.module.scss'

interface IProps {
	children: ReactNode
	className?: string
}

const Container: FC<IProps> = ({ children, className }) => (
	<div className={clsx(styles.container, className)}>{children}</div>
)

export default Container
