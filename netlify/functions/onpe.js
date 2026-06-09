exports.handler = async function(event, context) {
  try {
    const response = await fetch(
      "https://resultadosegundavuelta.onpe.gob.pe/presentacion-backend/resumen-general/totales?idEleccion=10&tipoFiltro=eleccion",
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/145.0.0.0 Safari/537.36",
          "Accept": "*/*",
          "Accept-Language": "es,es-ES;q=0.9,en;q=0.8",
          "Referer": "https://resultadosegundavuelta.onpe.gob.pe/main/resumen"
        }
      }
    );

    const text = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*"
      },
      body: text
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        error: error.message
      })
    };
  }
};
