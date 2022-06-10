import React from 'react'

// name:'',
//         roll:'',
//         birth:'',
//         phone:'',
//         address:''
function Read() {
  return (
    <div>
      <div className='container' style={{width:850}}>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Roll</th>
                <th scope="col">Name:</th>
                <th scope="col">Birth-Date</th>
                <th scope="col">Contact-Number</th>
                <th scope="col">Adress</th>
                <th scope="col">Action</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                <button type="button" class="btn btn-warning mr-2">Delete</button>
                    <button type="button" class="btn btn-secondary">edit</button>
                </td>
                </tr>
            </tbody>
        </table>
      </div>

    </div>
  )
}

export default Read