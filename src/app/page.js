import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Card from "./_components/Card"
import Navbar from "./_components/Navbar"
export default function Home() {
  return (
    <main className="scroll">
      <Navbar style={{ height: "100px" }} />
      <section style={{ background: "url('https://images.unsplash.com/photo-1496151428281-1d6de673b58e?w=1500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDl8fHxlbnwwfHx8fHw%3D')", height: "75vh", border: "inset 0 0 0 2000px rgba(0, 0, 0, 0.3)" }} className='bg-fixed bg-no-repeat bg-cover bg-top flex flex-col items-center justify-center'>
        <h1 className='text-3xl text-theme-color font-bold'>Sell. Buy. Rent</h1>
        <form className="sm:w-1/2 w-[75vh] bg-white flex m-4 py-2 px-4 justify-between">
          <input placeholder='Enter a location' className='bg-transparent' />
          <button type='submit' style={{ width: "24px" }} className="text-theme-color">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </section>
      <section className="p-4">
        <h2 className="text-theme-color font-bold text-3xl text-center">Services We Offer: </h2>
        <section className="flex justify-center gap-6 py-4 flex-wrap">
          <Card img={"/buy.svg"} title={"Buy Properties"} desc={"Get access to quality vetted properties to buy at the best prices"} link="/properties/sale" btnText={"Buy a Property"} />
          <Card img={"/sell.svg"} title={"Sell Your Properties"} desc={"Sell your properties at the best prices to our clients"} link="/properties/add" btnText={"Sell a Property"} />
          <Card img={"/rent.svg"} title={"Rent a Property"} desc={"Get access to quality vetted properties to rent at the best prices"} link="/properties/rent" btnText={"Rent a Property"} />
        </section>
      </section>
    </main>
  )
}
