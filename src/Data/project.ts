import skullVideo from "@/public/Video/dummy.mp4";
import cartoon from "@/public/Video/cartoon.mp4";
import coder from "@/public/Video/coder.mp4";
import coderImg from "@/public/Images/thumbnails/coder.jpg";
import skull from "@/public/Images/thumbnails/skull.jpg";
import viking from "@/public/Images/thumbnails/viking.jpg";

export const projectData = [
  {
    id: 1,
    name: "SubA",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.",
    videoUrl: `${skullVideo}`,
    thumbnail: `${skull}`,
  },
  {
    id: 2,
    name: "SubB",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.",
    videoUrl: `${cartoon}`,
    thumbnail: `${viking}`,
  },
  {
    id: 3,
    name: "SubC",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.",
    videoUrl: `${coder}`,
    thumbnail: `${coderImg}`,
  },
];
