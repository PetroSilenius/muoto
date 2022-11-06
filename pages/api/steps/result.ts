import type { NextApiRequest, NextApiResponse } from 'next';
import client from '@/lib/prismadb';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ data: 'Unauthorized' });
  }

  const body = req.body;

  // Properly validate the data
  if (!body) {
    return res.status(400).json({ data: 'Missing body' });
  }

  let redirectUrl = '/app/steps/feeling';
  if (body.confirm === 'Yes') {
    const image = await client.images.findFirstOrThrow({
      where: { user_id: session.user.id },
      orderBy: { created_at: 'desc' },
    });
    redirectUrl = `/app/steps/compare/${image.id}`;
  }

  res.redirect(303, redirectUrl);
}
