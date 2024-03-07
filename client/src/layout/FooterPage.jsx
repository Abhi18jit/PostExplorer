

import { Footer } from 'flowbite-react';

const FooterPage=()=> {
  return (
    

    
    <Footer container className='nav'>
    <div className=' w-[80vw] relative m-auto flex justify-between'>
      <Footer.Copyright href="#" by="Post Explorer™" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
      </div>
    </Footer>
    
  );
}
export default FooterPage;
