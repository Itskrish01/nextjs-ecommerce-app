import Slider from "rc-slider";
import React, { useEffect } from "react";
import { LuCalendar, LuDollarSign, LuX } from "react-icons/lu";
import Button from "./UI/Button";

const FilterSection = ({
  setShowDollarRange,
  showDollarRange,
  setRange,
  range,
  handleRangeChange,
  showCategories,
  setShowCategories,
  selectedCategories,
  setRangeChanged,
  handleCategoryChange,
  rangeChanged,
}) => {
  useEffect(() => {
    if (!rangeChanged) {
      setRangeChanged(true);
    }
  }, [selectedCategories]);

  return (
    <div className="opacity-100 mt-20">
      <div className="w-full border-b border-neutral-200/70  my-8"></div>
      <div className="flex lg:space-x-4">
        <div className="flex flex-1 space-x-4">
          <div className="relative">
            <div
              onClick={() => setShowDollarRange(!showDollarRange)}
              className={`${
                showDollarRange ? "border-indigo-500" : ""
              } flex cursor-pointer items-center justify-center px-4 py-2 text-sm rounded-full border focus:outline-none select-none border-neutral-300 text-neutral-700  hover:border-neutral-400 `}
            >
              <LuDollarSign />
              <span className="ml-2 min-w-[90px]">
                {range[0]}$ - {range[1]}$
              </span>
              {range[0] !== 1 || range[1] !== 5000 ? (
                <LuX
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setRangeChanged(false);
                    setRange([1, 5000]);
                  }}
                  className="bg-black text-white rounded-full p-1 text-lg ml-1"
                />
              ) : (
                ""
              )}
            </div>
            <div
              className={`${
                showDollarRange ? "block" : "hidden"
              } absolute z-40 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 opacity-100 translate-y-0`}
            >
              <div className="overflow-hidden border rounded-2xl shadow-xl bg-white  border-neutral-200 ">
                <div className="relative flex flex-col px-5 py-6 space-y-8">
                  <div className="space-y-5">
                    <span className="font-medium">Price range</span>
                    <Slider
                      range
                      min={1}
                      max={5000}
                      defaultValue={[1, 5000]}
                      value={range}
                      onChange={handleRangeChange}
                    />
                  </div>
                  <div className="flex justify-between space-x-5">
                    <div>
                      <label
                        htmlFor="minPrice"
                        className="block text-sm font-medium text-neutral-700 "
                      >
                        Min price
                      </label>
                      <div className="mt-1 relative rounded-md">
                        <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-500 sm:text-sm">
                          $
                        </span>
                        <input
                          type="text"
                          name="minPrice"
                          disabled
                          id="minPrice"
                          className="block w-32 pr-10 pl-4 sm:text-sm border-neutral-200 border py-2 rounded-full bg-transparent"
                          value={range[0]}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="maxPrice"
                        className="block text-sm font-medium text-neutral-700 "
                      >
                        Max price
                      </label>
                      <div className="mt-1 relative rounded-md">
                        <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-500 sm:text-sm">
                          $
                        </span>
                        <input
                          type="text"
                          disabled
                          name="maxPrice"
                          id="maxPrice"
                          className="block w-32 pr-10 pl-4 sm:text-sm border-neutral-200 border py-2  rounded-full bg-transparent"
                          value={range[1]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5 gap-5 bg-neutral-50 flex items-center justify-between">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setShowDollarRange(false);
                      setRange([1, 5000]);
                    }}
                  >
                    Clear
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => setShowDollarRange(false)}
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              onClick={() => setShowCategories(!showCategories)}
              className={`${
                showCategories ? "border-indigo-500" : ""
              } flex cursor-pointer items-center justify-center px-4 py-2 text-sm rounded-full border focus:outline-none select-none border-neutral-300 text-neutral-700  hover:border-neutral-400 `}
            >
              <LuCalendar />
              <span className="ml-2">Categories</span>
            </div>
            <div
              className={`${
                showCategories ? "block" : "hidden"
              } absolute z-40 w-screen max-w-sm px-4 mt-3 -right-16 sm:px-0 lg:max-w-sm opacity-100 translate-y-0`}
            >
              <div className="overflow-hidden rounded-2xl shadow-xl bg-white  border border-neutral-200 ">
                <div className="relative flex flex-col px-5 py-6 space-y-5">
                  <div className="">
                    <div className="flex text-sm sm:text-base">
                      <input
                        type="checkbox"
                        onChange={() => handleCategoryChange("mouse")}
                        checked={selectedCategories.includes("mouse")}
                        className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                      />
                      <label className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none">
                        <span className="text-slate-900 ">Mouse</span>
                      </label>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex text-sm sm:text-base">
                      <input
                        type="checkbox"
                        onChange={() => handleCategoryChange("keyboard")}
                        checked={selectedCategories.includes("keyboard")}
                        className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                      />
                      <label
                        htmlFor="Keyboard"
                        className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                      >
                        <span className="text-slate-900 ">Keyboard</span>
                      </label>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex text-sm sm:text-base">
                      <input
                        type="checkbox"
                        onChange={() => handleCategoryChange("smartphones")}
                        checked={selectedCategories.includes("smartphones")}
                        className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                      />
                      <label
                        htmlFor="Smartphones"
                        className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                      >
                        <span className="text-slate-900 ">Smartphones</span>
                      </label>
                    </div>
                  </div>

                  <div className="">
                    <div className="flex text-sm sm:text-base">
                      <input
                        type="checkbox"
                        onChange={() => handleCategoryChange("headphones")}
                        checked={selectedCategories.includes("headphones")}
                        className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                      />
                      <label
                        htmlFor="Headphones"
                        className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                      >
                        <span className="text-slate-900 ">Headphones</span>
                      </label>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex text-sm sm:text-base">
                      <input
                        type="checkbox"
                        onChange={() => handleCategoryChange("laptop")}
                        checked={selectedCategories.includes("laptop")}
                        className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                      />
                      <label
                        htmlFor="Laptop"
                        className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                      >
                        <span className="text-slate-900 ">Laptop</span>
                      </label>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex text-sm sm:text-base">
                      <input
                        type="checkbox"
                        onChange={() => handleCategoryChange("ipad")}
                        checked={selectedCategories.includes("ipad")}
                        className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                      />
                      <label
                        htmlFor="iPad"
                        className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                      >
                        <span className="text-slate-900 ">iPad</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-neutral-50  gap-4 flex items-center justify-between">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setShowCategories(false);
                      setRangeChanged(false);
                    }}
                  >
                    Clear
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => setShowCategories(false)}
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
