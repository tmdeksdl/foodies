export default function Loading() {
  return (
    <>
      <div className="w-full h-20 bg-gray-200 animate-pulse rounded-md"></div>
      {[...Array(10)].map((e, i) => (
        <div
          className="w-full h-20 bg-gray-200 animate-pulse rounded-md mt-2"
          key={i}
        ></div>
      ))}
    </>
  );
}
