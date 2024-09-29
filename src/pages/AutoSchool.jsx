import { useState, useEffect } from "react";
import axios from "axios";
import BlogHero from "../components/pageParts/AutoSchool/BlogHero";
import BlogPostPanel from "../components/pageParts/AutoSchool/BlogPostPanel";

export default function BlogHome() {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState([]); // State for blog posts
  const [loading, setLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://skynetrix.tech/api/v1/posts/66d063ca0800f9ad017e7cfc/",
          {
            headers: {
              "x-tenant-id": "66d063ca0800f9ad017e7cfc", // Properly set the header
            },
          }
        );

        console.log("Response Data:", response.data); // Log the response data
        if (Array.isArray(response.data)) {
          setPosts(response.data); // Set posts only if the data is an array
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false); // Stop loading indicator
      }
    };

    fetchPosts();
  }, []);

  // Filter posts based on the search term
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#333333] text-white">
      <BlogHero />
      <div className="container mx-auto py-10 px-4">
        {/* Search input */}
        <div className="mb-8 text-center">
          <input
            type="text"
            placeholder="Search the blog..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full md:max-w-lg mx-auto rounded-md border-0 py-2 px-3 text-white shadow-md ring-1 ring-inset ring-black placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-[#00ff00] sm:text-sm sm:leading-6 bg-[#222222]"
            aria-label="Search blog posts"
          />
        </div>
        {/* Display the posts */}
        {loading ? (
          <p className="text-center text-lg">Loading posts...</p>
        ) : filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogPostPanel
                key={post._id}
                id={post._id}
                title={post.title}
                excerpt={post.content.substring(0, 150)} // Create an excerpt from content
                image={
                  post.media[0]?.url || "https://via.placeholder.com/600x400"
                } // Use first media or placeholder
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg">No posts found.</p>
        )}
      </div>
    </div>
  );
}
