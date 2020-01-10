import React from  'react';
import {
    Card,
    CardHeader,
    Row,
    CardBody,
    Table,
    Button,
    Label
} from 'reactstrap';
import axios from 'axios';
class TableExample extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            title: 'Test1331'
            
        };
    }

    componentDidMount(){
        this.getData();
    }

    getData(){
        axios.get('http://localhost:3500/data-get').then(res=>{
            this.setState({data:res.data});
        });
    }


    deleteData=ev=>{
        var id = ev.target.getAttribute('data-key');
        axios.post('http://localhost:3500/data-delete', {_id:id}).then(res=>{
            this.getData();
        })
    }

    updateData=ev=>{
        var id = ev.target.getAttribute('data-key');
        var data = this.state.data.find(x=>x._id===id);
        this.props.onUpdateView('form', data);
    }

    render(){
        var data = this.state.data.map((item, i)=>{
            return(
                <tr>
                    <td>{item.nama}</td>
                    <td>{item.nis}</td>
                    <td>{item.jk}</td>
                    <td><Button color="warning" data-key={item._id} onClick={this.updateData}>Update</Button><Button color="danger"  data-key={item._id} onClick={this.deleteData}>Delete</Button></td>
                </tr>)
            
        });
        return(
            <Card>
                <CardHeader>
                    <Row className="pl-3 pr-3">
                        <Label>Tabel</Label>
                        <Button className="ml-auto" onClick={ev=>this.props.onChangeView('form')}>Tambah</Button>  
                    </Row>
                </CardHeader>
                <CardBody>
                <h2>{this.state.title}</h2>
                    <Table>
                        <tr>
                            <th>Nama</th>
                            <th>NIS</th>
                            <th>Jenis Kelamin</th>
                            <th>Aksi</th>
                        </tr>
                        {data}
                    </Table>
                </CardBody>
            </Card>
        )
    }
}
export default TableExample;