import React from 'react'
import Hesder from '../components/Header'
import Footer from '../components/Footer'

// write style function component
const About = () => {
    return (
        <div>
            <Hesder />
            <div className="container col-md-5"> 
                <h3 className="title text-success">สวัสดีครับ</h3>
                <hr />
                <p className="title text-justify mt-4 mb-4">
                    เราคือร้านอาหาร ที่เน้นอาหารอร่อยเท่านั้นจริงๆ ไม่ให้ความสำคัญกับสุขภาพเท่าไหร่
                    เพราะสุขภาพที่ดีนั้นคุณสามารถสร้างได้ด้วยการ "ออกกำลังกาย"
                    ดังนั้นด้องกินของอร่อยก่อน แล้วคุณจะมีกำลังไปทำในสิ่งที่คุณรัก ครับผม
                </p>
                <h3 className="text-success">จาก เฮลตี้ คาเฟ่</h3>
            </div>
            <Footer company="Kittichai Food" email="Kittichai@Food.com" />
        </div>
    )
}

export default About;
