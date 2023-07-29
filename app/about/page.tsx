"use client";
 
import { ThemeProvider, Button } from "@material-tailwind/react";
 
export { ThemeProvider, Button };
import { BeakerIcon } from '@heroicons/react/24/solid'



export default function page() {
  return (
<div className="flex w-max gap-4">
      <Button color="blue">color blue</Button>
      <Button color="red">color red</Button>
      <Button color="green">color green</Button>
      <Button color="amber">color amber</Button>
      <BeakerIcon className="h-6 w-6 text-blue-500" />
    </div>
    
  )
}
