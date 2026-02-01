# 🎯 SEO para tu Landing de Parcy Digital

## ¿Qué es esto?

Esta es una **landing page de presentación** de tu software Parcy Digital. Solo necesitas lo básico para que Google la encuentre e indexe.

**✅ Tu dominio ya está verificado en Google Search Console** (por DNS), así que solo falta enviar el sitemap.

---

## ✅ Lo que SÍ necesitas (y ya está implementado)

### 1. **Metadata básica** ✅
- Títulos y descripciones en cada página
- Para que Google sepa de qué trata cada página

### 2. **Sitemap.xml** ✅
- Un mapa de todas tus páginas
- Google lo usa para saber qué páginas rastrear
- Se genera automáticamente en: `https://parcydigital.com/sitemap.xml`

### 3. **Robots.txt** ✅
- Instrucciones para los bots de Google
- Les dice qué pueden rastrear
- Se genera automáticamente en: `https://parcydigital.com/robots.txt`

### 4. **Open Graph** ✅
- Para que cuando compartas en redes sociales se vea bonito
- Con imagen, título y descripción

### 5. **Schema básico** ✅
- Le dice a Google que eres una organización/empresa
- Ayuda a aparecer en búsquedas

---

## ❌ Lo que NO necesitas (y ya eliminé)

- ~~PWA/Manifest~~ - Solo para apps instalables, no para landing pages
- ~~Componentes complejos de Analytics~~ - Puedes agregar Google Analytics después si quieres
- ~~Configuración excesiva~~ - Simplificado a lo esencial

---

## 🚀 Pasos para Activar Google Search Console

### ✅ Ya verificaste tu dominio con DNS
Si ya agregaste el registro TXT en tu DNS y Google verificó tu dominio, **no necesitas hacer nada en el código**. La verificación por DNS es la mejor opción.

### Paso 1: Envía el Sitemap

1. En Google Search Console, ve a **"Sitemaps"** (menú lateral)
2. En el campo "Agregar un nuevo sitemap", ingresa la **URL completa**:
   ```
   https://parcydigital.com/sitemap.xml
   ```
3. Haz clic en **"Enviar"**

**⚠️ Importante:** Debes usar la URL completa, no solo `sitemap.xml`

---

## 📋 Archivos que se generan automáticamente

Cuando despliegues, estos archivos estarán disponibles:

- ✅ `https://parcydigital.com/sitemap.xml` - Mapa del sitio
- ✅ `https://parcydigital.com/robots.txt` - Instrucciones para bots

---

## 🎯 ¿Qué hace cada cosa?

| Archivo | ¿Para qué sirve? |
|---------|------------------|
| **sitemap.xml** | Le dice a Google todas las páginas que tienes |
| **robots.txt** | Le dice a Google qué puede rastrear |
| **Metadata** | Títulos y descripciones que aparecen en Google |
| **Open Graph** | Cómo se ve cuando compartes en redes sociales |
| **Schema** | Le dice a Google que eres una empresa |

---

## ⏱️ Tiempo estimado

- **Verificación**: 5 minutos
- **Primera indexación**: 2-7 días
- **Resultados en búsqueda**: 2-4 semanas

---

## 💡 Tips simples

1. **No te preocupes** si no ves resultados inmediatos - Google tarda tiempo
2. **Despliega primero** antes de verificar en Google Search Console
3. **El sitemap se genera solo** - no necesitas hacer nada más
4. **Una vez verificado**, Google rastreará tu sitio automáticamente

---

## ❓ Preguntas frecuentes

**¿Necesito agregar código de verificación en layout.tsx?**
No, si ya verificaste con registro TXT en el DNS. Esa es la mejor forma y ya está hecho.

**¿Necesito hacer algo más?**
Solo enviar el sitemap en Google Search Console usando la URL completa: `https://parcydigital.com/sitemap.xml`

**¿Por qué me dice "ruta no válida" al enviar el sitemap?**
Porque necesitas usar la URL completa (`https://parcydigital.com/sitemap.xml`), no solo `sitemap.xml`. Google necesita la URL completa para acceder al archivo.

**¿Cuándo veré resultados?**
En 2-4 semanas empezarás a ver tu sitio en búsquedas de Google.

**¿Necesito Google Analytics?**
No es necesario para SEO, pero puedes agregarlo después si quieres ver estadísticas.

**¿Qué es el registro TXT en DNS?**
Es la forma más segura de verificar tu dominio. Lo hiciste al agregar el código que Google te dio en la configuración de tu dominio (GoDaddy, Cloudflare, etc.).

**¿Por qué el sitemap no incluye la raíz (/) si redirige a /landing?**
Porque la raíz (`/`) solo redirige permanentemente (301) a `/landing`. El sitemap solo debe incluir URLs con contenido real. El redirect 301 ya le dice a Google que `/landing` es la URL canónica, así que no hay problema. Esto evita confusión y contenido duplicado.

---

**Eso es todo. Simple y directo.** 🎉
