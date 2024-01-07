/*
 * generate a sanity webhook nextjs api to listen for changes
 * for menu and historia
 * if type is pagines then revalidate all pages
 * if type is historia then revalida "/"
 * the webhooks is a post of sanity with a secret token
 */
import { revalidatePath } from "next/cache";
import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { NextRequest, NextResponse } from "next/server";

const SECRET = process.env.SANITY_REVALIDATE_SECRET;

export const dynamic = "force-dynamic"; // defaults to auto

export async function POST(req: NextRequest) {
  const signature = req.headers.get(SIGNATURE_HEADER_NAME);
  const body = await req.text(); // Llegeix el cos de la petició com a text.

  // Comprova si la signatura és vàlida.
  const isValid = await isValidSignature(body, signature ?? "", SECRET ?? "");

  if (!signature || !isValid) {
    console.log(`Invalid signature "${signature}"`);

    // Crea el cos de la resposta amb el missatge d'error.
    const errorMessage = JSON.stringify({ message: "Invalid signature" });

    // Crea una resposta amb estat 401 i el missatge d'error com a cos.
    return new NextResponse(errorMessage, {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const { _type: type, slug } = JSON.parse(body);

    console.log(`Revalidating "${type}" with slug "${slug}"`);
    switch (type) {
      case "pagines":
        revalidatePath("/", "layout");
        console.log(`Revalidated "${type}" with slug "/"`);
        return NextResponse.json({
          message: `Revalidated "${type}" with slug "/"`,
        });
      case "historia":
        revalidatePath("/", "page");
        return NextResponse.json({
          message: `Revalidated "${type}" with slug "/"`,
        });
    }
    console.log(`No managed type`);
    const errorMessage = JSON.stringify({ message: "No managed type" });
    return new NextResponse(errorMessage, {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    const errorMessage = JSON.stringify({
      message: "Error revalidating: " + err,
    });
    console.error(errorMessage);
    return new NextResponse(errorMessage, {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
