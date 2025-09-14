import "./index.css"

export default function Card() {
    return (
        <>
            <div className="card">
                <header>
                    <div>标题</div>
                    <div>副标题</div>
                </header>
                <main>
                    内容
                </main>
                <footer>
                    <button>确定</button>
                    <button>取消</button>
                </footer>
            </div>
        </>
    )
}