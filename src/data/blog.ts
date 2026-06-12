export interface ArticleData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  content: {
    type: 'p' | 'h2' | 'ul';
    text?: string;
    items?: string[];
  }[];
  tags: string[];
}

export const blogArticles: Record<string, ArticleData> = {
  'cero-fluoroscopia-pediatrica-mexico': {
    slug: 'cero-fluoroscopia-pediatrica-mexico',
    title: '¿Qué es la Cero Fluoroscopía y por qué importa en tu hijo?',
    metaTitle: '¿Qué es la Cero Fluoroscopía y por qué importa en tu hijo - Dr. Ovidio Cortázar',
    metaDesc: 'Ablación cardíaca en niños sin rayos X en México. La Cero Fluoroscopía elimina la radiación utilizando mapeo electromagnético tridimensional 3D. Entérese cómo funciona.',
    date: '3 de Mayo, 2026',
    readTime: '6 min de lectura',
    author: 'Dr. Ovidio Cortázar',
    excerpt: 'Cuando le dices a un papá que su hijo necesita un procedimiento cardíaco, la primera pregunta es: ¿es peligroso? La segunda: ¿va a recibir radiación? Con Cero Fluoroscopía la respuesta es no.',
    tags: ['Cero Fluoroscopía', 'Seguridad', 'Mapeo 3D', 'Tecnología'],
    content: [
      { type: 'p', text: 'Cuando le dices a un papá que su hijo necesita un procedimiento cardíaco, la primera pregunta suele ser: ¿es peligroso? La segunda, casi siempre: ¿va a recibir radiación?' },
      { type: 'p', text: 'La respuesta corta: con Cero Fluoroscopía, no. La respuesta larga es este artículo.' },
      { type: 'h2', text: 'El problema con la fluoroscopía tradicional' },
      { type: 'p', text: 'Durante décadas, todos los procedimientos de electrofisiología —incluyendo la ablación con catéter— se realizaron guiados por fluoroscopía: imágenes de rayos X en tiempo real que permiten al médico ver los catéteres dentro del corazón. Es una tecnología que funciona. Pero tiene un costo: radiación ionizante.' },
      { type: 'p', text: 'En adultos, ese costo es manejable. En niños, la ecuación cambia completamente. Los tejidos en desarrollo —hueso, tiroides, médula ósea, gónadas— son significativamente más radiosensibles que los de un adulto. La exposición a rayos X durante la infancia se asocia con mayor riesgo de neoplasias a lo largo de la vida. Y los procedimientos cardíacos, dependiendo de la complejidad, pueden implicar minutos o incluso horas de exposición a fluoroscopía.' },
      { type: 'p', text: 'El principio ALARA (As Low As Reasonably Achievable) en radiología establece que la dosis de radiación debe minimizarse siempre. La Cero Fluoroscopía va un paso más allá: la elimina por completo.' },
      { type: 'h2', text: '¿Qué es exactamente la Cero Fluoroscopía?' },
      { type: 'p', text: 'Es la realización de un estudio electrofisiológico o ablación con catéter sin utilizar fluoroscopía en ningún momento del procedimiento.' },
      { type: 'p', text: 'En lugar de rayos X, se utilizan dos tecnologías complementarias:' },
      { type: 'ul', items: [
        'Sistemas de mapeo electromagnético 3D: Plataformas como CARTO (Biosense Webster) o Ensite X (Abbott) crean un mapa tridimensional detallado del corazón usando campos magnéticos y eléctricos de baja energía. El médico navega los catéteres con precisión milimétrica en tiempo real, viendo la anatomía cardíaca en 3D en una pantalla, sin necesidad de rayos X.',
        'Ecocardiografía intracardíaca (ICE): Un pequeño transductor de ultrasonido dentro del corazón proporciona imágenes en tiempo real de las estructuras anatómicas. Complementa el mapa 3D y permite verificar la posición de los catéteres y detectar complicaciones de inmediato.'
      ]},
      { type: 'p', text: 'El resultado es una navegación más precisa que con fluoroscopía, con información anatómica en tiempo real, y cero radiación.' },
      { type: 'h2', text: '¿Funciona igual de bien?' },
      { type: 'p', text: 'Mejor. Los sistemas de mapeo 3D ofrecen una resolución y detalle anatómico que la fluoroscopía no puede igualar. La fluoroscopía muestra siluetas en 2D. El mapeo electromagnético muestra la arquitectura interna del corazón en tres dimensiones, en tiempo real, con marcadores precisos de cada estructura.' },
      { type: 'p', text: 'Múltiples estudios publicados en revistas como Heart Rhythm, Journal of the American College of Cardiology y EP Europace demuestran que la ablación con Cero Fluoroscopía tiene tasas de éxito y seguridad equivalentes o superiores a las técnicas convencionales con rayos X. No se sacrifica eficacia. Se elimina el riesgo.' },
      { type: 'h2', text: '¿Por qué no todos los centros lo hacen?' },
      { type: 'p', text: 'Tres razones principales:' },
      { type: 'ul', items: [
        'Curva de aprendizaje: Dominar el mapeo 3D requiere entrenamiento especializado y años de práctica. No es simplemente "apagar el fluoroscopio", es aprender a operar en un paradigma completamente diferente.',
        'Inversión tecnológica: Los sistemas CARTO y Ensite X representan inversiones importantes en equipamiento. Muchos centros mantienen la fluoroscopía porque ya la tienen y es más barata.',
        'Inercia: La fluoroscopía ha funcionado por décadas. Cambiar un paradigma establecido requiere convicción y evidencia. La comunidad de electrofisiología pediátrica progresiva ha adoptado la Cero Fluoroscopía como estándar de excelencia. Otros centros aún están en transición.'
      ]},
      { type: 'h2', text: '¿Quién puede recibir este procedimiento?' },
      { type: 'p', text: 'La Cero Fluoroscopía es aplicable a la gran mayoría de los procedimientos electrofisiológicos pediátricos:' },
      { type: 'ul', items: [
        'Ablación de Wolff-Parkinson-White (WPW)',
        'Ablación de taquicardia por reentrada nodal (TRNAV)',
        'Ablación de taquicardias supraventriculares en general',
        'Ablación de taquicardia ventricular idiopática',
        'Estudio electrofisiológico diagnóstico'
      ]},
      { type: 'p', text: 'Existen casos de alta complejidad donde se puede requerir fluoroscopía de rescate de forma puntual, pero el objetivo es siempre minimizarla o eliminarla por completo.' },
      { type: 'h2', text: 'La Cero Fluoroscopía en México' },
      { type: 'p', text: 'El equipo del Dr. Cortázar fue de los primeros en México en adoptar la Cero Fluoroscopía como protocolo estándar para procedimientos electrofisiológicos pediátricos. No como excepción, sino como regla.' },
      { type: 'p', text: 'Cada niño que entra a nuestra sala de electrofisiología tiene el derecho de salir sin haber recibido una dosis de radiación innecesaria. Con la tecnología disponible hoy, no existe razón para no ofrecerlo.' }
    ]
  },
  'ablacion-cateter-ninos-que-esperar': {
    slug: 'ablacion-cateter-ninos-que-esperar',
    title: 'Ablación con catéter en niños: qué esperar antes, durante y después',
    metaTitle: 'Ablación con catéter en niños: qué esperar - Dr. Ovidio Cortázar',
    metaDesc: 'Guía detallada para padres sobre la ablación con catéter en niños. Qué esperar antes, durante y después de la intervención de arritmias con Cero Fluoroscopía.',
    date: '9 de Junio, 2026',
    readTime: '8 min de lectura',
    author: 'Dr. Ovidio Cortázar',
    excerpt: 'El cardiólogo te ha dicho que tu hijo necesita una ablación. Saliste con mil dudas en la cabeza. Te explicamos en detalle qué es el procedimiento, la recuperación y el éxito.',
    tags: ['Ablación', 'Pediatría', 'Arritmias', 'Guía para Padres'],
    content: [
      { type: 'p', text: 'El cardiólogo acaba de decirte que tu hijo necesita una ablación con catéter. Saliste del consultorio con un papel en la mano y mil preguntas en la cabeza. ¿Es peligroso? ¿Le van a operar el corazón? ¿Cuánto tiempo de recuperación? ¿Va a poder regresar a jugar fútbol?' },
      { type: 'p', text: 'Este artículo existe para responder esas preguntas. Sin rodeos.' },
      { type: 'h2', text: '¿Qué es la ablación con catéter?' },
      { type: 'p', text: 'La ablación con catéter es un procedimiento mínimamente invasivo que elimina de raíz la zona del corazón que genera la arritmia. No es cirugía abierta. No se abre el pecho. No hay suturas.' },
      { type: 'p', text: 'A través de pequeños accesos en las venas de la ingle (femorales), se introducen catéteres —tubos delgados y flexibles— que navegan hasta el corazón. Una vez ahí, se mapea el sistema eléctrico en 3D para identificar exactamente el circuito anormal. Luego, se aplica energía de radiofrecuencia (calor) o crioablación (frío) en ese punto específico para destruir el tejido responsable. Resultado: el circuito desaparece. La arritmia, también.' },
      { type: 'h2', text: '¿Para qué arritmias se usa?' },
      { type: 'p', text: 'La ablación es el tratamiento definitivo para:' },
      { type: 'ul', items: [
        'Síndrome de Wolff-Parkinson-White (WPW) — vía accesoria que provoca taquicardias rápidas.',
        'Taquicardia por reentrada nodal (TRNAV) — la arritmia supraventricular más común en adolescentes.',
        'Taquicardia auricular focal y Flutter auricular.',
        'Taquicardia ventricular idiopática.'
      ]},
      { type: 'h2', text: 'Antes del procedimiento' },
      { type: 'ul', items: [
        'Consulta previa: El electrofisiólogo revisa el historial clínico y los estudios previos (ECG, Holter, Ecocardiograma) y define el mapa estratégico. Es el momento de preguntar todo.',
        'Ayuno: Generalmente 6-8 horas antes del procedimiento según la edad y peso del niño.',
        'Anestesia: En niños, el procedimiento se realiza bajo anestesia general. Su hijo no sentirá nada y no tendrá ningún recuerdo del procedimiento, lo que reduce el impacto emocional.'
      ]},
      { type: 'h2', text: 'Durante el procedimiento' },
      { type: 'p', text: 'El procedimiento dura entre 2 y 4 horas y consta de estos pasos:' },
      { type: 'ul', items: [
        'El niño entra a la sala de electrofisiología bajo efecto de anestesia general.',
        'Se colocan catéteres a través de punciones en la ingle (sin cortes quirúrgicos).',
        'Se realiza un mapa eléctrico 3D del corazón con sistemas CARTO o Ensite X (en nuestra práctica, con Cero Fluoroscopía, sin rayos X).',
        'Se induce la arritmia de forma controlada para identificar el circuito exacto.',
        'Se aplica energía en el punto objetivo para eliminar el tejido anormal.',
        'Se verifica que la arritmia ya no sea inducible, se retiran los catéteres y se aplica compresión.'
      ]},
      { type: 'h2', text: 'Después del procedimiento: primeras horas' },
      { type: 'p', text: 'Su hijo sale a recuperación y generalmente pasa 1 noche en el hospital para vigilancia. Las primeras horas son de reposo absoluto en cama para evitar sangrados en la ingle.' },
      { type: 'p', text: 'Es normal que haya pequeños moretones en la ingle, leve sensación de opresión o presión en el pecho de forma temporal y fatiga por la anestesia.' },
      { type: 'h2', text: '¿Cuál es la tasa de éxito?' },
      { type: 'p', text: 'Para las arritmias más comunes en niños, la ablación tiene una tasa de éxito sumamente alta: 95-98% en Wolff-Parkinson-White y 96-98% en Reentrada Nodal.' },
      { type: 'p', text: 'En menos de un 5% de los casos puede requerirse un segundo procedimiento si la arritmia llega a recurrir. Esto no indica fracaso, sino que algunos circuitos son muy pequeños o se encuentran en zonas anatómicamente complejas.' }
    ]
  },
  'desmayo-hijo-deporte-corazon': {
    slug: 'desmayo-hijo-deporte-corazon',
    title: 'Mi hijo se desmayó en el deporte: ¿es el corazón?',
    metaTitle: 'Mi hijo se desmayó al hacer ejercicio: ¿es el corazón? - Dr. Ovidio Cortázar',
    metaDesc: 'Síncope de esfuerzo en niños. Cuándo un desmayo durante el ejercicio puede deberse a una arritmia cardíaca grave (WPW, QT largo). Señales de alerta.',
    date: '7 de Junio, 2026',
    readTime: '7 min de lectura',
    author: 'Dr. Ovidio Cortázar',
    excerpt: 'Era un partido como cualquier otro. Tu hijo corría, pateaba y de repente cayó. Quizás lo atribuiste al calor, pero la duda te quita el sueño. Evaluamos las señales de alerta.',
    tags: ['Síncope', 'Deporte', 'Desmayos', 'Prevención'],
    content: [
      { type: 'p', text: 'Era un partido como cualquier otro. Tu hijo corría, pateaba, sudaba. Y de repente cayó.' },
      { type: 'p', text: 'Quizás lo atribuiste al calor. Al cansancio. A que no desayunó bien. Pero hay una pregunta que no te deja dormir: ¿y si fue el corazón? No estás exagerando. Esa pregunta tiene respuesta, y merece tomarse en serio.' },
      { type: 'h2', text: '¿Por qué los niños se desmayan durante el ejercicio?' },
      { type: 'p', text: 'El desmayo durante la actividad física —llamado síncope de esfuerzo— tiene varias causas. La mayoría son benignas: deshidratación, baja de azúcar (hipoglucemia) o una respuesta vasovagal. Pero existe un grupo de causas que no podemos ignorar: las arritmias cardíacas.' },
      { type: 'p', text: 'Una arritmia es una alteración en el sistema eléctrico del corazón. En reposo puede pasar desapercibida. Con el ejercicio, el corazón se acelera, y si hay un circuito eléctrico anormal, ese es el momento en que la arritmia puede dispararse.' },
      { type: 'h2', text: 'Las señales que no debes ignorar' },
      { type: 'p', text: 'Lleva a tu hijo con un electrofisiólogo si el desmayo ocurrió:' },
      { type: 'ul', items: [
        'Durante el esfuerzo físico (en pleno juego o carrera, no después de haber terminado).',
        'Sin aviso previo — el niño simplemente cayó sin mareo ni náusea previa.',
        'Acompañado de latidos irregulares o dolor en el pecho antes del desmayo.',
        'En un niño con antecedentes familiares de muerte súbita o arritmias en menores de 40 años.'
      ]},
      { type: 'p', text: 'El desmayo después del ejercicio, con sudoración, mareo y náusea, generalmente es vasovagal y menos preocupante. El que ocurre en pleno esfuerzo es el que necesita estudio urgente.' },
      { type: 'h2', text: '¿Qué arritmias pueden causar desmayo en niños?' },
      { type: 'ul', items: [
        'Síndrome de Wolff-Parkinson-White (WPW): Existe una vía eléctrica extra que provoca frecuencias de hasta 200-300 latidos por minuto.',
        'Taquicardia Ventricular: Es la arritmia más seria donde el corazón late de forma descontrolada desde los ventrículos. Requiere atención inmediata.',
        'Síndrome de QT Largo: Una alteración en los canales eléctricos de las células que puede provocar arritmias letales durante el ejercicio. Se detecta con un simple ECG.'
      ]},
      { type: 'h2', text: '¿Qué estudios necesita mi hijo?' },
      { type: 'p', text: 'El protocolo estándar de evaluación incluye:' },
      { type: 'ul', items: [
        'Electrocardiograma (ECG): El primer paso para buscar signos de WPW o QT Largo.',
        'Holter de Ritmo: Registra el latido por varios días para atrapar eventos fortuitos.',
        'Prueba de Esfuerzo: Para reproducir el ejercicio en condiciones controladas con monitoreo eléctrico en tiempo real.',
        'Estudio Electrofisiológico: Para mapear directamente el sistema de conducción desde adentro si persisten las sospechas.'
      ]},
      { type: 'h2', text: '¿Tiene solución?' },
      { type: 'p', text: 'Sí. La gran mayoría de las arritmias pediátricas tienen tratamiento curativo definitivo. Padecimientos como el Wolff-Parkinson-White o las taquicardias supraventriculares tienen tasas de éxito del 95-98% con ablación con catéter sin radiación. El objetivo es que tu hijo pueda vivir y hacer deporte sin limitaciones.' }
    ]
  }
};
