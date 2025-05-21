import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use(
  cors({
    origin: "*",
    allowMethods: ["POST", "GET"],
  })
);

const projects = [
  {
    projectId: "chat-app",
    name: "Real time chat app",
    description:
      "A simple chat app built to explore Socket.io, allowing users to message anyone and create custom groups with any participants they choose. While the app is designed to offer easy communication and group creation, it currently doesn't have strict privacy or optimization features (such as restricting who can add others to groups).",
    thumbnailUrl:
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747818216/tokeklxr6q6iajrbddqb.png",
    imagesUrl: [
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747817433/d9cex4eysyosmgfv1zsn.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747817808/xb6ufim2jxfklit2ze8w.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747817544/s7tabpdkyettsehrtsql.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747817526/wwakvi2ailypsqz8l91m.png",

      "https://res.cloudinary.com/deljnxufx/image/upload/v1747817493/xkbwcj9sbd8asicacav7.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747817482/aaahyws5tm0o2nckpvk0.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747817482/aaahyws5tm0o2nckpvk0.png",
    ],
    githubLink: "https://github.com/sarthak-gc/chat-app",
    demoLink: "https://chat-app.sarthakgc.com.np/",
    TechUsed: ["Socket.io", "Node.js", "Express", "MongoDB", "React"],
  },
  {
    projectId: "medium-blog",
    name: "Medium Blog",
    description:
      "A Medium-like platform where users can read posts from both their followers and a global feed. Unauthorized users can only access the global feed. The app features skeleton loaders for smoother browsing, allowing users to react to posts and leave comments.",
    thumbnailUrl:
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747818630/o8ul3tdjfgtmqwe2rqty.png",
    imagesUrl: [
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747821467/uy3smoxmrdylipuhfnav.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747821603/zsyrlivpqjy6hl72qcdx.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747821490/lcdpbglpntaglvtzmhka.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747821498/ortqoh2t6sd3ozr3xjvw.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747821536/chwpdik13ulcjf9nxg6t.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747821574/mbtzcw6xrxxveet2oha0.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747821619/sapv5y8c9q9yn187y7xu.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747821662/zfzaz6le43rpx2x9sclr.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747821692/tsjewrg5ivlue9bv1bpy.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747821701/qqhdxvohezmaqkzp78jo.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747821724/b6qojdsu3phxcotsfloi.png",
    ],
    githubLink: "https://github.com/sarthak-gc/medium-clone",
    demoLink: "https://medium-rare.sarthakgc.com.np/",
    TechUsed: ["React", "Node.js", "Prisma", "Hono", "JWT"],
  },
  {
    projectId: "social-media",
    name: "social-media",
    description:
      "A social media app where users can connect with friends, receive notifications for posts and friend requests (both accepted and received), and engage with a global feed that showcases content from all users, rather than just those they follow. Users can also post images (one per post) to share content with their friends and the wider community. The app operates in real time, but due to the limitations of Prisma Accelerate—offering a monthly quota of 100k requests, refetch interval is set to 30-second in react-query to optimize the load. As a result, it may not feel fully real-time.",
    thumbnailUrl:
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747822053/g1s8qbuzkmzfd9zmcjhr.png",
    imagesUrl: [
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747822067/his7lbf0pwmzumrf2pgo.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747822081/btkc5bhphzxfqlfzubm2.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747822456/sd8yzcr5svbjgcyfj1gi.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747822464/wmgc1jvid7ier8gxjxjc.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747822488/zf1l8fkvpevohhgipnld.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747822502/wcgknozcblqobo1mxjvr.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747822512/e53abs7qeat20oqlgapq.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747822528/flb8midtzff8yztu4fq4.png",
      "https://res.cloudinary.com/deljnxufx/image/upload/v1747822551/xoyp5dn8smysg2uaklwb.png",
    ],
    githubLink: "https://github.com/sarthak-gc/social-media",
    demoLink: "https://social-media.sarthakgc.com.np/",
    TechUsed: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Zustand",
      "React-query",
    ],
  },
];

app.get("/projects/details/all", (c) => {
  return c.json({ data: projects });
});

app.get("/project/detail/:projectId", (c) => {
  const { projectId } = c.req.param();

  if (!projectId) {
    return c.json({ error: "Project not found" }, 404);
  }

  const project = projects.find((p) => p.projectId === projectId);

  if (!project) {
    return c.json({ error: "Project not found" }, 404);
  }

  return c.json({ data: project });
});

export default app;
