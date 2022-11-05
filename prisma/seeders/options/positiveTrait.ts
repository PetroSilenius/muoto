import { POSITIVE_TRAIT_UUID } from "../questions";
import { PrismaClient } from "@prisma/client";

export default async function positiveTrait(prisma: PrismaClient) {
    await prisma.options.upsert({
        where: { id: '8fa894a1-c458-46b7-bfa6-1314ad6c6b99' },
        update: {},
        create: {
            id: '8fa894a1-c458-46b7-bfa6-1314ad6c6b99',
            question_id: POSITIVE_TRAIT_UUID,
            content: 'Chest size',
        },
    });

    await prisma.options.upsert({
        where: { id: '71d685fb-a899-411d-9839-800c67cae857' },
        update: {},
        create: {
            id: '71d685fb-a899-411d-9839-800c67cae857',
            question_id: POSITIVE_TRAIT_UUID,
            content: 'Hair appearance',
        },
    });

    await prisma.options.upsert({
        where: { id: '974b7d48-12b7-4203-a8ca-1e892e1f40f9' },
        update: {},
        create: {
            id: '974b7d48-12b7-4203-a8ca-1e892e1f40f9',
            question_id: POSITIVE_TRAIT_UUID,
            content: 'But size',
        },
    });

    await prisma.options.upsert({
        where: { id: 'a9ba7588-3e77-4f29-84ae-61a951c612cd' },
        update: {},
        create: {
            id: 'a9ba7588-3e77-4f29-84ae-61a951c612cd',
            question_id: POSITIVE_TRAIT_UUID,
            content: 'Arm size',
        },
    });

    await prisma.options.upsert({
        where: { id: 'd8c9ac52-e0a5-4db6-bf8f-5fbb55fba4b7' },
        update: {},
        create: {
            id: 'd8c9ac52-e0a5-4db6-bf8f-5fbb55fba4b7',
            question_id: POSITIVE_TRAIT_UUID,
            content: 'Face structure',
        },
    });

    await prisma.options.upsert({
        where: { id: 'ca872ded-431a-4f6c-84ec-fd16eaec57e3' },
        update: {},
        create: {
            id: 'ca872ded-431a-4f6c-84ec-fd16eaec57e3',
            question_id: POSITIVE_TRAIT_UUID,
            content: 'Face structure',
        },
    });

    await prisma.options.upsert({
        where: { id: '77e82d96-07a4-4319-90ac-d41db09c3349' },
        update: {},
        create: {
            id: '77e82d96-07a4-4319-90ac-d41db09c3349',
            question_id: POSITIVE_TRAIT_UUID,
            content: 'Physique',
        },
    });
}