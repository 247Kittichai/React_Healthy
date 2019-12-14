import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import FormField from '../common/FormField'
import { productFormField } from './formFields'

class productForm extends Component {

    renderFields(formFields) {

        return formFields.map(({ label, name , type , required }) => {
            return (
                <Field key={name} label={label} name={name} type={type} required={required} component={FormField} />
            )
        })
    }

    render() {
        const { onProductSubmit } = this.props;
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(onProductSubmit)} >
                    {this.renderFields(productFormField)}
                    <button className="btn btn-block btn-info ttitle" type="submit">
                        บันทึก
                    </button>
                </form>
            </div>
        )
    }
}

// สร้าง function popup ข้อความการกรอกข้อมูลใน form 
function validate(values) {
    const errors = {};
    productFormField.forEach(({ name, required }) => {
        if(!values[name] && required) {
            errors[name] = 'กรุณากรอกข้อมูลด้วยครับ';
        }
    });
    return errors;

}

function mapStateToProps({ products }) {
    if(products && products.id) {
        return { initialValues : products };
    } else {
        return {};
    }
}

productForm = reduxForm({ validate, form: "productForm" })(productForm);

export default connect(mapStateToProps)(productForm);

