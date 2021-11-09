import { useParams, useNavigate } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../data';
interface invoiceType {
	name: string;
	number: number;
	amount: string;
	due: string;
}

export default function Invoice() {
	let navigate = useNavigate();
	let params = useParams();
	let invoice: invoiceType = getInvoice(parseInt(params.invoiceId!, 10))!;
	let { name, amount, number, due } = invoice;

	return (
		<main style={{ padding: '1rem' }}>
			<h2>Total Due: {amount}</h2>
			<p>
				{name}: {number}
			</p>
			<p>Due Date: {due}</p>
			<button
				onClick={() => {
					deleteInvoice(number);
					navigate('/invoices');
				}}>
				Delete
			</button>
		</main>
	);
}
