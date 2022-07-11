import { FC } from 'react'
import clsx from 'clsx'

import styles from './Header.module.scss'

import Container from 'components/ui/Container'
import Icon, { IconTypes } from 'components/ui/Icon'

interface IProps {
	className?: string
}

const Header: FC<IProps> = ({ className }) => {
	return (
		<Container>
			<div className={clsx(styles.header, className)}>
				<Icon type={IconTypes.logoSimple} />
				<h3>Passion for professionals</h3>
			</div>
		</Container>
	)
}

export default Header
