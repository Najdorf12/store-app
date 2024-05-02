const Loader = () => {
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-[rgb(0,0,0,.8)] flex justify-center items-center z-[200]">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Loader;
