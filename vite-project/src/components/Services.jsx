import ServicesItem from "./ServicesItem"

function Services(){
    let serviceOne={
        firstName:'Jane',
        job:'IT',
        salary:140
    }
    let serviceTwo={
        firstName:'Bob',
        job:'HR',
        salary:100
    }
    let serviceThree={
        firstName:'Kate',
        job:'writer',
        salary:200
    }
    let serviceFour={
        firstName:'Samuel',
        job:'security',
        salary:300
    }
    let serviceFive={
        firstName:'Catherine',
        job:'actress',
        salary:1000
    }
    let serviceSix={
        firstName:'Daniel',
        job:'IT',
        salary:400
    }

    return(
        <section className="services">
            <h3>services</h3>
            <ul>
              <ServicesItem active={true} price={serviceOne.salary} headerName={serviceOne.firstName} text={serviceOne.job}/>
              <ServicesItem active={true} price={serviceTwo.salary} headerName={serviceTwo.firstName} text={serviceTwo.job}/>
              <ServicesItem active={true} price={serviceThree.salary} headerName={serviceThree.firstName} text={serviceThree.job}/>
              <ServicesItem active={true} price={serviceFour.salary} headerName={serviceFour.firstName} text={serviceFour.job}/>
              <ServicesItem active={true} price={serviceFive.salary} headerName={serviceFive.firstName} text={serviceFive.job}/>
              <ServicesItem active={true} price={serviceSix.salary} headerName={serviceSix.firstName} text={serviceSix.job}/>
            </ul>
        </section>
    )
}
export default Services