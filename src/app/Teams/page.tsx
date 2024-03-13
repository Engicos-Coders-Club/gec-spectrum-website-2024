import Navbar from "@/components/Navbar"
import PageHead from "../components/PageHead"
import TeamsData from "../components/TeamsData"
import Coming from "../ComingSoon/page"

const page = () => {
  return (
    <div>
        <Navbar/>
        <PageHead body="MEET THE" title="TEAM"  faltutext="/*" />
        <TeamsData/>
        {/* <div className="flex items-center justify-center flex-col gap-2">
          <p>COMING SOON</p>
          <div className="h-2 gradient-five-colors w-20"></div>
          </div> */}
          <Coming></Coming>
    </div>
  )
}

export default page