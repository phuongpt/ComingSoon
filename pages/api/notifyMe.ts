

import mongoose from 'mongoose';

// Connect to the MongoDB database
mongoose.connect('mongodb+srv://vercel:13572468@duolanguage.ogwfosp.mongodb.net/?retryWrites=true&w=majority', {

});

// Create a schema for the email collection
const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

// Create a model based on the schema
const Email = mongoose.model('Email', emailSchema);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body; // Assuming the email is sent in the request body

    try {
      // Create a new email document
      const newEmail = new Email({ email });

      // Save the email to the database
      await newEmail.save();

      res.status(200).end('Email stored successfully');
    } catch (error) {
      console.error(error);
      res.status(500).end('Error storing email');
    }
  } else {
    res.status(405).end('Method Not Allowed');
  }
}



