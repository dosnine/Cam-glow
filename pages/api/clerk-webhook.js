import { supabase } from '../../lib/supabase';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id, email_addresses } = req.body;

    try {
      const { data, error } = await supabase.from('users').insert({
        id,
        email: email_addresses[0].email,
      });

      if (error) throw error;

      res.status(200).json({ message: 'User added to Supabase.' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}