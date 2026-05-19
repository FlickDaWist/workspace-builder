export type Category =
  | "Monitor"
  | "Table"
  | "OfficeChair"
  | "PC"
  | "Accessories"
  | "CasualChair"
  | "Plant"
  | "Speaker"
  | "PCAccessories"
  | null;

// Object coords mapped with image-map.net
/*
<img src="studio-bg.png" usemap="#image-map">
<map name="image-map">
    <area target="" alt="Monitor" title="Monitor" href="" coords="367,271,514,266,649,261,650,359,521,380,377,411" shape="poly">
    <area target="" alt="Table" title="Table" href="" coords="508,650,504,537,808,406,625,388,166,522,174,649,176,643" shape="poly">
    <area target="" alt="OfficeChair" title="OfficeChair" href="" coords="607,557,665,495,748,504,761,399,791,379,788,297,844,288,855,362,834,523,832,573,770,618,745,631,748,652,695,651,653,605" shape="poly">
    <area target="" alt="PC" title="PC" href="" coords="744,269,619,268,614,384,743,397" shape="poly">
    <area target="" alt="Accessories" title="Accessories" href="" coords="33,204,424,215,415,137,321,133,304,48,152,20,168,122,21,116" shape="poly">
    <area target="" alt="CasualChair" title="CasualChair" href="" coords="1188,361,1153,467,1074,483,1062,580,1220,648,1312,625,1365,395" shape="poly">
    <area target="" alt="Plant" title="Plant" href="" coords="968,320,1062,323,1039,619,994,646,953,617" shape="poly">
    <area target="" alt="Speaker" title="Speaker" href="" coords="245,437,259,505,196,523,178,447" shape="poly">
    <area target="" alt="PCAccessories" title="PCAccessories" href="" coords="450,469,621,423,713,430,559,492" shape="poly">
</map>
*/
export const SCENE_CONFIG = [
  {
    id: "Monitor",
    points: "367,271 514,266 649,261 650,359 521,380 377,411",
    bubblePos: { x: 450, y: 220 },
  },
  {
    id: "Table",
    points: "508,650 504,537 808,406 625,388 166,522 174,649 176,643",
    bubblePos: { x: 300, y: 460 },
  },
  {
    id: "OfficeChair",
    points:
      "606,557 664,495 747,504 760,399 790,379 787,297 843,288 854,362 833,523 831,573 769,618 744,631 747,652 694,651 652,605",
    bubblePos: { x: 780, y: 240 },
  },
  {
    id: "PC",
    points: "744,269 619,268 614,384 743,397",
    bubblePos: { x: 630, y: 220 },
  },
  {
    id: "Accessories",
    points: "33,204 424,215 415,137 321,133 304,48 152,20 168,122 21,116",
    bubblePos: { x: 150, y: 50 },
  },
  {
    id: "CasualChair",
    points: "1188,361 1153,467 1074,483 1062,580 1220,648 1312,625 1365,395",
    bubblePos: { x: 1150, y: 320 },
  },
  {
    id: "Plant",
    points: "968,320 1062,323 1039,619 994,646 953,617",
    bubblePos: { x: 960, y: 270 },
  },
  {
    id: "Speaker",
    points: "245,437 259,505 196,523 178,447",
    bubblePos: { x: 180, y: 400 },
  },
  {
    id: "PCAccessories",
    points: "450,469 621,423 713,430 559,492",
    bubblePos: { x: 550, y: 410 },
  },
];

export const ITEM_OPTIONS: Record<string, any[]> = {
  Monitor: [
    {
      id: "m1",
      name: 'UltraWide 32"',
      img: "https://www.monis.rent/_next/image?url=https%3A%2F%2Fstrapi.monis.rent%2Fuploads%2F27_4_K_A27_U_Multitasking_Monitor_1_ce29d15357.jpg&w=828&q=75",
      weeklyPrice: 50000,
    },
    {
      id: "m2",
      name: "4K Screen",
      img: "https://www.monis.rent/_next/image?url=https%3A%2F%2Fstrapi.monis.rent%2Fuploads%2F24_full_HD_office_monitor_a24i_2026_be9e6bf958.jpg&w=828&q=75",
      weeklyPrice: 100000,
    },
  ],
  Table: [
    {
      id: "t1",
      name: "Office Desk",
      img: "https://www.monis.rent/_next/image?url=https%3A%2F%2Fstrapi.monis.rent%2Fuploads%2FMechanical_Adjustable_Desk_front_new_a83b8077b0.jpg&w=828&q=75",
      weeklyPrice: 150000,
    },
    {
      id: "t2",
      name: "Adjustable Desk",
      img: "https://www.monis.rent/_next/image?url=https%3A%2F%2Fstrapi.monis.rent%2Fuploads%2Fdesk_titel_new_3db151d44c.jpg&w=828&q=75",
      weeklyPrice: 170000,
    },
  ],
  OfficeChair: [
    {
      id: "oc1",
      name: "Ergo Chair",
      img: "https://www.monis.rent/_next/image?url=https%3A%2F%2Fstrapi.monis.rent%2Fuploads%2Ffantech_oca259s_chair_6_b632a0c529.jpg&w=828&q=75",
      weeklyPrice: 70000,
    },
  ],
  PC: [
    {
      id: "pc1",
      name: "Apple Mac Studio",
      img: "https://www.monis.rent/_next/image?url=https%3A%2F%2Fstrapi.monis.rent%2Fuploads%2FMac_Studio_M1_4_c7d3d55d4c.jpg&w=828&q=75",
      weeklyPrice: 200000,
    },
  ],
  Plant: [
    {
      id: "p1",
      name: "Snake Plant",
      img: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      weeklyPrice: 40000,
    },
    {
      id: "p2",
      name: "Snake Plant Thin",
      img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      weeklyPrice: 30000,
    },
  ],
};
