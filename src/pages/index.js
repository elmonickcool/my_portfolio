import Hero from "../components/sections/Hero"
import Stacks from "../components/sections/Stacks"
import Overview from "@/components/sections/Overview"

function HomePage() {
    return (
        <div>
            <Hero/>
            <Overview/>
            <Stacks/>            
        </div>
    )
}

export default HomePage;