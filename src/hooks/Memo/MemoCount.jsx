import { useRef, memo } from "react";

// eslint-disable-next-line react/display-name
export const Counts = memo(({ bioData }) => {
  const renderCount = useRef(0);
  console.log(renderCount);

  return (
    <div className="mt-3 font-display text-center">
      <p>
        Nothing changed here but Ive now rendered:
        <span className="text-red-600">{renderCount.current++} time(s)</span>
      </p>
        <p>My name is {bioData.name}</p>
    </div>
  );
});

// export default memo(Counts);