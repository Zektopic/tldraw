import { Tldraw } from 'tldraw'
import 'tldraw/ui.css'

export default function RemoveToolExample() {
	return (
		<>
			<div className="tldraw__editor">
				<Tldraw
					overrides={{
						tools: (_editor, tools) => {
							// Remove the text tool
							delete tools.text
							return tools
						},
					}}
				/>
			</div>
		</>
	)
}
