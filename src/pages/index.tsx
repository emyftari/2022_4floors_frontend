import type { NextPage } from 'next'

import Intro from 'components/common/Intro'
import Contact from 'components/common/Contact'
import ToTop from 'components/common/ToTop/ToTop'

const HomePage: NextPage = () => {
	return (
		<main>
			<Intro />
			<Contact />
		</main>
	)
}

export default HomePage
