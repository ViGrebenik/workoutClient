import Layout from '../../layout/Layout'

import Loader from '../../ui/Loader'
import Button from '../../ui/button/Button'
import Input from '../../ui/input/Input'

import styles from './Auth.module.scss'
import { useAuthPage } from './useAuthPage'

const isLoadingAuth = true

const Auth = () => {
	const { setType, register, handleSubmit, errors, isLoading, onSubmit } =
		useAuthPage()

	return (
		<>
			<Layout
				heading='Sign in'
				bgImage='../../../../public/images/auth-bg.jpg'
			/>
			<div className='wrapper-inner-page'>
				{(isLoading || isLoadingAuth) && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input
						error={errors?.email?.message}
						name='email'
						register={register}
						options={{
							required: 'Email is require'
						}}
						type='text'
						placeholder='email'
					/>
					<Input
						error={errors?.password?.message}
						name='password'
						register={register}
						options={{
							required: 'Password is require'
						}}
						type='password'
						placeholder='password'
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Sign in</Button>
						<Button clickHandler={() => setType('register')}>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
