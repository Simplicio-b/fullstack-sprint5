import { useContext } from "react"

// icons
import SearchIcon from '../../assets/search.svg';

// contexts
import FilterContext from "../../contexts/FilterContext";

// styles
import {
    Container,
    InputSearch
} from "./styles"

function Search() {

    const { setFilter } = useContext(FilterContext);

    return (
        <Container>
            <img className="header__icon" src={SearchIcon} alt="lupa" />

            <InputSearch type="search" placeholder="O que você está procurando?"
                onChange={(event) => setFilter(event.target.value)}
            />
        </Container>
    )
}

export default Search
