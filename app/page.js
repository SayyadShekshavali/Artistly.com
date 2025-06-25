import Image from "next/image";
import Link from "next/link";
import Logo from "./components/artistly.png";
import hero from "./components/hero.jpeg";
import dancer from "./components/dancer.jpeg";
import Singer from "./components/singer.jpeg";
import Speaker from "./components/speaker.jpeg";
import Djs from "./components/djs.jpeg";
import DJop from "./components/djop.jpeg";
import arjit from "./components/arjit.jpeg";
import sp from "./components/sp.jpeg";
import sm from "./components/sm.jpeg";

export default function Home() {
  return (
    <div className="py-4 bg-gradient-to-br from-white to-slate-300  lg:h-350 h-700">
      <div className="flex justify-center mt-5 px-4">
        <Image
          className="rounded-xl object-cover w-full max-w-5xl h-auto lg:h-110"
          src={hero}
          alt="Hero"
        />
      </div>

      <div className="    lg:h-100 h-130 py-10  sm:px-8 ">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Categories
        </h2>

        <div className="flex flex-wrap justify-center items-center lg:h-40  lg:w-200 h-100 w-73 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-screen  lg:mx-auto ">
          <div className="bg-white shadow-md rounded-xl lg:p-6 p-2 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
            <Image className=" lg:h-40 h-40 w-40 " src={dancer} alt="Singer" />
            <span className="text-xl font-semibold">Singers</span>
          </div>
          <div className="bg-white shadow-md rounded-xl lg:p-6 p-2 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
            <Image className=" lg:h-40 h-40 w-40" src={Singer} alt="Singer" />
            <span className="text-xl font-semibold">Dancers</span>
          </div>
          <div className="bg-white shadow-md rounded-xl lg:p-6 p-2 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
            <Image className=" lg:h-40 h-40 w-40" src={Speaker} alt="Singer" />
            <span className="text-xl font-semibold">Speakers</span>
          </div>
          <div className="bg-white shadow-md rounded-xl lg:p-6 p-2 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
            <Image className=" lg:h-40 h-40 w-40" src={Djs} alt="Singer" />
            <span className="text-xl font-semibold">DJs</span>
          </div>
        </div>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-center mt-16 mb-8">
        Featured Artists
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-screen max-w-6xl mx-auto px-4">
        {[
          {
            name: "Arjith singh",
            category: "Singer",
            fee: "$1000-$5000",
            location: "Maharastra",
            image: arjit,
          },
          {
            name: "Saipallavi",
            category: "Dancer",
            fee: "$500-$1000",
            location: "Kerala",
            image: sp,
          },
          {
            name: "sandeep maheshwari",
            category: "Speaker",
            fee: "$100-$500",
            location: "UttarPradesh",
            image: sm,
          },
          {
            name: "DJ operator",
            category: "DJ",
            fee: "$5000+",
            location: "myanmar",
            image: DJop,
          },
        ].map((artist, index) => (
          <div
            key={index}
            className=" lg:h-80 lg:w-50 bg-white shadow-md rounded-xl p-5 text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Image
              className="h-40 w-40 mx-auto rounded-lg"
              src={artist.image}
              alt={artist.name}
            />
            <h3 className="text-lg font-semibold mt-2">{artist.name}</h3>
            <p className="text-sm text-gray-600">Category: {artist.category}</p>
            <p className="text-sm text-gray-600">Fee: {artist.fee}</p>
            <p className="text-sm text-gray-600">Location: {artist.location}</p>
            <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
              Ask for Quote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
