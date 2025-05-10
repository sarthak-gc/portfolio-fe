import { useEffect, useState } from "react";
// import { useState, useEffect } from "react";
// import axios, { AxiosError } from "axios";
import { type ProjectProps } from "@/Pages/Projects";

const useProjects = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    setProjects([
      {
        projectId: "231",
        name: "Real time chat app",
        description:
          "A real-time chat application that allows users to send and receive messages instantly. (Needs improvement)",
        thumbnailUrl:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0iqvqUM-_MntTZp4CMBaigHaEK%26cb%3Diwc1%26pid%3DApi&f=1&ipt=967cf0cbcf7d5564835d5c86e78479f681eae38a11017d400c10bb2a1e2c8da7&ipo=images",
        imagesUrl: [
          "https://placehold.co/600x400.png?text=Real-time+chat+app+image1",
          "https://placehold.co/600x400.png?text=Real-time+chat+app+image2",
        ],
        githubLink: "https://github.com/user/realtime-chat-app",
        demoLink: "https://realtime-chat-app-demo.com",
        TechUsed: ["Socket.io", "Node.js", "Express", "MongoDB", "React"],
        background: "lightpink",
      },
      {
        projectId: "321",
        name: "Medium Blog",
        description:
          "A blog platform where users can write and publish articles. (Needs improvement)",
        thumbnailUrl:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.hZrUmaARzP6obZEGWAmrGQHaEy%26cb%3Diwp1%26pid%3DApi&f=1&ipt=7ea1e24ccae9abc647a8f77ee51ed3cbded6be1332392c65965d6b9d1fb4da4a&ipo=images",
        imagesUrl: [
          "https://placehold.co/600x400.png?text=Medium+Blog+image1",
          "https://placehold.co/600x400.png?text=Medium+Blog+image2",
        ],
        githubLink: "https://github.com/user/medium-blog",
        demoLink: "https://medium-blog-demo.com",
        TechUsed: ["React", "Node.js", "MongoDB", "Express", "JWT"],
        background: "lightyellow",
      },
      {
        projectId: "fads",
        name: "FB-Clone",
        description:
          "A Facebook clone built with similar functionality but no social network features.",
        thumbnailUrl:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP._MQ6SWfTpvkdgFaCa1u6lgHaHa%26cb%3Diwp1%26pid%3DApi&f=1&ipt=3d8426dcef1e011576654e366fae31dd920886be27b9491b38dc813180a708cc&ipo=images",
        imagesUrl: [
          "https://placehold.co/600x400.png?text=FB-Clone+image1",
          "https://placehold.co/600x400.png?text=FB-Clone+image2",
        ],
        githubLink: "https://github.com/user/fb-clone",
        demoLink: "https://fb-clone-demo.com",
        TechUsed: ["React", "Node.js", "MongoDB", "Express", "Redux"],
        background: "lightblue",
      },
      {
        projectId: "afds",
        name: "Esewa",
        description: "An online payment system clone. (Haven't started)",
        thumbnailUrl:
          "https://placehold.co/600x400.png?text=Esewa+Payment+System",
        imagesUrl: [
          "https://placehold.co/600x400.png?text=Esewa+image1",
          "https://placehold.co/600x400.png?text=Esewa+image2",
        ],
        githubLink: "https://github.com/user/esewa-clone",
        demoLink: "https://esewa-clone-demo.com",
        TechUsed: ["React", "Node.js", "Express", "Stripe API", "MongoDB"],
        background: "lightgreen",
      },
      {
        projectId: "fsda",
        name: "Bank API",
        description:
          "A RESTful API that provides banking services. (Working completion in 2 days)",
        thumbnailUrl: "https://placehold.co/600x400.png?text=Bank+API",
        imagesUrl: [
          "https://placehold.co/600x400.png?text=Bank+API+image1",
          "https://placehold.co/600x400.png?text=Bank+API+image2",
        ],
        githubLink: "https://github.com/user/bank-api",
        demoLink: "https://bank-api-demo.com",
        TechUsed: ["Node.js", "Express", "MongoDB", "JWT", "Postman"],
        background: "lightcoral",
      },
    ]);
  }, []);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  // setError(null);
  // const fetchProjects = async () => {
  //   try {
  //     const response = await axios.get("https://my-projects.com/all");
  //     setProjects(response.data);
  //   } catch (err) {
  //     if (err instanceof AxiosError) setError(err.response?.data);
  //   } finally {
  // setLoading(false);
  //   }
  // };
  // fetchProjects();
  // }, []);

  // return { projects, loading, error };
  return { projects };
};

export default useProjects;
