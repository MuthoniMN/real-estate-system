import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section style={{ background: "url('https://images.unsplash.com/photo-1496151428281-1d6de673b58e?w=1500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDl8fHxlbnwwfHx8fHw%3D')", height: "75vh", border: "inset 0 0 0 2000px rgba(0, 0, 0, 0.3)" }} className='bg-fixed bg-no-repeat bg-cover bg-top flex flex-col items-center justify-center'>
        <h1 className='text-3xl text-theme-color font-bold'>Sell. Buy. Rent</h1>
        <input placeholder='Enter a location' className='w-1/2 my-4 py-2 px-4' />
      </section>
    </main>
  )
}
