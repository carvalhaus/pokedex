import psyduck from ".././assets/psyduck.png";

function Error() {
  return (
    <div className=" w-72 pt-36 flex flex-col justify-center items-center gap-6">
      <p className="font-semibold text-3xl text-center">
        Não foi possível carregar os dados!
      </p>
      <img src={psyduck} />
    </div>
  );
}

export default Error;
