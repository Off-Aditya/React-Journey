import React from 'react'

const TodoItem1 = () => {

    let todoName = 'Buy a milk';
    let todoDate = '04/09/25';

    return (
        <>
            <div class="row my-row">
                <div class="col-6">{todoName}</div>
                <div class="col-4">{todoDate}</div>
                <div class="col-2">
                    <button type="button" class="btn btn-danger my-button">Delete</button>
                </div>
            </div>
        </>
    )
}

export default TodoItem1