import Link from "next/link"


function AboutUs(){
    return <>
    <div>
      <h3> <Link href='/aboutus/1'>person1</Link></h3>
      <h3><Link href='/aboutus/2'>person2</Link></h3>
      <h3><Link href='/aboutus/3'>person3</Link></h3>
    </div>
    
    </>
  }
  
  export default AboutUs