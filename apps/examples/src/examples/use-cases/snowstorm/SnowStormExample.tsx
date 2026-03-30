import { Tldraw } from 'tldraw'
import 'tldraw/ui.css'
import { SnowStorm } from './SnowStorm'
import './snowstorm.css'

export default function BasicExample() {
	return (
		<div className="tldraw__editor">
			<Tldraw persistenceKey="example">
				<SnowStorm />
			</Tldraw>
		</div>
	)
}
