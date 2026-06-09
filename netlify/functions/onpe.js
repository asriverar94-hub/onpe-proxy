exports.handler = async function(event, context) {
  try {
    const response = await fetch(
      "https://resultadosegundavuelta.onpe.gob.pe/presentacion-backend/resumen-general/totales?idEleccion=10&tipoFiltro=eleccion",
      {
        headers: {
          "User-Agent": "Mozilla/5.0"
        }
      }
    );

    const text = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: text
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    };
  }
};
