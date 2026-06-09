exports.handler = async function(event, context) {
  try {
    const response = await fetch(
      "https://resultadosegundavuelta.onpe.gob.pe/presentacion-backend/resumen-general/totales?idEleccion=10&tipoFiltro=eleccion",
      {
        redirect: "manual",
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Accept": "application/json",
          "Referer": "https://resultadosegundavuelta.onpe.gob.pe/main/resumen"
        }
      }
    );

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        status: response.status,
        urlFinal: response.url,
        contentType: response.headers.get("content-type")
      })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
