import {Card, CardHeader, CardFooter, Image, Button} from "@nextui-org/react";
import { Link } from "react-router-dom";


const Cards = ({title, subtitle}) => {
  return (
    <Card isFooterBlurred className="w-72 h-80 col-span-12 sm:col-span-7">
    <CardHeader className="absolute z-10 top-1 flex-col items-start">
      <p className="text-tiny text-white/60 uppercase font-bold">{subtitle}</p>
      <h4 className="text-white/90 font-medium text-xl">{title}</h4>
    </CardHeader>
    <Image
      removeWrapper
      className="z-0 w-full h-full object-cover"
      src="/public/images/luke.jpg"
    />
    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-900 dark:border-default-100">
      <Link radius="full" size="sm" className="text-white" to={"/characterInfo/" + title}>Get more info</Link>
    </CardFooter>
  </Card>
  )
}

export default Cards