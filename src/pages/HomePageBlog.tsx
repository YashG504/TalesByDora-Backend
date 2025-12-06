import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { staticBlogs } from '../data/staticBlogData';

const HomePageBlog: React.FC = () => {
    const { blogSlug } = useParams<{ blogSlug: string }>();

    // 1. Memoized the blog lookup to run only when the slug changes.
    const blog = useMemo(() => staticBlogs.find(b => b.slug === blogSlug), [blogSlug]);

    if (!blog) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen text-center px-4">
                <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
                <p className="text-gray-600 mb-8">We couldn't find the blog post you were looking for.</p>
                <Link to="/home" className="text-blue-600 hover:underline font-semibold">
                    ← Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen font-sans">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <article>
                    <header className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">{blog.title}</h1>
                    </header>
                    <div className="aspect-[16/9] w-full rounded-lg overflow-hidden mb-8 shadow-lg">
                        <img src={blog.blogImage} alt={blog.title} className="w-full h-full object-cover" />
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

// 2. Wrapped component in React.memo to prevent unnecessary re-renders.
export default React.memo(HomePageBlog);