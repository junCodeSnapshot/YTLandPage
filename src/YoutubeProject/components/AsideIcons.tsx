
interface MyComponentProps {
    name: string;
    iconURL: string;
}

export const AsideIcons = ({ iconURL, name }: MyComponentProps ) => {
    
    return (
        <div className="iconContainer">
            <img className="icons asideIcons" src={iconURL} alt={name} />
            <span className="iconName">{name}</span>
        </div>
    )
}
