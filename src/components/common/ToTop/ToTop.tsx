import { useState, useEffect } from 'react'

import styles from './ToTop.module.scss'

import Icon, { IconTypes } from 'components/ui/Icon'

const ToTop = () => {
	return (
		<a href='#contact' className={styles.toTop}>
			<Icon type={IconTypes.arrowDown} />
		</a>
	)
}

export default ToTop
