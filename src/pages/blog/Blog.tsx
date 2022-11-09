import useDocTitle from "../../hooks/useDocTitle";

const Blog = () => {
  useDocTitle("Blog");
  const data = [
    {
      id: 1,
      question: "Difference between SQL and NoSQL?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hicveritatis molestias culpa in recusandae ",
    },
    {
      id: 2,
      question: "What is JWT, and how does it work?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hicveritatis molestias culpa in recusandae ",
    },
    {
      id: 3,
      question: "What is the difference between javascript and NodeJS?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hicveritatis molestias culpa in recusandae ",
    },
    {
      id: 4,
      question: "How does NodeJS handle multiple requests at the same time?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hicveritatis molestias culpa in recusandae ",
    },
  ];

  return (
    <div className="custom-width mx-auto space-y-4">
      {/* <details className="group" open>
        <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4">
          <h2 className="font-medium text-gray-900">
            Difference between SQL and NoSQL?
          </h2>

          <svg
            className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
          veritatis molestias culpa in, recusandae laboriosam neque aliquid
          libero nesciunt voluptate dicta quo officiis explicabo consequuntur
          distinctio corporis earum similique!
        </p>
      </details> */}

      {data.map((blog) => (
        <details key={blog.id} className="group">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4">
            <h2 className="font-medium text-gray-900">{blog.question}</h2>

            <svg
              className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            {blog.answer}
          </p>
        </details>
      ))}
    </div>
  );
};

export default Blog;
