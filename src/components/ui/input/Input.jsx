import styles from './Input.module.scss'

const Input = ({ register, name, options, error, ...rest }) => {
	return (
		<div style={{ marginBottom: '1rem' }}>
			<input {...register(name, options)} {...rest} className={styles.input} />
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}

export default Input
