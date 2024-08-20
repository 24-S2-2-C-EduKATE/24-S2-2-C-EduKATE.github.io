import { FaLink } from "react-icons/fa6";

// doesn't work as expected
export function Link({
    link,
    children
  }) {
    return (
        <h3> <FaLink/> children </h3>
    )
  }


