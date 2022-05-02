

export const Display = ({ms, s, m, h}) => {


 
    return (
        <div>
            {/* {hour()}&nbsp;:&nbsp; */}
            {<span>{(h >= 10) ? h : "0" + h}</span>}&nbsp;:&nbsp;
            <span>{(m >= 10) ? m : "0" + m}</span>&nbsp;:&nbsp;
            <span>{(s >= 10) ? s : "0" + s}</span>&nbsp;:&nbsp;
            <span>{(ms >= 10) ? ms : "0" + ms}</span>&nbsp;:&nbsp;
        </div>
    )
}