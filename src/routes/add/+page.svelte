<script lang="ts">
	let license_plate = '';
	let driver_name = '';
	let violation_type = '';
	let fine_amount = 0;
	let date_issued = '';

	async function submitForm() {
		await fetch('/api/tickets', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				license_plate,
				driver_name,
				violation_type,
				fine_amount,
				date_issued,
				status: 'Unpaid'
			})
		});

		window.location.href = '/'; // Redirect after submission
	}
</script>

<h1 class="text-2xl font-bold mb-4">➕ Add Ticket</h1>

<form on:submit|preventDefault={submitForm} class="ticket-form">
	<input bind:value={license_plate} placeholder="License Plate" required />
	<input bind:value={driver_name} placeholder="Driver Name" required />
	<input bind:value={violation_type} placeholder="Violation Type" required />
	<input type="number" bind:value={fine_amount} placeholder="Fine Amount" required />
	<input type="date" bind:value={date_issued} required />
	<button type="submit">Add Ticket</button>
</form>

<style>
	:global(body) {
		background-color: #FFF9D0;
		color: #333;
		font-family: sans-serif;
	}

	.ticket-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 500px;
		margin: auto;
		background-color: #CAF4FF;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		border: 2px solid #A0DEFF;
	}

	input,
	select {
		padding: 0.6rem 1rem;
		font-size: 1rem;
		border-radius: 8px;
		border: 2px solid #A0DEFF;
		background-color: #ffffffcc;
	}

	input:focus,
	select:focus {
		outline: none;
		border-color: #5AB2FF;
		box-shadow: 0 0 0 2px #5AB2FF44;
	}

	button {
		padding: 0.6rem 1rem;
		background-color: #dcc5a1;
		color: #fff;
		font-weight: bold;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	button:hover {
		background-color: #5AB2FF;
	}
</style>
