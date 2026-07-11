import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 rounded-full bg-black px-4 py-1 text-sm font-medium text-white">
          ShopAdmin - A Next.js Admin Dashboard Template
        </span>

        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white">
          Product Management
          <br />
          Admin Dashboard
        </h1>

        <p className="mb-8 max-w-2xl text-lg leading-8 text-gray-400">
          A modern, responsive admin dashboard built with{" "}
          <strong>Next.js</strong>, <strong>React</strong>,{" "}
          <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>.
          <br />
          It demonstrates real-world frontend concepts including CRUD
          operations, reusable components, search, filtering, responsive
          layouts, and clean state management.
        </p>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <Link
            href="/dashboard"
            className="rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition hover:bg-gray-600">
            View Dashboard
          </Link>

          <Link
            href="/products"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100">
            View Products
          </Link>
        </div>

        <div className="grid w-full max-w-4xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="mb-2 font-semibold text-gray-900">Product CRUD</h3>
            <p className="text-sm text-gray-600">
              Add, edit and delete products using reusable forms and modals.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="mb-2 font-semibold text-gray-900">
              Search & Filter
            </h3>
            <p className="text-sm text-gray-600">
              Quickly locate products with live search and category filtering.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="mb-2 font-semibold text-gray-900">Responsive UI</h3>
            <p className="text-sm text-gray-600">
              Mobile-friendly cards with desktop tables for a better user
              experience.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="mb-2 font-semibold text-gray-900">Built With</h3>
            <p className="text-sm text-gray-600">
              Next.js • React • TypeScript • Tailwind CSS
            </p>
          </div>
        </div>
      </div>
      <footer className="text-center text-sm text-gray-200 ">
        Designed and developed by Kehinde Oluyole
      </footer>
    </main>
  );
}
