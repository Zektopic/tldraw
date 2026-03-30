import { Tldraw } from 'tldraw'
import 'tldraw/ui.css'

export default function DeepLinksExample() {
	return (
		<div className="tldraw__editor">
			<Tldraw persistenceKey="example" options={{ deepLinks: true }} />
		</div>
	)
}
