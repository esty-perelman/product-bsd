import React from "react";
import { productList } from "../../Models/SharedList";
import WithRouter, { IWithRouter } from "../../Models/WithRouter";
import './EditProduct.css'
class EditProduct extends React.Component<IWithRouter>{

    // constructor(props: any) {
    //     console.log('propscc')
    //     console.log('propscc', props)
    //     super(props);
    //     // this.state={
    //     //     childProps:typeof BaseComponent.productList,
    //     //     _navigate:this.props.
    //     // }
    // }

    editProd(index: number):void {
        console.log('editProd', productList[index])
        this.setState({childProps: productList[index]});
        this.props.navigate(`/FormProduct/${productList[index].productId}`)
    }

    render() {
        return (
            <div className="table-prod">
                
                <h1 className="h1-home">Edit Products</h1>
                <table className="table">
                    <thead>
                        <tr className="table-info">
                            <th scope='col'>productId</th>
                            <th scope='col'>productName</th>
                            <th scope='col'>price</th>
                            <th scope='col'>category</th>
                            {/* <th scope='col'>edit</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map((product, index) => { 
                            return (
                                <tr className="table-dark" onClick={()=>{this.editProd(index)}}>
                                    <td>{product.productId}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                    {/* <td><button onClick={()=>this.editProd(index)}><Link to='/FormProduct'>edit</Link></button></td> */}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default WithRouter(EditProduct)