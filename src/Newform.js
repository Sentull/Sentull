import React from 'react';
import { 
    Container,
    Card,
    CardBody,
    FormGroup,
    Label,
    Input,
    Form,
    Button,
    CardFooter
} from 'reactstrap';
import axios from 'axios';
class Newform extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           nama: "",
           nis: "",
           jk: ""
        };
        
    }

    componentDidMount(){
        if(this.props.data!=null){
            this.setState(this.props.data);
        }
    }

    simpan=(ev)=>{
        var url = 'http://localhost:3500/form-input';
    
        axios.post(url, this.state).then(res=>{
            if(res=="sukses"){
                this.setState({nama:'', nis:''});
            }
        })
       
    }

   
    render(){
        return(
            <div className="container">
            <Form>
            <FormGroup>
              <Label for="exampleEmail">Nama Lengkap</Label>
              <Input type="text" value={this.state.nama} placeholder="Nama Lengkap Anda" onChange={ev=>this.setState({nama:ev.target.value})}/>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">NIS</Label>
              <Input type="text" value={this.state.nis} placeholder="Nama NIS Anda" onChange={ev=>this.setState({nis:ev.target.value})}/>
            </FormGroup>
            <FormGroup>
                <Label>Jenis Kelamin</Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
              <Input type="radio"  name="jk" onClick={ev=>this.setState({jk:'L'})}/> Laki-laki
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
              <Input type="radio"  name="jk" onClick={ev=>this.setState({jk:'P'})}/> Perempuan
              </Label>
            </FormGroup><br></br>
            <Button color="info" onClick={this.simpan}>Simpan</Button>
            </Form>
            </div>
        )
    }
}
export default Newform;