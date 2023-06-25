// import Image from 'next/image'

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className={` text-2xl font-semibold`}>Chào mừng đến với Book App</h1>
      <Link href='/book' className="p-24">
        <i>Bấm vào đây để xem danh sách sách</i>
      </Link>

    </main>
  )
}