import React from "react";

function JobRow() {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm relative">
        <div className="absolute top-2 right-4">heart</div>
        <div className="flex grow gap-4">
          <div className="content-center">
            <img
              className="size-12"
              src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-spotify-symbol-3.png"
              alt=""
            />
          </div>
          <div className="grow sm:flex">
            <div className="grow">
              <div className="text-gray-500 text-sm">Spotify</div>
              <div className="font-bold text-lg mb-1">Product Designer</div>
              <div className="text-gray-400 text-sm">
                Remote &middot; Florida, US &middot; Full-time
              </div>
            </div>
            <div className="content-end text-gray-500 text-sm">2 weeks ago</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobRow;
