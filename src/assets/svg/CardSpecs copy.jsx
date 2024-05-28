import CardSpecsOutline from "../svg/CardSpecsOutline"
import CardSpecsBackground from "../svg/CardSpecsBackground";

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
            <style>
            {`
                text {
                font-family: var(--font-play);
                // font-weight: normal;
                // fill: #5EF6FF;
                }
            `}
            </style>
            <CardSpecsBackground />
            <CardSpecsOutline />
            <AttentionIcon x={282} y={268} />
            <text x={39} y={22} font-size="11" letter-spacing={-0.64} fill="#F75049">
            {spec && spec.NameTitle}
            </text>
            <text x={39} y={40} font-size="12" letter-spacing={-0.64} fill="#5EF6FF">
            {spec && spec.NameDescription}
            </text>
            <text x={39} y={68} font-size="11" letter-spacing={-0.64} fill="#F75049">
            {spec && spec.Backstory}
            </text>
            <text x={61} y={94} font-size="17" letter-spacing={-0.64} fill="#5EF6FF">
            {spec && spec.BackstoryTitle}
            </text>
            <text x={38} y={116} font-size="12" letter-spacing={-0.64} fill="#5EF6FF">
            {spec && spec.BackstoryDescription}
            </text>
            <text x={39} y={148} font-size="11" letter-spacing={-0.64} fill="#F75049">
            {spec && spec.Difficulty}
            </text>
            <text x={38} y={167} font-size="12" letter-spacing={-0.64} fill="#5EF6FF">
            {spec && spec.DifficultyDescription}
            </text>
            <text x={39} y={211} font-size="11" letter-spacing={-0.64} fill="#F75049">
            {spec && spec.AttributesTitle}
            </text>
            <text x={77} y={239} font-size="15" letter-spacing={-0.64} fill="#F75049">
            {spec && spec.BodyValue}
            </text>
            <text x={115} y={239} font-size="15" letter-spacing={-0.64} fill="#F75049">
            {spec && spec.BodyText}
            </text>
            <text x={77} y={259} font-size="15" letter-spacing={-0.64} fill="#F75049">
            {spec && spec.IntelligenceValue}
            </text>
            <text x={115} y={259} font-size="15" letter-spacing={-0.64} fill="#F75049">
            {spec && spec.IntelligenceText}
            </text>
            <text x={77} y={280} font-size="15" letter-spacing={-0.64} fill="#F75049">
            {spec && spec.ReflexValue}
            </text>
            <text x={115} y={280} font-size="15" letter-spacing={-0.64} fill="#F75049">
            {spec && spec.ReflexText}
            </text>
            <text x={77} y={301} font-size="15" letter-spacing={-0.64} fill="#F75049">
            {spec && spec.TechAbilValue}
            </text>
            <text x={115} y={301} font-size="15" letter-spacing={-0.64} fill="#F75049">
            {spec && spec.TechAbilText}
            </text>
            <text x={77} y={323} font-size="15" letter-spacing={-0.64} fill="#F75049">
            {spec && spec.CoolValue}
            </text>
            <text x={115} y={323} font-size="15" letter-spacing={-0.64} fill="#F75049">
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
            <line x1={39} y1={152} x2={344} y2={152} stroke="#F75049" strokeWidth={1}></line>
            <line x1={39} y1={215} x2={344} y2={215} stroke="#F75049" strokeWidth={1}></line>
            <image
                href={spec && spec.logo}
                x={39}
                y={80}
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
