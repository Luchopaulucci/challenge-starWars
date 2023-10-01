import Cards from "../components/Cards"
import { Input } from "@nextui-org/react";

const Characters = () => {
  return (
    <div className="my-10 flex justify-center items-center flex-col min-h-full sm:min-h-screen min-w-full">
      <div className="w-72">
        <Input size="md" type="character" label="Character" placeholder="Enter the character to find" />
      </div>
      <div className="flex flex-wrap flex-row justify-evenly gap-4 mt-20 w-3/4">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  )
}

export default Characters