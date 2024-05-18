import React from "react";
import { Link } from "react-router-dom";
import SubscribeForm from "./SubscribeForm";

const Body = () => {
  return (
    <div className="mx-10 my-3 text-center justify-center">
      <div className="p-2 mt-5 m-2 ">
        <span className="text-3xl text-slate-600">
          Put Your Brand In Everyone's Hand!
        </span>
        <div className="mt-5">
          <button className="border border-black p-2 px-5 text-slate-600 m-2">
            Adevetise with us
          </button>
        </div>
        <div className="flex object-cover justify-center">
          <img
            height={600}
            width={600}
            alt="websiteBottle"
            src="/websiteBottle.png"
          />
        </div>

        <div className="grid grid-cols-4 gap-4 my-4 p-2 text-wrap mx-10 px-10 justify-center">
          <div></div>
          <div className="m-4 my-4">
            <img
              className="mx-auto"
              height={80}
              width={80}
              alt="save-water"
              src="/icons/save-money.png"
            />
            <h2 className="font-bold text-xl p-2 m-2 ">Save Money</h2>
            <span className="text-slate-500">
              Bottled water costs 2,000 times the price of tap water
            </span>
          </div>
          <div className="m-4">
            <img
              className="mx-auto"
              height={80}
              width={80}
              alt="save-water"
              src="/icons/eco-friendly.png"
            />
            <h2 className="font-bold text-xl p-2 m-2 ">Eco Friendly</h2>
            <span className="text-slate-500">
              Our goal is to be net positive by 2030
            </span>
          </div>
          <div></div>
          <div></div>
          <div className="m-4">
            <img
              className="mx-auto"
              height={80}
              width={80}
              alt="save-water"
              src="/icons/premium-water.png"
            />
            <h2 className="font-bold text-xl p-2 m-2 ">Premium Water</h2>
            <span className="text-slate-500">
              FreeWater is natural spring water and all of our containers are
              BPA
            </span>
          </div>
          <div className="m-4">
            <img
              className="mx-auto"
              height={80}
              width={80}
              alt="save-water"
              src="/icons/save-lifes.png"
            />
            <h2 className="font-bold text-xl p-2 m-2 ">Save Lives</h2>
            <span className="text-slate-500">
              Ten cents from each beverage is donated to charity to build water
              wells for people in need
            </span>
          </div>
          <div></div>
        </div>

        <div className="flex justify-center items-center mt-5 mx-10 gap-4">
          <video
            className="h-5/6 w-96 object-cover"
            autoPlay
            loop
            muted
            playsInline
            src="https://video.wixstatic.com/video/bfcb9b_7acc406637ce4727ad0391a8ef6b86fb/720p/mp4/file.mp4"
          ></video>
          <span className="w-96 text-wrap text-lg text-slate-600">
            FreeWater is an innovative advertising platform that utilizes
            premium spring water as a new type of advertising medium while
            prioritizing philanthropy and sustainability. Ten cents from each
            beverage is donated to charity to{" "}
            <span className="font-bold">fight the global water crisis</span>. We
            only need 10% of Americans to choose FreeWater so we can solve the
            global water crisis permanently.
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 justify-center mx-12">
          <div className=" m-2 p-2">
            <span className="font-bold text-4xl p-4 m-4 text-left">
              We are partnered with WellAware
            </span>
            <p className="text-left m-4 p-4">
              We donate ten cents per beverage to WellAware, an Austin based
              non-profit that builds water wells in East Africa. Every 150
              FreeWaters donates enough money to provide one person with a safe
              water source for the rest of their life.
            </p>
            <div className="border border-blue-950 w-48 p-2 m-2 mt-4 ml-10">
              <Link to="https://wellawareworld.org">Learn more</Link>
            </div>
          </div>
          <div className="col-span-2">
            <img alt="freeWater" src="/main/free-water-drinking-image-1.webp" />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-3 justify-center mx-12">
          <div className=" m-2 p-2">
            <span className="font-bold text-4xl p-4 m-4 text-left">
              Charity Water
            </span>
            <p className="text-left m-4 p-4">
              They work exclusively with local partners who build sustainable,
              community-owned water projects. Their partners also facilitate
              comprehensive water, sanitation, and hygiene programming to
              protect everyone’s long-term health.
            </p>
            <div className="border border-blue-950 w-48 p-2 m-2 mt-4 ml-10">
              <Link to="https://www.charitywater.org/">Learn more</Link>
            </div>
          </div>
          <div className="col-span-2">
            <img
              alt="freeWater"
              src="/main/charity-water-social-preview.webp"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 justify-center mx-24">
          <div className="">
            <img alt="freeWater" src="/main/three-bottles-free-water.webp" />
          </div>
          <div className="mr-40 mt-12">
            <span className="font-bold text-4xl text-left">
              We never use plastic bottles
            </span>
            <p className="text-left m-4 p-4">
              FreeWater comes in aluminum bottles and paper cartons of natural
              spring water because we didn't want to make water free and do it
              in a plastic bottle.
            </p>
          </div>
        </div>
        <SubscribeForm />
      </div>
    </div>
  );
};

export default Body;
