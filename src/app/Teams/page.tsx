import Navbar from "@/components/Navbar"
import PageHead from "../components/PageHead"
import TeamsData from "../components/TeamsData"

const page = () => {
  return (
    <div>
        <Navbar/>
        <PageHead value={{body:"MEET THE", title:"TEAM" , faltutext:"/*"}}/>
        <TeamsData/>
        <div className="flex items-center justify-center flex-col gap-2">
          <p>COMING SOON</p>
          <div className="h-2 gradient-five-colors w-20"></div>
          </div>
    </div>
  )
}

export default page