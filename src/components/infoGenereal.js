import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import Home from '../Home';


const useStyles = makeStyles((theme) => ({
   
    root: {
        display: 'flex',
      },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
   
  }));

const InfoGeneral = () => {
    const classes = useStyles();

return (

    
    <div className={classes.root}>
        <Home/>
       <main className={classes.content}>
        <div className={classes.toolbar} />
        <img src="https://www.unimed.scu.sld.cu/wp-content/uploads/2020/09/coronavirus-banner-1-580x150-580x150-580x150.png"/>
        <p><b>Total de muertes confirmadas: </b></p>
        <Typography paragraph>
        <p><b>Para evitar la propagación de la COVID-19:</b></p>

        <li type="disc">Lávate las manos con frecuencia. Usa agua y jabón o un desinfectante de manos a base de alcohol.</li>
        <li type="disc">Mantén una distancia de seguridad con personas que tosan o estornuden.</li>
        <li type="disc">Utiliza mascarilla cuando no sea posible mantener el distanciamiento físico.</li>
        <li type="disc">No te toques los ojos, la nariz ni la boca.</li>
        <li type="disc">Cuando tosas o estornudes, cúbrete la nariz y la boca con el codo flexionado o con un pañuelo.</li>
        <li type="disc">Si no te encuentras bien, quédate en casa.</li>
        <li type="disc">En caso de que tengas fiebre, tos o dificultad para respirar, busca atención médica.</li>
         
        <p>Llama por teléfono antes de acudir a cualquier proveedor de servicios sanitarios para que te dirijan al centro
           médico adecuado. De esta forma, te protegerás a ti y evitarás la propagación de virus y otras infecciones.
           </p>

           <p> <b>Mascarillas</b></p>
      <p>
       Las mascarillas pueden ayudar a prevenir que las personas que las llevan propaguen el virus y lo contagien a otras personas. 
       Sin embargo, no protegen frente a la COVID-19 por sí solas, sino que deben combinarse con el distanciamiento físico y la higiene
       de manos. Sigue las recomendaciones de los organismos de salud pública de tu zona.
      </p>
        </Typography>
      </main>
      
    </div>
)
}
export default InfoGeneral;
