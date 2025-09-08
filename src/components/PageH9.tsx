import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link
import { staticBlogs } from '../data/staticBlogData'; // Import your new blog data

const Page9: React.FC = () => {
    // Find the main blog post (the one with id: 0)
    const mainBlog = staticBlogs.find(b => b.id === 0);
    // Get all other blogs for the "Recent" section
    const recentBlogs = staticBlogs.filter(b => b.id !== 0);

    return (
        <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

                    {/* Latest Blog Section */}
                    <div className="lg:col-span-2">
                        <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 tracking-tight">
                            LATEST BLOG
                        </h2>
                        {mainBlog && (
                            <div className="bg-white rounded-lg overflow-hidden ml-[-10px]">
                                <div className="aspect-[3/2] w-full">
                                    <img
                                        src={mainBlog.blogImage}
                                        alt={mainBlog.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4 sm:p-4">
                                    <div className="flex items-end justify-between gap-4">
                                        <h3 className="text-2xl lg:text-3xl font-sans text-black tracking-tight font-semibold">
                                            {mainBlog.title}
                                        </h3>
                                        {/* This now links to the detailed page */}
                                        <Link to={`/home-blog/${mainBlog.slug}`} className="text-sm text-gray-600 hover:text-black font-medium transition-colors whitespace-nowrap">
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Recent Blogs Section */}
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 tracking-tight">
                            RECENT<br /> BLOGS
                        </h2>
                        <div className="space-y-6">
                            {recentBlogs.map((blog) => (
                                <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <div className="flex">
                                        <div className="w-36 h-28 sm:w-40 sm:h-32 flex-shrink-0 overflow-hidden rounded-l-lg">
                                            <img
                                                src={blog.blogImage}
                                                alt={blog.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1 p-4 flex flex-col justify-center">
                                            <h4 className="text-md font-semibold text-black mb-2 leading-tight">
                                                {blog.title}
                                            </h4>
                                            {/* This now links to the detailed page */}
                                            <Link to={`/home-blog/${blog.slug}`} className="text-sm text-gray-600 hover:text-black font-medium transition-colors text-left self-start">
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