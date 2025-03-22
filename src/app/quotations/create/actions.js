'use server'
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createQuotation(formData){
    await prisma.quotation.create({
        data: {
            date: new Date(formData.get('date')),
            customerid: parseInt(formData.get('customerid'))
        }
    });
    redirect('/quotations');
}