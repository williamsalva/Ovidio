export interface ServiceData {
  slug: string;
  category: 'diagnostico' | 'procedimiento';
  title: string;
  metaTitle: string;
  metaDesc: string;
  heroDesc: string;
  definition: string;
  purpose: string[];
  ceroFluoroscopiaText?: string;
  isTherapeuticText?: string;
  hospitalization: string;
  indications: string[];
  preparation?: string[];
  safety: string;
  imageUrl?: string;
}

export const servicesData: Record<string, ServiceData> = {
  'consulta-alta-especialidad-arritmias-pediatricas': {
    slug: 'consulta-alta-especialidad-arritmias-pediatricas',
    category: 'diagnostico',
    title: 'Consulta de Alta Especialidad en Arritmias Pediátricas',
    metaTitle: 'Consulta de Electrofisiología Pediátrica CDMX | Dr. Cortazar',
    metaDesc: 'Consulta de alta especialidad en arritmias pediátricas con el Dr. Cortazar en CDMX. Diagnóstico preciso, plan de tratamiento y atención directa.',
    heroDesc: 'El primer paso indispensable para encontrar el origen exacto del problema eléctrico en el corazón de tu hijo. Valoración directa con el subespecialista.',
    definition: 'Una consulta de electrofisiología pediátrica va mucho más allá de una valoración cardiológica estándar. En esta consulta evaluamos el historial clínico, revisamos estudios previos y definimos la estrategia de diagnóstico o tratamiento.',
    purpose: [
      'Revisar el historial clínico completo y antecedentes familiares de arritmia o muerte súbita.',
      'Analizar detalladamente estudios previos como electrocardiogramas, registros de Holter y ecocardiogramas.',
      'Identificar el tipo específico de arritmia o descartar de forma certera causas no cardíacas.',
      'Explicar sin rodeos a la familia qué implica el padecimiento y qué opciones definitivas existen.'
    ],
    hospitalization: 'No requiere hospitalización. Es un estudio de consulta externa ambulatorio.',
    indications: [
      'Palpitaciones frecuentes u episodios de corazón acelerado sin explicación.',
      'Desmayos (síncope) inesperados, en especial los que ocurren durante el esfuerzo físico o deporte.',
      'Electrocardiograma (ECG) tomado por pediatras con hallazgos anormales.',
      'Antecedente familiar directo de cardiopatías hereditarias, canalopatías (QT largo, Brugada) o muerte súbita.'
    ],
    preparation: [
      'Traer todos los estudios cardiológicos previos realizados al niño (ECG, Holter, Ecocardiogramas).',
      'Traer una lista con los nombres de medicamentos actuales y dosis.',
      'Registrar previamente la frecuencia y duración de los síntomas que ha presentado su hijo.'
    ],
    safety: 'La consulta clínica es completamente segura y no invasiva. Es un espacio para resolver todas las dudas de la familia.',
    imageUrl: 'https://framerusercontent.com/images/Hkdp2K950wNWEHvUj7ns7isKjco.jpeg?width=1600&height=1200'
  },
  'segunda-opinion-arritmia-pediatrica': {
    slug: 'segunda-opinion-arritmia-pediatrica',
    category: 'diagnostico',
    title: 'Segunda Opinión en Arritmias Pediátricas',
    metaTitle: 'Segunda Opinión en Arritmias Pediátricas CDMX | Dr. Cortazar',
    metaDesc: '¿Tienes dudas sobre el diagnóstico o tratamiento de la arritmia de tu hijo? El Dr. Cortazar ofrece segunda opinión especializada en electrofisiología pediátrica CDMX.',
    heroDesc: 'Pedir una segunda opinión es tomar la mejor decisión para tu hijo con toda la información disponible. Ofrecemos claridad, honestidad y experiencia.',
    definition: 'Valoración independiente enfocada en confirmar o replantear diagnósticos o tratamientos propuestos para arritmias en niños. Nuestro objetivo es validar si un procedimiento es realmente necesario o si existen alternativas más avanzadas y menos invasivas.',
    purpose: [
      'Confirmar si el tratamiento o procedimiento propuesto está plenamente justificado por la evidencia.',
      'Evaluar si se puede realizar la intervención con técnicas modernas de Cero Fluoroscopía para evitar radiación.',
      'Analizar si existen alternativas farmacológicas o de vigilancia segura.',
      'Brindar tranquilidad absoluta a los padres mediante explicaciones claras y objetivas.'
    ],
    hospitalization: 'No requiere hospitalización. Es una valoración de consulta externa.',
    indications: [
      'Le recomendaron una ablación con catéter o cirugía cardíaca y desea confirmar la necesidad.',
      'Le indicaron que "hay que operar de urgencia" pero su hijo se encuentra estable.',
      'Le dijeron que "debe esperar a que el niño crezca" pero los síntomas deterioran su calidad de vida.',
      'Ha recibido diagnósticos o planes de tratamiento contradictorios de diferentes médicos.'
    ],
    preparation: [
      'Es indispensable traer todos los estudios, informes, CD de grabaciones de cateterismos o ecocardiogramas anteriores.',
      'Llevar las recetas médicas con los medicamentos actuales.'
    ],
    safety: 'Estudio de revisión clínica y análisis de gabinete, completamente seguro, no invasivo y sin compromiso de permanencia.',
    imageUrl: 'https://framerusercontent.com/images/cyjZdQOVmBw1hLn2UmvKIV3o.jpg?width=1920&height=1200'
  },
  'electrocardiograma-pediatrico-cdmx': {
    slug: 'electrocardiograma-pediatrico-cdmx',
    category: 'diagnostico',
    title: 'Electrocardiograma Pediátrico (ECG)',
    metaTitle: 'ECG Pediátrico CDMX | Electrocardiograma en Niños',
    metaDesc: 'Electrocardiograma pediátrico de 12 derivaciones en CDMX. Primer estudio para detectar arritmias en niños. Interpretado por electrofisiólogo. Dr. Cortazar.',
    heroDesc: 'Un trazo de 10 segundos interpretado por el especialista correcto que puede identificar síndromes de alto riesgo o arritmias de forma oportuna.',
    definition: 'El ECG de 12 derivaciones registra la actividad eléctrica del corazón desde 12 ángulos distintos de forma no invasiva. Los valores normales de un trazo cambian con la edad, peso y anatomía de un niño, por lo que la interpretación de un electrofisiólogo pediátrico es crucial.',
    purpose: [
      'Detectar vías eléctricas accesorias como en el Síndrome de Wolff-Parkinson-White (WPW).',
      'Identificar alteraciones congénitas de los canales iónicos del corazón (como el Síndrome de QT Largo o Brugada).',
      'Diagnosticar bloqueos auriculoventriculares y problemas de conducción eléctrica.',
      'Evaluar el tamaño y engrosamiento (hipertrofia) de las cavidades del corazón.'
    ],
    hospitalization: 'No requiere hospitalización. Es un estudio rápido ambulatorio que toma menos de 5 minutos.',
    indications: [
      'Evaluación inicial ante sospecha de arritmia o reporte de palpitaciones.',
      'Desmayo o mareo repentino, en especial si ocurrió durante la actividad física.',
      'Valoración preoperatoria o antes de iniciar medicamentos estimulantes (como para TDAH).',
      'Historia familiar de muerte súbita o enfermedades del ritmo cardíaco.'
    ],
    preparation: [
      'No se requiere ayuno. Su hijo puede comer y beber de manera normal.',
      'Es recomendable vestir al niño con ropa cómoda que permita descubrir el pecho con facilidad.',
      'Explicar al niño que es una prueba indolora (no duele y no emite corriente) para que se mantenga tranquilo.'
    ],
    safety: 'Estudio 100% seguro. No emite radiación, no provoca dolor y no introduce electricidad al cuerpo de su hijo.',
    imageUrl: 'https://framerusercontent.com/images/cyjZdQOVmBw1hLn2UmvKIV3o.jpg?width=1920&height=1200'
  },
  'holter-ritmo-ninos': {
    slug: 'holter-ritmo-ninos',
    category: 'diagnostico',
    title: 'Holter de Ritmo en Niños (24 a 168 horas)',
    metaTitle: 'Holter de Ritmo en Niños CDMX | Diagnóstico de Arritmias',
    metaDesc: 'Holter de ritmo de 24 a 168 horas para diagnóstico de arritmias en niños en CDMX. Referencia del Dr. Cortazar.',
    heroDesc: 'Monitoreo continuo en casa que captura el comportamiento del corazón en su rutina real. Ideal para atrapar arritmias esporádicas.',
    definition: 'Es un dispositivo portátil que registra los latidos del corazón de manera ininterrumpida durante periodos desde 1 día (24h) hasta una semana (168h). El niño realiza sus actividades cotidianas (ir a la escuela, jugar, dormir) mientras el equipo graba el ritmo.',
    purpose: [
      'Capturar arritmias esporádicas que no se presentan durante los 10 segundos de un ECG convencional.',
      'Relacionar directamente los síntomas informados por el niño (mareo, latidos rápidos) con el trazo eléctrico real.',
      'Monitorear el ritmo cardíaco en momentos específicos como el sueño o el ejercicio.',
      'Evaluar el correcto funcionamiento de marcapasos o el éxito posterior a una ablación.'
    ],
    hospitalization: 'Estudio completamente ambulatorio. Se coloca el equipo en consultorio y el paciente se va a casa.',
    indications: [
      'Palpitaciones rápidas de inicio súbito que ocurren algunas veces por semana o mes.',
      'Desmayos recurrentes que no han podido explicarse con otros estudios iniciales.',
      'Vigilancia y ajuste de medicamentos antiarrítmicos.',
      'Evaluación de pausas cardíacas o frecuencias cardíacas bajas.'
    ],
    preparation: [
      'Bañar al niño antes de la cita, ya que el equipo no puede mojarse (salvo indicaciones especiales).',
      'No aplicar cremas o lociones en el pecho del niño para garantizar una buena adhesión de los electrodos.',
      'Mantener un diario de síntomas anotando la hora exacta en que el niño refiere molestias.'
    ],
    safety: 'Estudio no invasivo y completamente seguro. El dispositivo es pequeño, ligero y cómodo de usar.',
    imageUrl: 'https://framerusercontent.com/images/EhFRHV9ww8Z6G9xLt6v8jv1bzA.png?width=2048&height=1365'
  },
  'mesa-inclinada-tilt-test-pediatrico': {
    slug: 'mesa-inclinada-tilt-test-pediatrico',
    category: 'diagnostico',
    title: 'Mesa Inclinada en Niños (Tilt Test Pediátrico)',
    metaTitle: 'Mesa Inclinada Tilt Test Niños CDMX | Síncope Pediátrico',
    metaDesc: 'Mesa inclinada o Tilt Test en niños para diagnóstico de síncope vasovagal y desmayos recurrentes en CDMX. Dr. Cortazar, electrofisiólogo pediátrico.',
    heroDesc: 'El estudio clave para diagnosticar desmayos recurrentes por disautonomía o síncope vasovagal, realizado en un ambiente seguro y controlado.',
    definition: 'Consiste en colocar al paciente sobre una camilla especial con soporte para pies, la cual se inclina de posición horizontal a una posición vertical (de 60-70 grados). Se monitorea de forma continua la frecuencia cardíaca, el ECG y la presión arterial.',
    purpose: [
      'Provocar, bajo supervisión experta, la respuesta fisiológica que desencadena los desmayos.',
      'Diferenciar entre desmayos de origen cardíaco (arritmias) y desmayos de origen autonómico (vasovagal).',
      'Diagnosticar Síndrome de Taquicardia Ortostática Postural (POTS) o disautonomía.',
      'Evaluar la respuesta cardiovascular ante la gravedad al ponerse de pie de forma prolongada.'
    ],
    hospitalization: 'Es un estudio ambulatorio de gabinete. Toma aproximadamente 45 minutos a 1 hora y el paciente se retira al concluir.',
    indications: [
      'Niños o adolescentes con desmayos recurrentes sin explicación clara.',
      'Sensación intensa de mareo, fatiga o palpitaciones al estar de pie por tiempos prolongados.',
      'Descartar síncope vasovagal frente a sospechas de arritmias graves.'
    ],
    preparation: [
      'Requiere un ayuno de alimentos sólidos de 4 a 6 horas.',
      'Asistir con ropa cómoda y de preferencia acompañado por un adulto.',
      'Suspender medicamentos antiarrítmicos o reguladores de presión solo si lo indicó previamente el Dr. Cortázar.'
    ],
    safety: 'El estudio busca inducir el mareo o desmayo controlado. Si ocurre, la camilla se regresa de inmediato al plano horizontal. Los síntomas desaparecen en segundos y el equipo médico está presente en todo momento.',
    imageUrl: 'https://framerusercontent.com/images/Hkdp2K950wNWEHvUj7ns7isKjco.jpeg?width=1600&height=1200'
  },
  'prueba-esfuerzo-pediatrica-cdmx': {
    slug: 'prueba-esfuerzo-pediatrica-cdmx',
    category: 'diagnostico',
    title: 'Prueba de Esfuerzo Pediátrica',
    metaTitle: 'Prueba de Esfuerzo en Niños CDMX | Arritmias por Ejercicio',
    metaDesc: 'Prueba de esfuerzo pediátrica en CDMX para detectar arritmias durante el ejercicio. Si tu hijo se desmayó al correr, este es el estudio clave. Dr. Cortazar.',
    heroDesc: 'Hay arritmias que solo se activan cuando el corazón trabaja al máximo. Este estudio nos permite evaluarlas en un ambiente controlado y protegido.',
    definition: 'Es un estudio en el cual se realiza un registro continuo del electrocardiograma y la presión arterial mientras el niño corre sobre una caminadora especial con velocidad e inclinación progresivas, buscando alcanzar su esfuerzo físico máximo.',
    purpose: [
      'Provocar y documentar arritmias cardíacas que se desencadenan exclusivamente con la actividad física.',
      'Medir la tolerancia al esfuerzo y la respuesta de la presión arterial en niños deportistas.',
      'Evaluar el comportamiento del electrocardiograma ante niveles altos de adrenalina.',
      'Descartar riesgos graves en pacientes diagnosticados con Wolff-Parkinson-White o QT largo.'
    ],
    hospitalization: 'Estudio ambulatorio no invasivo, con una duración total de 30 a 45 minutos.',
    indications: [
      'Desmayo o síncope que se presentó en pleno esfuerzo físico (corriendo, jugando).',
      'Palpitaciones que inician exclusivamente durante el ejercicio.',
      'Monitoreo pre-deportivo en niños con antecedentes familiares importantes.',
      'Vigilancia posterior a cirugías por cardiopatías congénitas.'
    ],
    preparation: [
      'Asistir con ropa deportiva cómoda (pants o shorts) y tenis adecuados para correr.',
      'Evitar alimentos pesados 4 horas antes de la prueba; tomar un refrigerio ligero.',
      'No suspender medicamentos a menos que se le haya indicado específicamente.'
    ],
    safety: 'El estudio es supervisado directamente por el electrofisiólogo. Si se detecta cualquier anomalía eléctrica significativa o fatiga extrema, la banda se detiene de inmediato de forma controlada.',
    imageUrl: 'https://framerusercontent.com/images/EhFRHV9ww8Z6G9xLt6v8jv1bzA.png?width=2048&height=1365'
  },
  'estudio-electrofisiologico-pediatrico': {
    slug: 'estudio-electrofisiologico-pediatrico',
    category: 'procedimiento',
    title: 'Estudio Electrofisiológico Pediátrico',
    metaTitle: 'Estudio Electrofisiológico Pediátrico CDMX | Dr. Cortazar',
    metaDesc: 'Estudio electrofisiológico en niños en CDMX. Mapeo 3D del sistema eléctrico cardíaco con Cero Fluoroscopía. Diagnóstico definitivo de arritmias pediátricas.',
    heroDesc: 'Mapeo tridimensional de alta precisión desde el interior del corazón. El estándar de oro para diagnosticar arritmias complejas, libre de radiación.',
    definition: 'Es un procedimiento intervencionista mínimamente invasivo. A través de pequeñas punciones en las venas de la ingle, se introducen catéteres flexibles y delgados hasta el corazón. Estos catéteres registran las señales eléctricas internas y nos permiten trazar un mapa 3D.',
    purpose: [
      'Identificar la ubicación exacta de circuitos eléctricos anormales causantes de taquicardia.',
      'Determinar si una vía accesoria tiene riesgo alto de provocar arritmias peligrosas.',
      'Provocar y controlar la arritmia bajo supervisión directa para entender su mecanismo de raíz.'
    ],
    ceroFluoroscopiaText: 'En nuestra práctica, este estudio se realiza con Cero Fluoroscopía. Utilizamos tecnologías de mapeo 3D (sistemas CARTO o Ensite X) que emiten señales magnéticas/eléctricas no nocivas. Eliminamos los rayos X por completo, protegiendo a los niños de la radiación ionizante.',
    isTherapeuticText: 'El estudio es diagnóstico, pero si localizamos la vía causante y está planificado con la familia, procedemos a realizar la ablación (curación) en ese mismo momento, evitando someter al niño a una segunda intervención.',
    hospitalization: 'Requiere hospitalización. El procedimiento se realiza en sala de electrofisiología bajo anestesia general y requiere una noche de internamiento para monitoreo post-procedimiento.',
    indications: [
      'Arritmias complejas que no responden adecuadamente a tratamientos con pastillas.',
      'Estudio diagnóstico para definir si una arritmia supraventricular es candidata a curación.',
      'Evaluación de riesgos eléctricos en niños con antecedentes familiares severos o cardiopatía congénita.'
    ],
    preparation: [
      'Ayuno absoluto de 8 horas antes del procedimiento.',
      'Estudios preoperatorios de sangre (coagulación y biometría) según se le indique en consulta.',
      'Discutir previamente la suspensión de medicamentos antiarrítmicos (usualmente 3 a 5 días antes).'
    ],
    safety: 'Es un procedimiento altamente seguro cuando lo realiza un electrofisiólogo pediátrico certificado. Al realizarse con Cero Fluoroscopía, se elimina por completo el riesgo biológico derivado de la radiación por rayos X.',
    imageUrl: 'https://framerusercontent.com/images/xklo2of0meYCKi2zIB3IBf4xo.png?width=1376&height=768'
  },
  'marcapasos-pediatrico-cdmx': {
    slug: 'marcapasos-pediatrico-cdmx',
    category: 'procedimiento',
    title: 'Implante de Marcapasos Pediátrico',
    metaTitle: 'Marcapasos Pediátrico CDMX | Implante en Niños y Bebés',
    metaDesc: 'Implante de marcapasos en niños, bebés y adolescentes en CDMX. El Dr. Cortazar es subespecialista en dispositivos cardíacos pediátricos. Agenda tu consulta.',
    heroDesc: 'Tecnología inteligente para asegurar latidos estables y saludables. Brindamos a los niños una vida activa y sin límites mediante marcapasos de última generación.',
    definition: 'Es un dispositivo electrónico pequeño implantado debajo de la piel que detecta la actividad del corazón y envía impulsos eléctricos suaves cuando el ritmo cardíaco propio del paciente es peligrosamente lento o se detiene. El marcapasos inteligente sólo actúa cuando el corazón lo necesita.',
    purpose: [
      'Garantizar que el corazón lata con una frecuencia suficiente para mantener el desarrollo óptimo del niño.',
      'Evitar síntomas graves como desmayos, fatiga crónica o insuficiencia cardíaca por ritmos lentos.',
      'Permitir que niños con bloqueos cardíacos regresen a sus deportes y actividades normales sin peligro.'
    ],
    hospitalization: 'Requiere hospitalización. El implante se realiza en quirófano/sala de electrofisiología bajo anestesia general. El paciente suele pasar de 1 a 2 noches en el hospital.',
    indications: [
      'Bloqueo auriculoventricular completo (congénito o desarrollado después de una cirugía de corazón).',
      'Enfermedad del nodo sinusal (el marcapasos natural del cuerpo no funciona bien).',
      'Episodios de pausas prolongadas de los latidos documentados en el Holter.'
    ],
    preparation: [
      'Ayuno completo de 8 horas previo a la cirugía.',
      'Valoración preoperatoria completa y exámenes de laboratorio autorizados.',
      'Ingreso al hospital programado en la fecha acordada.'
    ],
    safety: 'El implante es un procedimiento establecido y seguro en manos expertas. El marcapasos está protegido bajo la piel. El generador moderno dura entre 7 y 15 años y su cambio posterior es de muy bajo riesgo.',
    imageUrl: 'https://framerusercontent.com/images/4Kxi0fzIKEdeuKpX4oQFOa0MQXU.png?width=848&height=704'
  },
  'desfibrilador-dai-pediatrico-cdmx': {
    slug: 'desfibrilador-dai-pediatrico-cdmx',
    category: 'procedimiento',
    title: 'Desfibrilador Automático Implantable (DAI)',
    metaTitle: 'Desfibrilador DAI Pediátrico CDMX | Muerte Súbita en Niños',
    metaDesc: 'Implante de desfibrilador DAI en niños y adolescentes en CDMX. Especialista en prevención de muerte súbita cardíaca. Dr. Cortazar.',
    heroDesc: 'Un ángel guardián electrónico para corazones con arritmias ventriculares de riesgo. El único dispositivo que protege de forma instantánea contra muerte súbita.',
    definition: 'Es un dispositivo inteligente implantado bajo la piel que monitorea de forma continua cada latido del corazón. Si detecta una arritmia ventricular caótica y peligrosa (como fibrilación ventricular), la detiene aplicando descargas eléctricas para devolver el ritmo normal en segundos.',
    purpose: [
      'Prevenir muerte súbita en niños diagnosticados con arritmias o cardiopatías de muy alto riesgo.',
      'Dar una respuesta instantánea en cualquier lugar o circunstancia.',
      'Funcionar adicionalmente como marcapasos en caso de ritmos lentos.'
    ],
    hospitalization: 'Requiere hospitalización en sala de electrofisiología bajo anestesia general, permaneciendo de 1 a 2 días internado para vigilar el correcto posicionamiento.',
    indications: [
      'Sobrevivientes de un paro cardíaco por arritmia grave.',
      'Síndrome de QT Largo, Brugada o Taquicardia Ventricular Categoría 2 o 3 con factores de riesgo alto.',
      'Miocardiopatía hipertrófica o dilatada con función cardíaca muy disminuida.'
    ],
    preparation: [
      'Ayuno absoluto de 8 horas antes del procedimiento.',
      'Pruebas y valoraciones preoperatorias indicadas por el equipo.',
      'Planta de cuidados postquirúrgicos en casa lista.'
    ],
    safety: 'Procedimiento quirúrgico de alta tecnología y seguridad. Se pueden utilizar desfibriladores subcutáneos (S-ICD) en adolescentes, los cuales no requieren colocar cables dentro del corazón.',
    imageUrl: 'https://framerusercontent.com/images/4Kxi0fzIKEdeuKpX4oQFOa0MQXU.png?width=848&height=704'
  }
};
