import client from '@/lib/prismadb';

const API_KEY = process.env.DEEP_AI_API_KEY!;
const DEEP_AI_URL = process.env.DEEP_AI_URL!;
// Form submission boundary
const BOUNDARY_IDENTIFIER = '----WebKitFormBoundarysGXdDewMvkTTul70';

const EMOJI_TO_KEY_WORD_MAP = {
  '🥳': 'Excited',
  '😊': 'Happy',
  '🥱': 'Tired',
  '😕': 'Sad',
  '😖': 'Disgusted',
};

export default async function generateImage(
  userId: string,
  image_id?: string,
): Promise<{
  id: string;
  output_url: string;
  text?: string;
}> {
  if (!image_id) {
    return triggerStableDiffusion(userId);
  }

  const image = await client.images.findFirstOrThrow({
    where: { user_id: userId },
    orderBy: { created_at: 'desc' },
  });

  return {
    id: image.id,
    output_url: image.url,
  };
}

async function triggerStableDiffusion(userId: string) {
  const answerer = await client.answers.findMany({
    where: { user_id: userId },
  });

  const options = await client.options.findMany({
    where: {
      id: {
        in: answerer.map(({ value }) => value).flat(),
      },
    },
  });

  const keyWords = options
    .map(({ content }) => {
      if (Object.keys(EMOJI_TO_KEY_WORD_MAP).includes(content)) {
        // @ts-ignore
        return EMOJI_TO_KEY_WORD_MAP[content];
      }

      return content
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    })
    .join(' ');
  const gender = 'Woman';
  const text = `${gender} On the ground ${keyWords}, Realistic Cartoon`;

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
    cache: 'no-store',
  });

  const { id, output_url } = await deepAIResponse.json();

  await client.images.create({
    data: {
      url: output_url,
      users: { connect: { id: userId } },
    },
  });

  return {
    id,
    output_url,
    text,
  };
}
