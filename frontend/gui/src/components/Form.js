import React from 'react';
import axios from 'axios'

import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class CustomForm extends React.Component { 
    
     handleFormSubmit=(event,requestType,articleID)=>{
        // event.preventDefault();

        const title=event.target.elements.title.value;
        const content=event.target.elements.content.value;
        switch (requestType){
            case "post":
                return axios.post('http://127.0.0.1:8000/api/',{
                    title:title,
                    content:content
                })
                .then(res=>{
                    console.log(res)
                })
                .catch(err=>console.log(err))
            case "put":
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`,{
                    title:title,
                    content:content
                })
                .then(res=>{
                    console.log(res)
                })
                .catch(err=>console.log(err))
        }


    }
    render(){
        // console.log(props)
            return (
                <div>
                    <form onSubmit={(event)=>
                    
                    this.handleFormSubmit(
                        event,
                        this.props.requestType,
                        this.props.articleID
                        )} >
                        <FormItem label="Title">
                            <Input name="title" placeholder="Put a title Here" />
                        </FormItem>
                        <FormItem label="Content">
                            <Input name="content" placeholder="Enter some Content" />
                        </FormItem>
                        <FormItem >
                            <Button type="primary" htmlType="submit" >{this.props.btnText}</Button>
                        </FormItem>
                    </form>
                </div>
            );
        }
};

export default CustomForm;