import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const patients = await prisma.patient.findMany({
      orderBy: { id: "desc" },
    });
    return NextResponse.json(patients);
  } catch (error) {
    console.error("ERREUR GET /api/patients :", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const body = await request.json();

    // 1. Vérification minimaliste des champs obligatoires
    if (!body.nom || !body.prenom || !body.dateNaissance) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants" },
        { status: 400 }
      );
    }

    // 2. Création sécurisée du patient
    const patient = await prisma.patient.create({
      data: {
        nom: body.nom,
        prenom: body.prenom,
        // Conversion sécurisée : on vérifie que la date est valide
        dateNaissance: new Date(body.dateNaissance),
        sexe: body.sexe || "M", // Valeur par défaut si absent
        telephone: body.telephone || null,
        adresse: body.adresse || null,
        region: body.region || null,
      },
    });

    return NextResponse.json(patient, { status: 201 });
  } catch (error) {
    console.error("ERREUR POST /api/patients :", error);
    
    // Si l'erreur vient de Prisma (ex: type de données invalide)
    return NextResponse.json(
      { error: "Erreur lors de la création du patient" },
      { status: 500 }
    );
  }
}