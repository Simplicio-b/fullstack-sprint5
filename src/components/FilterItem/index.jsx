import {
    Container,
    Label
} from "./styles"

function FilterItem({ label }) {
    return (
        <Container>
            <Label>{label}</Label>
            <img className="filters__img" src="assets/filter.svg" alt="filtro" />
        </Container>
    );
}

export default FilterItem
