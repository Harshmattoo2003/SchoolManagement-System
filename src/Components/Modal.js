import React ,{Component} from "react";

class Modal extends Component{
    render(){
        return(
            <div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
                </button>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body" >
                        <h2 className="fs-5">Popover in a modal</h2>
                        <p>This triggers a popover on click.</p>
                        <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#x" >button</button>
                        <div className="modal fade ms-5 mt-5" aria-hidden="true" id="x" aria-labelledby="xLabel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" >
                            <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 id="xLabel">popover-title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Popover body content is set in this attribute.</p>
                            </div>
                            </div>
                            </div>
                        </div>
                        <h2 className="fs-5">Tooltips in a modal</h2>
                        <p><a href="#" data-bs-toggle="tooltip" title="Tooltip">This link</a> and <a href="#" data-bs-toggle="tooltip" title="Tooltip">that link</a> have tooltips on hover.</p>
                        </div>
                    <div class="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Understood</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Modal;