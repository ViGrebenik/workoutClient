import cn from 'clsx'
import Header from './header/header'

import styles from './Layout.module.scss'
import { useCheckAuth } from '../../hooks/useCheckAuth'

const Layout = ({ children, bgImage, heading = '', backLink = '/' }) => {
	useCheckAuth()
	return (
		<section
			className={cn(styles.wrapper, {
				[styles.otherPage]: !!heading
			})}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<Header backLink={backLink} />

			{heading && (
				<h1 className={styles.heading} style={{ color: 'white' }}>
					{heading}
				</h1>
			)}

			{children && <div>{children}</div>}
		</section>
	)
}

export default Layout
