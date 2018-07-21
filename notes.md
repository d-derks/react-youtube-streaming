{
    categories.map((item, index) => {
            return (
                <CategoryItem
                    key={index}
                    {...item}
                />
            );
        }
    )
}
* map runs like for each/ will go through array and returns them
