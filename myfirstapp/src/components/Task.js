import React, {Component} from "react";
import PropTypes from 'prop-types';

class Task extends Component{

    styleCompleted(){
        return{
        fontSize:'20px',
        color: this.props.task.done ? 'gray' : 'black',
        textDecoration: this.props.task.done ? 'line-through' : 'none'
    }
}

    render(){
        const {task} = this.props;
        return <div style={this.styleCompleted()}>
             {task.title} - 
             {task.description} - 
             {task.done} - 
             {task.id}
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)} />
            <button onClick={this.props.deleteTask.bind(this, task.id)} style={btnDelete}>
                x
            </button>
        </div>
    }
}

const btnDelete = {
    fontSyze: '18px',
    background: '#ea2027',
    color:'#fff',
    border:"none",
    padding:'10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}
export default Task