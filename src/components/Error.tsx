import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

const Error = () => {

	const error = useRouteError()

	if (isRouteErrorResponse(error)) {
		console.log(error.data)
	}

	return (
		<section>
			{isRouteErrorResponse(error) && <div>
				<p>Статус ошибки: {error.status}</p>
				<p>Сообщение: {error.statusText}</p>
			</div>}
		</section>
	)
}

export default Error