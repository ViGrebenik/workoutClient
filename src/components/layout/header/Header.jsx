import { LuUserSquare2 } from 'react-icons/lu'

import { IoArrowBackOutline } from 'react-icons/io5'

import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth'

import { Hamburger } from '../hamburger/Hamburger'

import styles from './Header.module.scss'

const Header = ({ backLink = '/' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname === '/' && isAuth ? (
						<button
							aria-label='Go to profile'
							onClick={() => {
								navigate('/profile')
							}}
						>
							<LuUserSquare2 color='a8a8a8' fontSize={30} />
						</button>
					) : (
						<button
							onClick={() => {
								navigate(isAuth ? backLink : '/auth')
							}}
						>
							<IoArrowBackOutline color='a8a8a8' fontSize={28} />
						</button>
					)}
					<Hamburger />
				</>
			)}
		</header>
	)
}

export default Header
