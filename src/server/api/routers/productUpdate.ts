import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const productUpdateRouter = createTRPCRouter({
  updateName: publicProcedure
    .input(z.object({ productID: z.number(), newName: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.product.update({
        where: {
          id: input.productID,
        },
        data: {
          name: input.newName,
        },
      });
    }),

  updateDescription: publicProcedure
    .input(z.object({ productID: z.number(), newDescription: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.product.update({
        where: {
          id: input.productID,
        },
        data: {
          description: input.newDescription,
        },
      });
    }),

  updatePrice: publicProcedure
    .input(z.object({ productID: z.number(), newPrice: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.product.update({
        where: {
          id: input.productID,
        },
        data: {
          price: input.newPrice,
        },
      });
    }),

  updateCategory: publicProcedure
    .input(z.object({ productID: z.number(), newCategory: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.product.update({
        where: {
          id: input.productID,
        },
        data: {
          categoryName: input.newCategory,
        },
      });
    }),
});

/* 
model Product {
  id              Int      @id @default(autoincrement())
  name            String
  description     String?
  primaryImageId  Int      @unique
  imageUrl        String
  price           Float
  priority        Int      @unique @default(autoincrement())
  active          Boolean
  deleted         Boolean
  stock           Int
  categoryName    String
  categoryId      Int
  category        Category @relation(fields: [categoryId], references: [id])
  primaryImage    Image    @relation(fields: [primaryImageId], references: [id])
  orders          Order[]  @relation("Product-Orders")
  secondaryImages Image[]  @relation("secondaryImages")
}
*/
