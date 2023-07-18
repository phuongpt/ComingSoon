export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body; // Assuming the email is sent in the request body

    try {

      await fetch(`https://parseapi.back4app.com/classes/Email`, {
        method: 'POST',
        headers: {
          'X-Parse-Application-Id': process.env.NEXT_PUBLIC_DEFAULT_PARSE_ID,
          'X-Parse-REST-API-Key': process.env.NEXT_PUBLIC_DEFAULT_PARSE_REST,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      })

      res.status(200).end('Email stored successfully');
    } catch (error) {
      console.error(error);
      res.status(500).end('Error storing email');
    }
  } else {
    res.status(405).end('Method Not Allowed');
  }
}



