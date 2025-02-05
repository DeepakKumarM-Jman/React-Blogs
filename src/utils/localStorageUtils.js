import { v4 as uuidv4 } from "uuid";

export const sampleBlogs = [
    {
      id: uuidv4(),
      title: "Exploring React Hooks",
      author: "John Doe",
      content: "React hooks provide a powerful way to handle state and side effects...",
      image: "https://d31ezp3r8jwmks.cloudfront.net/nr9p5isqq3yn41tqrh1tr4lttr1v",
      views: 10,
      comments: ["Great explanation!", "Very helpful, thanks!"]
    },
    {
      id: uuidv4(),
      title: "Understanding Tailwind CSS",
      author: "Jane Smith",
      content: "Tailwind CSS is a utility-first CSS framework that makes styling easier...",
      image: "https://tailwindcss.com/_next/static/media/card.a1cd9cff.jpg",
      views: 5,
      comments: ["Tailwind is awesome!", "Nice overview."]
    },
    {
      id: uuidv4(),
      title: "JavaScript Async/Await Guide",
      author: "Michael Johnson",
      content: "Async/Await makes handling promises in JavaScript much cleaner...",
      image: "https://godofredo.ninja/content/images/2019/02/async-await.jpg",
      views: 3,
      comments: ["Finally, I understand async/await!", "Good examples."]
    },
    {
      id: uuidv4(),
      title: "Node.js Best Practices",
      author: "Emma Brown",
      content: "Writing efficient and scalable Node.js applications requires following best practices...",
      image: "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
      views: 1,
      comments: ["This helped me a lot!", "More topics on backend please!"]
    },
    {
      id: uuidv4(),
      title: "Understanding MongoDB Aggregations",
      author: "Robert Wilson",
      content: "MongoDB aggregations allow complex data operations... MongoDB aggregations allow complex data operations MongoDB aggregations allow complex data operations MongoDB aggregations allow complex data operations MongoDB aggregations allow complex data operations",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*_yrJns5F3UTHqGQ1J5LFCw.png",
      views: 8,
      comments: ["Great insights!", "I needed this for my project."]
    }
  ];
