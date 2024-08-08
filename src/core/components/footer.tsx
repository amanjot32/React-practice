import TextComponent from "./text_styles"

function Footer(){
    return (
        <>
        <div className="border-b border-gray-300"></div>
        <footer className="bg-custom-gray p-14">
            <div className="text-white dark:text-white flex justify-between">
                <TextComponent text="News App" size="3xl" weight="bold"/>
                <div className="flex justify-between text-purple">
                    <TextComponent text="Built with" size="base"/>
                    <a href="https://newsapi.org/" ><p className="text-purple underline ml-1">News API</p></a>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer