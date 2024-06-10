import './team.css'
import CardPartner, { } from "../cardPartners/cardPartners";
import hexToRgba from 'hex-to-rgba';

function Team(props) {

    // destructuring syntax
    const { id, secondaryColor, title } = props.teamData;
    const { partners, onDeletePartner, onUpdateColor, handleLikeChange } = props

    const titleStyle = { borderBottom: `4px solid ${secondaryColor}` }
    const bgColor = { backgroundColor: hexToRgba(secondaryColor, 0.6) }

    return (
        <>
            {partners.length > 0 &&
                <section className="team" style={bgColor}>
                    <input
                        type="color"
                        className="input__color"
                        value={secondaryColor}
                        onChange={(e) => onUpdateColor(e.target.value, id)}
                    />
                    <h3 style={titleStyle}>{title}</h3>
                    <div className="team__partners">
                        {
                            partners.map((partner, index) =>
                                <CardPartner
                                    data={partner}
                                    key={index}
                                    secondaryColor={secondaryColor}
                                    onDeletePartner={onDeletePartner}
                                    handleLikeChange={handleLikeChange}
                                />
                            )
                        }
                    </div>
                </section >
            }
        </>
    )
}

export default Team