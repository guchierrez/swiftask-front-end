export const Loading = () => {
  return (
    <div className="relative md:w-[85%] w-3/4 ml-auto h-screen ">
      <span className="absolute translate-y-1/2 translate-x-2/3 loading loading-spinner loading-lg bottom-1/2 right-2/3 text-base-100"></span>
      <p className="select-none animate-blink absolute translate-y-[40%] translate-x-[68%] bottom-[40%] right-[68%] font-thin text-base-100 text-center">
        Fetching data from API...
      </p>
      <p></p>
    </div>
  );
};
