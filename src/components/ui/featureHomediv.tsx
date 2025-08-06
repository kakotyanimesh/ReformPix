export const FeatureHomeDiv = ({
    heading,
    desc,
}: {
    heading: string;
    desc: string;
}) => {
    return (
        <section className='space-y-3'>
            <h1 className='md:text-3xl text-2xl font-semibold'>{heading}</h1>
            <p className='md:text-sm text-xs text-foreground-light'>
                {desc}
            </p>
        </section>
    );
};
