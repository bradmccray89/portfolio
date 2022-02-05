export default function handler(req, res) {
	const body = req.body;

	if (!body.name || !body.email || !body.message) {
		res.statusCode = 400;
		res.json({
			error: 'Missing required fields',
		});
		return;
	}
	console.log(body);
}
