import React from 'react';

class FileUpload extends React.Component{
    state = {
        file:null
    }

    onchange = (e) => {
        console.log(e.target.files);
        // this.setState((prevState) => {
        //     return{
        //         file:e.target.value
        //     }
        // })
    }
    render(){
        return(
            <div>
            <form>
            <h1>Upload File</h1>
            <input type="file" name="fileUpload" onChange={this.onchange} value={this.state.file}/>
            <button>Click to Upload</button>
            </form>
            </div>
        )
    }
}

export default FileUpload;