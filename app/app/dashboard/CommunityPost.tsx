interface CommunityPostProps {
  title: string;
  content: React.ReactNode;
  reactions: {
    hundred?: number;
    heart?: number;
    clap?: number;
    star?: number;
  };
}

export default function CommunityPost({
  title,
  content,
  reactions,
}: CommunityPostProps) {
  return (
    <ul role="list" className="mt-2 space-y-4">
      <li className="rounded-lg bg-muoto-light p-4 shadow">
        <article aria-labelledby="question-title-81614">
          <div>
            <h2
              id="question-title-81614"
              className="text-base font-medium text-gray-900"
            >
              {title}
            </h2>
          </div>
          <div className="mt-2 space-y-4 text-sm text-gray-700">{content}</div>
          <div className="mt-2 flex justify-between space-x-8">
            <div className="flex space-x-6">
              {reactions.hundred && (
                <span className="inline-flex items-center text-sm">
                  <button
                    type="button"
                    className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                  >
                    💯
                    <span className="font-medium text-gray-900">
                      {reactions.hundred}
                    </span>
                    <span className="sr-only">hundred points</span>
                  </button>
                </span>
              )}
              {reactions.star && (
                <span className="inline-flex items-center text-sm">
                  <button
                    type="button"
                    className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                  >
                    🌟
                    <span className="font-medium text-gray-900">
                      {reactions.star}
                    </span>
                    <span className="sr-only">stars</span>
                  </button>
                </span>
              )}
              {reactions.heart && (
                <span className="inline-flex items-center text-sm">
                  <button
                    type="button"
                    className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                  >
                    💖
                    <span className="font-medium text-gray-900">
                      {reactions.heart}
                    </span>
                    <span className="sr-only">hearts</span>
                  </button>
                </span>
              )}
              {reactions.clap && (
                <span className="inline-flex items-center text-sm">
                  <button
                    type="button"
                    className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                  >
                    👏
                    <span className="font-medium text-gray-900">
                      {reactions.clap}
                    </span>
                    <span className="sr-only">claps</span>
                  </button>
                </span>
              )}
            </div>
          </div>
        </article>
      </li>
    </ul>
  );
}
