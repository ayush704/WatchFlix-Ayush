import { Text } from '@chakra-ui/react'

export default function Footer() {
    return (
    <div className="footer">
      <div className="l-footer">
           <span>Watch</span> 
           <span style={{color:"#DA3714"}}>Flix</span>
      </div>

      <div className="m-footer">
           <div className="connect">
            <Text className="head">Connect Us</Text>
            <Text className="c">_About</Text>
            <Text className="c">_Contact Us</Text>
            <Text className="c">_Help Center</Text>
            <Text className="c">_Career</Text>
           </div>
           <div className="manage">
            <Text className="head">Manage</Text>
            <Text className="c">_Account</Text>
            <Text className="c">_Manage Account</Text>
            <Text className="c">_Buy Gift Card</Text>
            <Text className="c">_Redeem Gift Card</Text>
           </div>
           <div className="information">
            <Text className="head">Information</Text>
            <Text className="c">_Privacy</Text>
            <Text className="c">_Terms & Conditions</Text>
            <Text className="c">_Cookies</Text>
            <Text className="c">_FAQ</Text>
           </div>
      </div>
    </div>
    );
  }
  
