import { FC, useState } from 'react'
import { default as NextImage } from 'next/image'

import styles from './Image.module.scss'

interface IProps {
	url?: string
	alt: string
	width?: number
	height?: number
	priority?: boolean
	position?: 'top' | 'bottom' | 'center'
	layout?: 'intrinsic' | 'fixed' | 'responsive' | 'fill'
}

const Image: FC<IProps> = ({
	alt,
	width = 500,
	height = 500,
	priority = false,
	position = 'center',
	layout = 'intrinsic',
	url = '/images/placeholder.png'
}) => {
	const [loading, setLoading] = useState<boolean>(true)

	return (
		<>
			{layout === 'fill' ? (
				<NextImage
					quality={100}
					layout='fill'
					objectFit='cover'
					src={url}
					alt={alt}
					priority={priority}
					objectPosition={position}
					onLoadingComplete={() => setLoading(false)}
					className={loading ? styles.hide : styles.show}
				/>
			) : (
				<NextImage
					quality={100}
					objectFit='cover'
					priority={priority}
					src={url}
					alt={alt}
					width={width}
					height={height}
					layout={layout}
					onLoadingComplete={() => setLoading(false)}
					className={loading ? styles.hide : styles.show}
				/>
			)}
		</>
	)
}

export default Image
