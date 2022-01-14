function driverFacade() {
    const [driver, setDriver] = useState([]);
    const getDrivers = () => {return drivers}

  
        
      
      return {
        // Remember all statements below are a shortcut for this version: getBooks: getBooks
        getDrivers,
        findDrivers,
        deleteDrivers,
        addDrivers,
      
      }
      }
      let returnVal =  driverFacade()
      export default returnVal;
    