import axios from 'axios';
import { useEffect, useState } from 'react';

const Clima = () => {
  const apiKey = 'FH48KA9C6LZ0b5RYNXGA7bAeHfM0MEpI';
  const locationKey = '3639';
  const [clima, setClima] = useState([]);

  useEffect(() => {
    const obtenerClima = async () => {
      try {
        const endpointClima = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${apiKey}`;
        const response = await axios.get(endpointClima);


        if (!response.data) {
          throw new Error('Error al buscar los datos');
        }

        setClima(response.data.DailyForecasts);
      } catch (err) {
        console.error('Error al obtener el clima:', err);
      }
    };

    obtenerClima();
  }, [apiKey, locationKey]);

  return (
    <div>
      <h2>Pronóstico del tiempo en Gualeguaychú</h2>
      {clima && (
        <ul>
          {clima.map((dia, index) => (
            <li key={index}>
            <p>Fecha: {new Date(dia.Date).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
              <img
                src={`https://www.accuweather.com/images/weathericons/${dia.Day.Icon}.svg`}
                alt={`Icono de clima para ${dia.Day.IconPhrase}`}
                style={{ width: '50px', height: '50px' }}
              /> 
              <p>Temp. máx: {dia.Temperature.Maximum.Value} {dia.Temperature.Maximum.Unit= 'C'}</p>
              <p>Temp. mín: {dia.Temperature.Minimum.Value} {dia.Temperature.Minimum.Unit= 'C'}</p>
              {/* Otros detalles del pronóstico */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Clima;