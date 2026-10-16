import Link from "next/link";
import LegalArticle, { type LegalSection } from "@/components/sections/LegalArticle";
import { LEGAL, META_LINKS } from "@/data/legal";

/**
 * Política de Privacidad y Tratamiento de Datos Personales.
 * Redactada conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013 (Colombia),
 * e incluye la sección exigida por Meta para proveedores tecnológicos de la
 * Plataforma de WhatsApp Business (uso de datos de la plataforma y eliminación).
 */
const sections: LegalSection[] = [
  {
    id: "quienes-somos",
    title: "Quiénes somos y alcance de esta política",
    content: (
      <>
        <p>
          <strong>{LEGAL.legalName}</strong> (en adelante, «Parcy» o «nosotros»)
          {LEGAL.nit ? `, identificada con NIT ${LEGAL.nit},` : ","} con domicilio en{" "}
          {LEGAL.address}, es la responsable del tratamiento de los datos personales que se
          recolectan a través de su sitio web{" "}
          <a href={LEGAL.siteUrl}>parcydigital.com</a> y de su plataforma de gestión y venta de
          proyectos inmobiliarios disponible en{" "}
          <a href={LEGAL.appUrl}>app.parcydigital.com</a> (en conjunto, la «Plataforma»).
        </p>
        <p>
          Esta Política de Privacidad y Tratamiento de Datos Personales describe cómo
          recolectamos, usamos, almacenamos, compartimos y protegemos la información de:
        </p>
        <ul>
          <li>
            Las personas que visitan nuestro sitio web o nos contactan a través de él, por
            ejemplo, para solicitar una demostración.
          </li>
          <li>
            Los usuarios de la Plataforma: administradores, asesores comerciales y demás
            miembros de los equipos de las empresas que contratan Parcy (nuestros «Clientes»).
          </li>
          <li>
            Las personas cuyos datos son registrados en la Plataforma por nuestros Clientes,
            como interesados, compradores o contactos de un proyecto.
          </li>
          <li>
            Las personas que se comunican con nuestros Clientes a través de integraciones
            habilitadas en Parcy, como la Plataforma de WhatsApp Business de Meta.
          </li>
        </ul>
        <p>
          Esta política se expide en cumplimiento de la Ley 1581 de 2012, el Decreto 1377 de
          2013 (compilado en el Decreto 1074 de 2015) y las demás normas que regulan la
          protección de datos personales en Colombia, así como de las políticas de las
          plataformas de terceros con las que nos integramos.
        </p>
      </>
    ),
  },
  {
    id: "definiciones",
    title: "Definiciones",
    content: (
      <dl>
        <div>
          <dt>Dato personal</dt>
          <dd>
            Cualquier información vinculada o que pueda asociarse a una persona natural
            determinada o determinable.
          </dd>
        </div>
        <div>
          <dt>Titular</dt>
          <dd>Persona natural cuyos datos personales son objeto de tratamiento.</dd>
        </div>
        <div>
          <dt>Responsable del tratamiento</dt>
          <dd>
            Quien decide sobre la base de datos y la finalidad del tratamiento. Parcy es
            responsable de los datos de sus visitantes y usuarios.
          </dd>
        </div>
        <div>
          <dt>Encargado del tratamiento</dt>
          <dd>
            Quien realiza el tratamiento por cuenta del responsable. Parcy actúa como
            encargado respecto de los datos que sus Clientes registran en la Plataforma.
          </dd>
        </div>
        <div>
          <dt>Tratamiento</dt>
          <dd>
            Cualquier operación sobre datos personales: recolección, almacenamiento, uso,
            circulación o supresión.
          </dd>
        </div>
        <div>
          <dt>Autorización</dt>
          <dd>Consentimiento previo, expreso e informado del titular para el tratamiento.</dd>
        </div>
        <div>
          <dt>Transmisión</dt>
          <dd>
            Comunicación de datos a un encargado, dentro o fuera de Colombia, para que los
            trate por cuenta del responsable.
          </dd>
        </div>
        <div>
          <dt>Transferencia</dt>
          <dd>
            Envío de datos a un tercero que actúa como responsable, dentro o fuera del país.
          </dd>
        </div>
        <div>
          <dt>Cliente</dt>
          <dd>
            Empresa o persona que contrata la Plataforma para gestionar sus proyectos
            inmobiliarios (vivienda, parcelaciones, urbanismos u otros).
          </dd>
        </div>
      </dl>
    ),
  },
  {
    id: "principios",
    title: "Principios que aplicamos",
    content: (
      <>
        <p>Todo tratamiento de datos personales en Parcy se rige por los siguientes principios:</p>
        <ul>
          <li>
            <strong>Legalidad:</strong> el tratamiento se sujeta a lo dispuesto en la ley.
          </li>
          <li>
            <strong>Finalidad:</strong> obedece a una finalidad legítima, informada al titular.
          </li>
          <li>
            <strong>Libertad:</strong> solo se realiza con el consentimiento previo, expreso e
            informado del titular, salvo las excepciones legales.
          </li>
          <li>
            <strong>Veracidad o calidad:</strong> la información debe ser veraz, completa,
            exacta, actualizada y comprobable.
          </li>
          <li>
            <strong>Transparencia:</strong> el titular puede obtener en cualquier momento
            información sobre la existencia de datos que le conciernan.
          </li>
          <li>
            <strong>Acceso y circulación restringida:</strong> los datos solo son tratados por
            personas autorizadas y no se ponen a disposición del público en general.
          </li>
          <li>
            <strong>Seguridad:</strong> aplicamos medidas técnicas, humanas y administrativas
            para evitar su adulteración, pérdida, consulta o acceso no autorizado.
          </li>
          <li>
            <strong>Confidencialidad:</strong> quienes intervienen en el tratamiento guardan
            reserva de la información, incluso después de finalizada su relación con Parcy.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "datos-que-recolectamos",
    title: "Qué datos recolectamos",
    content: (
      <>
        <p>Recolectamos únicamente los datos necesarios para las finalidades descritas en esta política.</p>

        <h3>a) Visitantes del sitio web</h3>
        <ul>
          <li>
            <strong>Formulario de contacto o solicitud de demo:</strong> nombre completo,
            cargo, empresa o proyecto, teléfono y correo electrónico.
          </li>
          <li>
            <strong>Datos técnicos:</strong> dirección IP, tipo de dispositivo y navegador,
            páginas visitadas y fecha y hora de acceso, obtenidos mediante cookies y
            tecnologías similares (ver sección «Cookies»).
          </li>
        </ul>

        <h3>b) Usuarios de la Plataforma</h3>
        <ul>
          <li>
            <strong>Datos de cuenta:</strong> nombre, correo electrónico, teléfono, cargo o rol
            dentro del equipo, empresa a la que pertenece y credenciales de acceso (la
            contraseña se almacena cifrada y nunca en texto plano).
          </li>
          <li>
            <strong>Datos comerciales y de facturación:</strong> razón social, NIT, dirección,
            plan contratado e historial de pagos. Los datos de tarjetas los procesa
            directamente la pasarela de pago; Parcy no los almacena.
          </li>
          <li>
            <strong>Registros de actividad:</strong> acciones realizadas en la Plataforma
            (reservas, solicitudes, aprobaciones, cambios de estado de unidades), con fecha,
            hora y usuario, necesarios para la trazabilidad y auditoría que ofrece el servicio.
          </li>
          <li>
            <strong>Soporte:</strong> contenido de las comunicaciones que mantengas con nuestro
            equipo.
          </li>
        </ul>

        <h3>c) Datos registrados por nuestros Clientes</h3>
        <p>
          Los Clientes pueden registrar en la Plataforma información de terceros relacionada con
          la gestión de sus proyectos: nombre, tipo y número de identificación, teléfono, correo
          electrónico, dirección y datos de la negociación (unidad de interés, reserva, solicitud
          de venta, condiciones de pago). Respecto de estos datos, Parcy actúa como{" "}
          <strong>encargado del tratamiento</strong> y el Cliente es el responsable (ver sección
          «Nuestro rol»).
        </p>

        <h3>d) Datos de integraciones con Meta y WhatsApp</h3>
        <p>
          Cuando un Cliente conecta su cuenta de WhatsApp Business a Parcy, tratamos los
          identificadores de la cuenta, los números de teléfono de los contactos y el contenido
          y los metadatos de los mensajes, tal como se detalla en la sección «Integraciones con
          Meta y WhatsApp Business Platform».
        </p>

        <h3>Datos sensibles</h3>
        <p>
          Parcy no solicita ni requiere datos sensibles (como datos de salud, origen étnico,
          orientación política o biométricos) para prestar el servicio. Te pedimos no
          registrarlos en la Plataforma. Si un Cliente decide hacerlo, es su responsabilidad
          contar con la autorización expresa del titular.
        </p>
      </>
    ),
  },
  {
    id: "finalidades",
    title: "Para qué usamos tus datos",
    content: (
      <>
        <p>Tratamos los datos personales para las siguientes finalidades:</p>
        <ul>
          <li>
            Atender solicitudes de información, agendar demostraciones y mantener la relación
            comercial y precontractual.
          </li>
          <li>
            Crear y administrar cuentas de usuario, autenticar el acceso y aplicar los roles y
            permisos definidos por cada Cliente.
          </li>
          <li>
            Prestar las funcionalidades de la Plataforma: control de disponibilidad de unidades,
            reservas, solicitudes de venta, aprobaciones, informes y trazabilidad.
          </li>
          <li>
            Operar las integraciones que el Cliente active, incluida la mensajería a través de
            la Plataforma de WhatsApp Business.
          </li>
          <li>Facturar, gestionar cobros y cumplir obligaciones contables y tributarias.</li>
          <li>
            Prestar soporte técnico, enviar notificaciones operativas del servicio (por
            ejemplo, cambios de estado, vencimiento de reservas o avisos de seguridad).
          </li>
          <li>
            Enviar comunicaciones comerciales sobre novedades, mejoras o promociones de Parcy,
            de las cuales puedes darte de baja en cualquier momento.
          </li>
          <li>
            Mejorar la Plataforma mediante el análisis de uso agregado y la detección y
            prevención de fraudes, abusos o incidentes de seguridad.
          </li>
          <li>
            Cumplir requerimientos de autoridades competentes y ejercer o defender derechos
            en procesos legales.
          </li>
        </ul>
        <p>
          No tomamos decisiones que produzcan efectos jurídicos sobre el titular basadas
          únicamente en tratamientos automatizados.
        </p>
      </>
    ),
  },
  {
    id: "nuestro-rol",
    title: "Nuestro rol: responsable o encargado",
    content: (
      <>
        <p>Dependiendo del origen de los datos, Parcy cumple un rol distinto:</p>
        <ul>
          <li>
            <strong>Parcy como responsable.</strong> Somos responsables de los datos de los
            visitantes del sitio web y de los usuarios que crean una cuenta en la Plataforma.
            Decidimos las finalidades y los medios del tratamiento según esta política.
          </li>
          <li>
            <strong>Parcy como encargado.</strong> Respecto de la información que los Clientes
            registran sobre sus interesados, compradores y contactos (incluida la que fluye por
            la integración de WhatsApp), el Cliente es el responsable del tratamiento. Parcy la
            trata exclusivamente por cuenta del Cliente, siguiendo sus instrucciones y las
            condiciones de los{" "}
            <Link href="/terms">Términos y condiciones</Link>, y no la usa para fines propios.
          </li>
        </ul>
        <p>
          Cada Cliente se obliga a contar con una política de tratamiento de datos propia y con
          las autorizaciones necesarias de los titulares antes de registrar su información en
          Parcy. Si eres contacto de uno de nuestros Clientes y deseas ejercer tus derechos,
          puedes dirigirte directamente a esa empresa o escribirnos; en ese caso trasladaremos
          tu solicitud al responsable y colaboraremos en su atención.
        </p>
      </>
    ),
  },
  {
    id: "autorizacion",
    title: "Cómo obtenemos tu autorización",
    content: (
      <>
        <p>Obtenemos tu autorización previa, expresa e informada de las siguientes formas:</p>
        <ul>
          <li>
            Al enviar el formulario de contacto del sitio web, donde se informa esta política.
          </li>
          <li>
            Al registrarte en la Plataforma o aceptar la invitación de un administrador, al
            aceptar los Términos y condiciones y esta política.
          </li>
          <li>
            Al conectar una integración de terceros, como WhatsApp Business, mediante el flujo
            de autorización de Meta.
          </li>
          <li>
            Mediante conductas inequívocas que permitan concluir de forma razonable que
            otorgaste la autorización, en los casos permitidos por la ley.
          </li>
        </ul>
        <p>
          Conservamos prueba de la autorización y puedes solicitarnos copia en cualquier momento.
          Puedes revocarla siguiendo el procedimiento de la sección «Cómo ejercer tus derechos»,
          siempre que no exista un deber legal o contractual que exija mantener los datos.
        </p>
      </>
    ),
  },
  {
    id: "meta-whatsapp",
    title: "Integraciones con Meta y WhatsApp Business Platform",
    content: (
      <>
        <p>
          Parcy actúa como <strong>proveedor tecnológico (Tech Provider)</strong> de la
          Plataforma de WhatsApp Business de Meta Platforms, Inc. («Meta»). Esto permite que
          nuestros Clientes conecten su cuenta de WhatsApp Business a Parcy para enviar y
          recibir mensajes con sus contactos, por ejemplo, confirmaciones de reserva,
          seguimiento comercial o notificaciones del proyecto, directamente desde la Plataforma.
        </p>

        <h3>Qué información recibimos de Meta</h3>
        <p>
          Cuando un Cliente conecta su cuenta a través del registro integrado de Meta (Embedded
          Signup, basado en Facebook Login for Business), recibimos y almacenamos únicamente la
          información necesaria para operar la integración:
        </p>
        <ul>
          <li>
            Identificadores de la cuenta: ID del portafolio empresarial, ID de la cuenta de
            WhatsApp Business (WABA) e ID del número de teléfono conectado.
          </li>
          <li>
            Tokens de acceso que nos autorizan a enviar y recibir mensajes en nombre del
            Cliente. Se almacenan cifrados y no se comparten con terceros.
          </li>
          <li>Plantillas de mensaje, su estado de aprobación y la calificación de calidad del número.</li>
          <li>
            Números de teléfono y nombres de perfil de los contactos que envían o reciben
            mensajes, el contenido de los mensajes, sus archivos adjuntos y sus metadatos
            (fecha, hora y estado de envío, entrega y lectura).
          </li>
        </ul>

        <h3>Cómo usamos esa información</h3>
        <ul>
          <li>
            Exclusivamente para prestar el servicio al Cliente que conectó la cuenta: enviar,
            recibir, mostrar, organizar y asociar las conversaciones a las unidades y contactos de
            su proyecto.
          </li>
          <li>
            No vendemos, alquilamos ni cedemos los datos obtenidos a través de Meta, no los
            usamos con fines publicitarios ni para construir perfiles ajenos a la operación de
            la integración, y no los combinamos con datos de otros Clientes.
          </li>
          <li>
            Tratamos estos datos de acuerdo con las{" "}
            <a href={META_LINKS.platformTerms} target="_blank" rel="noopener noreferrer">
              Condiciones de la plataforma de Meta
            </a>
            , las{" "}
            <a href={META_LINKS.whatsappBusinessTerms} target="_blank" rel="noopener noreferrer">
              Condiciones del servicio de WhatsApp Business
            </a>{" "}
            y la{" "}
            <a href={META_LINKS.whatsappMessagingPolicy} target="_blank" rel="noopener noreferrer">
              Política de mensajes de WhatsApp Business
            </a>
            .
          </li>
        </ul>

        <h3>Responsabilidades compartidas</h3>
        <p>
          El Cliente que activa la integración es responsable de obtener el consentimiento
          (opt-in) de sus contactos antes de enviarles mensajes, de usar solo plantillas
          aprobadas y de cumplir las políticas de Meta. Meta, por su parte, trata los datos
          conforme a su propia{" "}
          <a href={META_LINKS.privacyPolicy} target="_blank" rel="noopener noreferrer">
            Política de privacidad
          </a>{" "}
          y a la{" "}
          <a href={META_LINKS.whatsappPrivacy} target="_blank" rel="noopener noreferrer">
            Política de privacidad de WhatsApp
          </a>
          .
        </p>

        <h3>Desconexión y eliminación</h3>
        <p>
          El Cliente puede desconectar Parcy en cualquier momento desde la configuración de su
          portafolio empresarial de Meta o solicitándonoslo por escrito. Al hacerlo, revocamos
          los tokens de acceso y eliminamos los datos asociados a la integración siguiendo los
          plazos y pasos descritos en nuestra página de{" "}
          <Link href="/data-deletion">Eliminación de datos</Link>.
        </p>
      </>
    ),
  },
  {
    id: "terceros",
    title: "Con quién compartimos tus datos",
    content: (
      <>
        <p>
          No vendemos datos personales. Solo compartimos información con terceros en los
          siguientes casos:
        </p>
        <ul>
          <li>
            <strong>Proveedores de servicios (encargados):</strong> empresas que nos prestan
            infraestructura en la nube y alojamiento, bases de datos, correo electrónico
            transaccional, procesamiento de formularios, pasarelas de pago, herramientas de
            soporte y analítica. Solo acceden a los datos necesarios para prestar su servicio y
            están obligadas contractualmente a protegerlos y a no usarlos para otros fines.
          </li>
          <li>
            <strong>Meta Platforms:</strong> cuando el Cliente activa la integración de
            WhatsApp Business, los mensajes y números de teléfono se transmiten a través de la
            infraestructura de Meta, conforme a la sección anterior.
          </li>
          <li>
            <strong>Dentro de la cuenta del Cliente:</strong> los usuarios de una misma empresa
            ven la información que su administrador les habilita según su rol.
          </li>
          <li>
            <strong>Autoridades:</strong> cuando lo exija una ley, una orden judicial o un
            requerimiento de autoridad competente, o cuando sea necesario para proteger
            nuestros derechos, los de nuestros usuarios o la seguridad del servicio.
          </li>
          <li>
            <strong>Operaciones corporativas:</strong> en caso de fusión, adquisición o venta de
            activos, los datos podrán transferirse al sucesor, quien quedará sujeto a esta
            política; te informaremos previamente de cualquier cambio relevante.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "transferencia-internacional",
    title: "Transferencia y transmisión internacional",
    content: (
      <>
        <p>
          Algunos de nuestros proveedores de infraestructura y servicios (incluida Meta) operan
          servidores fuera de Colombia, principalmente en Estados Unidos. Por ello, tus datos
          pueden ser transmitidos o transferidos internacionalmente.
        </p>
        <p>
          En estos casos verificamos que el país de destino ofrezca un nivel adecuado de
          protección, según los criterios de la Superintendencia de Industria y Comercio, o
          suscribimos acuerdos de transmisión que garanticen que el tercero cumpla con esta
          política y con la legislación colombiana. Al aceptar esta política autorizas dichas
          transferencias y transmisiones con las garantías indicadas.
        </p>
      </>
    ),
  },
  {
    id: "conservacion",
    title: "Cuánto tiempo conservamos los datos",
    content: (
      <>
        <p>
          Conservamos los datos personales solo durante el tiempo necesario para cumplir las
          finalidades descritas y las obligaciones legales aplicables:
        </p>
        <ul>
          <li>
            <strong>Solicitudes de contacto y demo:</strong> hasta 24 meses desde la última
            interacción, salvo que se formalice una relación comercial.
          </li>
          <li>
            <strong>Cuentas y datos de la Plataforma:</strong> mientras la cuenta del Cliente
            esté activa. Tras la terminación del servicio, el Cliente dispone de un periodo de
            30 días para exportar su información; luego se elimina o anonimiza, salvo lo que
            debamos conservar por ley.
          </li>
          <li>
            <strong>Datos de la integración de WhatsApp:</strong> mientras la integración esté
            conectada. Al desconectarla o al recibir una solicitud de eliminación, los tokens se
            revocan de inmediato y los datos asociados se eliminan en un plazo máximo de 30 días.
          </li>
          <li>
            <strong>Facturación y contabilidad:</strong> por el término exigido por las normas
            contables, comerciales y tributarias colombianas.
          </li>
          <li>
            <strong>Registros de seguridad:</strong> por el tiempo necesario para investigar
            incidentes y cumplir obligaciones legales.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "seguridad",
    title: "Cómo protegemos la información",
    content: (
      <>
        <p>
          Aplicamos medidas técnicas, humanas y administrativas razonables para proteger los
          datos personales, entre ellas:
        </p>
        <ul>
          <li>Cifrado de la información en tránsito (HTTPS/TLS) y de las credenciales y tokens en reposo.</li>
          <li>Control de acceso por roles y permisos, con autenticación individual por usuario.</li>
          <li>Registros de auditoría de las acciones realizadas en la Plataforma.</li>
          <li>Copias de seguridad periódicas y procedimientos de recuperación.</li>
          <li>Acuerdos de confidencialidad con el personal y los proveedores que acceden a los datos.</li>
        </ul>
        <p>
          Ningún sistema es completamente infalible. Si ocurre un incidente de seguridad que
          afecte tus datos personales, lo notificaremos a los titulares afectados y a la
          Superintendencia de Industria y Comercio en los términos que exige la ley.
        </p>
      </>
    ),
  },
  {
    id: "derechos",
    title: "Tus derechos como titular",
    content: (
      <>
        <p>De acuerdo con el artículo 8 de la Ley 1581 de 2012, como titular tienes derecho a:</p>
        <ul>
          <li>Conocer, actualizar y rectificar tus datos personales.</li>
          <li>Solicitar prueba de la autorización otorgada, salvo las excepciones legales.</li>
          <li>Ser informado sobre el uso que se ha dado a tus datos.</li>
          <li>
            Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por
            infracciones a la ley, una vez agotado el trámite de consulta o reclamo ante Parcy.
          </li>
          <li>
            Revocar la autorización y/o solicitar la supresión de tus datos cuando no se
            respeten los principios, derechos y garantías legales, y siempre que no exista un
            deber legal o contractual de conservarlos.
          </li>
          <li>Acceder de forma gratuita a tus datos personales que hayan sido objeto de tratamiento.</li>
        </ul>
        <p>
          Estos derechos pueden ser ejercidos por el titular, sus causahabientes, su
          representante o apoderado, o por estipulación a favor de otro.
        </p>
      </>
    ),
  },
  {
    id: "ejercer-derechos",
    title: "Cómo ejercer tus derechos: consultas y reclamos",
    content: (
      <>
        <p>
          Para cualquier consulta, reclamo o solicitud relacionada con tus datos personales,
          escríbenos a <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> indicando:
        </p>
        <ul>
          <li>Tu nombre completo y tipo y número de identificación.</li>
          <li>
            El correo electrónico o número de teléfono con el que te registraste o con el que
            interactuaste con Parcy o con uno de nuestros Clientes.
          </li>
          <li>Una descripción clara de tu solicitud (consulta, actualización, rectificación, revocatoria o supresión).</li>
          <li>Los documentos que soporten tu solicitud, si aplica.</li>
        </ul>

        <h3>Consultas</h3>
        <p>
          Responderemos en un plazo máximo de <strong>diez (10) días hábiles</strong> contados
          desde la recepción. Si no es posible atenderla en ese término, te informaremos los
          motivos y la fecha en que la atenderemos, que no superará los cinco (5) días hábiles
          siguientes.
        </p>

        <h3>Reclamos</h3>
        <p>
          Si consideras que tus datos deben ser corregidos, actualizados o suprimidos, o que se
          ha incumplido la ley, puedes presentar un reclamo. Si está incompleto, te pediremos
          completarlo dentro de los cinco (5) días hábiles siguientes; si transcurren dos (2)
          meses sin respuesta, entenderemos que has desistido. Una vez recibido el reclamo
          completo, lo resolveremos en un plazo máximo de{" "}
          <strong>quince (15) días hábiles</strong>. Si no es posible, te informaremos los
          motivos y la nueva fecha, que no superará los ocho (8) días hábiles siguientes.
        </p>
        <p>
          El trámite de consulta o reclamo ante Parcy es requisito previo para presentar una
          queja ante la Superintendencia de Industria y Comercio.
        </p>
      </>
    ),
  },
  {
    id: "eliminacion",
    title: "Eliminación de datos",
    content: (
      <>
        <p>
          Puedes solicitar la eliminación de tus datos personales en cualquier momento, ya seas
          usuario de la Plataforma, contacto de uno de nuestros Clientes o persona que
          interactuó con un Cliente a través de WhatsApp.
        </p>
        <p>
          Hemos preparado una guía paso a paso con las opciones disponibles, la información que
          debes incluir en tu solicitud, los plazos de atención y lo que conservamos por
          obligación legal:
        </p>
        <p className="legal-callout">
          <Link href="/data-deletion">Ver instrucciones para eliminar tus datos →</Link>
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies y tecnologías similares",
    content: (
      <>
        <p>
          Una cookie es un pequeño archivo que el navegador guarda cuando visitas un sitio web.
          Usamos las siguientes categorías:
        </p>
        <ul>
          <li>
            <strong>Necesarias:</strong> imprescindibles para que el sitio y la Plataforma
            funcionen, por ejemplo, mantener tu sesión iniciada o recordar tus preferencias de
            seguridad. No requieren consentimiento.
          </li>
          <li>
            <strong>De rendimiento y analítica:</strong> nos permiten entender de forma
            agregada cómo se usa el sitio para mejorarlo. Si incorporamos herramientas de
            analítica de terceros, lo indicaremos aquí y podrás gestionarlas desde tu
            navegador.
          </li>
        </ul>
        <p>
          Puedes configurar tu navegador para bloquear o eliminar cookies. Ten en cuenta que
          deshabilitar las cookies necesarias puede impedir el funcionamiento de la Plataforma.
        </p>
      </>
    ),
  },
  {
    id: "menores",
    title: "Menores de edad",
    content: (
      <p>
        Nuestros servicios están dirigidos a empresas y a personas mayores de edad. No
        recolectamos de forma deliberada datos de menores de 18 años. Si tienes conocimiento de
        que un menor nos ha proporcionado datos sin la autorización de su representante legal,
        escríbenos y los eliminaremos.
      </p>
    ),
  },
  {
    id: "cambios",
    title: "Cambios a esta política y vigencia",
    content: (
      <>
        <p>
          Podemos actualizar esta política para reflejar cambios legales, nuevas
          funcionalidades o integraciones. Publicaremos la versión vigente en esta página con
          su fecha de actualización y, cuando los cambios sean sustanciales, lo informaremos a
          los usuarios registrados por correo electrónico o mediante un aviso en la Plataforma
          antes de que entren en vigor.
        </p>
        <p>
          Esta política rige a partir del {LEGAL.lastUpdatedLabel}. Las bases de datos se
          conservarán mientras se mantengan las finalidades del tratamiento y las obligaciones
          legales asociadas.
        </p>
      </>
    ),
  },
  {
    id: "contacto",
    title: "Contacto",
    content: (
      <>
        <p>
          Para cualquier asunto relacionado con esta política o con el tratamiento de tus datos
          personales:
        </p>
        <dl className="legal-callout">
          <div>
            <dt>Responsable</dt>
            <dd>{LEGAL.legalName}{LEGAL.nit ? ` · NIT ${LEGAL.nit}` : ""}</dd>
          </div>
          <div>
            <dt>Domicilio</dt>
            <dd>{LEGAL.address}</dd>
          </div>
          <div>
            <dt>Correo electrónico</dt>
            <dd>
              <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>
            </dd>
          </div>
          <div>
            <dt>Sitio web</dt>
            <dd>
              <a href={LEGAL.siteUrl}>{LEGAL.siteUrl}</a>
            </dd>
          </div>
        </dl>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return <LegalArticle sections={sections} />;
}
