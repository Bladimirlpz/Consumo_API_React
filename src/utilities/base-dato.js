  // Metodo fecht para consumir API
  const consultarApi = async (setdata) => {
    try {
      const URL = "https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php";
    const resp = await fetch(URL);
    const baseDato = await resp.json();
    const CopyBaseDato = [...baseDato]
    const dataOrdenada = CopyBaseDato.sort((a, b) => {
      return a.fk_region - b.fk_region;
    });
    setdata(dataOrdenada)
      
    } catch (error) {
      console.log(error)
    }
    
  };

  export {consultarApi}
  