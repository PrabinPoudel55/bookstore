import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen dark:bg-slate-900 dark:text-white">
      <div className="max-w-screen-xl container mx-auto px-4 py-16">

        {/* Close Button */}
        <div className="flex justify-end">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost"
          >
            ✕
          </Link>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            About <span className="text-pink-500">BookStore</span>
          </h1>

          <p className="mt-6 text-lg">
            Welcome to BookStore, your trusted destination for discovering,
            exploring, and enjoying books from various categories.
          </p>
        </div>

        {/* About Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
              alt="Books"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Our Mission
            </h2>

            <p className="mb-4">
              Our mission is to make reading accessible, enjoyable,
              and inspiring for everyone. We provide a wide collection
              of books ranging from educational resources to
              entertainment and self-development materials.
            </p>

            <p>
              Whether you're a student, professional, or passionate
              reader, our platform helps you discover books that
              match your interests and goals.
            </p>
          </div>

        </div>

        {/* Features */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <h3 className="card-title justify-center">
                  📚 Huge Collection
                </h3>
                <p>
                  Explore books from various categories and genres.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <h3 className="card-title justify-center">
                  ⚡ Easy Access
                </h3>
                <p>
                  Find and access books quickly with a simple interface.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <h3 className="card-title justify-center">
                  🌍 For Everyone
                </h3>
                <p>
                  Suitable for students, professionals, and book lovers.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default About;