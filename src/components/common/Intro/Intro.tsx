import styles from './Intro.module.scss'

import Section from 'components/ui/Section'
import Container from 'components/ui/Container'
import Header from 'components/common/Header'
import Image from 'components/ui/Image'
import Button, { ButtonTypes } from 'components/ui/Button'
import ToTop from '../ToTop/ToTop'

const Intro = () => {
	return (
		<Section className={styles.intro}>
			<Header />
			<Container>
				<div className={styles.intro__content}>
					<div className={styles.intro__image}>
						<Image layout='fill' alt='intro image' url='/images/intro.png' />
						<ToTop />
					</div>
					<div className={styles.intro__info}>
						<h2>We zijn er bijna!</h2>
						<p>
							Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<Button type={ButtonTypes.primary}>
							<a href='#contact'>Contacteer ons</a>
						</Button>
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default Intro
