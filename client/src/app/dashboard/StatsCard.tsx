import { LucideIcon } from "lucide-react";
import React, { Fragment, JSX } from "react";

type StatDetail = {
  title: string;
  amount: string;
  changePercentage: number;
  IconComponent: LucideIcon;
};

type StatsProps = {
  title: string;
  primaryIcon: JSX.Element;
  details: StatDetail[];
  dateRange: string;
};

const StatsCard = ({ title, primaryIcon, details, dateRange }: StatsProps) => {
  const formatPercentage = (value: number) => {
    const signal = value >= 0 ? "+" : "";

    return `${signal}${value.toFixed()}%`;
  };
  const getChangecolor = (value: number) => {
    return value >= 0 ? "text-green-500" : "text-red-500";
  };
  return (
    <div className="md:row-span-1 xl:row-span-2 col-span-1 bg-white rounded-2xl shadow-md ">
      <div>
        <div className="flex justify-between items-center mb-2 px-5 pt-4">
          <h4 className="font-semibold text-lg text-gray-700">{title}</h4>
          <span className="text-xs text-gray-400">{dateRange}</span>
        </div>
        <hr />
      </div>
      <div className="flex mb-6 items-center justify-around gap-4 mx-5">
        <div className="rounded-full p-5 bg-blue-50 border-sky-300 border-[1px]">
          {primaryIcon}
        </div>
        <div className="flex-1">
          {details.map((detail, index) => (
            <Fragment key={index}>
              <div className="flex items-center justify-between my-4">
                <span className="text-gray-500">{detail.title}</span>
                <span className="font-bold text-gray-800">{detail.amount}</span>
                <div className="flex items-center">
                  <detail.IconComponent
                    className={`w-4 h-4 mr-1 ${getChangecolor(
                      detail.changePercentage
                    )}`}
                  />
                  <span
                    className={`font-medium ${getChangecolor(
                      detail.changePercentage
                    )}`}
                  >
                    {formatPercentage(detail.changePercentage)}
                  </span>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
