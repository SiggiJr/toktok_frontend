import logo from '../assets/icons/Logo.svg'
import frame from '../assets/icons/Frame.svg'

function Brandscreen() {
  return (

    <section className=" flex flex-col items-center h-screen justify-end pb-[115px]">
      <article className="bg-[url(../src/assets/bg_img/Group.svg)] w-[347px] h-[334px] flex justify-center">
        <img src={logo} alt="logo icon" className="w-[140px]" />
      </article>
      <div className="h-fit mt-[141px]">
        <img src={frame} alt="frame icon" className="animate-spin" />
      </div>
    </section>

  )
}

export default Brandscreen
