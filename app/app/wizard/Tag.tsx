export default function Tag({
  option,
}: {
  option: { id: string; content: string };
}) {
  return (
    <>
      <input
        type="checkbox"
        name={`answer-${option.id}`}
        id={`answer-${option.id}`}
        className="peer hidden"
      />
      <label
        htmlFor={`answer-${option.id}`}
        className="cursor-pointer rounded bg-muoto-light py-2 px-4 font-medium text-muoto-dark transition-colors peer-checked:bg-muoto-dark peer-checked:text-muoto-light"
      >
        {option.content}
      </label>
    </>
  );
}
