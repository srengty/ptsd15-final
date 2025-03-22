import React from "react";
// import quotations from "./data.json";
import { Button, Table } from "react-bootstrap";
import Link from "next/link";
import { MdEdit, MdDelete } from "react-icons/md";
import Dialog from "./dialog";
import prisma from "@/lib/prisma";

export default async function QuotationListPage() {
  const quotations = await prisma.quotation.findMany({include:{customer:true}});
  return (
    <div>
      <h1>Quotation List</h1>
      <Link className="btn btn-primary" href={'/quotations/create'}>Create new</Link> 
      <Table striped bordered hover>
        <thead>
            <tr>
                <th>ID</th><th>Date</th><th>Customer name</th><th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {quotations.map((q)=>(<tr key={q.id}>
                <td>{q.id}</td>
                <td>{q.date.toDateString()}</td>
                <td>{q.customer?.customerName}</td>
                <td>{q.status}</td>
                <td>
                    <Link href={`/quotations/${q.id}/edit`}><MdEdit /></Link>
                    <Link href={`/quotations/${q.id}/delete`} className="ms-2"><MdDelete /></Link>
                </td>
            </tr>))}
        </tbody>
      </Table>
      <Dialog/>
    </div>
  );
}
