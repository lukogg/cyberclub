import CardSpecsOutline from "../svg/CardSpecsOutline"
import CardSpecsBackground from "../svg/CardSpecsBackground";
import "./CardSpecs.css";

import AttentionIcon from "../svg/icons/AttentionIcon";
import atlas_death_screen from "../atlas_death_screen.png";
import SpecsBodyIcon from "../SpecsBodyIcon.png";
import SpecsIntelligenceIcon from "../SpecsIntelligenceIcon.png";
import SpecsReflexIcon from "../SpecsReflexIcon.png";
import SpecsTechabilityIcon from "../SpecsTechabilityIcon.png";
import SpecsCoolIcon from "../SpecsCoolIcon.png";

import { specifications } from "../../constants/specs";

const CardSpecs = ({id, size}) => {
    const spec = specifications.find(s => s.id === id);
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 364 401"
        fill="none"
        id={id}
        className="transform transition-transform duration-300 linear hover:scale-110"
        style={{
            width: size + "%",
            height: "auto",
        }}
    >
            <CardSpecsBackground />
            <CardSpecsOutline />
            <AttentionIcon x={282} y={268} />
            <text x={39} y={22} className="CardSpecsTitle">
            {spec && spec.NameTitle}
            </text>
            <text x={39} y={40} className="CardSpecsDesc">
            {spec && spec.NameDescription}
            </text>
            <text x={39} y={68} className="CardSpecsTitle">
            {spec && spec.Backstory}
            </text>
            <text x={39} y={112} className="CardSpecsTitle">
            {spec && spec.Room}
            </text>
            <text x={61} y={136} className="CardSpecsDescLarge">
            {spec && spec.RoomTitle}
            </text>
            <text x={38} y={90} className="CardSpecsDesc">
            {spec && spec.BackstoryDescription}
            </text>
            <text x={39} y={161} className="CardSpecsTitle">
            {spec && spec.Difficulty}
            </text>
            <text x={38} y={180} className="CardSpecsDesc">
            {spec && spec.DifficultyDescription}
            </text>
            <text x={39} y={211} className="CardSpecsTitle">
            {spec && spec.AttributesTitle}
            </text>
            <text x={77} y={239} className="CardSpecsTech">
            {spec && spec.BodyValue}
            </text>
            <text x={122} y={239} className="CardSpecsTech">
            {spec && spec.BodyText}
            </text>
            <text x={77} y={259} className="CardSpecsTech">
            {spec && spec.IntelligenceValue}
            </text>
            <text x={122} y={259} className="CardSpecsTech">
            {spec && spec.IntelligenceText}
            </text>
            <text x={77} y={280} className="CardSpecsTech">
            {spec && spec.ReflexValue}
            </text>
            <text x={122} y={280} className="CardSpecsTech">
            {spec && spec.ReflexText}
            </text>
            <text x={77} y={301} className="CardSpecsTech">
            {spec && spec.TechAbilValue}
            </text>
            <text x={122} y={301} className="CardSpecsTech">
            {spec && spec.TechAbilText}
            </text>
            <text x={77} y={321} className="CardSpecsTech">
            {spec && spec.CoolValue}
            </text>
            <text x={122} y={321} className="CardSpecsTech">
            {spec && spec.CoolText}
            </text>
            <text x={251} y={305} font-size="11" letter-spacing={-0.64} fill="#F75049">
                NO BIOLOGICAL DATA
            </text>
            <text x={268} y={317} font-size="11" letter-spacing={-0.64} fill="#F75049">
                WAS FOUND
            </text>
            <line x1={39} y1={25} x2={344} y2={25} stroke="#F75049" strokeWidth={1}></line>
            <line x1={39} y1={71} x2={344} y2={71} stroke="#F75049" strokeWidth={1}></line>
            <line x1={39} y1={165} x2={344} y2={165} stroke="#F75049" strokeWidth={1}></line>
            <line x1={39} y1={215} x2={344} y2={215} stroke="#F75049" strokeWidth={1}></line>
            <line x1={39} y1={115} x2={344} y2={115} stroke="#F75049" strokeWidth={1}></line>
            <image
                href={spec && spec.logo}
                x={39}
                y={122}
                width={18}
                height={18}
                />
            <image
                href={atlas_death_screen}
                x={313}
                y={353}
                width={36}
                height={30}
                />
            <image
                href={SpecsBodyIcon}
                x={47}
                y={225}
                width={17.08}
                height={18.53}
                />
            <image
                href={SpecsIntelligenceIcon}
                x={47}
                y={246}
                width={16}
                height={18.02}
                />
            <image
                href={SpecsReflexIcon}
                x={47}
                y={267}
                width={13.94}
                height={18.69}
                />
            <image
                href={SpecsTechabilityIcon}
                x={47}
                y={288}
                width={16.21}
                height={19}
                />
            {/* <image
                href={SpecsCoolIcon}
                x={46}
                y={309}
                width={18}
                height={21.27}
                /> */}
        </svg>
    );
};

export default CardSpecs;
