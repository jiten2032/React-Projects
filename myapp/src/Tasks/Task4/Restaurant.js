import React, { Component } from 'react'

export class Restaurant extends Component {


    render() {
        // console.log(this.props);

        const { Mydata } = this.props;

        const EachData = Mydata.map(Data => {


            return (

                <div className="mt-5 container card border-dark " key={Data.id}>
                    <div className="card  mt-3"  >
                        <div className="row g-0">
                            <div className="col-md-5">
                                <img className="img img-fluid" src={Data.Img} alt="..." />
                            </div>
                            <div className="col-md-4">
                                <div className="card-body">
                                    <h5 className="card-title text-danger">{Data.Name}</h5>
                                    <p className="card-subtitle mb-2 text-secondary">{Data.Type}</p>
                                    <p className="card-subtitle mb-2 text-secondary">{Data.Cost}</p>
                                    <p className="card-text lh-base">{Data.Time}</p>
                                    <p className="card-text lh-base">{Data.PaymentMethods}</p>
                                    <p className="card-text text-primary">{Data.Location}</p>

                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card-body">
                                    <div><span className="badge bg-success px-4 py-2">{Data.Stars}</span></div>
                                    <p className="card-text text-secondary lh-base">{Data.Votes}</p>
                                    <p className="card-text text-secondary lh-base">{Data.Reviews}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 card container">
                        <div className="row ">
                            <div className="col-md-9  d-none d-xl-block d-xxl-block "></div>
                            <div className="col-md-3 btn  btn-outline-success">

                                Order Online
                                </div>
                        </div>
                    </div>
                </div>



            )

        })



        return (



            <div>

                {EachData}



            </div>
        )
    }
}

export default Restaurant
