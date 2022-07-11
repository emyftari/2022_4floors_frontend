import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import Intro from 'components/common/Intro'
import Contact from 'components/common/Contact'

const HomePage: NextPage = () => {
	return (
		<>
			<NextSeo
				title='Home - 4Floors'
				description='We zijn volop bezig met onze Renaissance en ook met onze nieuwe
				website. Hou dus onze website zeker in de gaten. Tot binnenkort!'
				canonical='https://4floors.be'
				openGraph={{
					url: 'https://4floors.be',
					title: 'Home - 4Floors',
					description:
						'We zijn volop bezig met onze Renaissance en ook met onze nieuwe website. Hou dus onze website zeker in de gaten. Tot binnenkort!'
				}}
			/>
			<main>
				<Intro />
				<Contact />
			</main>
		</>
	)
}

export default HomePage
