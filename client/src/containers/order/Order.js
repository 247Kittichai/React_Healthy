import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { connect } from 'react-redux'
import { ordersFatch, orderDelete } from '../../actions'


class Order extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.ordersFatch();
    }

    delOrder(order) {
        this.props.orderDelete(order.id);
    }

    showOrders() {
        return this.props.orders && this.props.orders.map(order => {
            const date = new Date(order.orderedDate)
            return(
                <div className="col-md-3" key={order.id} >
                    <hr />
                    <p className="text-right">
                        <button className="btn btn-danger btn-sm title" onClick={() => this.delOrder(order)}> x </button>
                    </p>
                    <h5>วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                    <ul>
                        {order.orders && order.orders.map(record => {
                            return (<li key={record.product.id}>
                                {record.product.productName} x {record.quantity} = {record.product.unitPrice * record.quantity}
                            </li>)
                        })}
                    </ul>
                    <p className="title">ยอดรวม {order.totalPrice}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <h1>รายการสั่งซื้อ</h1>
                    <div className="row">
                        {this.showOrders()}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

// เขียนแบบ destructure มันจะสั้นลง
function mapStateToProps({ orders })  {
    return { orders };
}

export default connect(mapStateToProps, { ordersFatch, orderDelete }) (Order);
