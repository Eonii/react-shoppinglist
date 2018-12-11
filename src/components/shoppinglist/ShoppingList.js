import React, { Component } from 'react'
import AddItem from './AddItem'

class Shoppinglist extends Component {
    state = {
        shoppinglist: [
            { id: 1, content: 'Maito' },
            { id: 2, content: 'Juusto' }
        ]
    }

    deleteItem = (id) => {
        const shoppinglist = this.state.shoppinglist.filter(item =>{
            return item.id != id
        })
        this.setState({
            shoppinglist
        })
    }

    addItem = (item) => {
        item.id = Math.random()
        let shoppinglist = [...this.state.shoppinglist, item]
        this.setState({
            shoppinglist
        })
    }

    render() {
        const shoppingList = this.state.shoppinglist.length ? (
            this.state.shoppinglist.map(item => {
                return (
                    <div onClick={() => {this.deleteItem(item.id)}} className="collection-item" key={item.id}>
                        <span>{item.content}</span>
                    </div>
                )
            })
        ) : (
                <p className="center">Ei tarvi mitään kaupasta!</p>
            )

        return (
            <div className="container shopping-list">
                <h1 className="center black-text">Ostoslista</h1>
                <div className="shopping-items collection">
                    { shoppingList }
                </div>
                <AddItem addItem={this.addItem} />
            </div>

        )
    }
}

export default Shoppinglist