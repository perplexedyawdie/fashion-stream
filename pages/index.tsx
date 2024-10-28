import Image from 'next/image'

export default function Home() {
  function handleStartSelling(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    //todo - axios api call to endpoint that generates storeID
    //todo - redirect user to store
  }

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            src="/main-img.png"
            width={720}
            height={600}
            alt="Picture of the author"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Fashion Stream <br/> See it. Love it. Shop it.</h1>
            <p className="mb-8 leading-relaxed">Launch your own live shopping experience in seconds. Simply upload your products, go live, and connect with your audience to drive sales through interactive chat and real-time product insights.</p>
            <div className="flex justify-center">
              <button onClick={handleStartSelling} className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Start Selling</button>
              {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
