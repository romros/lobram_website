import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { remark } from "remark";
import { Parent, Node } from "unist";
import html from "remark-html";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Funció per determinar si un node és "simple" (text pla) o no
function isSimpleTextNode(node: Parent | Node): node is Node {
  // Utilitza la guardia de tipus per verificar si el node és un Node simple
  return node.type === "text" && !("children" in node);
}
// Funció per determinar si un string és Markdown
function isMarkdown(text: string): boolean {
  const tree = remark().parse(text);

  // Comprova si algun dels nodes no és un text pla
  for (let node of tree.children) {
    if (!isSimpleTextNode(node)) {
      return true; // Si troba un node que no és text pla, probablement és Markdown
    }
  }

  return false; // Si tots els nodes són text pla, probablement no és Markdown
}

export async function markdown2html(
  text: string,
  props: {
    p_classname?: string;
    ul_classname?: string;
  } = {}
): Promise<string> {
  if (!isMarkdown(text)) {
    return text;
  } else {
    const processedContent = await remark().use(html).process(text);
    let contentHtml = processedContent.toString();

    if (props.p_classname) {
      contentHtml = contentHtml.replace(
        /<p>/g,
        `<p class="${props.p_classname}">`
      );
    }

    // Utilitza el valor de `ul_classname` si s'ha proporcionat, si no, utilitza un valor predeterminat
    const ulClass = props.ul_classname || "list-disc list-inside indent-2";
    contentHtml = contentHtml.replace(/<ul>/g, `<ul class="${ulClass}">`);

    return contentHtml;
  }
}
