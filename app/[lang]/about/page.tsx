"use client";
 
import { Button } from "@material-tailwind/react";
import { CardDefault } from "@/app/[lang]/components/CardDefault";
import { PageWrapper } from "@/app/[lang]/components/page-wrapper";
import { Container } from "@/app/[lang]/components/container";



export default function page() {
  return (
  <PageWrapper>
    <Container>
    <div className="flex w-max gap-4">
      <Button color="blue">color blue</Button>
      <Button color="red">color red</Button>
      <Button color="green">color green</Button>
      <Button color="amber">color amber</Button>


      <CardDefault />
    </div>
    </Container>

  </PageWrapper>

    
  )
}
