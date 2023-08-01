"use client";
 
import { Button } from "@material-tailwind/react";
import { PageWrapper } from "../components/page-wrapper";
import { Container } from "../components/container";
import { CardDefault } from "../components/CardDefault";



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
