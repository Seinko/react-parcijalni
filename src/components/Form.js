import pt from "prop-types";

function Form({ onInputChange, fetchData }) {
    return (
        <form onSubmit={fetchData}>
            <label htmlFor="user">GitHub username:</label>
            <input onChange={onInputChange} type="text" placeholder="e.g. facebook" />
            <button>GO!</button>
        </form>
    );
}

Form.propTypes = {
    fetchData: pt.func,
    onInputChange: pt.func,
};

export default Form;
