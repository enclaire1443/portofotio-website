import React from "react"

function Header() {
  return (
    <div>
      <div className="fixed w-full h-20 bg-gray-800 rounded-b-lg flex items-center justify-between px-8">
        <div className="text-white font-bold">
          <button className="gap-4 font-serif font-semibold text-3xl py-2 px-4">Fatih</button>
        </div>

        <div className="flex gap-4 text-white font-serif text-semibold">
          <button>About</button>
          <button>Experience</button>
          <button>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Header