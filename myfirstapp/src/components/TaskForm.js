import React, {Component} from 'react';

class TaskForm extends Component{
    
    state={
        title:"",
        description:""
    }

    onSubmit = e => {
        this.props.addTask(this.state.title,this.state.description)
        e.preventDefault();
    }

    onChange = e =>{
        //asignar al estado
        this.setState({
            [e.target.name] :e.target.value
        })
        
    }

    render(){
        
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    name='title'
                    type='text' 
                    placeholder='Write a task' 
                    onChange={this.onChange} 
                    value={this.state.title} 
                />
                <br/>
                <br/>
                <textarea 
                    name='description'
                    placeholder='write a description' 
                    onChange={this.onChange} 
                    value={this.state.description}
                />
                <br/>
                <br/>
                <input type='submit' />
            </form>
        )
    }

}

export default TaskForm