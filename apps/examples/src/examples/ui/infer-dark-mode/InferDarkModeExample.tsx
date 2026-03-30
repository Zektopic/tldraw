import { Tldraw } from 'tldraw'
import 'tldraw/ui.css'

export default function InferDarkModeExample() {
	return (
		<div className="tldraw__editor">
			<Tldraw inferDarkMode />
		</div>
	)
}
