'use client'
import React from 'react'
import { createQuotation } from './actions';
export default function CreateQuotationPage() {
  return (
    <div>
      <h1>CreateQuotationPage</h1>
      <form action={createQuotation}>
        <input type="date" name="date" />
        <input type="text" name="customerid" defaultValue="1" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
