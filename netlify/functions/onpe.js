exports.handler = async function() {
  try {

    const response = await fetch(
      "https://resultadosegundavuelta.onpe.gob.pe/presentacion-backend/resumen-general/totales?idEleccion=10&tipoFiltro=eleccion",
      {
        headers: {
          "Accept": "*/*",
          "Accept-Language": "es,es-ES;q=0.9",
          "Content-Type": "application/json",
          "Referer": "https://resultadosegundavuelta.onpe.gob.pe/main/resumen",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/145.0.0.0 Safari/537.36"
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
      body: JSON.stringify({
        status: response.status,
        contentType: response.headers.get("content-type"),
        inicio: text.substring(0, 500)
      })
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
