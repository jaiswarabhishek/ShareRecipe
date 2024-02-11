import { HoverEffect } from "./card-hover-effect"

export default function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto sm:px-8">
            <HoverEffect items={projects} />
        </div>
    )
}
export const projects = [
    {
        img: "https://images.unsplash.com/photo-1672787153652-b3b9d92f3e8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Chicken",
        description: "A technology company that builds economic infrastructure for the internet.",
        link: "https://stripe.com",
    },
    {
        img: "https://images.unsplash.com/photo-1578907814239-d2654ba61616?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Onions",
        description: "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        link: "https://netflix.com",
    },
    {
        img: "https://images.unsplash.com/photo-1516616088351-ac73438548bd?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Cilantro",
        description: "A multinational technology company that specializes in Internet-related services and products.",
        link: "https://google.com",
    },
    {
        img: "https://images.unsplash.com/photo-1462374382194-b17428f8c5c4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Bay leaves",
        description: "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        link: "https://meta.com",
    },
    {
        img: "https://images.unsplash.com/photo-1587372767238-84dca9e88123?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Oregano",
        description: "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        link: "https://amazon.com",
    },
    {
        img: "https://images.unsplash.com/photo-1518450806633-2bd5a56a5309?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Black Peppercorns",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.  ",
        link: "https://microsoft.com",
    },
]
