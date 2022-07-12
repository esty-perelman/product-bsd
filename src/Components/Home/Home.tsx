import React from "react";
import { productList } from "../../Models/SharedList"
import './Home.css'

export default class Home extends React.Component{

    // constructor(props: any) {
    //     super(props);
    // }
    //init state
    state = {
        productListView: productList
    }

    searchInputValue: string = ''
    prodListSearch: typeof productList = []


    handlerSearch() {
        this.prodListSearch = []
        // eslint-disable-next-line array-callback-return
        productList.filter((prod: typeof productList[0]) => {
            if (prod && prod.productName.includes(this.searchInputValue)) {
                this.prodListSearch.push(prod)
                console.log('prod, prodListSearch', prod, this.prodListSearch)
            }
            console.log('prodListSearch', this.prodListSearch)
            this.setState({ productListView: this.prodListSearch })
        })
    }

    handlerReset() {
        this.setState({ productListView: productList })
    }

    render() {
        return (
            <div className="table-prod">
                <div className="div-search">
                    <input onChange={(e) => { this.searchInputValue = e.currentTarget.value }} className="form-control mr-sm-2" type="search" placeholder="Search product by name" aria-label="Search" />
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit" onClick={() => this.handlerSearch()}>Search</button>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => this.handlerReset()}>Reset</button>
                </div>

                <h1 className="h1-home">List Of Products</h1>
                <table className="table">
                    <thead>
                        <tr className="table-info">
                            <th scope='col'>productId</th>
                            <th scope='col'>productName</th>
                            <th scope='col'>price</th>
                            <th scope='col'>category</th>
                        </tr>
                    </thead>
                    <tbody className="tbody-prod">
                        {this.state.productListView.map((product, index) => {
                            return (
                                <tr className="table-dark">
                                    <td>{product.productId}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.price}</td>
                                    <td>{product.category}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}