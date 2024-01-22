import { PrismaClient } from '@prisma/client';
// import * as data from '../src/data/store_data.json';

const prisma = new PrismaClient();

// async function seedData() {
//   data?.['DATA']?.map(async (store) => {
//     const storeData = {
//       phone: store?.tel_no,
//       address: store?.rdn_code_nm,
//       lat: store?.x_cnts,
//       lng: store?.y_dnts,
//       name: store?.upso_nm,
//       category: store?.bizcnd_code_nm,
//       storeType: store?.cob_code_nm,
//       foodCertificationName: store?.crtfc_gbn_nm,
//     };
//     const res = await prisma.store.create({
//       data: storeData,
//     });
//   });
// }

async function main() {
  // await seedData();
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect;
  });
