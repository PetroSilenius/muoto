import Image from 'next/image';

interface ArticleCardProps {
  title: string;
  description: string;
  imageHref: string;
  link?: string;
}

export default function ArticleCard({
  title,
  imageHref,
  link,
  description,
}: ArticleCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="relative h-48 flex-shrink-0">
        <Image
          src={imageHref}
          priority
          fill
          alt=""
          className="w-full object-cover"
          sizes="(max-width: 340px): 150px,(max-width: 500px) 208px,
              360px"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between  py-2">
        <div className="flex-1">
          <a href={link} className="block">
            <p className="text-xl font-semibold text-muoto-orange">{title}</p>
            <p className="mt-1 text-base ">{description}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
