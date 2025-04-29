import Link from 'next/link'; 

export default function CustomersList() {
  return (
    <>
      <Link href="/add">
        Add New Customer
      </Link>
      
      <p>Jane Doe</p>
      <p>Plain Joe</p>
      <p>Train Blow</p>
      <p>Ash Jhoel</p>
    </>
  );
}