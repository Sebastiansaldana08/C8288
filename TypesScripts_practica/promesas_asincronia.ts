// Promesa Básica

function fetchData(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Datos obtenidos");
      }, 2000);
    });
  }
  
  fetchData().then((data) => {
    console.log(data);  // Datos obtenidos
  });

  
// Async / Await

async function fetchUser(): Promise<{ name: string }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: "Sebastián" });
      }, 2000);
    });
  }
  
  async function getUser() {
    const user = await fetchUser();
    console.log(user.name);  // Sebastián
  }
  
  getUser();

  
// Manejo de errores con Async/ Await

async function fetchDataWithError(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Error al obtener datos");
      }, 1000);
    });
  }
  
  async function getData() {
    try {
      const data = await fetchDataWithError();
      console.log(data);
    } catch (error) {
      console.log("Error:", error);  // Error: Error al obtener datos
    }
  }
  
  getData();

// Manejo de errores con Promises

function fetchDataWithPromiseError(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Error al obtener datos");
      }, 1000);
    });
  }

  fetchDataWithPromiseError()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("Error:", error);  // Error: Error al obtener datos
    });

    // Otra manera de manejar errores con Promises
    fetchDataWithPromiseError()
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));

// Promesas en cascada 

    function fetchData1(): Promise<string> {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("Datos 1 obtenidos");
        }, 2000);
      });
    }

    function fetchData2(): Promise<string> {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("Datos 2 obtenidos");
          }, 1000);
        });
      }

      fetchData1()
        .then((data1) => {
          console.log(data1);
          return fetchData2();
        })
        .then((data2) => {
          console.log(data2);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

        // Otra manera de manejar promesas en cascada
        Promise.all([fetchData1(), fetchData2()])
          .then(([data1, data2]) => {
            console.log(data1);
            console.log(data2);
          })
          .catch((error) => {
            console.error("Error:", error);
          });

          // Manejo de errores en promesas en cascada
          Promise.all([fetchData1(), fetchData2()])
            .then(([data1, data2]) => {
              console.log(data1);
              console.log(data2);
            })
            .catch((error) => {
              console.error("Error:", error);
            });

          // Manejo de errores en promesas en cascada con rejectAll
          Promise.all([fetchData1(), fetchData2()])
            .then(([data1, data2]) => {
              console.log(data1);
              console.log(data2);
            })
            .catch((error) => {
              console.error("Error:", error);
              throw new Error("Error en la cascada");
            });

          // Manejo de errores en promesas en cascada con reject
          Promise.all([fetchData1(),
            fetchData2().then(() => {
              throw new Error("Error en la segunda promesa");
            })])
            .then(([data1, data2]) => {
              console.log(data1);
              console.log(data2);
            })
            .catch((error) => {
              console.error("Error:", error);
            });