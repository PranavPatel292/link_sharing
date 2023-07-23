const EmptyListSkeleton = () => {
  const array = new Array(1, 2, 3, 4, 5);
  return (
    <>
      {array.map((_, index) => {
        return (
          <div
            key={index}
            className="w-[85%] mt-3 rounded-md h-12 bg-light_gray/40 "
          ></div>
        );
      })}
    </>
  );
};

export default EmptyListSkeleton;
