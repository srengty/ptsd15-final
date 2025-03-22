import React from "react";
import quotations from "./data.json";
import { Table } from "react-bootstrap";
import Link from "next/link";
import { MdEdit, MdDelete } from "react-icons/md";
import Dialog from "./dialog";

export default function QuotationListPage() {
  return (
    <div>
      <h1>Quotation List</h1>
      <Table striped bordered hover>
        <thead>
            <tr>
                <th>ID</th><th>Date</th><th>Customer name</th><th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {quotations.data.map((q)=>(<tr key={q.id}>
                <td>{q.id}</td>
                <td>{q.date}</td>
                <td>{q.customer.name}</td>
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
