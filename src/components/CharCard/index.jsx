import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { TbGenderAgender } from "react-icons/tb";
import { Li } from "./style";

function CharCard({ elem }) {
  return (
    <Li
      key={elem.id}
      color={
        elem.status === "Alive"
          ? "#39ff14"
          : elem.status === "Dead"
          ? "#FF0000"
          : "#00fff6"
      }
    >
      <h3>
        {elem.name.length > 15 ? `${elem.name.slice(0, 15)}...` : elem.name}
      </h3>
      <img src={elem.image} alt={elem.name} />
      <span>
        <p>
          {elem.species.length > 15
            ? `${elem.species.slice(0, 10)}...`
            : elem.species}
        </p>
        {elem.gender === "Male" ? (
          <BsGenderMale />
        ) : elem.gender === "Female" ? (
          <BsGenderFemale />
        ) : (
          <TbGenderAgender />
        )}
      </span>
    </Li>
  );
}
export default CharCard;
