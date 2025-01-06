import React from "react"

function Header() {
  return (
    <div>
      <div className="fixed w-full h-20 rounded-b-lg flex items-center justify-between px-8 z-50">
        <div className="text-white font-bold bg-dark-500 rounded-2xl">
          <button className="gap-4 font-serif font-semibold text-3xl py-2 px-4 text-light-100">Fatih</button>
        </div>
      </div>
    </div>
  )
}

export default Header