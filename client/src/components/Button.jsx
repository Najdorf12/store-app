const Button = ({ btn, searchByCategory }) => {


  return (
    <>
      <li onClick={ searchByCategory } 
        className="w-[150px] bg-zinc-800 h-[50px]  font-text flex items-center text-[#dbf01f]
        text-xl font-medium justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-[#dbf01f]  before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 hover:text-zinc-900"
      >
        { btn }
      </li>
    </>
  );
};

export default Button;
