import {Card, CardHeader, CardFooter, Image} from "@nextui-org/react";
import { Link } from "react-router-dom";


const Cards = ({title, subtitle, toinfo, image}) => {
  //Le saco los espacios en blanco al nombre del personaje
  const routeName = title ? title.trim() : "";

  return (
    <Card isFooterBlurred className="w-72 h-80 col-span-12 sm:col-span-7">
    <CardHeader className="absolute z-30 top-0 flex-col items-start backdrop-blur-xs">
      <p className="text-red-500 font-bold">{subtitle}</p>
      <h4 className="text-red-500 font-medium text-xl">{title}</h4>
    </CardHeader>
    <Image
      removeWrapper
      className="z-20 w-full h-full object-cover"
      src={image}
    />
    <CardFooter className="absolute bg-black/40 bottom-0 z-30 border-t-1 border-default-900 dark:border-default-100">
      <Link radius="full" size="sm" className="text-red-500" to={`${toinfo}/${routeName}`}>Get more info</Link>
    </CardFooter>
  </Card>
  )
}

export default Cards