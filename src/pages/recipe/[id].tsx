"use client"
import React, { useState } from "react"
import { twMerge } from "tailwind-merge"
import { TracingBeam } from "@/components/ui/tracing-beam"
import CardHoverEffectDemo from "@/components/ui/CardHoverEffectDemo"
import KeywordsBold from "@/components/utils/KeywordsBold"
// import LayoutGrid from "@/components/ui/layout-grid"
import { IoHeart } from "react-icons/io5"
import { BsBookmarkFill } from "react-icons/bs"
import { RxClock } from "react-icons/rx"
import { Timeline } from "flowbite-react"
import type { CustomFlowbiteTheme } from "flowbite-react"
import { Flowbite } from "flowbite-react"
import { IoMdDoneAll } from "react-icons/io"
import { IoRocketOutline } from "react-icons/io5"
import { Tooltip } from "flowbite-react"
const customTheme: CustomFlowbiteTheme = {
    timeline: {
        root: {
            direction: {
                horizontal: "items-base sm:flex",
                vertical: "relative border-l border-gray-900 dark:border-gray-900 ",
            },
        },

        item: {
            point: {
                horizontal: "flex items-center",
                line: "hidden h-0.5 w-full bg-[#0E7490] sm:flex ",
                marker: {
                    base: {
                        vertical: "absolute -left-1.5 mt-1.5 h-3 w-3 cursor-pointer rounded-full border border-white bg-[#0E7490] dark:bg-[#0E7490] dark:bg-[#0E7490]",
                    },
                    icon: {
                        base: " text-white cursor-pointer",
                        wrapper: "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#0E7490]  dark:bg-cyan-900 dark:ring-gray-900",
                    },
                },
            },
            content: {
                root: {
                    base: "mt-2 sm:pr-8",
                },
                body: {
                    base: "!font-[Lato] text-base	 sm:text-lg sm:leading-loose leading-loose",
                },
                time: {
                    base: " text-lg font-semibold text-gray-900 dark:text-white",
                },
                title: {
                    base: "text-lg font-semibold text-gray-900 dark:text-white",
                },
            },
        },
    },
}
interface Step {
    id: number
    isDone: boolean
}

