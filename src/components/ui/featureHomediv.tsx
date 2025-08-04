export const FeatureHomeDiv = ({
    heading,
    desc,
}: {
    heading: string;
    desc: string;
}) => {
    return (
        <div className='space-y-3'>
            <h1 className='text-3xl font-semibold'>{heading}</h1>
            <p className='text-sm text-foreground-light'>
                {desc}
            </p>
        </div>
    );
};
