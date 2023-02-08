export function formatPhone(phone, matrix = '+X (XXX) XXX-XX-XX') {
	let formattedPhone = '';

	let i = 0;

	for (let j = 0; j < matrix.length; j++) {

		if (matrix[j] === 'X') {

			formattedPhone += phone[i];
			i++;

		} else {
			formattedPhone += matrix[j];
		}
	}

	return formattedPhone;
}