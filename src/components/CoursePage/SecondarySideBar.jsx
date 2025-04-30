const SecondarySideBar = () => (
  <aside className="w-80 p-6 space-y-6 h-screen rounded-l-lg shadow-lg flex flex-col gap-6 divide-y divide-gray-400">
    {/* Profile Header */}
    <header>
    <div className="flex items-center space-x-4">
      <img
        src="https://via.placeholder.com/48"
        alt="Matthew McPartlon"
        className="w-12 h-12 rounded-full object-cover"
      />
      <h2 className="text-indigo-400 font-semibold text-lg">
      Matthew McPartlon
      </h2>
    </div>

    {/* Bio */}
    <p className="text-sm leading-relaxed">
      Matthew just finished his PhD in Computer Science and in that process
      found two loves: inventing things and teaching. Working at MarlnCorp
      allows him to do what he loves and work with some…
    </p>
    </header>

    {/* Course Info Section */}
    <main className="space-y-4 pt-6">
      <h3 className="uppercase text-xs font-semibold tracking-wider">
        Course info
      </h3>
      <hr className="border-gray-700" />

      <ul className="space-y-2">
        <li className="flex justify-between items-center py-1 border-b border-gray-700">
          <span className="text-sm">Level</span>
          <span className="text-sm">Beginner</span>
        </li>

        <li className="flex justify-between items-center py-1 border-b border-gray-700">
          <span className="text-sm">Rating</span>
          <span className="flex items-center text-sm">
            <span className="text-yellow-400">★★★★☆</span>
            <span className="ml-2">(584)</span>
          </span>
        </li>

        <li className="flex justify-between items-center py-1 border-b border-gray-700">
          <span className="text-sm">My rating</span>
          <span className="text-sm">☆☆☆☆☆</span>
        </li>

        <li className="flex justify-between items-center py-1 border-b border-gray-700">
          <span className="text-sm">Duration</span>
          <span className="text-sm">2h 55m</span>
        </li>

        <li className="flex justify-between items-center py-1 border-b border-gray-700">
          <span className="text-sm">Updated</span>
          <span className="text-sm">Mar 2023</span>
        </li>

        <li className="flex justify-between items-center py-1">
          <span className="text-sm">Language</span>
          <span className="text-sm">English</span>
        </li>
      </ul>
    </main>

    {/* Share Section */}
    <footer className="space-y-4 pt-6">
      <h3 className="uppercase text-xs font-semibold tracking-wider text-center">
        Share course
      </h3>
      <div className="flex justify-center gap-4">
        {/* Facebook */}
        <a href="#" className="text-gray-400 hover:text-gray-200">
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M22.675 0h-21.35C.596 0 0 .593 0 1.326v21.348C0 23.406.596 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.314h3.59l-.467 3.622h-3.123V24h6.116C23.403 24 24 23.406 24 22.674V1.326C24 .593 23.403 0 22.675 0z"/>
          </svg>
        </a>
        {/* Twitter */}
        <a href="#" className="text-gray-400 hover:text-gray-200">
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557a9.828 9.828 0 01-2.828.775 4.933 4.933 0 002.163-2.724 9.864 9.864 0 01-3.127 1.195 4.923 4.923 0 00-8.384 4.482A13.978 13.978 0 011.671 3.15a4.922 4.922 0 001.523 6.562 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.604 3.417A9.868 9.868 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.503 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/>
          </svg>
        </a>
        {/* LinkedIn */}
        <a href="#" className="text-gray-400 hover:text-gray-200">
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.038-1.852-3.038-1.853 0-2.136 1.445-2.136 2.939v5.668H9.349V9h3.414v1.561h.049c.475-.9 1.637-1.852 3.369-1.852 3.602 0 4.267 2.369 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 110-4.123 2.062 2.062 0 010 4.123zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.273V1.727C24 .774 23.2 0 22.225 0z"/>
          </svg>
        </a>
      </div>
    </footer>
  </aside>
);

export default SecondarySideBar;
