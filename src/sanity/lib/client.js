import { createClient } from 'next-sanity';
import { dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  // apiVersion: '2024-01-01',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});
