import { GoProjectRoadmap } from 'react-icons/go'
import { MdOutlineClose } from 'react-icons/md'

import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

import styles from './Hamburger.module.scss'
import Menu from './Menu'

export const Hamburger = () => {
	const { ref, isShow, setIsShow } = useOnClickOutside(false)

	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? (
					<MdOutlineClose color='#a8a8a8' fontSize={30} />
				) : (
					<GoProjectRoadmap color='a8a8a8' fontSize={30} />
				)}
			</button>
			<Menu isShow={isShow} setIsShow={setIsShow} />
		</div>
	)
}
