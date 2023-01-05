import PublicRoutes from "../routes/PublicRoutes";
import Header from "./header/Header";

const Index = () => {
    return (
        <>
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <PublicRoutes />
                </div>
            </div>
        </>
    )
}

export default Index;