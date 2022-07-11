import { useState } from 'react'
import Link from 'next/link'

import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import styles from './Contact.module.scss'

import Section from 'components/ui/Section'
import Container from 'components/ui/Container'
import Header from 'components/common/Header'
import Image from 'components/ui/Image'
import Button, { ButtonTypes } from 'components/ui/Button'

interface IFormInputs {
	naam: string
	email: string
	bericht: string
	select: string
	privacybeleid: boolean
	newsletter?: boolean
}

const schema = yup.object({
	naam: yup.string().required('Dit veld is verplicht!'),
	email: yup
		.string()
		.email('Dit veld is verplicht!')
		.required('Dit veld is verplicht!'),
	bericht: yup.string().required('Dit veld is verplicht!'),
	privacybeleid: yup.boolean().oneOf([true], 'Dit veld is verplicht!'),
	newsletter: yup.boolean()
})

const Contact = () => {
	const [submitMessage, setSubmitMessage] = useState<null | string>(null)
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema)
	})

	const onSubmit = async (data: IFormInputs) => {
		setSubmitMessage(null)
		try {
			const response = await fetch(`https://formsubmit.co/ajax/tom@fold.eu`, {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			if (response.ok) {
				setSubmitMessage('Jouw bericht is succesvol verstuurd!')
				reset()
				setTimeout(() => setSubmitMessage(null), 5000)
			}
		} catch (e) {
			setSubmitMessage(
				'Er is iets fout gelopen met het formulier. Probeer opnieuw.'
			)
		}
	}

	return (
		<Section id='contact' className={styles.contact}>
			<Header className={styles.contact__header} />
			<Container className={styles.contact__container}>
				<Image
					layout='responsive'
					url='/images/contact.png'
					alt=''
					width={500}
					height={500}
				/>
				<div className={styles.contact__right}>
					<form
						className={styles.contact__form}
						onSubmit={handleSubmit(onSubmit)}
					>
						<h1>Contacteer ons</h1>
						<fieldset>
							<input type='text' placeholder='E-mail' {...register('email')} />
							{errors.email && <p>{errors.email.message}</p>}
						</fieldset>
						<div className={styles.two__column}>
							<fieldset>
								<input type='text' placeholder='Naam' {...register('naam')} />
								{errors.naam && <p>{errors.naam.message}</p>}
							</fieldset>
							<fieldset className={styles.select}>
								<select {...register('select')}>
									<option value='particulier'>Professional</option>
									<option value='particulier'>Particulier</option>
								</select>
								{errors.select && <p>{errors.select.message}</p>}
							</fieldset>
						</div>
						<fieldset>
							<textarea
								style={{ resize: 'none' }}
								rows={4}
								placeholder='Bericht'
								{...register('bericht')}
							></textarea>
							{errors.bericht && <p>{errors.bericht.message}</p>}
						</fieldset>
						<div className={styles.checkbox}>
							<input
								id='privacy'
								type='checkbox'
								{...register('privacybeleid')}
							/>
							<label htmlFor='privacy'>
								Door aan te vinken gaat u akkoord dat wij uw gegevens veilig
								bijhouden. <Link href='/'>Lees ons Privacybeleid.</Link>
							</label>
							{errors.privacybeleid && <p>{errors.privacybeleid.message}</p>}
						</div>
						<div className={styles.checkbox}>
							<input id='news' type='checkbox' {...register('newsletter')} />
							<label htmlFor='news'>
								Ik zou graag op de hoogte blijven van producten en nieuws van
								4floors.
							</label>
						</div>
						<Button type={ButtonTypes.primary}>
							<button type='submit'>Versturen</button>
						</Button>
						{submitMessage && <p>{submitMessage}</p>}
					</form>
				</div>
			</Container>
		</Section>
	)
}

export default Contact
