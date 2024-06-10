import './myOrg.css'

const MyOrg = (props) => {
    return (
        <section className="org__section">
            <h3>Mi organización</h3>
            <div className="container">
                <img src="/img/add.png" alt="add_org" onClick={props.onClickFunction} />
            </div>
        </section>
    )
}

export default MyOrg