export default function SingleRecipe() {
    const keywords = ["Chicken", "Soup", "Tortilla", "Flavors", "Avocado"]
    const [steps, setSteps] = useState<Step[]>([
        { id: 1, isDone: false },
        { id: 2, isDone: false },
        { id: 3, isDone: false },
        { id: 4, isDone: false },
        { id: 5, isDone: false },
        { id: 6, isDone: false },
        { id: 7, isDone: false },
        { id: 8, isDone: false },
        { id: 9, isDone: false },
        { id: 10, isDone: false },
        { id: 11, isDone: false },
    ])

    const handleStepClick = (stepId: number) => {
        const updatedSteps = steps.map(step => {
            if (step.id <= stepId) {
                return { ...step, isDone: true }
            }
            return step
        })
        setSteps(updatedSteps)
    }

    return (
        <>
            {/* <div className="h-screen py-20 w-full">
                <LayoutGrid cards={cards} />
            </div> */}
            <div className="w-[90%] mx-auto sm:w-full">
                <TracingBeam>
                    <div className="max-w-2xl mx-auto antialiased pt-10 relative ">
                        {dummyContent.map((item, index) => (
                            <div key={`content-${index}`}>
                                <h2 className="bg-[#0E7490] text-white rounded-full text-sm w-fit px-4 py-1 mb-4">{item.badge}</h2>

                                <p className={twMerge("sm:text-3xl text-xl mb-4 !font-[Lato] font-semibold text-[#374151]")}>{item.title}</p>

                                <div className="text-sm  prose prose-sm dark:prose-invert ">
                                    {item?.image && <img src={item.image} alt="blog thumbnail" className="rounded-lg mb-2 object-cover" />}
                                    <div className="flex items-center gap-4 mb-6 mt-3 border-2 border-[#0E7490] rounded-full w-fit p-2">
                                        <div className="flex items-center gap-1">
                                            <IoHeart className="w-5 h-5 text-[#0E7490]" /> <span className="!font-[Lato] font-bold !text-gray-900">124 Likes</span>
                                        </div>
                                        |
                                        <div className="flex items-center gap-1">
                                            <RxClock className="w-5 h-5 text-[#0E7490]" /> <span className="!font-[Lato] font-bold !text-gray-900">~ 30 Min.</span>
                                        </div>
                                        |
                                        <div className="flex items-center gap-1">
                                            <BsBookmarkFill className="w-4 h-4 text-[#0E7490] " /> <span className="!font-[Lato]">10 Saves</span>
                                        </div>
                                    </div>
                                    <KeywordsBold text={item.description} keywords={keywords} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="relative w-full max-w-4xl mx-auto">
                        <div className="max-w-2xl mx-auto antialiased pt-10 relative ">
                            <h2 className="bg-[#0E7490] text-white rounded-full text-sm w-fit px-4 py-1">Ingredients</h2>
                        </div>
                        <CardHoverEffectDemo />
                    </div>
                    <div className="relative w-full max-w-4xl mx-auto">
                        <div className="max-w-2xl mx-auto antialiased pt-10 relative ">
                            <h2 className="bg-[#0E7490] text-white rounded-full text-sm w-fit px-4 py-1 mb-8">Directions</h2>
                            <Flowbite theme={{ theme: customTheme }}>
                                <Timeline>
                                    <Timeline.Item>
                                        <Tooltip
                                            content={steps[0].isDone ? " Great Start! 👍" : "Click to mark as done"}
                                            arrow={false}
                                            style="light"
                                            animation="duration-500"
                                            trigger={steps[0].isDone ? "click" : "hover"}
                                            placement="top"
                                        >
                                            <Timeline.Point onClick={() => handleStepClick(1)} {...(steps[0].isDone ? { icon: IoMdDoneAll } : { icon: IoRocketOutline })} />
                                        </Tooltip>

                                        <Timeline.Content>
                                            <Timeline.Time>Step 1</Timeline.Time>

                                            <Timeline.Body>
                                                Combine chicken, 1 onion, stems from the cilantro bunch, bay leaves, oregano, peppercorns, dried chili pods, and 3 quarts of water
                                                in a large soup pot set over medium-high heat. Bring to simmer, lower heat to medium-low, and simmer for 1 hour.
                                            </Timeline.Body>
                                        </Timeline.Content>
                                    </Timeline.Item>

                                    <Timeline.Item>
                                        <Tooltip
                                            content={steps[1].isDone ? " Keep Going! 🚶‍♂️" : "Click to mark as done"}
                                            arrow={false}
                                            style="light"
                                            animation="duration-500"
                                            trigger={steps[1].isDone ? "click" : "hover"}
                                            placement="top"
                                        >
                                            <Timeline.Point onClick={() => handleStepClick(2)} {...(steps[1].isDone ? { icon: IoMdDoneAll } : { icon: IoRocketOutline })} />
                                        </Tooltip>

                                        <Timeline.Content>
                                            <Timeline.Time>Step 2</Timeline.Time>
                                            <Timeline.Body>
                                                Meanwhile, make the tortilla strips: Preheat the oven to 350 degrees F (180 degrees C). Line a baking sheet with a silicone mat or
                                                parchment paper.
                                            </Timeline.Body>
                                        </Timeline.Content>
                                    </Timeline.Item>

                                    <Timeline.Item>
                                        <Tooltip
                                            content={steps[2].isDone ? " You're on a Roll! 🌀" : "Click to mark as done"}
                                            arrow={false}
                                            style="light"
                                            animation="duration-500"
                                            trigger={steps[2].isDone ? "click" : "hover"}
                                            placement="top"
                                        >
                                            <Timeline.Point onClick={() => handleStepClick(3)} {...(steps[2].isDone ? { icon: IoMdDoneAll } : { icon: IoRocketOutline })} />
                                        </Tooltip>
                                        <Timeline.Content>
                                            <Timeline.Time>Step 3</Timeline.Time>
                                            <Timeline.Body>
                                                Cut tortillas in half, and then cut crosswise into 1/4-inch strips. Transfer tortilla strips to the prepared baking sheet and
                                                drizzle with oil. Add salt and toss well to coat, then spread strips out as evenly as possible.
                                            </Timeline.Body>
                                        </Timeline.Content>
                                    </Timeline.Item>

                                    <Timeline.Item>
                                        <Tooltip
                                            content={steps[3].isDone ? " Almost There! 🏃‍♂️" : "Click to mark as done"}
                                            arrow={false}
                                            style="light"
                                            animation="duration-500"
                                            trigger={steps[3].isDone ? "click" : "hover"}
                                            placement="top"
                                        >
                                            <Timeline.Point onClick={() => handleStepClick(4)} {...(steps[3].isDone ? { icon: IoMdDoneAll } : { icon: IoRocketOutline })} />
                                        </Tooltip>
                                        <Timeline.Content>
                                            <Timeline.Time>Step 4</Timeline.Time>
                                            <Timeline.Body>
                                                Bake in the preheated oven until golden brown and crisp, 15 to 20 minutes. Remove from the oven and let cool.
                                            </Timeline.Body>
                                        </Timeline.Content>
                                    </Timeline.Item>

                                    <Timeline.Item>
                                        <Tooltip
                                            content={steps[4].isDone ? " Halfway Done! 🎉" : "Click to mark as done"}
                                            arrow={false}
                                            style="light"
                                            animation="duration-500"
                                            trigger={steps[4].isDone ? "click" : "hover"}
                                            placement="top"
                                        >
                                            <Timeline.Point onClick={() => handleStepClick(5)} {...(steps[4].isDone ? { icon: IoMdDoneAll } : { icon: IoRocketOutline })} />
                                        </Tooltip>
                                        <Timeline.Content>
                                            <Timeline.Time>Step 5</Timeline.Time>
                                            <Timeline.Body>Carefully remove chicken to a bowl. Reduce heat on broth to low.</Timeline.Body>
                                        </Timeline.Content>
                                    </Timeline.Item>

                                    <Timeline.Item>
                                        <Tooltip
                                            content={steps[5].isDone ? " Great Progress! 🔧" : "Click to mark as done"}
                                            arrow={false}
                                            style="light"
                                            animation="duration-500"
                                            trigger={steps[5].isDone ? "click" : "hover"}
                                            placement="top"
                                        >
                                            <Timeline.Point onClick={() => handleStepClick(6)} {...(steps[5].isDone ? { icon: IoMdDoneAll } : { icon: IoRocketOutline })} />
                                        </Tooltip>
                                        <Timeline.Content>
                                            <Timeline.Time>Step 6</Timeline.Time>
                                            <Timeline.Body>Let chicken rest until cool enough to pull off the meat. Shred chicken and refrigerate until needed.</Timeline.Body>
                                        </Timeline.Content>
                                    </Timeline.Item>

                                    <Timeline.Item>
                                        <Tooltip
                                            content={steps[6].isDone ? " Getting Closer! 🎯" : "Click to mark as done"}
                                            arrow={false}
                                            style="light"
                                            animation="duration-500"
                                            trigger={steps[6].isDone ? "click" : "hover"}
                                            placement="top"
                                        >
                                            <Timeline.Point onClick={() => handleStepClick(7)} {...(steps[6].isDone ? { icon: IoMdDoneAll } : { icon: IoRocketOutline })} />
                                        </Tooltip>
                                        <Timeline.Content>
                                            <Timeline.Time>Step 7</Timeline.Time>
                                            <Timeline.Body>
                                                Add bones, skin, and all the scraps back to the pot of broth, and simmer on low heat for about 4 hours total. If broth reduces too
                                                much, just add a splash of water.
                                            </Timeline.Body>
                                        </Timeline.Content>
                                    </Timeline.Item>

                                    <Timeline.Item>
                                        <Tooltip
                                            content={steps[7].isDone ? " Just a Few More! ⏳" : "Click to mark as done"}
                                            arrow={false}
                                            style="light"
                                            animation="duration-500"
                                            trigger={steps[7].isDone ? "click" : "hover"}
                                            placement="top"
                                        >
                                            <Timeline.Point onClick={() => handleStepClick(8)} {...(steps[7].isDone ? { icon: IoMdDoneAll } : { icon: IoRocketOutline })} />
                                        </Tooltip>
                                        <Timeline.Content>
                                            <Timeline.Time>Step 8</Timeline.Time>
                                            <Timeline.Body>
                                                Meanwhile, after about 2 hours, make the charred vegetable salsa: Preheat on the oven’s broiler for high heat and set a rack about 8
                                                inches below the heating element. Line a baking sheet with foil and oil lightly; place remaining 2 onions, tomatoes, sweet red
                                                pepper, and jalapeno pepper on the prepared baking sheet.
                                            </Timeline.Body>
                                        </Timeline.Content>
                                    </Timeline.Item>

                                    <Timeline.Item>
                                        <Tooltip
                                            content={steps[8].isDone ? " Almost Finished! 🌟" : "Click to mark as done"}
                                            arrow={false}
                                            style="light"
                                            animation="duration-500"
                                            trigger={steps[8].isDone ? "click" : "hover"}
                                            placement="top"
                                        >
                                            <Timeline.Point onClick={() => handleStepClick(9)} {...(steps[8].isDone ? { icon: IoMdDoneAll } : { icon: IoRocketOutline })} />
                                        </Tooltip>
                                        <Timeline.Content>
                                            <Timeline.Time>Step 9</Timeline.Time>
                                            <Timeline.Body>
                                                Broil vegetables until charred, 7 to 10 minutes. Add charred vegetables to the jar of a blender with garlic cloves, chipotle pepper,
                                                and 1 cup water, and blend until smooth.
                                            </Timeline.Body>
                                        </Timeline.Content>
                                    </Timeline.Item>

                                    <Timeline.Item>
                                        <Tooltip
                                            content={steps[9].isDone ? "Final Stretch! 🏁" : "Click to mark as done"}
                                            arrow={false}
                                            style="light"
                                            animation="duration-500"
                                            trigger={steps[9].isDone ? "click" : "hover"}
                                            placement="top"
                                        >
                                            <Timeline.Point onClick={() => handleStepClick(10)} {...(steps[9].isDone ? { icon: IoMdDoneAll } : { icon: IoRocketOutline })} />
                                        </Tooltip>
                                        <Timeline.Content>
                                            <Timeline.Time>Step 10</Timeline.Time>
                                            <Timeline.Body>
                                                Pour pureed salsa into the pot, and raise heat to medium-low. Simmer broth for another 2 hours, stirring occasionally. Pass soup
                                                through a fine mesh strainer into a separate pot, squeezing the chicken to get all those nice juices; discard bones and skin in
                                                strainer. Season soup to taste with salt.
                                            </Timeline.Body>
                                        </Timeline.Content>
                                    </Timeline.Item>

                                    <Timeline.Item>
                                        <Tooltip
                                            content={steps[10].isDone ? " You're Done! 🎉" : "Click to mark as done"}
                                            arrow={false}
                                            style="light"
                                            animation="duration-500"
                                            trigger={steps[10].isDone ? "click" : "hover"}
                                            placement="top"
                                        >
                                            <Timeline.Point onClick={() => handleStepClick(11)} {...(steps[10].isDone ? { icon: IoMdDoneAll } : { icon: IoRocketOutline })} />
                                        </Tooltip>
                                        <Timeline.Content>
                                            <Timeline.Time>Step 11</Timeline.Time>
                                            <Timeline.Body>
                                                Add cumin, shredded chicken, and juice from 1 lime. Simmer 15 to 30 minutes, stirring occasionally. Taste for seasoning, and serve
                                                with crispy tortilla strips. Garnish with sour cream, avocado, chopped cilantro, grated or crumbled Mexican cheese, additional lime
                                                juice, and a sprinkle of cayenne, if desired.
                                            </Timeline.Body>
                                        </Timeline.Content>
                                    </Timeline.Item>
                                </Timeline>
                            </Flowbite>
                        </div>
                    </div>
                </TracingBeam>
            </div>
        </>
    )
}

const dummyContent = [
    {
        title: "Chef John’s Chicken Tortilla Soup",
        description:
            "Chef John’s Chicken Tortilla Soup is a flavorful and hearty Latin American-inspired dish that elevates the classic chicken soup experience. The slowly simmered tomato chicken broth, made from scratch, is infused with smoky and spicy flavors. The soup is then garnished with an array of delightful toppings: toasted tortilla strips, sour cream, avocado, cilantro, lime, and crumbled Mexican cheese. While it’s not a quick recipe, the effort is well worth it. If you’re short on time, high-quality chicken broth and well-cooked chicken will still yield a satisfying result. Whether you make your own crispy tortilla strips or use store-bought chips, this soup is a bucket-list-worthy addition to your culinary repertoire. Enjoy!",
        badge: "Overview",
        image: "https://www.allrecipes.com/thmb/rObLaVCv5M8JsvbenK3ni82KVWk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8378788_Chef-Johns-Tortilla-Soup_Chef-John_4x3-3742e7751e4f4a1abb00d309f5796781.jpg",
        // image: "https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg",
    },
    // {
    //     title: "Lorem Ipsum Dolor Sit Amet",
    //     description:
    //         "Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt. In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse veniam fugiat esse qui sint ad sunt reprehenderit do qui proident reprehenderit. Laborum exercitation aliqua reprehenderit ea sint cillum ut mollit.",
    //     badge: "Ingredients",
    //     // image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     image: "https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg",
    // },
    // {
    //     title: "Lorem Ipsum Dolor Sit Amet",
    //     description: (
    //         <>
    //             <p>
    //                 Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation non voluptate qui
    //                 aliquip esse tempor. Ullamco ut sunt consectetur sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea velit id esse adipisicing deserunt amet
    //                 dolore. Ipsum occaecat veniam commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
    //             </p>
    //         </>
    //     ),
    //     badge: "Launch Week",
    //     image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
]

// const SkeletonOne = () => {
//     return (
//         <div>
//             <p className="font-bold text-4xl text-white">House in the woods</p>
//             <p className="font-normal text-base text-white"></p>
//             <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//                 A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of city life.
//             </p>
//         </div>
//     )
// }

// const SkeletonTwo = () => {
//     return (
//         <div>
//             <p className="font-bold text-4xl text-white">House above the clouds</p>
//             <p className="font-normal text-base text-white"></p>
//             <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//                 Perched high above the world, this house offers breathtaking views and a unique living experience. It&apos;s a place where the sky meets home, and tranquility is a
//                 way of life.
//             </p>
//         </div>
//     )
// }
// const SkeletonThree = () => {
//     return (
//         <div>
//             <p className="font-bold text-4xl text-white">Greens all over</p>
//             <p className="font-normal text-base text-white"></p>
//             <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//                 A house surrounded by greenery and nature&apos;s beauty. It&apos;s the perfect place to relax, unwind, and enjoy life.
//             </p>
//         </div>
//     )
// }
// const SkeletonFour = () => {
//     return (
//         <div>
//             <p className="font-bold text-4xl text-white">Rivers are serene</p>
//             <p className="font-normal text-base text-white"></p>
//             <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//                 A house by the river is a place of peace and tranquility. It&apos;s the perfect place to relax, unwind, and enjoy life.
//             </p>
//         </div>
//     )
// }

// const cards = [
//     {
//         id: 1,
//         content: <SkeletonOne />,
//         className: "md:col-span-2",
//         thumbnail:
//             "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//         id: 2,
//         content: <SkeletonTwo />,
//         className: "col-span-1",
//         thumbnail:
//             "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//         id: 3,
//         content: <SkeletonThree />,
//         className: "col-span-1",
//         thumbnail:
//             "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//         id: 4,
//         content: <SkeletonFour />,
//         className: "md:col-span-2",
//         thumbnail:
//             "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
// ]
