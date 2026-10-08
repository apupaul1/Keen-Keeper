const TimelineLoading = () => {
  return (
    <div className="max-w-7xl mx-auto my-12 px-8 md:px-0" aria-busy="true">
      <div className="h-9 w-48 rounded bg-base-300 animate-pulse" />

      <div className="my-4 h-12 w-40 rounded bg-base-300 animate-pulse" />

      <div className="my-4 space-y-3 min-h-46.5">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-base-100 rounded-lg p-3 shadow flex gap-3 items-center"
          >
            <div className="h-8 w-8 rounded bg-base-300 animate-pulse" />
            <div className="space-y-2">
              <div className="h-5 w-48 rounded bg-base-300 animate-pulse" />
              <div className="h-4 w-28 rounded bg-base-300 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineLoading;