import React from "react";
import JavascriptTimeAgo from "javascript-time-ago";
// Load locale-specific relative date/time formatting rules.
import en from "javascript-time-ago/locale/en";
import { useMediaQuery } from "react-responsive";

JavascriptTimeAgo.addLocale(en);

const timeAgo = new JavascriptTimeAgo("en-US");

const NewsCard = ({ item, truncateLengthDescription, truncateLengthTitle }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  function formatRelativeTime(dateString) {
    const date = new Date(dateString);
    const relativeTime = timeAgo.format(date);
    return relativeTime;
  }

  function truncateString(str, maxLength) {
    if (!str || str.length <= maxLength) {
      return str;
    }

    const truncatedString = str.substring(0, maxLength - 3) + "...";
    return truncatedString;
  }

  return (
    <a
      target="_blank"
      href={item.url}
      className={`flex items-center gap-5 transition duration-300 sm:border border-white sm:p-2 rounded-md group hover:border-gray-400 ${
        isTabletOrMobile ? "" : "news-card"
      } `}
    >
      <img
        className="rounded-lg h-28 w-28 sm:h-44 sm:w-44 object-cover"
        src={item.urlToImage || "/images/no-thumbnail.jpg"}
      ></img>
      <div>
        <div className="flex items-center gap-2 text-gray-600 text-xs">
          <p>{item.author || "Not mentioned"}</p>
          <span>•</span>
          <p>{formatRelativeTime(item.publishedAt)}</p>
        </div>
        <h4 className="sm:text-xl group-hover:text-green-700 transition duration-300 text-base mt-2 font-semibold">
          {truncateString(item?.title, truncateLengthTitle)}
        </h4>
        <p className="text-gray-700 sm:block hidden text-sm mt-2">
          {truncateString(item?.description, truncateLengthDescription) ||
            "No Description Available"}
        </p>
      </div>
    </a>
  );
};

export default NewsCard;
