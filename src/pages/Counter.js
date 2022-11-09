import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {decrement, increment, incrementByAmount} from '../features/counter/counterSlice';

export const Counter = () => {
	const count = useSelector((state) => state.counter.value)
	const dispatch = useDispatch();

	const increase = () => {
		dispatch(increment());
	}
	const decrease = () => {
		dispatch(decrement())
	}
	const customIncrease = (amount) => {
		dispatch(incrementByAmount(amount))
	}

	return (
		<div>Counter
			<h3 className='m-5 text-lg'>{count}</h3>
			<button onClick={increase} className='bg-green-400 mx-5 p-2 text-white rounded'>increment</button>
			<button onClick={decrease} className='bg-red-400 mx-5 p-2 text-white rounded'>decrement</button>
			<button onClick={() => customIncrease(20)} className='bg-green-400 mx-5 p-2 text-white rounded'>Increase by 20</button>
			<button onClick={() => customIncrease(50)} className='bg-green-400 mx-5 p-2 text-white rounded'>Increase by 50</button>
		</div>
	)
}
