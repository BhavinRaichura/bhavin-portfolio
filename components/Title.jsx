
const Title = ({ title }) => {
  return (
    <div className=" w-full px-10 py-10 flex justify-center">
      <div className="w-3/5  max-xl:w-11/12 max-md:w-full">
        <p className="py-2 uppercase">{title}</p>
        <p className="w-40 h-0.5  rounded-full bg-sky-500 my-2"></p>
      </div>
    </div>
  );
};

export default Title;
