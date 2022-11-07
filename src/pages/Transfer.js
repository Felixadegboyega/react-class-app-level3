import {useFormik} from 'formik'
import React from 'react'
import * as Yup from 'yup'

const Transfer = () => {
	// const schema
	const validationSchema = Yup.object({
		accountNumber: Yup.string()
			.required("Account Number is required")
			.length(10, "Account number cannot exceed 10 digits"),
		amount: Yup.number()
			.required("Amount is required")
			.max(10000, "You cannot transfer above your balance"),
		bankName: Yup.string()
			.required("Account Number is required")
	})

	let formik = useFormik({
		initialValues: {
			accountNumber: "",
			amount: "",
			bankName: ""
		},
		validationSchema,
		// validationSchema : schema
		onSubmit: (values) => {
			console.log(values);
		}
	})

	return (
		<div>
			<h3>Transfer</h3>
			<input placeholder='Account Number' className='border-blue-300 border rounded p-2  outline-none m-2' value={formik.values.accountNumber} onChange={formik.handleChange} name="accountNumber" /> <br />
			<input placeholder='Amount' className='border-blue-300 border rounded p-2  outline-none m-2' value={formik.values.amount} onChange={formik.handleChange} name="amount" /> <br />
			<input placeholder='Bank' className='border-blue-300 border rounded p-2  outline-none m-2' value={formik.values.bankName} onChange={formik.handleChange} name="bankName" />
			<input onClick={formik.handleSubmit} type="button" value="Submit" placeholder='Bank' className='cursor-pointer border-blue-300 border rounded p-2  outline-none m-2' />
		</div>
	)
}

export default Transfer