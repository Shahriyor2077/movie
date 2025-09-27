import { memo } from 'react'

export const Enter = memo(() => {
  return (
    <div className="flex items-center gap-3">
      <button className="bg-white text-black px-5 py-1 cursor-pointer rounded font-semibold hover:bg-red-500 hover:text-white transition shadow">
        Kirish
      </button>
    </div>
  );
})
