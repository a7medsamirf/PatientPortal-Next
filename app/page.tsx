import ExampleClientComponent from '@/components/ExampleClientComponent'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

   <ExampleClientComponent />
   <h1 className="text-3xl font-bold">Our Courses</h1>

    </main>
  )
}

