import Link from "next/link";
import LegalArticle, { type LegalSection } from "@/components/sections/LegalArticle";
import { LEGAL, META_LINKS } from "@/data/legal";

/**
 * Instrucciones de eliminación de datos de usuario.
 * Esta URL se registra en Meta for Developers (Configuración de la app →
 * Básica → «URL de instrucciones para la eliminación de datos»). Meta exige
 * que sea pública, sin login, y que explique paso a paso cómo solicitar el borrado.
 */
const sections: LegalSection[] = [
  {
    id: "resumen",
    title: "A quién aplica esta página",
    content: (
      <>
        <p>
          En Parcy Digital puedes solicitar en cualquier momento la eliminación de los datos
          personales que tratamos sobre ti. Estas instrucciones aplican a:
        </p>
        <ul>
          <li>
            <strong>Usuarios de la Plataforma:</strong> administradores, asesores y demás
            miembros de un equipo con cuenta en{" "}
            <a href={LEGAL.appUrl}>app.parcydigital.com</a>.
          </li>
          <li>
            <strong>Personas que nos contactaron</strong> a través del sitio web (por ejemplo,
            al solicitar una demo).
          </li>
          <li>
            <strong>Contactos de nuestros clientes:</strong> interesados o compradores cuyos
            datos fueron registrados en Parcy por una empresa que usa la Plataforma.
          </li>
          <li>
            <strong>Personas que se comunicaron por WhatsApp</strong> con una empresa que usa
            Parcy a través de la integración con la Plataforma de WhatsApp Business de Meta.
          </li>
        </ul>
        <p className="legal-callout">
          <strong>Resumen rápido:</strong> escribe a{" "}
          <a href={`mailto:${LEGAL.email}?subject=Solicitud%20de%20eliminaci%C3%B3n%20de%20datos`}>
            {LEGAL.email}
          </a>{" "}
          con el asunto «Solicitud de eliminación de datos», indica quién eres y qué datos
          quieres eliminar. Confirmamos la recepción, verificamos tu identidad y completamos la
          eliminación en un máximo de 30 días.
        </p>
      </>
    ),
  },
  {
    id: "desde-la-plataforma",
    title: "Opción 1: desde la Plataforma",
    content: (
      <>
        <p>
          Si tienes una cuenta activa, buena parte de la información puede gestionarse
          directamente en Parcy:
        </p>
        <ol>
          <li>
            Inicia sesión en <a href={LEGAL.appUrl}>app.parcydigital.com</a>.
          </li>
          <li>
            Si eres <strong>administrador</strong>, puedes eliminar los usuarios de tu equipo y
            los registros de contactos o compradores desde las secciones correspondientes de la
            Plataforma. Los datos eliminados dejan de estar disponibles para tu equipo de
            inmediato.
          </li>
          <li>
            Para eliminar <strong>la cuenta completa de tu empresa</strong> (proyectos, lotes,
            usuarios, contactos e integraciones), el administrador debe solicitarlo por correo
            siguiendo la Opción 2. Antes de hacerlo, te recomendamos exportar la información que
            necesites conservar.
          </li>
        </ol>
        <p>
          Si no eres administrador, pide a quien administra la cuenta de tu empresa que elimine
          tu usuario, o escríbenos directamente siguiendo la Opción 2.
        </p>
      </>
    ),
  },
  {
    id: "por-correo",
    title: "Opción 2: por correo electrónico",
    content: (
      <>
        <ol>
          <li>
            Envía un correo a{" "}
            <a href={`mailto:${LEGAL.email}?subject=Solicitud%20de%20eliminaci%C3%B3n%20de%20datos`}>
              {LEGAL.email}
            </a>{" "}
            con el asunto <strong>«Solicitud de eliminación de datos»</strong>.
          </li>
          <li>
            Incluye en el mensaje:
            <ul>
              <li>Tu nombre completo.</li>
              <li>
                El correo electrónico o número de teléfono con el que te registraste o con el
                que interactuaste con Parcy o con una empresa que usa Parcy.
              </li>
              <li>
                Si aplica, el nombre de la empresa o proyecto con el que estuviste en contacto.
              </li>
              <li>
                Qué datos quieres eliminar: toda tu información o solo una parte (por ejemplo,
                tu cuenta de usuario, tus conversaciones de WhatsApp o tus datos de contacto).
              </li>
            </ul>
          </li>
          <li>
            Te enviaremos una confirmación de recepción con un número de radicado y, si es
            necesario, te pediremos verificar tu identidad (por ejemplo, respondiendo desde el
            correo registrado) para proteger tus datos frente a solicitudes de terceros.
          </li>
          <li>
            Ejecutaremos la eliminación y te notificaremos por correo cuando esté completa.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: "contactos-de-clientes",
    title: "Si tus datos los registró una empresa que usa Parcy",
    content: (
      <>
        <p>
          Cuando una urbanizadora o constructora registra tus datos en Parcy (como interesado o
          comprador de un lote) o se comunica contigo por WhatsApp a través de nuestra
          integración, esa empresa es la <strong>responsable del tratamiento</strong> y Parcy
          actúa como encargado por cuenta de ella.
        </p>
        <p>Tienes dos caminos, y puedes usar ambos:</p>
        <ul>
          <li>
            <strong>Dirigirte a la empresa</strong> con la que te relacionaste, que puede
            eliminar tu información directamente desde la Plataforma.
          </li>
          <li>
            <strong>Escribirnos a nosotros</strong> siguiendo la Opción 2. Trasladaremos tu
            solicitud al responsable, le informaremos sus obligaciones y colaboraremos para que
            se atienda dentro de los plazos de ley. Si la empresa ya no es cliente de Parcy,
            eliminaremos nosotros los datos que aún conservemos.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "datos-de-meta",
    title: "Datos obtenidos a través de Meta y WhatsApp",
    content: (
      <>
        <p>
          Si eres un cliente de Parcy que conectó su cuenta de WhatsApp Business, puedes
          desconectar la integración y pedir la eliminación de los datos asociados:
        </p>
        <ol>
          <li>
            Ingresa a la{" "}
            <a href={META_LINKS.businessSettings} target="_blank" rel="noopener noreferrer">
              Configuración del negocio
            </a>{" "}
            de tu portafolio empresarial de Meta.
          </li>
          <li>
            Ve a <strong>Integraciones → Apps conectadas</strong> (o a la sección equivalente
            de tu cuenta de WhatsApp Business), ubica <strong>Parcy Digital</strong> y elimina
            el acceso. Con esto, Meta revoca los permisos y los tokens que usábamos para operar
            la integración.
          </li>
          <li>
            Escríbenos siguiendo la Opción 2 indicando que quieres eliminar los datos de la
            integración de WhatsApp. También puedes pedirnos que desconectemos la integración
            por ti.
          </li>
        </ol>
        <p>
          Al recibir la solicitud o detectar la desconexión, revocamos de inmediato los tokens
          que aún conservemos y eliminamos en un máximo de 30 días los identificadores de la
          cuenta (portafolio, WABA y número de teléfono), las plantillas sincronizadas y las
          conversaciones, contactos y archivos recibidos a través de la integración.
        </p>
        <p>
          Si eres una persona que escribió por WhatsApp a una empresa que usa Parcy y deseas
          eliminar tus mensajes y tu número, sigue la Opción 2 o la sección anterior. Ten en
          cuenta que Meta conserva sus propios registros según su{" "}
          <a href={META_LINKS.whatsappPrivacy} target="_blank" rel="noopener noreferrer">
            Política de privacidad de WhatsApp
          </a>
          , sobre los cuales Parcy no tiene control.
        </p>
      </>
    ),
  },
  {
    id: "plazos",
    title: "Plazos de atención",
    content: (
      <ul>
        <li>
          <strong>Confirmación de recepción:</strong> dentro de los dos (2) días hábiles
          siguientes al recibo de tu correo.
        </li>
        <li>
          <strong>Respuesta a la solicitud:</strong> máximo quince (15) días hábiles, conforme
          al artículo 15 de la Ley 1581 de 2012. Si necesitamos más tiempo, te informaremos los
          motivos y la nueva fecha, que no superará los ocho (8) días hábiles adicionales.
        </li>
        <li>
          <strong>Eliminación efectiva:</strong> máximo treinta (30) días calendario desde la
          verificación de tu identidad. Las copias de seguridad se sobrescriben en sus ciclos
          regulares de rotación, en un plazo adicional no superior a noventa (90) días.
        </li>
      </ul>
    ),
  },
  {
    id: "que-se-elimina",
    title: "Qué se elimina y qué conservamos",
    content: (
      <>
        <h3>Eliminamos</h3>
        <ul>
          <li>Tu cuenta de usuario, perfil y credenciales.</li>
          <li>Tus datos de contacto y las solicitudes enviadas desde el sitio web.</li>
          <li>Los registros de contacto o comprador asociados a ti, cuando lo solicita el responsable o se cumplen las condiciones legales.</li>
          <li>Las conversaciones, números y archivos recibidos a través de la integración de WhatsApp.</li>
          <li>Los identificadores y tokens de la integración con Meta.</li>
        </ul>
        <h3>Podemos conservar, de forma restringida</h3>
        <ul>
          <li>
            La información de facturación y los soportes contables, por el tiempo que exigen
            las normas contables, comerciales y tributarias colombianas.
          </li>
          <li>
            Los registros de auditoría de la Plataforma necesarios para la trazabilidad de las
            operaciones de un cliente, en forma anonimizada o seudonimizada cuando sea posible.
          </li>
          <li>
            La información necesaria para atender una obligación legal, un requerimiento de
            autoridad o para ejercer o defender derechos en un proceso en curso.
          </li>
          <li>
            Un registro mínimo de tu solicitud de eliminación, como prueba de su atención.
          </li>
        </ul>
        <p>
          Los datos que conservamos por estas razones no se usan para ninguna otra finalidad y
          se eliminan cuando desaparece la causa que justifica su conservación.
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
          Si tienes dudas sobre este procedimiento o sobre el estado de tu solicitud, puedes
          escribirnos en cualquier momento. Para conocer en detalle cómo tratamos tus datos,
          consulta nuestra <Link href="/privacy">Política de Privacidad</Link>.
        </p>
        <dl className="legal-callout">
          <div>
            <dt>{LEGAL.legalName}</dt>
            <dd>{LEGAL.address}</dd>
          </div>
          <div>
            <dt>Correo para solicitudes</dt>
            <dd>
              <a href={`mailto:${LEGAL.email}?subject=Solicitud%20de%20eliminaci%C3%B3n%20de%20datos`}>
                {LEGAL.email}
              </a>
            </dd>
          </div>
        </dl>
      </>
    ),
  },
];

export default function DataDeletionContent() {
  return <LegalArticle sections={sections} />;
}
