function App() {

  return (
    <>
      <div className=" h-full flex flex-col justify-center items-center gap-5">
        <h2 className="text-3xl font-bold">about</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          aperiam!
        </p>
        <div className="flex flex-row gap-5">
          <img className="w-[569px] h-[300px]" src=".\src\assets\img\hero-bcg.1486d4061cd0252b9a21.jpeg" alt="" />
          <div className="bg-white w-[569px] h-[300px] ">
            <button className="cursor-pointer p-4 ">history</button>
            <button  className="cursor-pointer p-4 ">vision</button>
            <button className="cursor-pointer p-4 " >goals</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
