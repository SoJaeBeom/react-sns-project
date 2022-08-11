import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <Link to="/detail/1">Detail1로 이동</Link>;
      <Link to="/detail/2">Detail2로 이동</Link>;
    </>
  );
}
