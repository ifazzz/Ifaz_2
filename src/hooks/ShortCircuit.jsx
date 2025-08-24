import "./Hooks.css";

const ShortCircuitExample = () => {
    return (
        <section className="container short-container">
            <h1>Welcome to the ShortCircuit Evaluation</h1>
            
            <p>You are logged in!</p>

            <div>
                <button>Toggle Login State</button>
                <button>Set User</button>
                <button>Clear</button>
            </div>
        </section>
    );
};

export default ShortCircuitExample;