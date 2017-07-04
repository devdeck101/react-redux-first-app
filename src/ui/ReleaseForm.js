import React from 'react';


const ReleaseForm = ({ submitHandler }) => {
    let _releaseName, _startDate, _endDate;
    const handleSubmit = (e) => {
        submitHandler(e, {
            releaseName: _releaseName.value,
            startDate: _startDate.value,
            endDate: _endDate.value
        })
        cleanForm();
    }

    const cleanForm = () => {
        _releaseName.value = '';
        _startDate.value = '';
        _endDate.value = '';
    }
    return (
              <form onSubmit={handleSubmit} className="form-inline">
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                    <div className="input-group-addon">Release name</div>
                    <input type="text" className="form-control" id="releaseName" ref={input => _releaseName = input} required></input>
                </div>
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                    <div className="input-group-addon">Start date</div>
                    <input type="text" className="form-control" id="startDate" ref={input => _startDate = input} required></input>
                </div>
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                    <div className="input-group-addon">End date</div>
                    <input type="text" className="form-control" id="endDate" ref={input => _endDate = input} required></input>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
    );
}
export default ReleaseForm;