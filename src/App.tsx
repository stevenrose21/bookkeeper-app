import { Outlet, NavLink } from 'react-router-dom';

export default function App() {
	return (
		<div>
			<h1>Bookkeeper!</h1>
			<nav
				style={{
					borderBottom: 'solid 1px',
					paddingBottom: '1rem',
				}}>
				<NavLink
					style={({ isActive }) => ({
						color: isActive ? 'mediumblue' : '',
						padding: '0.2rem',
					})}
					to='/invoices'>
					Invoices
				</NavLink>{' '}
				|
				<NavLink
					style={({ isActive }) => ({
						color: isActive ? 'mediumblue' : '',
						padding: '0.2rem',
						marginLeft: '0.2rem',
					})}
					to='/expenses'>
					Expenses
				</NavLink>
			</nav>
			<Outlet />
		</div>
	);
}
