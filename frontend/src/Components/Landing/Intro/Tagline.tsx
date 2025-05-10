interface TaglinePropI {
  likeTo: string;
}
const Tagline = ({ likeTo }: TaglinePropI) => {
  return (
    <div className="text-[6vw] sm:text-[4vw] md:text-[3.2vw] lg:text-[1.8vw] w-full text-start col-start-2 lg:col-start-2 lg:col-span-2 col-end-7 row-start-6 row-span-1 relative ">
      <span className="w-full">
        I enjoy <code>CODING</code> and love <span>{likeTo}</span>.
      </span>
    </div>
  );
};

export default Tagline;
