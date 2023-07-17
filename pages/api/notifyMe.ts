import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body; // Assuming the email is sent in the request body

    const filePath = path.join(process.cwd(), '/public/email_list.txt'); // Specify the file path

    const content = `Email: ${email}\n`; // Format the content to be written to the file

    fs.appendFile(filePath, content, 'utf8', (err) => {
      if (err) {
        console.error(err);
        res.status(500).end('Error writing file');
      } else {
        res.status(200).end('Email written to file successfully');
      }
    });
  } else {
    res.status(405).end('Method Not Allowed');
  }
}