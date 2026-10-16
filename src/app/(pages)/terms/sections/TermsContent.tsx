import Link from "next/link";
import LegalArticle, { type LegalSection } from "@/components/sections/LegalArticle";
import { LEGAL, META_LINKS } from "@/data/legal";

/**
 * Términos y condiciones de uso del sitio web y de la Plataforma Parcy Digital.
 * Incluye las obligaciones del Cliente al usar la integración de WhatsApp
 * Business Platform (exigidas por las políticas de Meta a los Tech Providers).
 */
const sections: LegalSection[] = [
  {
    id: "aceptacion",
    title: "Aceptación y alcance",
    content: (
      <>
        <p>
          Estos Términos y condiciones (los «Términos») regulan el acceso y uso del sitio web{" "}
          <a href={LEGAL.siteUrl}>parcydigital.com</a> y de la plataforma de gestión y venta de
          proyectos inmobiliarios disponible en <a href={LEGAL.appUrl}>app.parcydigital.com</a>{" "}
          (en conjunto, la «Plataforma»), operados por <strong>{LEGAL.legalName}</strong>
          {LEGAL.nit ? `, NIT ${LEGAL.nit},` : ","} con domicilio en {LEGAL.address} («Parcy»).
        </p>
        <p>
          Al navegar el sitio, crear una cuenta, aceptar la invitación de un administrador o
          usar la Plataforma, declaras que has leído y aceptas estos Términos y nuestra{" "}
          <Link href="/privacy">Política de Privacidad</Link>, que forma parte integral de
          ellos. Si actúas en nombre de una empresa, declaras tener facultades para obligarla.
          Si no estás de acuerdo, no debes usar la Plataforma.
        </p>
        <p>
          Los acuerdos comerciales particulares que Parcy suscriba con un Cliente (propuestas,
          órdenes de servicio o contratos) prevalecen sobre estos Términos en lo que les sea
          contrario.
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
          <dt>Cliente</dt>
          <dd>
            Persona natural o jurídica que contrata un plan de la Plataforma para gestionar sus
            proyectos inmobiliarios.
          </dd>
        </div>
        <div>
          <dt>Usuario</dt>
          <dd>
            Cualquier persona que accede a la Plataforma con una cuenta, incluidos los miembros
            del equipo del Cliente (administradores, asesores y otros roles).
          </dd>
        </div>
        <div>
          <dt>Contenido del Cliente</dt>
          <dd>
            Toda la información que el Cliente o sus Usuarios cargan en la Plataforma: planos,
            unidades (lotes, apartamentos, casas u otros), precios, datos de contactos y compradores, documentos, mensajes y demás
            registros.
          </dd>
        </div>
        <div>
          <dt>Integraciones</dt>
          <dd>
            Conexiones con servicios de terceros que el Cliente puede habilitar desde la
            Plataforma, como la Plataforma de WhatsApp Business de Meta.
          </dd>
        </div>
        <div>
          <dt>Plan</dt>
          <dd>
            Modalidad de suscripción contratada, con sus límites de proyectos, usuarios y
            funcionalidades, según se describe en la página de{" "}
            <Link href="/pricing">Precios y planes</Link>.
          </dd>
        </div>
      </dl>
    ),
  },
  {
    id: "servicio",
    title: "Descripción del servicio",
    content: (
      <>
        <p>
          Parcy es una plataforma de software como servicio (SaaS) que permite a urbanizadores
          y constructoras gestionar las unidades de sus proyectos (lotes, apartamentos, casas u
          otros), visualizarlas sobre el plano, controlar su
          disponibilidad en tiempo real, gestionar reservas y solicitudes de venta con flujos de
          aprobación, administrar equipos con roles y permisos, y generar informes y
          trazabilidad de cada operación.
        </p>
        <p>
          Parcy es una herramienta de gestión. <strong>No</strong> somos parte de las
          negociaciones ni de los contratos que el Cliente celebre con sus compradores, no
          actuamos como intermediarios inmobiliarios y no prestamos asesoría legal, financiera,
          urbanística ni tributaria. La información registrada en la Plataforma es
          responsabilidad exclusiva del Cliente.
        </p>
        <p>
          Podemos mejorar, modificar o descontinuar funcionalidades de la Plataforma. Si un
          cambio reduce de forma sustancial una funcionalidad incluida en el Plan contratado, lo
          notificaremos con antelación razonable.
        </p>
      </>
    ),
  },
  {
    id: "cuentas",
    title: "Registro, cuentas y usuarios",
    content: (
      <ul>
        <li>
          Para usar la Plataforma debes ser mayor de edad y proporcionar información veraz,
          completa y actualizada.
        </li>
        <li>
          Las credenciales de acceso son personales e intransferibles. Eres responsable de
          mantener su confidencialidad y de toda actividad realizada desde tu cuenta. Notifica
          de inmediato a <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> cualquier acceso
          no autorizado.
        </li>
        <li>
          El Cliente, a través de sus administradores, decide qué Usuarios invita, qué rol les
          asigna y a qué información acceden. El Cliente responde por los actos de sus Usuarios
          en la Plataforma y por retirar el acceso a quienes dejen de hacer parte de su equipo.
        </li>
        <li>
          Parcy puede exigir verificación de identidad o de la empresa antes de activar una
          cuenta o una Integración.
        </li>
      </ul>
    ),
  },
  {
    id: "planes-pagos",
    title: "Planes, pagos y facturación",
    content: (
      <>
        <ul>
          <li>
            Los precios, límites y funcionalidades de cada Plan se publican en la página de{" "}
            <Link href="/pricing">Precios y planes</Link> o se acuerdan en una propuesta
            comercial. Los valores se expresan en pesos colombianos y no incluyen impuestos,
            salvo indicación en contrario.
          </li>
          <li>
            Las suscripciones se facturan por anticipado según la periodicidad contratada
            (mensual o anual) y se renuevan automáticamente por periodos iguales, salvo que
            alguna de las partes comunique su decisión de no renovar antes del vencimiento.
          </li>
          <li>
            Podemos modificar los precios con un aviso de al menos treinta (30) días; el nuevo
            precio aplica a partir de la siguiente renovación.
          </li>
          <li>
            Las promociones y descuentos tienen las condiciones y vigencia que se indiquen al
            publicarlas y no son acumulables salvo que se diga expresamente.
          </li>
          <li>
            El retraso en el pago faculta a Parcy a suspender el acceso a la Plataforma previa
            notificación, hasta que la obligación se regularice. Los pagos realizados no son
            reembolsables, salvo lo dispuesto por la ley o lo pactado por escrito.
          </li>
          <li>
            La implementación y el soporte incluidos en cada Plan se prestan en los horarios y
            canales que Parcy informe.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "uso-aceptable",
    title: "Uso aceptable",
    content: (
      <>
        <p>Al usar la Plataforma te comprometes a no:</p>
        <ul>
          <li>Usarla con fines ilícitos, fraudulentos o contrarios a estos Términos.</li>
          <li>
            Cargar información de terceros sin contar con la autorización legal necesaria o
            registrar datos falsos, engañosos o que infrinjan derechos de otros.
          </li>
          <li>
            Intentar acceder sin autorización a cuentas, sistemas o datos de otros Clientes, ni
            interferir con la seguridad o el funcionamiento del servicio.
          </li>
          <li>
            Realizar ingeniería inversa, copiar, modificar, revender, sublicenciar o crear obras
            derivadas de la Plataforma, salvo autorización escrita de Parcy.
          </li>
          <li>
            Usar robots, scrapers o medios automatizados para extraer datos de la Plataforma
            fuera de las funcionalidades de exportación previstas.
          </li>
          <li>
            Enviar, a través de las Integraciones, mensajes no solicitados (spam), engañosos,
            abusivos o que incumplan las políticas del proveedor de la Integración.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "contenido-datos",
    title: "Contenido del Cliente y protección de datos",
    content: (
      <>
        <ul>
          <li>
            El Contenido del Cliente es y seguirá siendo propiedad del Cliente. El Cliente
            otorga a Parcy una licencia limitada, no exclusiva y mundial para alojar, procesar,
            transmitir y mostrar dicho contenido con el único fin de prestar el servicio.
          </li>
          <li>
            El Cliente garantiza que cuenta con las autorizaciones exigidas por la Ley 1581 de
            2012 y demás normas aplicables para registrar y tratar los datos personales de sus
            interesados, compradores y contactos, y que dispone de su propia política de
            tratamiento de datos.
          </li>
          <li>
            Respecto de esos datos, Parcy actúa como encargado del tratamiento: los procesa
            únicamente por cuenta y bajo las instrucciones del Cliente, aplica medidas de
            seguridad razonables, no los usa para fines propios y colabora con el Cliente en la
            atención de consultas y reclamos de los titulares, conforme a nuestra{" "}
            <Link href="/privacy">Política de Privacidad</Link>.
          </li>
          <li>
            El Cliente puede exportar su información durante la vigencia del servicio y hasta
            treinta (30) días después de su terminación. Vencido ese plazo, Parcy podrá eliminar
            el Contenido del Cliente conforme a la página de{" "}
            <Link href="/data-deletion">Eliminación de datos</Link>.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "integraciones-whatsapp",
    title: "Integraciones y WhatsApp Business Platform",
    content: (
      <>
        <p>
          Parcy actúa como proveedor tecnológico (Tech Provider) de la Plataforma de WhatsApp
          Business de Meta Platforms, Inc. Al conectar su cuenta de WhatsApp Business a Parcy,
          el Cliente acepta además las siguientes condiciones:
        </p>
        <ul>
          <li>
            El Cliente debe cumplir las{" "}
            <a href={META_LINKS.whatsappBusinessTerms} target="_blank" rel="noopener noreferrer">
              Condiciones del servicio de WhatsApp Business
            </a>
            , la{" "}
            <a href={META_LINKS.whatsappMessagingPolicy} target="_blank" rel="noopener noreferrer">
              Política de mensajes de WhatsApp Business
            </a>{" "}
            y las{" "}
            <a href={META_LINKS.platformTerms} target="_blank" rel="noopener noreferrer">
              Condiciones de la plataforma de Meta
            </a>
            , que podrán ser actualizadas por Meta en cualquier momento.
          </li>
          <li>
            El Cliente es responsable de obtener y conservar prueba del consentimiento
            (opt-in) de cada contacto antes de enviarle mensajes, de usar únicamente plantillas
            aprobadas por Meta para iniciar conversaciones y de atender las solicitudes de sus
            contactos de dejar de recibir mensajes.
          </li>
          <li>
            El Cliente es titular de su cuenta de WhatsApp Business, de su número de teléfono y
            de su relación con Meta. Parcy no responde por restricciones, limitaciones de
            calidad, suspensiones o cobros que Meta aplique a la cuenta del Cliente.
          </li>
          <li>
            Los costos por conversación o mensaje que Meta establezca son independientes del
            Plan de Parcy, salvo que se pacte lo contrario por escrito.
          </li>
          <li>
            Parcy puede desactivar la Integración de un Cliente de forma inmediata si detecta
            o recibe de Meta reportes de uso contrario a sus políticas, sin perjuicio de las
            demás acciones previstas en estos Términos.
          </li>
          <li>
            El Cliente puede desconectar la Integración en cualquier momento. Los datos
            obtenidos a través de Meta se tratan y eliminan según nuestra{" "}
            <Link href="/privacy#meta-whatsapp">Política de Privacidad</Link>.
          </li>
        </ul>
        <p>
          Las demás Integraciones que Parcy ofrezca se rigen por las condiciones del tercero
          correspondiente. Parcy no controla ni garantiza la disponibilidad de los servicios de
          terceros.
        </p>
      </>
    ),
  },
  {
    id: "propiedad-intelectual",
    title: "Propiedad intelectual",
    content: (
      <>
        <p>
          La Plataforma, su código, diseño, marcas, logotipos, textos, interfaces y demás
          elementos son propiedad de Parcy o de sus licenciantes y están protegidos por las
          normas de propiedad intelectual. Estos Términos no transfieren ningún derecho de
          propiedad; solo otorgan al Cliente una licencia limitada, revocable, no exclusiva e
          intransferible para usar la Plataforma durante la vigencia de su Plan y conforme a
          estos Términos.
        </p>
        <p>
          Las sugerencias o comentarios que nos envíes sobre la Plataforma podrán ser usados
          por Parcy sin obligación de compensación ni confidencialidad.
        </p>
      </>
    ),
  },
  {
    id: "disponibilidad-soporte",
    title: "Disponibilidad, soporte y cambios",
    content: (
      <>
        <p>
          Hacemos esfuerzos razonables para que la Plataforma esté disponible de forma
          continua. No obstante, puede presentar interrupciones por mantenimiento programado
          (que procuraremos anunciar con antelación), actualizaciones, fallas de proveedores de
          infraestructura o de terceros, o causas de fuerza mayor.
        </p>
        <p>
          El soporte técnico se presta a través de los canales y en los horarios que Parcy
          informe al Cliente. Los niveles de servicio específicos, cuando existan, se pactan en
          el acuerdo comercial correspondiente.
        </p>
      </>
    ),
  },
  {
    id: "confidencialidad",
    title: "Confidencialidad",
    content: (
      <p>
        Cada parte se obliga a mantener la confidencialidad de la información no pública de
        la otra a la que acceda con ocasión del servicio (incluidos el Contenido del Cliente,
        las condiciones comerciales y la información técnica de la Plataforma) y a usarla solo
        para los fines de estos Términos. Esta obligación se mantiene durante la relación y por
        tres (3) años después de su terminación, salvo la información que deba revelarse por
        ley o por orden de autoridad competente.
      </p>
    ),
  },
  {
    id: "garantias-responsabilidad",
    title: "Garantías y limitación de responsabilidad",
    content: (
      <>
        <p>
          La Plataforma se presta «tal como está» y «según disponibilidad». Parcy no garantiza
          que el servicio sea ininterrumpido o libre de errores, ni que se ajuste a necesidades
          particulares no incluidas en el Plan contratado.
        </p>
        <p>
          En la máxima medida permitida por la ley, Parcy no será responsable por daños
          indirectos, lucro cesante, pérdida de negocios o de datos derivados del uso o la
          imposibilidad de uso de la Plataforma, de decisiones comerciales tomadas con base en
          la información registrada por el Cliente, ni de actos de terceros, incluidos los
          proveedores de Integraciones. La responsabilidad total de Parcy frente al Cliente por
          cualquier causa no excederá el valor efectivamente pagado por el Cliente durante los
          doce (12) meses anteriores al hecho que la origine.
        </p>
        <p>
          Nada en estos Términos limita la responsabilidad que no pueda limitarse conforme a la
          ley colombiana, en particular los derechos de los consumidores cuando resulten
          aplicables.
        </p>
      </>
    ),
  },
  {
    id: "suspension-terminacion",
    title: "Suspensión y terminación",
    content: (
      <>
        <ul>
          <li>
            El Cliente puede terminar su suscripción en cualquier momento comunicándolo a{" "}
            <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>. La terminación surte efectos al
            final del periodo facturado en curso.
          </li>
          <li>
            Parcy puede suspender o terminar el acceso, previa notificación cuando sea posible,
            en caso de incumplimiento de estos Términos, mora en el pago, uso que ponga en
            riesgo la seguridad o integridad del servicio, o requerimiento de autoridad
            competente.
          </li>
          <li>
            A la terminación cesa el derecho de uso de la Plataforma. El Cliente dispondrá de
            treinta (30) días para exportar su información; después, Parcy eliminará o
            anonimizará el Contenido del Cliente, salvo lo que deba conservar por ley.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "modificaciones",
    title: "Modificaciones de los Términos",
    content: (
      <p>
        Podemos modificar estos Términos para reflejar cambios legales, nuevas funcionalidades
        o condiciones del servicio. Publicaremos la versión vigente en esta página con su fecha
        de actualización y, cuando los cambios sean sustanciales, lo notificaremos a los
        Clientes por correo electrónico o mediante un aviso en la Plataforma con al menos
        quince (15) días de antelación. El uso continuado de la Plataforma tras la entrada en
        vigor de los cambios implica su aceptación.
      </p>
    ),
  },
  {
    id: "ley-aplicable",
    title: "Ley aplicable y resolución de conflictos",
    content: (
      <p>
        Estos Términos se rigen por las leyes de la República de Colombia. Cualquier diferencia
        derivada de ellos se intentará resolver primero mediante arreglo directo entre las
        partes durante un plazo de treinta (30) días. De no lograrse acuerdo, las partes podrán
        acudir a los jueces competentes de Colombia, sin perjuicio de los mecanismos de
        protección al consumidor que resulten aplicables.
      </p>
    ),
  },
  {
    id: "contacto",
    title: "Contacto",
    content: (
      <>
        <p>Para preguntas sobre estos Términos puedes escribirnos a:</p>
        <dl className="legal-callout">
          <div>
            <dt>{LEGAL.legalName}</dt>
            <dd>{LEGAL.address}{LEGAL.nit ? ` · NIT ${LEGAL.nit}` : ""}</dd>
          </div>
          <div>
            <dt>Correo electrónico</dt>
            <dd>
              <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>
            </dd>
          </div>
        </dl>
      </>
    ),
  },
];

export default function TermsContent() {
  return <LegalArticle sections={sections} />;
}
