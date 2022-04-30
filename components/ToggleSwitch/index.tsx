interface IProps {
    value: boolean
    onChange: (value: boolean) => void
}
const ToggleSwitch: React.FC<IProps> = ({ value, onChange }) => {
    return (
        <label className="flex w-10 h-10 bg-white rounded-lg">
            <input type="checkbox" onChange={() => onChange} />
            <span className="slider round"></span>
        </label>
    )
}

export default ToggleSwitch
