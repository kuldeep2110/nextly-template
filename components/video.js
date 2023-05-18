import React, { useState } from "react";
import Container from "./container";

export default function Video() {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <Container >

      <div className="container 0 mx-auto xl:px-0 text-start" id='roadmap'>
        <div className="grid gap-10 lg:grid-cols-2 flex flex-wrap xl:grid-cols-4">
          <div className="lg:col-span-2 xl:col-auto">
            <img src="img/client/FOURTH_IMAGE.png" className="img-fluid" />
          </div>
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col  w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <h4 className="text-2xl leading-normal "><b>Phase 1</b></h4>
              <ul className="myul">
                <li>Launch Website</li><li>
                  Build Contract</li><li>
                  Community Development</li><li>
                  Contract Audit</li><li>
                  Pre Marketing</li><li>
                  Pinksale Launch</li>
              </ul>

            </div>
          </div>

          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col  w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <h4 className="text-2xl leading-normal "><b>Phase 2</b></h4>
              <ul className="myul">
                <li>PancakeSwap Launch</li><li>
                  Roll Out Marketing</li><li>
                  CMC + CG Listing</li><li>
                  2,000 Holders</li><li>
                  Daily FOMO Tech Launch</li><li>
                  Plan CEX Listings</li>

              </ul>

            </div>
          </div>

          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col  w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <h4 className="text-2xl leading-normal "><b>Phase 3</b></h4>
              <ul className="myul">
                <li>5,000+ Holders</li><li>
                  Strategic Partnerships</li><li>
                  Ongoing Marketing</li><li>
                  International Communities</li><li>
                  Community Airdrops</li>

              </ul>

            </div>
          </div>

        </div>
      </div>
    </Container>
  );
}
