const Label = ({removerItem, toggleChecked, item, index}) => {
    const handleChecked = (event) => {
        console.log(event.target.checked);
        toggleChecked(index);
    }
    const handleRemoverItem = () => {
        removerItem(index)
    }
    return (
        <div>
            <input type={"checkbox"} checked={item.checked} onChange={handleChecked}/>
            {item.name}
            <button onClick={handleRemoverItem}>Remover</button>
        </div>
    )
}

export default Label;