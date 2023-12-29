import { createRoot } from 'react-dom/client'
import './css/index.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { Context } from './context/Context'

const root = createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
	<Provider store={store}>
		<Context>
			<RouterProvider router={router} />
		</Context>
	</Provider>
)
