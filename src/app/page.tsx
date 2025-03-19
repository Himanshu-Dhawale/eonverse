import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="py-6 flex flex-col items-center font-opensauce justify-center gap-4">
      <h1 className="text-primary text-5xl font-bold">Demo</h1>
      <button className="bg-secondary text-accent-light py-2 rounded-md px-4 hover:bg-secondary-dark">
        Click
      </button>
      <Footer />
    </div>
  )
}
