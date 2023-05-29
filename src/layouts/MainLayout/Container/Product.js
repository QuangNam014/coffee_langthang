import React from 'react';

function Product(props) {
    return (
        <div>
            <h1 style={{ fontSize: 50, textAlign: 'center', padding: '50px 0' }}>This is product</h1>
            Product is abc
            <table className="table table-hover" style={{ fontSize: 50 }}>
                <tr>
                    <th>id</th>
                    <th>name</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>nam</td>
                </tr>
            </table>
        </div>
    );
}

export default Product;
