import ExampleClientComponent from '@/components/ExampleClientComponent'
import { Container } from '@/components/container'
import { PageWrapper } from '@/components/page-wrapper'
import Image from 'next/image'


export default function Home() {
  return (
    <PageWrapper className="h-screenHeightWithoutHeader bg-cover bg-center">
      <Container className=" flex h-full flex-col pt-24 text-center text-2xl">
      <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <ExampleClientComponent />
      <h1 className="text-3xl font-bold">Our Courses</h1>

      </main>
      </Container>

    </PageWrapper>

  )
}

