import Image from 'next/image';
import ArticleCard from './ArticleCard';
import CommunityPost from './CommunityPost';

export default function Page() {
  return (
    <div>
      <h2 className="mt-4 text-xl">Professionals picks</h2>
      <div className="mx-auto mt-2 grid max-w-none grid-cols-2 gap-5">
        <ArticleCard
          title="Give your body the focus it needs"
          imageHref="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2052&q=80"
          description="Start working together with your body with tips from professionals."
        />
        <ArticleCard
          title="Train looking at the mirror once a day"
          imageHref="https://images.unsplash.com/photo-1612529377235-777c1ad46428?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1005&q=80"
          description="Even small steps can provide great results."
        />
      </div>

      <h2 className="mt-4 text-xl">Community</h2>
      <CommunityPost
        title="I've been more okay with my weight recently!"
        content={
          <div className="flex flex-row items-center gap-4">
            <Image
              src="/output_before.jpeg"
              width="100"
              height="100"
              priority
              alt="Before"
            />
            <span className="text-2xl">➡️</span>
            <Image
              src="/output.jpeg"
              width="100"
              height="100"
              priority
              alt="After"
            />
          </div>
        }
        reactions={{ heart: 32, clap: 28, star: 14, hundred: 8 }}
      />
      <CommunityPost
        title="I've gained confidence to show off my body more"
        content={
          <p>
            {
              "I've gained confidence to show off my body more and more without trying to please anyone. You must make sure there's a strong foundation to your body of positive thinking, that you see yourself objectively as a positive"
            }
          </p>
        }
        reactions={{ heart: 68, clap: 54, star: 56, hundred: 38 }}
      />
    </div>
  );
}
