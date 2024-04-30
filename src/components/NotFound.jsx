import snorlax from ".././assets/snorlax.png";

function NotFound() {
  return (
    <div className=" w-80 pt-36 flex flex-col justify-center items-center gap-6">
      <p className="font-semibold text-3xl text-center">
        Não há Pokemons desse tipo!
      </p>
      <img src={snorlax} className="w-full" />
    </div>
  );
}

export default NotFound;
