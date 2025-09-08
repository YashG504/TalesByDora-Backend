import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Define the type for a single blog post
interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  image: string;
}

// Define the type for the props the component will receive
interface Page9Props {
  destinationSlug?: string;
}

const Page9: React.FC<Page9Props> = ({ destinationSlug }) => {
    const [latestBlog, setLatestBlog] = useState<BlogPost | null>(null);
    const [recentBlogs, setRecentBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Only fetch if the destinationSlug prop is available
        if (!destinationSlug) {
            setLoading(false);
            return;
        }

        const fetchBlogs = async () => {
            setLoading(true);
            setError(null);
            try {
                // Use the destinationSlug from props to call the correct API endpoint
                const response = await axios.get(`/api/blogs/destination/${destinationSlug}`);
                
                setLatestBlog(response.data.latest);
                setRecentBlogs(response.data.recent);

            } catch (err) {
                console.error(`Failed to fetch blogs for ${destinationSlug}:`, err);
                setError('No blogs found for this destination.');
                setLatestBlog(null);
                setRecentBlogs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    // Re-run this effect whenever the destinationSlug prop changes
    }, [destinationSlug]);

    if (loading) {
        return <div className="text-center py-10">Loading Blogs...</div>;
    }
    
    // Don't show anything if there's an error or no blogs
    if (error || !latestBlog) {
        return null; 
    }

    // --- The JSX below does not need any changes ---
    return (
        <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                    {/* Latest Blog Section */}
                    <div className="lg:col-span-2">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-8 tracking-tight">LATEST BLOG</h2>
                        {latestBlog && (
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="aspect-[3/2] w-full">
                                    <img src={latestBlog.image} alt={latestBlog.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-6 sm:p-8">
                                    <h3 className="text-2xl lg:text-3xl font-semibold text-black mb-4 tracking-tight">{latestBlog.title}</h3>
                                    <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-4">{latestBlog.excerpt}</p>
                                    <Link to={`/blog/${latestBlog._id}`} className="text-md text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                                        Read more →
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Recent Blogs Section */}
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-8 tracking-tight">RECENT BLOGS</h2>
                        <div className="space-y-6">
                            {recentBlogs.map((blog) => (
                                <div key={blog._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <div className="flex">
                                        <div className="w-36 h-28 sm:w-40 sm:h-32 flex-shrink-0">
                                            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 p-4 flex flex-col justify-center">
                                            <h4 className="text-md font-semibold text-black mb-2 leading-tight">{blog.title}</h4>
                                            <Link to={`/blog/${blog._id}`} className="text-sm text-gray-600 hover:text-black font-medium transition-colors text-left">
                                                Read more
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page9;