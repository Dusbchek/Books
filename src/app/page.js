import Data from './data2'
import SearchButton from '@/components/SearchButton'

export default function Home() {
  return (

    <div
      className='w-[80%] mx-auto'
    >
      <Data categ={"React"} />
      <Data categ={"Web"} />
      <Data categ={"Networking"} />
      <Data categ={"HTML"} />
    </div>
  )
}
