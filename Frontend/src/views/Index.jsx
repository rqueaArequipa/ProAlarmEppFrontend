import "../assets/index/css/bootstrap.css"
import "../assets/index/css/coming-sssoon-demo.css"
import "../assets/index/css/coming-sssoon.css"

function Index() {
    return (
        <>
            <nav className="navbar navbar-transparent navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#">
                                    <i className="fa fa-facebook-square"></i>
                                    Share
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-twitter"></i>
                                    Tweet
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-envelope-o"></i>
                                    Email
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav >
            <div className="main bg-main">


                <div className="container">
                    <h1 className="logo cursive">
                        Sssoon
                    </h1>

                    <div className="content">
                        <h4 className="motto">Find the best Bootstrap 3 freebies and themes on the web.</h4>
                        <div className="subscribe">
                            <h5 className="info-text">
                                Join the waiting list for the beta. We keep you posted.
                            </h5>
                            <div className="row">
                                <div className="col-md-4 col-md-offset-4 col-sm6-6 col-sm-offset-3 ">
                                    <form className="form-inline" role="form">
                                        <div className="form-group">
                                            <label className="sr-only">Email address</label>
                                            <input type="email" className="form-control transparent" placeholder="Your email here..." />
                                        </div>
                                        <button type="submit" className="btn btn-danger btn-fill">Notify Me</button>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="container">
                        Made with <i className="fa fa-heart heart"></i> by <a href="http://www.creative-tim.com">Creative Tim</a>. Free download <a href="http://www.creative-tim.com/product/coming-sssoon-page">here.</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index