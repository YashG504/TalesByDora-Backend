import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

const SingleBlogPage: React.FC = () => {
    const { blogId } = useParams<{ blogId: string }>();
    const [blog, setBlog] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // 1. Memoized the data fetching function.
    const fetchBlog = useCallback(async () => {
        if (!blogId) return;
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`/api/blogs/${blogId}`);
            setBlog(response.data);
        } catch (err) {
            console.error("Failed to fetch blog:", err);
            setError('Blog post not found.');
        } finally {
            setLoading(false);
        }
    }, [blogId]);

    useEffect(() => {
        fetchBlog();
    }, [fetchBlog]);

    // 2. Memoized the formatted date string.
    const formattedDate = useMemo(() => {
        return blog ? new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '';
    }, [blog]);

    if (loading) return <div className="flex justify-center items-center min-h-screen">Loading blog post...</div>;
    if (error) return <div className="flex justify-center items-center min-h-screen text-red-500">{error}</div>;
    if (!blog) return null;

    return (
        <div className="bg-white min-h-screen font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <article>
                    <header className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">{blog.title}</h1>
                        <p className="text-gray-500 text-lg">Posted on {formattedDate}</p>
                    </header>
                    <div className="aspect-[16/9] w-full rounded-lg overflow-hidden mb-8 shadow-lg">
                        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                    </div>
                    <div 
                        className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                </article>
            </div>
        </div>
    );
};

export default React.memo(SingleBlogPage);