import React, { Component } from 'react'

export class Restaurant extends Component {
   
    //     handleChange = (e) => {
    //         this.setState({
    // [e.target.id]:
    //         })
    //     }

    handleChange = (e) => {
        // console.log( this.props.Mydata.filter(star => {
        //     return (star.Stars === 4)

        // }));

        this.props.Mydata.filter(star => {
            return (star.Stars === 4)

        })
    }

    render() {
        // console.log(this.props);

        const {Mydata} = this.props;
      
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

            <div className="container text-center">
                <span className="text-success">Customer Ratings - </span>
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" onSubmit={this.handleChange} className="btn-check"  name="name" id="btnradio1" value="4* & Above" autoComplete="off" />
                    <label className="btn btn-outline-success" htmlFor="btnradio1">4* & Above</label>

                    <input type="radio" className="btn-check" name="name" id="btnradio2" value="3* & Above" autoComplete="off" />
                    <label className="btn btn-outline-success" htmlFor="btnradio2">3* & Above</label>

                    <input type="radio" className="btn-check" name="name" id="btnradio3" value="2* & Above" autoComplete="off" />
                    <label className="btn btn-outline-success" htmlFor="btnradio3">2* & Above</label>

                    <input type="radio" className="btn-check" name="name" id="btnradio4" value="Clear all" autoComplete="off" />
                    <label className="btn btn-outline-success" htmlFor="btnradio4">Clear all</label>

                </div>



                {EachData}



            </div>
        )
    }
}

export default Restaurant
