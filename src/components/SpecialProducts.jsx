function SpecialProducts({ children }) {
  return (
    <>
      <div className='m-0 mt-32'>
        <h2 className='text-center text-5xl font-extrabold text-[#324d67] '>
          محصولات ویژه
        </h2>
      </div>
      <div className='flex items-center justify-center w-screen min-h-screen p-10'>
        <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl'>
          {children}
        </div>
      </div>
    </>
  );
}

export default SpecialProducts;
