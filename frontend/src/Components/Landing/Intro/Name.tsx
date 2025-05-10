interface NamePropI {
  name: string;
}

const Name = ({ name }: NamePropI) => {
  return (
    <div className="text-[7vw] md:text-[5.5vw] lg:text-[3.5vw]  font-bold text-start col-start-2 md:col-start-2 md:col-span-3 col-span-7 row-start-5 row-span-1 place-items-center relative flex">
      <span className="sm:w-[75%] md:w-full">{`Hi, I am ${name}`}</span>
    </div>
  );
};

export default Name;
