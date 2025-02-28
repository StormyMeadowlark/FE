import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MarkdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import { formatDistanceToNow } from "date-fns";

const mdParser = new MarkdownIt().use(markdownItAttrs);

const SingleBlog = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showExtendedContent, setShowExtendedContent] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://skynetrix.tech/api/v1/posts/66d063ca0800f9ad017e7cfc/${id}`,
          {
            headers: {
              "x-tenant-id": "66d063ca0800f9ad017e7cfc",
            },
          }
        );

        if (response.status === 200) {
          setPost(response.data);
        } else {
          setError("We had trouble loading this post. Please try again later.");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        setError("We had trouble loading this post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p>Loading post...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>We couldn't find this post. Please check back later.</p>;

  const htmlContent = mdParser.render(post.content);
  const formattedDate = formatDistanceToNow(new Date(post.publishDate), {
    addSuffix: true,
  });

  const toggleExtendedContent = (index) => {
    setShowExtendedContent((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="container mx-auto px-4 text-white">
      {/* Post Title and Meta Information */}
      <header className="mb-6 pt-60">
        <h1 className="text-4xl font-bold mb-2">
          {post.metaTitle || post.title}
        </h1>
        <p className="text-gray-400 mb-4">{post.metaDescription}</p>
        <div className="flex items-center mb-4">
          {post.authorImage && (
            <img
              src={post.authorImage}
              alt={post.authorName}
              className="w-10 h-10 rounded-full mr-3"
            />
          )}
          <div>
            <p className="text-gray-400">
              By <strong>{post.authorName}</strong> • {formattedDate}
            </p>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <div
        className="text-2xl mb-6 markdown-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></div>

      {/* Extended Content Sections */}
      {post.extendedContent &&
        post.extendedContent.map((section, index) => (
          <div key={index} className="mb-6">
            <button
              className="bg-green-500 text-gray-800 px-4 py-2 rounded-full text-xl font-bold hover:bg-green-600 transition"
              onClick={() => toggleExtendedContent(index)}
            >
              {showExtendedContent[index]
                ? "Hide Details"
                : `Learn More: ${section.title}`}
            </button>

            {showExtendedContent[index] && (
              <div className="bg-gray-800 text-white p-4 rounded-lg mt-4 shadow-md">
                <h4 className="text-2xl font-bold mb-2">{section.title}</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: mdParser.render(section.content),
                  }}
                />
              </div>
            )}
          </div>
        ))}

      {/* Categories and Tags */}
      <div className="mt-8">
        {post.categories && post.categories.length > 0 && (
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Categories:</h3>
            <ul className="list-disc list-inside text-gray-400">
              {post.categories.map((category, index) => (
                <li key={index}>{category}</li>
              ))}
            </ul>
          </div>
        )}

        {post.tags && post.tags.length > 0 && (
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-white px-2 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Encouragement to Contact or Book Service */}

    </div>
  );
};

export default SingleBlog;
