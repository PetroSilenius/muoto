import type { NextApiRequest, NextApiResponse } from 'next';
import client from 'lib/prismadb';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from 'pages/api/auth/[...nextauth]';

const API_KEY = process.env.DEEP_AI_API_KEY!;
const DEEP_AI_URL = process.env.DEEP_AI_URL!;
// Form submission boundary
const BOUNDARY_IDENTIFIER = '----WebKitFormBoundaryVwY2yVS0CJe4Onk5';

export interface ResponseBody {
  id: string;
  output_url: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await unstable_getServerSession(req, res, authOptions);
  console.log(session)
  if (!session) {
    return res.status(401).json({ data: 'Unauthorized' });
  }

  const headers = new Headers();
  headers.set('Api-Key', API_KEY);
  headers.set(
    'Content-Type',
    `multipart/form-data; boundary=${BOUNDARY_IDENTIFIER}`,
  );

  const answerer = await client.answers.findMany({
    where: { user_id: session.user.id },
  });
  const options = await client.options.findMany({
    where: {
      id: {
        in: answerer.map(({ value }) => value).flat(),
      },
    },
  });

  const keyWords = options.map(({ content }) => content).join(' ');
  const gender = 'Woman';
  const text = `${gender} On the ground ${keyWords}`;

  const deepAIResponse = await fetch(DEEP_AI_URL, {
    headers,
    body: `--${BOUNDARY_IDENTIFIER}\r\nContent-Disposition: form-data; name="text"\r\n\r\n${text}\r\n--${BOUNDARY_IDENTIFIER}--`,
    method: 'POST',
  });


  return res.status(200).json({...(await deepAIResponse.json()), text});
}
