import React from 'react';
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

const SliderElements = [
    {
        id:1,
        image: "https://images.uzum.uz/cq9utussslotj05kiad0/main_page_banner.jpg",
    },
    {
        id:2,
        image: "https://images.uzum.uz/cqa2354sslotj05kiqs0/main_page_banner.jpg",
    },
    {
        id:3,
        image: "https://images.uzum.uz/cpv9gs36eisq2rkdu350/main_page_banner.jpg",
    },
    {
        id:4,
        image: "https://images.uzum.uz/cq1uu8j6eisq2rked9vg/main_page_banner.jpg",
    },
    {
        id:5,
        image: "https://images.uzum.uz/cq1uv5b5qt1gj8ddqd2g/main_page_banner.jpg",
    },
    {
        id:6,
        image: "https://images.uzum.uz/cq17tkr6eisq2rke8dd0/main_page_banner.jpg",
    },
    {
        id:7,
        image: "https://images.uzum.uz/cpv9a2osarnfdo99n360/main_page_banner.jpg",
    },
    {
        id:8,
        image: "https://images.uzum.uz/cq2016j6eisq2rkedn9g/main_page_banner.jpg",
    },
    {
        id:9,
        image: "https://images.uzum.uz/cq204qb6eisq2rkedo6g/main_page_banner.jpg",
    },
    {
        id:10,
        image: "https://images.uzum.uz/cq2ic5b5qt1gj8ddu1a0/main_page_banner.jpg",
    },
    {
        id:11,
        image: "https://images.uzum.uz/cq15r2gsarnfdo9a11n0/main_page_banner.jpg",
    },
    {
        id:12,
        image: "https://images.uzum.uz/cq14lb36eisq2rke7l80/main_page_banner.jpg",
    },
    {
        id:13,
        image: "https://images.uzum.uz/cq14mib6eisq2rke7leg/main_page_banner.jpg",
    },
    {
        id:14,
        image: "https://images.uzum.uz/cq14vnr5qt1gj8ddlbug/main_page_banner.jpg",
    },
    {
        id:15,
        image: "https://images.uzum.uz/cq150rr6eisq2rke7np0/main_page_banner.jpg",
    },
    {
        id:16,
        image: "https://images.uzum.uz/cq151sr5qt1gj8ddlcqg/main_page_banner.jpg",
    },
    {
        id:17,
        image: "https://images.uzum.uz/cq152n0sarnfdo9a0qf0/main_page_banner.jpg",
    },
    {
        id:18,
        image: "https://images.uzum.uz/cq2me135qt1gj8ddv7gg/main_page_banner.jpg",
    },
    {
        id:19,
        image: "https://images.uzum.uz/cq1uvhgsarnfdo9a64rg/main_page_banner.jpg",
    },
];

export default function Slider() {
  return (
    <div className="pb-7 w-[90%] m-auto">
        <Splide
            options={{
                type: 'loop',
            }}
            aria-label="My Favorite Images"
        >
            {SliderElements.map((item) => {
                return (
                    <SplideSlide key={item.id}>
                        <Link to={`slider/${item.id}`}>
                            <img src={item.image} alt={`slider-${item.id}`} />
                        </Link>
                    </SplideSlide>
                );
            })}
        </Splide>
    </div>
  );
};