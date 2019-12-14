import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const NotFound = () => {
    return (
        <div>
            <Header />
            <div className="container col-md-8 text-center">
                <h1 className="mt-5" style={{fontSize: 120}}>404</h1>
                <h2 className="md-4">NotFound</h2>
                <p className="title md-5">ขออภัยไม่พบหน้าที่คุณค้นหา ดูเหมือนว่าหน้าเว็บคุณพยายามเข้าถึงไม่มีอยู่อีกต่อไป หรืออาจย้ายไปยังหน้าเว็บเพจอื่น</p>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound;


