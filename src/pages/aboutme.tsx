import {
  FaMapLocationDot as MapLocationDot,
  FaUserGraduate as UserGraduate,
} from "react-icons/fa6";

export default function AboutMe() {
  return (
    <div className="flex h-screen m-0 p-0 box-border flex-col items-center justify-center p-36 gap-8 md:gap-36">
      <h1 className="text-6xl md:text-8xl font-bold text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
        Sobre Mim
      </h1>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
        <div className="flex justify-start items-center gap-4 w-72 md:w-96">
          <MapLocationDot className="text-4xl md:text-5xl text-zinc-50" />
          <p className="text-sm md:text-lg text-zinc-50">
            Eu sou de<br />
            <span className="text-lg md:text-2xl uppercase bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent font-bold">
              Fortaleza
            </span>
          </p>
        </div>
        <div className="flex justify-start items-center gap-4 w-72 md:w-96">
          <UserGraduate className="text-4xl md:text-5xl text-zinc-50" />
          <p className="text-sm md:text-lg text-zinc-50">
            Estudo<br />
            <span className="text-lg md:text-2xl uppercase bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent font-bold">
              Analíse e Des. de Sistemas
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
