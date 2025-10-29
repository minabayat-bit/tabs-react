import { useState } from "react";
import "./index.css";

function App() {
  const [history, setHistory] = useState(true);
  const [vision, setVision] = useState(false);
  const [goals, setGoals] = useState(false);

  return (
    <>
      <div className=" h-full flex lg:flex-col flex-wrap justify-center items-center gap-5">
        <h2 className="lg:text-4xl tracking-[2px] text-3xl font-semibold text-gray-800">About</h2>
        <p className="text-gray-600 text-base lg:text-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          aperiam!
        </p>
        <div className="flex flex-col gap-5 lg:flex-row mt-5">
          <img
            className="lg:w-[569px] w-full h-[300px] rounded-lg"
            src=".\src\assets\img\hero-bcg.1486d4061cd0252b9a21.jpeg"
            alt=""
          />
          <div className="flex flex-col">
            <div className="bg-white lg:w-[570px] w-full h-auto rounded-lg ">
              <div className="flex flex-row justify-around">
                <button
                  onClick={() => {
                    setHistory(true);
                    setVision(false);
                    setGoals(false);
                  }}
                  className="history cursor-pointer p-3 tracking-[4px] w-[260px]  text-[20px] bg-[#dae2ec] focus:bg-white transition-all duration-500 hover:bg-blue-100 hover:text-blue-400"
                >
                  history
                </button>
                <button
                  onClick={() => {
                    setHistory(false);
                    setVision(true);
                    setGoals(false);
                  }}
                  className="vision cursor-pointer  tracking-[4px] w-[260px]  text-[20px] bg-[#dae2ec] focus:bg-white transition-all duration-500 hover:bg-blue-100 hover:text-blue-400 "
                >
                  vision
                </button>
                <button
                  onClick={() => {
                    setHistory(false);
                    setVision(false);
                    setGoals(true);
                  }}
                  className="
                  goals cursor-pointer tracking-[4px] w-[260px]  text-[20px] bg-[#dae2ec] focus:bg-white transition-all duration-500 hover:bg-blue-100 hover:text-blue-400"
                >
                  goals
                </button>
              </div>
              <div className={`${history ? "" : "hidden"}`}>
                <h2 className=" font-semibold text-[20px] px-4 pt-2 tracking-[4px] text-gray-800">
                  history
                </h2>
                <p className="w-full p-5 text-gray-600">
                  I'm baby wolf pickled schlitz try-hard normcore marfa man bun
                  mumblecore vice pop-up XOXO lomo kombucha glossier bicycle
                  rights. Umami kinfolk salvia jean shorts offal venmo.
                  Knausgaard tilde try-hard, woke fixie banjo man bun. Small
                  batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse
                  tacos. Viral direct trade hoodie ugh chambray, craft beer pork
                  belly flannel tacos single-origin coffee art party migas plaid
                  pop-up.
                </p>
              </div>
              <div className={`${vision ? "" : "hidden"}`}>
                <h2 className="font-semibold text-[20px] px-4 pt-2 tracking-[4px] text-gray-800">
                  vision
                </h2>
                <p className="w-full p-5 text-gray-600">
                  Man bun PBR&B keytar copper mug prism, hell of helvetica.
                  Synth crucifix offal deep v hella biodiesel. Church-key
                  listicle polaroid put a bird on it chillwave palo santo enamel
                  pin, tattooed meggings franzen la croix cray. Retro yr
                  aesthetic four loko tbh helvetica air plant, neutra palo santo
                  tofu mumblecore. Hoodie bushwick pour-over jean shorts
                  chartreuse shabby chic. Roof party hammock master cleanse
                  pop-up truffaut, bicycle rights skateboard affogato readymade
                  sustainable deep v live-edge schlitz narwhal.
                </p>
              </div>
              <div className={`${goals ? "" : "hidden"}`}>
                <h2 className="font-semibold text-[20px] px-4 pt-2 tracking-[4px] text-gray-800">
                  Goals
                </h2>
                <p className="w-full p-5 text-gray-600">
                  Chambray authentic truffaut, kickstarter brunch taxidermy vape
                  heirloom four dollar toast raclette shoreditch church-key.
                  Poutine etsy tote bag, cred fingerstache leggings cornhole
                  everyday carry blog gastropub. Brunch biodiesel sartorial
                  mlkshk swag, mixtape hashtag marfa readymade direct trade man
                  braid cold-pressed roof party. Small batch adaptogen coloring
                  book heirloom. Letterpress food truck hammock literally hell
                  of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork
                  yuccie, banh mi salvia venmo photo booth quinoa chicharrones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
