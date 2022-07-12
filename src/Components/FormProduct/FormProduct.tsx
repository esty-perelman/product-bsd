import React from "react";
import WithRouter, { IWithRouter } from "../../Models/WithRouter";
import { productList } from "../../Models/SharedList";
import './FormProduct.css'

class FormProduct extends React.Component<IWithRouter, IFormProductState> {

    constructor(props: IWithRouter){
            super(props)//The inheritance takes place
            const product = productList.find(x => x.productId === +this.props.params.id!) as typeof productList[0]
            this.state = {
                productId: product.productId,
                productName: product.productName,
                price: product.price,
                category: product.category
            }
            console.log('c-c', this.props.params, this.state)
    }

    change(event:React.FormEvent<HTMLInputElement>){
        this.setState(
            {...this.state,  
                [event.currentTarget.name]:event.currentTarget.value
            }
        )
    }
    indexProd: number = 1
    save=(event:React.FormEvent)=> {
        productList.forEach((item, index)=>{
            console.log(item.productId , 'index', index, this.props.params.id as unknown as number)
            if(item.productId  === Number(this.props.params.id)){
                console.log('index', index, this.props.params.id)
                this.indexProd = index
            }
        })
        event.preventDefault()
        productList[this.indexProd]={
            "productId": this.state.productId,
            "productName": this.state.productName,
            "price": this.state.price,
            "category": this.state.category
        }
        console.log('productList', productList);
        this.props.navigate('/EditProduct')
    }


    render() {
        return (
            <div className="form-prod">
                <form onSubmit={this.save}>
                    <div className="form-group">
                        <label htmlFor="idProd">productId</label>
                        <input name="productId" className="form-control" id="idProd" onChange={(e: React.FormEvent<HTMLInputElement>)=>{this.change(e)}}
                        defaultValue={this.state.productId} />
                      
                    </div>
                    <div className="form-group">
                        <label htmlFor="nameProd">ProductName</label>
                        <input name="productName" className="form-control" id="nameProd" onChange={(e: React.FormEvent<HTMLInputElement>)=>{this.change(e)}}
                        defaultValue={this.state.productName} />
                    </div>
                    <div className="form-group">
                         <label htmlFor="price">Price</label>
                         <input name="price" className="form-control" id="price" onChange={(e: React.FormEvent<HTMLInputElement>)=>{this.change(e)}}
                         defaultValue={this.state.price} />
                       
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">category</label>
                        <input name="category" className="form-control" id="category" onChange={(e: React.FormEvent<HTMLInputElement>)=>{this.change(e)}}
                        defaultValue={this.state.category} />
                        
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form></div>
        )
    }
}
export default WithRouter(FormProduct)

interface IFormProductState{
    productId: number,
    productName: string, 
    price: number,
    category: string
}