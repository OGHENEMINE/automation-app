import { useState } from "react";
import Package from "../assets/Package.svg";
import Trophy from "../assets/Trophy.svg";
import CreditCard from "../assets/CreditCard.svg";
import HeadPhones from "../assets/Headphones.svg";
import Star from "../assets/Star.svg";
import Search from "../assets/MagnifyingGlass.svg";
import SelectCaretDown from "../assets/CaretDown.svg";
import Favourite from "../assets/FavouriteStar.svg";
import { Products } from "../util/Products";
import Input from "../components/Input";
import Buttons from "../components/Buttons";
function Home() {
  const [dropDown, setDropDown] = useState(false)

  const [dropDownOption, setDropDownOption] = useState("")

  return (
    <main className="font-Public-Sans-Regular font-normal text-zinc-900">
      <div className="flex items-center justify-between mx-[120px]">
        {/* SEARCH */}
        <div className="w-1/3 px-4 py-3 bg-white rounded-sm border border-gray-200 justify-center items-center gap-2 inline-flex mb-6">
          <Input
            type="text"
            label="search"
            placeholder="Search for anything..."
            id="search-input"
          />
          <Buttons type="icon-button" icon={<img alt="" src={Search} />} />
        </div>

        {/* FILTER CONTAINER STARTS HERE */}
        <div className="flex items-center gap-[22px]">
          <h6 className="font-Public-Sans-Regular font-normal text-sm">
            Sort by:
          </h6>
          <div className="border relative border-gray-200 rounded-sm cursor-pointer px-4 py-3 flex items-center gap-[45px] ">
            <span className="text-sm">{dropDownOption}</span>
            <ul className={dropDown? "px-2 py-3 bg-white transition-all duration-500 absolute top-full left-0 right-0 border border-gray-200" : "hidden"}>
            {["Most popular", "Newest", "Oldest"].map((item) => (
              <li key={item} onClick={() => setDropDownOption(item)} className={`p-2 mb-1 ${dropDownOption === item ? "bg-orange-500" : "hover:bg-orange-500 hover:text-white"}`}>{item}</li>
            ))}

            </ul>

            <span onClick={() => setDropDown(!dropDown)}><img src={SelectCaretDown} alt="a select button icon"/></span>
          </div>
        </div>
      </div>
      {/* BENEFITS CONTAINER STARTS HERE */}
      <div className="mx-[120px] p-4 rounded-md border border-gray-200 flex justify-between items-center gap-7 mb-6">
        <div className="text-gray-500 text-sm flex items-center justify-center gap-4 relative after:absolute after:h-full after:w-0.5 after:bg-gray-200 after:top-0 after:-right-14 p-4">
          <img src={Package} alt="an icon of a package" />
          <div>
            <h6 className="font-Public-Sans-Bold font-bold text-zinc-900">
              Fasted Delivery
            </h6>
            <h6>Delivery in 24/H</h6>
          </div>
        </div>

        <div className="text-gray-500 text-sm flex items-center justify-center gap-4 relative after:absolute after:h-full after:w-0.5 after:bg-gray-200 after:top-0 after:-right-14 p-4">
          <img src={Trophy} alt="an icon of a package" />
          <div>
            <h6 className="font-Public-Sans-Bold font-bold text-zinc-900">
              24 Hours Return
            </h6>
            <h6>100% money-back guarantee</h6>
          </div>
        </div>
        <div className="text-gray-500 text-sm flex items-center justify-center gap-4 relative after:absolute after:h-full after:w-0.5 after:bg-gray-200 after:top-0 after:-right-14 p-4">
          <img src={CreditCard} alt="an icon of a package" />
          <div>
            <h6 className="font-Public-Sans-Bold font-bold text-zinc-900">
              Secure Payment
            </h6>
            <h6>Your money is safe</h6>
          </div>
        </div>
        <div className="text-gray-500 text-sm flex items-center justify-center gap-4 p-4">
          <img src={HeadPhones} alt="an icon of a package" />
          <div>
            <h6 className="font-Public-Sans-Bold font-bold text-zinc-900">
              Support 24/7
            </h6>
            <h6>Live contact/message</h6>
          </div>
        </div>
      </div>

      {/* PRODUCTS START HERE */}
      <div className="mx-[120px] mb-6 flex items-center justify-between gap-4 flex-wrap">
        {Products.map(({ img, text }) => (
          <>
            <div className="w-[234px] p-4 rounded-[3px] border border-gray-200">
              <img
                className="w-[202px] h-[172px]"
                src={img}
                alt="picture of an iphone"
              />

              {/* CONTAINER FOR STARS AND WRITEUP START HERE */}
              <div>
                <div className="flex items-center gap-1">
                  <span>
                    <img src={Star} alt="a start icon" />
                  </span>
                  <span>
                    <img src={Star} alt="a start icon" />
                  </span>
                  <span>
                    <img src={Star} alt="a start icon" />
                  </span>
                  <span>
                    <img src={Star} alt="a start icon" />
                  </span>
                  <span>
                    <img src={Star} alt="a start icon" />
                  </span>
                </div>
              </div>

              <p className="text-zinc-900 text-sm font-Public-Sans-Regular font-normal">
                {text}
              </p>
            </div>
          </>
        ))}
      </div>

      {/* NEWLETTER SUBSCRIPTION CONTAINER START HERE */}
    </main>
  );
}

export default Home;
