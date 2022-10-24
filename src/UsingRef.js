import {useEffect, useRef} from "react"

const UsingRef = () => {
	const forSpan = useRef()
	const helloDiv = useRef()
	const firstname = useRef()
	useEffect(() => {
		console.log(helloDiv.current);
		console.log(forSpan.current);
		firstname.current.focus();
	}, [])

	const displayName = () => {
		console.log(firstname.current.value);
	}

	return (
		<>helloDiv
			<span ref={forSpan}>
				this span
			</span>
			<div ref={helloDiv}>
				Hello
			</div>
			<input ref={firstname} className="border outline-none rounded p-2" />
			<button onClick={displayName} className='p-2 bg-blue-300 text-white rounded'>Show</button>
		</>
	)
}

export default UsingRef