import Hero from "../components/sections/Hero"
import Stacks from "../components/sections/Stacks"
import Featured from "@/components/sections/FeaturedProject"
import Overview from "@/components/sections/Overview"

function HomePage() {
    return (
        <div>
            <Hero/>
            <Overview/>
            <Stacks/>
            <Featured/>
        </div>
    )
}

export default HomePage;