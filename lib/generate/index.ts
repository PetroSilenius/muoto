import client from '@/lib/prismadb';
// import { getSession } from '@/lib/session';

const API_KEY = process.env.DEEP_AI_API_KEY!;
const DEEP_AI_URL = process.env.DEEP_AI_URL!;
// Form submission boundary
const BOUNDARY_IDENTIFIER = '----WebKitFormBoundarysGXdDewMvkTTul70';

export default async function generateImage(): Promise<{
  id: string;
  output_url: string;
  text: string;
}> {
  // const session = await getSession();
  // if (!session) {
  //   throw new Error('Unauthorised action');
  // }

  const user = await client.user.findFirst();

  const answerer = await client.answers.findMany({
    where: { user_id: user?.id },
  });

  const options = await client.options.findMany({
    where: {
      id: {
        in: answerer.map(({ value }) => value).flat(),
      },
    },
  });

  const keyWords = options
    .map(({ content }) =>
      content
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    )
    .join(' ');
  const gender = 'Woman';
  const text = `${gender} On the ground ${keyWords}`;

  const requestHeaders = new Headers();
  requestHeaders.set('Api-Key', API_KEY);
  requestHeaders.set(
    'Content-Type',
    `multipart/form-data; boundary=${BOUNDARY_IDENTIFIER}`,
  );

  const deepAIResponse = await fetch(DEEP_AI_URL, {
    headers: requestHeaders,
    body: `--${BOUNDARY_IDENTIFIER}\r\nContent-Disposition: form-data; name="text"\r\n\r\n${text}\r\n--${BOUNDARY_IDENTIFIER}--`,
    method: 'POST',
  });

  return {
    ...(await deepAIResponse.json()),
    text,
  };
}
