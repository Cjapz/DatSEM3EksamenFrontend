function carFacade() {
    const [car, setCar] = useState([]);
    const getCars = () => {return cars}

  
        
      
      return {
        // Remember all statements below are a shortcut for this version: getBooks: getBooks
        getCars,
        findCars,
        deleteCars,
        addCars,
      
      }
      }
      let returnVal =  carFacade()
      export default returnVal;
    