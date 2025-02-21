import { createClient } from '@sanity/client';
import bcrypt from 'bcrypt';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    const existingUser = await client.fetch(
      `*[_type == "user" && email == $email][0]`,
      { email }
    );

    if (existingUser) {
      return new Response(JSON.stringify({ error: 'Email already exists' }), {
        status: 400,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await client.create({
      _type: 'user',
      username,
      email,
      password: hashedPassword,
    });

    return new Response(JSON.stringify({ success: true, user: newUser }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Something went wrong' }), {
      status: 500,
    });
  }
}
