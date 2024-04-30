import { asideIconsData } from "../data/asideIconsData"
import { AsideIcons } from "./AsideIcons"

export const Aside = () => {
    return (
        <div className="aside">
            <div className="flexCol">
                {
                    asideIconsData.map( ({ iconURL, name }) => ( <AsideIcons iconURL={iconURL} name={name} key={name}/> ) )
                }
            </div>
        </div>
    )
}
