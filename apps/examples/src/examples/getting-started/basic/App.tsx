import { Tldraw } from 'tldraw'
import 'tldraw/ui.css'

export default function BasicExample() {
	return (
		<div className="editor">
			<Tldraw
				onMount={(editor) => {
					editor.selectAll()
				}}
			/>
		</div>
	)
}
