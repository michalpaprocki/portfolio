import CheckMessages from "../components/dynamic/CheckMessages"

const page = () => {

    return (
        <div className="pt-20 bg-light-color text-dark-color dark:bg-dark-color dark:text-light-color pb-12 flex flex-col min-h-[calc(100dvh_-_10rem)]">
            <div className="flex flex-col mt-10 p-8">
                <h2>Check Messages</h2>
                <CheckMessages />
            </div>
        </div>
    )
}

export default page