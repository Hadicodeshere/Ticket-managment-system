// src/routes/edit/[id]/+page.ts
export async function load({ params, fetch }) {
	const id = params.id;

	const res = await fetch(`/api/tickets/${id}`);
	if (!res.ok) {
		throw new Error('Failed to fetch ticket');
	}

	const ticket = await res.json();
	return { ticket };
}
